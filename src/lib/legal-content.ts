import type { LanguageCode } from '@/lib/i18n'
import { CLINIC } from '@/lib/i18n'

export interface LegalSection { h: string; p: string[] }
export interface LegalDoc { title: string; sections: LegalSection[] }
type Kind = 'privacy' | 'terms'

export const LEGAL_UPDATED = '2026-11-04'

const contact = (l: 'ar' | 'en' | 'tr') =>
  ({
    ar: `للتواصل بخصوص بياناتك: ${CLINIC.email} — ${CLINIC.phoneDisplay} — ${CLINIC.address}`,
    en: `For any request about your data: ${CLINIC.email} — ${CLINIC.phoneDisplay} — ${CLINIC.address}`,
    tr: `Verilerinizle ilgili talepler için: ${CLINIC.email} — ${CLINIC.phoneDisplay} — ${CLINIC.address}`,
  })[l]

const DOCS: Record<'ar' | 'en' | 'tr', Record<Kind, LegalDoc>> = {
  en: {
    privacy: {
      title: 'Privacy Policy',
      sections: [
        { h: 'Who we are', p: ['This website is operated by Orec Clinic, Istanbul, Türkiye (“we”, “the clinic”). We act as the data controller for the information you send us through this site.'] },
        { h: 'What we collect', p: ['Information you provide in the contact form: your name, phone/WhatsApp number, the service you are interested in, and your message. We also receive basic technical data (such as browser type and pages visited) when you use the site.', 'Please do not send detailed medical records through the form. We will ask for clinical information only during the consultation, through secure channels.'] },
        { h: 'How we use it', p: ['To reply to your enquiry, arrange a consultation, and improve our website and services. We do not sell your data.'] },
        { h: 'Who receives it', p: ['Our authorised staff and the service providers that host the website and deliver our emails. If you choose to continue on WhatsApp, that conversation is handled by WhatsApp under its own terms.'] },
        { h: 'Retention', p: ['We keep enquiries only for as long as needed to handle your request and meet legal obligations, then delete or anonymise them.'] },
        { h: 'Your rights', p: ['Under applicable law, including Türkiye’s Personal Data Protection Law (KVKK No. 6698), you may ask to access, correct or delete your data, or object to its use, and withdraw your consent at any time.', contact('en')] },
        { h: 'Cookies', p: ['The site uses only the technical storage needed to remember your language and theme choices.'] },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      sections: [
        { h: 'About this website', p: ['This website provides general information about the services of Orec Clinic. It is not a medical diagnosis or a substitute for a medical consultation.'] },
        { h: 'Medical information', p: ['Treatment suitability, expected results, risks and costs are determined only after an individual consultation and examination with the treating doctor. Results vary from person to person.'] },
        { h: 'Enquiries and appointments', p: ['Sending a form or a WhatsApp message is a request for contact, not a confirmed booking. An appointment or treatment plan is confirmed only by the clinic in writing.'] },
        { h: 'Content and intellectual property', p: ['Texts, logos and images on this site belong to Orec Clinic or are used with permission, and may not be copied without written permission.'] },
        { h: 'Liability', p: ['We work to keep the information accurate and current, but we do not guarantee that it is free of errors. The clinic is not liable for decisions taken solely on the basis of website content.'] },
        { h: 'Governing law', p: ['These terms are governed by the laws of the Republic of Türkiye.'] },
        { h: 'Contact', p: [`${CLINIC.email} — ${CLINIC.phoneDisplay} — ${CLINIC.address}`] },
      ],
    },
  },
  ar: {
    privacy: {
      title: 'سياسة الخصوصية',
      sections: [
        { h: 'من نحن', p: ['يُدار هذا الموقع من قبل عيادة أوريك في إسطنبول، تركيا («نحن»، «العيادة»). ونحن المسؤولون عن معالجة البيانات التي ترسلونها عبر الموقع.'] },
        { h: 'ما الذي نجمعه', p: ['المعلومات التي تدخلونها في نموذج التواصل: الاسم، رقم الهاتف/واتساب، الخدمة التي تهمكم، ونص الرسالة. كما نستقبل بيانات تقنية أساسية (مثل نوع المتصفح والصفحات التي تزورونها).', 'يرجى عدم إرسال تقارير طبية تفصيلية عبر النموذج؛ فالمعلومات السريرية تُطلب فقط أثناء الاستشارة وبقنوات آمنة.'] },
        { h: 'كيف نستخدمها', p: ['للرد على استفساركم وترتيب الاستشارة وتحسين موقعنا وخدماتنا. ولا نبيع بياناتكم لأي جهة.'] },
        { h: 'من يطّلع عليها', p: ['موظفونا المخوّلون ومزوّدو الخدمات الذين يستضيفون الموقع ويرسلون رسائل البريد. وإذا اخترتم المتابعة عبر واتساب فتخضع المحادثة لشروط واتساب نفسها.'] },
        { h: 'مدة الاحتفاظ', p: ['نحتفظ بالاستفسارات للمدة اللازمة لمعالجة طلبكم والوفاء بالالتزامات القانونية، ثم نحذفها أو نجعلها مجهولة الهوية.'] },
        { h: 'حقوقكم', p: ['وفق القوانين المعمول بها ومنها قانون حماية البيانات الشخصية التركي (KVKK رقم 6698) يحق لكم طلب الاطلاع على بياناتكم أو تصحيحها أو حذفها، أو الاعتراض على استخدامها، وسحب موافقتكم في أي وقت.', contact('ar')] },
        { h: 'ملفات تعريف الارتباط', p: ['يستخدم الموقع فقط التخزين التقني اللازم لتذكّر اختياركم للغة والمظهر.'] },
      ],
    },
    terms: {
      title: 'الشروط والأحكام',
      sections: [
        { h: 'عن هذا الموقع', p: ['يقدّم هذا الموقع معلومات عامة عن خدمات عيادة أوريك، وهو ليس تشخيصاً طبياً ولا بديلاً عن الاستشارة الطبية.'] },
        { h: 'المعلومات الطبية', p: ['لا تُحدَّد ملاءمة العلاج ولا النتائج المتوقعة ولا المخاطر ولا التكلفة إلا بعد استشارة وفحص فردي مع الطبيب المعالج. وتختلف النتائج من شخص لآخر.'] },
        { h: 'الاستفسارات والمواعيد', p: ['إرسال النموذج أو رسالة واتساب هو طلب تواصل وليس حجزاً مؤكداً. ولا يُعدّ الموعد أو الخطة العلاجية مؤكَّدَين إلا بتأكيد كتابي من العيادة.'] },
        { h: 'المحتوى والملكية الفكرية', p: ['النصوص والشعارات والصور في هذا الموقع مملوكة لعيادة أوريك أو مستخدمة بإذن، ولا يجوز نسخها دون إذن كتابي.'] },
        { h: 'حدود المسؤولية', p: ['نحرص على دقة المعلومات وحداثتها، لكننا لا نضمن خلوها من الأخطاء، ولا تتحمل العيادة مسؤولية قرارات تُتخذ بالاعتماد على محتوى الموقع وحده.'] },
        { h: 'القانون الواجب التطبيق', p: ['تخضع هذه الشروط لقوانين جمهورية تركيا.'] },
        { h: 'التواصل', p: [`${CLINIC.email} — ${CLINIC.phoneDisplay} — ${CLINIC.address}`] },
      ],
    },
  },
  tr: {
    privacy: {
      title: 'Gizlilik Politikası',
      sections: [
        { h: 'Biz kimiz', p: ['Bu web sitesi İstanbul’daki Orec Clinic (“biz”, “klinik”) tarafından işletilmektedir. Site üzerinden ilettiğiniz bilgiler bakımından veri sorumlusu bizizdir.'] },
        { h: 'Ne topluyoruz', p: ['İletişim formuna girdiğiniz bilgiler: adınız, telefon/WhatsApp numaranız, ilgilendiğiniz hizmet ve mesajınız. Ayrıca siteyi kullanırken temel teknik veriler (tarayıcı türü, ziyaret edilen sayfalar) işlenebilir.', 'Lütfen ayrıntılı tıbbi kayıtlarınızı form üzerinden göndermeyin; klinik bilgiler yalnızca konsültasyon sırasında güvenli kanallarla istenir.'] },
        { h: 'Nasıl kullanıyoruz', p: ['Talebinizi yanıtlamak, konsültasyon planlamak ve sitemizi ile hizmetlerimizi geliştirmek için. Verilerinizi satmayız.'] },
        { h: 'Kimlerle paylaşılır', p: ['Yetkili personelimiz ile siteyi barındıran ve e-postaları ileten hizmet sağlayıcılar. WhatsApp üzerinden devam etmeyi seçerseniz o görüşme WhatsApp’ın kendi şartlarına tabidir.'] },
        { h: 'Saklama süresi', p: ['Talepleri, başvurunuzu yürütmek ve yasal yükümlülükleri yerine getirmek için gerekli süre boyunca saklar, ardından sileriz veya anonim hale getiririz.'] },
        { h: 'Haklarınız', p: ['6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) dahil yürürlükteki mevzuat uyarınca verilerinize erişmeyi, düzeltilmesini veya silinmesini talep edebilir, işlenmesine itiraz edebilir ve rızanızı her zaman geri çekebilirsiniz.', contact('tr')] },
        { h: 'Çerezler', p: ['Site yalnızca dil ve tema tercihlerinizi hatırlamak için gerekli teknik depolamayı kullanır.'] },
      ],
    },
    terms: {
      title: 'Kullanım Koşulları',
      sections: [
        { h: 'Bu site hakkında', p: ['Bu site, Orec Clinic hizmetleri hakkında genel bilgi sunar; tıbbi teşhis değildir ve hekim muayenesinin yerine geçmez.'] },
        { h: 'Tıbbi bilgiler', p: ['Tedavinin uygunluğu, beklenen sonuçlar, riskler ve maliyet yalnızca tedaviyi yapacak hekimle yapılan bireysel muayene ve konsültasyon sonrasında belirlenir. Sonuçlar kişiden kişiye değişir.'] },
        { h: 'Talepler ve randevular', p: ['Form veya WhatsApp mesajı göndermek bir iletişim talebidir, kesinleşmiş bir rezervasyon değildir. Randevu veya tedavi planı yalnızca klinik tarafından yazılı olarak onaylandığında geçerlidir.'] },
        { h: 'İçerik ve fikri mülkiyet', p: ['Sitedeki metin, logo ve görseller Orec Clinic’e aittir veya izinle kullanılmaktadır; yazılı izin olmadan kopyalanamaz.'] },
        { h: 'Sorumluluk', p: ['Bilgilerin doğru ve güncel olması için çalışırız ancak hatasız olduğunu garanti etmeyiz. Klinik, yalnızca site içeriğine dayanılarak alınan kararlardan sorumlu değildir.'] },
        { h: 'Uygulanacak hukuk', p: ['Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir.'] },
        { h: 'İletişim', p: [`${CLINIC.email} — ${CLINIC.phoneDisplay} — ${CLINIC.address}`] },
      ],
    },
  },
}

export function getLegalDoc(kind: Kind, lang: LanguageCode): { doc: LegalDoc; fallback: boolean } {
  if (lang === 'ar' || lang === 'tr' || lang === 'en') return { doc: DOCS[lang][kind], fallback: false }
  return { doc: DOCS.en[kind], fallback: true }
}
