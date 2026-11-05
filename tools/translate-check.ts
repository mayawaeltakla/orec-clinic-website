/**
 * Live check of the translation pipeline against the configured LibreTranslate server.
 * Run: bun tools/translate-check.ts   (exit code 1 if fewer than 8 languages succeed)
 */
import { translatePost } from '../src/lib/translate'

const post = {
  title: 'ما الذي يجب أن تعرفه قبل زراعة الأسنان؟',
  excerpt: 'دليل مختصر يشرح مراحل زراعة الأسنان والعناية بعدها.',
  body: [
    'زراعة الأسنان من أكثر العلاجات شيوعاً لتعويض الأسنان المفقودة.',
    '',
    '## مراحل العلاج',
    '',
    '- الفحص والتصوير',
    '- وضع الزرعة',
    '- تركيب التاج',
    '',
    '![صورة](/api/blog-image/1)',
    '',
    'يحتاج المريض إلى متابعة دورية بعد العلاج.',
  ].join('\n'),
}

const started = Date.now()
const { translations, errors } = await translatePost(post)
console.log(`\nDone in ${((Date.now() - started) / 1000).toFixed(1)}s`)
let ok = 0
for (const [code, t] of Object.entries(translations)) {
  const structure =
    t.body.includes('## ') && t.body.includes('\n- ') && t.body.includes('![صورة](/api/blog-image/1)')
  console.log(`\n[${code}] structure ${structure ? 'OK' : 'BROKEN'}\n  title:   ${t.title}\n  excerpt: ${t.excerpt}\n  body:\n${t.body.split('\n').map((l) => '    ' + l).join('\n')}`)
  if (structure) ok++
}
console.log(`\n${ok}/8 languages OK`)
if (errors.length) console.log('Errors:\n  ' + errors.join('\n  '))
process.exit(ok >= 8 ? 0 : 1)
