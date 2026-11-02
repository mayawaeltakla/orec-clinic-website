import type { Dictionary } from './types'

export const tr: Dictionary = {
  meta: {
    title: 'Orec Clinic.. Gülüşünüze ve güzelliğinize olan güveninizi geri kazanma yolculuğunuzda tıbbi aileniz',
    description:
      'İstanbul’un kalbindeki Orec Clinic — diş estetiği ve tedavisi, estetik cerrahi, saç ekimi ve bariatrik cerrahi; Sağlık Bakanlığı ve Turizm Bakanlığı resmi lisanslarıyla.',
  },
  brand: {
    name: 'Orec Clinic',
    suffix: 'عيادة أوريك',
    tagline: 'Gülüşünüze ve güzelliğinize olan güveninizi geri kazanma yolculuğunuzda tıbbi aileniz',
    care: 'ÖZEN • HASSASİYET • MÜKEMMELLİK',
  },
  nav: {
    home: 'Ana Sayfa',
    services: 'Hizmetler',
    about: 'Hakkımızda',
    why: 'Neden Biz',
    contact: 'İletişim',
    book: 'Konsültasyon Ayırtın',
    servicesIndex: 'Hizmet Bölümleri',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    themeToggle: 'Koyu ve açık mod arasında geçiş yap',
  },
  hero: {
    eyebrow: 'ÖZEN • HASSASİYET • MÜKEMMELLİK',
    title1: 'Orec Clinic..',
    title2: 'Gülüşünüze ve güzelliğinize olan güveninizi geri kazanma yolculuğunuzda tıbbi aileniz',
    badges: ['İstanbul’un kalbinde', '2015’ten beri', 'Sağlık ve Turizm Bakanlıklarının resmi lisanslarıyla'],
    ctaPrimary: 'Bugün Bize Ulaşın',
    ctaSecondary: 'Hizmetlerimizi Keşfedin',
    location: 'İSTANBUL · 2015’TEN BERİ',
    prevSlide: 'Önceki slayt',
    nextSlide: 'Sonraki slayt',
    stats: [
      { value: '2015', label: 'İstanbul’da kuruluş yılı' },
      { value: '+10', label: 'Konuştuğumuz dil' },
      { value: '4', label: 'Uzman tıbbi bölüm' },
    ],
  },
  services: {
    eyebrow: 'HİZMETLERİMİZ',
    title: 'Hizmetler',
    subtitle: 'Tek çatı altında dört bütünleşik tıbbi bölüm; seçkin Türk ve Arap danışmanların gözetiminde, ilk konsültasyondan ülkenize dönene kadar tam takip ile.',
    viewAll: 'Tüm hizmetleri gör',
    categories: [
      {
        id: 'dental',
        num: '01',
        code: 'DENTAL',
        title: 'Diş Estetiği ve Tedavisi',
        description: 'Öncelikli uzmanlığımız: hemen implantlardan Hollywood gülüşüne, hassas dijital teknoloji ve dünya standartlarında zirkonyum ve E-max malzemeleriyle.',
        items: [
          { name: 'Diş İmplantı', en: 'Dental Implants' },
          { name: 'Hollywood Gülüşü', en: 'Hollywood Smile' },
          { name: 'Diş Tedavi ve Restorasyonu', en: 'Restorative Dentistry' },
          { name: 'Diş Beyazlatma', en: 'Teeth Whitening' },
        ],
      },
      {
        id: 'cosmetic',
        num: '02',
        code: 'ESTETİK',
        title: 'Estetik Cerrahi',
        description: 'Uzman cerrahlar elinde yüz ve vücut cerrahisi; 3D planlama ve eksiksiz ameliyat öncesi-sonrası bakım ile.',
        items: [],
        groups: [
          {
            name: 'Yüz Estetiği',
            items: [
              'Yüz Germe (Facelift)',
              'Kaş Kaldırma (Brow Lift)',
              'Rinoplasti (burun)',
              'Otoplasti (kulak)',
              'Dudak Estetiği',
              'Boyun Germe (Neck Lift)',
              'Göz Kapağı Estetiği (Blefaroplasti)',
              'Alın Konturlama',
              'Çene Estetiği (Genioplasti)',
              'Yanak Dolgusu / Gamze',
            ],
          },
          {
            name: 'Vücut Şekillendirme',
            items: [
              'Vücut Şekillendirme / Liposuction',
              'Meme Estetiği',
              'Jinekomasti',
              'Karın Germe (Abdominoplasti)',
              'Kol Germe',
              'Uyluk Germe',
            ],
          },
          {
            name: 'Mahrem Bölge Estetiği',
            items: [
              'Kalça Estetiği (BBL)',
              'Vajinal Gençleştirme / Labioplasti',
              'Vajinal Yağ ve Dolgu Enjeksiyonu',
              'Vajinoplasti',
              'Penis Estetiği',
              'Penis Uzatma',
            ],
          },
        ],
      },
      {
        id: 'hair',
        num: '03',
        code: 'SAÇ',
        title: 'Saç Ekimi',
        description: 'En güncel Safir ve DHI teknikleri, yüz hatlarınızla uyumlu doğal saç çizgisi tasarımıyla.',
        items: [
          { name: 'Saç Ekimi', en: 'Scalp Hair Transplantation' },
          { name: 'Sakal ve Bıyık Ekimi', en: 'Beard & Mustache Transplantation' },
          { name: 'Kaş Ekimi', en: 'Eyebrow Transplantation' },
        ],
      },
      {
        id: 'obesity',
        num: '04',
        code: 'BARİATRİK',
        title: 'Bariatrik Cerrahi',
        description: 'Beslenme ve davranış ekibi gözetiminde cerrahi kilo verme çözümleri; ideal kilonuza kadar diyet takibiyle.',
        items: [
          { name: 'Tüp Mide', en: 'Gastric Sleeve' },
          { name: 'Mide Bypass', en: 'Gastric Bypass' },
          { name: 'Mide Balonu', en: 'Gastric Balloon' },
          { name: 'Mide Botoksu', en: 'Gastric Botox' },
        ],
      },
    ],
  },
  dental: {
    eyebrow: '01 · DENTAL',
    title: 'Diş Estetiği ve Tedavisi',
    subtitle: 'En gelişmiş bölümümüz: implantlardan beyazlatmaya dört eksiksiz tedavi yolculuğu; hepsi hassas dijital tanı ile başlar, size yakışan bir gülüşle biter.',
    cta: 'Ücretsiz konsültasyon ayırtın',
    sections: [
      {
        num: '01',
        name: 'Diş İmplantı',
        tagline: 'Türkiye’de diş implantı | Eksik dişlerin yerine konulması için ideal ve kalıcı çözüm',
        intro:
          'Diş implantı, modern diş hekimliğinin en yeni devrimidir: komşu dişlere zarar vermeden eksik veya aşınmış dişin yerine konulmasının en kalıcı tıbbi alternatifidir. Orec Clinic’te ileri dijital teknolojiyi Türkiye’nin en yetenekli hekimleriyle birleştirerek dünya standartlarında başarı oranları ve ağrısız bir tedavi deneyimi sunuyoruz.',
        blocks: [
          {
            title: 'İmplantın temel bileşenleri',
            text: 'İmplant edilen diş, doğal dişin görünümünü ve hissini veren üç parçadan oluşur: Fixture — kemiyle bütünleşen (osseointegrasyon), reddedilmeyen ve alerji yapmayan saf titanyum vida; Abutment — fixture üzerindeki bağlantı parçası; ve Kron — zirkonyum veya E-max malzemesinden, gücü ve parlaklığıyla doğal dişlerinizle bütünleşen üst yapı.',
          },
          {
            title: 'Klasik (standart) implant',
            text: 'Kökler çene kemiğine yerleştirilir, kemiğin implantla tamamen kaynaşması için 3-4 ay beklenir; ardından kalıcı diş sabitlenir.',
          },
          {
            title: 'Hemen implant (Immediate Implants)',
            text: 'İmplantın doğrudan yerleştirildiği — genellikle hasarlı dişin çekiminden hemen sonra — uzun bekleme sürelerini ortadan kaldıran ve bir-iki seansta tamamlanan ileri bir tekniktir. Acil seyahatler ve kemik yoğunluğu mükemmel olan hastalar için idealdir.',
          },
          {
            title: 'Sabit tüm çene implantları (All-on-4 ve All-on-6)',
            text: 'Dişlerin tamamen kaybı ve diş eti çekilmesi durumunda yalnızca 4 veya 6 kök yerleştiririz; ikisi, sinüs boşluklarından kaçınarak kemikle maksimum temas ve stabilite için 65 dereceye kadar açıyla yerleştirilir, ardından tam protez bu köklerin üzerine kalıcı olarak sabitlenir.',
          },
        ],
        candidatesTitle: 'Kimler diş implantı adayıdır?',
        candidates: [
          '17-18 yaş üzeri kişiler; daha öncesinde çene hâlâ gelişimindedir.',
          'Kaza, hastalık veya temas sporları nedeniyle diş kaybı yaşayanlar.',
          'Diş eksikliği nedeniyle çiğneme veya telaffuz sorunu yaşayanlar.',
        ],
        tipsTitle: 'Tedavi yolculuğunuzun aşamaları',
        tips: [
          'Herhangi bir kronik hastalığınızı (hemofili, diyabet, tansiyon) hekiminize bildirin; diyabetik hastalarda HbA1c uzun süredir stabil olmalıdır.',
          '3D BT taraması; kemik kalınlığı ve yoğunluğunu, sinir uçlarını ve sinüs konumlarını haritalayarak delik noktalarını son derece hassas belirler.',
          'İşlem, önceden hazırlanan dijital plana uygun olarak lokal anestezi (veya istek üzerine bilinçli sedasyon) altında ağrısız yapılır.',
        ],
        imageNote: 'İmplant, abutment ve kronlarla çene modeli',
      },
      {
        num: '02',
        name: 'Hollywood Gülüşü',
        tagline: 'Türkiye’de Hollywood gülüşü | Çekiciliğin, güvenin ve kalıcı parlaklığın sırrı',
        intro:
          'Güzel bir gülüş özgüven demektir — ve Türkiye’de Hollywood gülüşü artık elinizin altında. Orec Clinic’te uyumlu, sağlıklı ve sıra sıra dizilmiş dişlerle pırıl pırıl bir beyazlık sağlayan en kaliteli porselen lamineler (veneer) sunuyoruz; renk değiştirmeden ve leke tutmadan çok uzun yıllar dayanır.',
        blocks: [
          {
            title: 'İşlem nasıl yapılır?',
            text: 'Öncelikle mevcut tüm diş sorunlarının (çürük, diş eti iltihabı) tedavisi; ardından laminelere yer açmak için minesinin çok ince bir tabakasının mikroskobik olarak hafifçe küçültülmesi; son olarak porselen lamineler, çok dayanıklı tıbbi yapıştırıcılarla son derece hassas şekilde yapıştırılır.',
          },
          {
            title: 'Kullanılan malzemeler',
            text: 'Lamineler geliştirilmiş Alman zirkonyumundan veya saf E-max’ten üretilir; yalnızca üst diş sırasına, yalnızca alt sıraya veya mükemmel bir görünüm için her ikisine uygulanır. Tasarım ve laboratuvar süreci iki-üç hafta sürer (klinikte 2-3 seans içerir).',
          },
          {
            title: 'Lamine öncesi tıbbi dürüstlük',
            text: 'Vakanızın gerçekten laminelere ihtiyacı olduğundan emin oluyoruz; yalnızca beyazlatma yeterli olacaksa bundan vazgeçilmesini öneriyoruz, çünkü mine küçültme kalıcı ve geri dönüşsüz bir işlemdir. Bu nedenle önce tüm diş sorunlarını tedavi ediyor, ileri derecede hasarlı dişleri implantla değiştiriyor ve gerekirse kanal tedavisi uyguluyoruz.',
          },
        ],
        candidatesTitle: 'Kimler Hollywood gülüşü adayıdır?',
        candidates: [
          'Şiddetli ve inatçı diş renklenmesi ve lekelenmesi olanlar.',
          'Kahve, çay ve tütün tüketimi yoğun olan ve gelecekte leke tutmayan bir çözüm isteyenler.',
          'Dişler arasında boşluk, kısmi kırıklar veya boyut ve uzunluk eşitsizliği bulunanlar.',
        ],
        tipsTitle: 'Sonrasında bakım önerileri',
        tips: [
          'Diş eti kenarında tartar birikimini önlemek için günlük fırçalama, macun ve diş ipi kullanımı.',
          'Lamineleri kırmamak için çok sert nesneleri ısırmaktan kaçının (ambalaj açma, kalem ısırma).',
          'Kontrol ve profesyonel temizlik için 6 ayda bir diş hekiminizi ziyaret edin.',
        ],
        imageNote: 'Lamine öncesi ve sonrası parlak, çekici gülüş',
      },
      {
        num: '03',
        name: 'Diş Tedavi ve Restorasyonu',
        tagline: 'Diş sağlığınız, gülüşünüzün güzelliğinin temelidir',
        intro:
          'Herhangi bir estetik işlem düşünmeden önce dişleriniz sağlıklı ve güçlü olmalıdır. Orec Clinic’in Diş Tedavi ve Restorasyonu bölümü; ağrılardan, çürüklerden ve fonksiyonel sorunlardan en güncel minimal invaziv tekniklerle, konfor ve güvenliğin en yüksek standartlarında kurtulmanız için adresinizdir.',
        blocks: [
          {
            title: 'Estetik (kompozit) dolgular',
            text: 'Çürüğü tamamen kaldırıp yüksek kaliteli ışıkla sertleşen kompozit dolgularla değiştiriyoruz; dolgu, dişin doğal rengiyle kusursuz bütünleşerek ona güç ve özgün şeklini, hiçbir çirkin iz bırakmadan geri kazandırır.',
          },
          {
            title: 'Kanal tedavisi',
            text: 'En güncel hassas dijital cihazlarla enfekte ve iltihaplı sinir kanallarını derinlemesine temizliyor ve ağrıyı kalıcı olarak ortadan kaldırıyoruz; genellikle etkili lokal anestezi altında tek hızlı ve rahat seansta.',
          },
          {
            title: 'Kuron ve köprüler',
            text: 'Zayıf, kırık veya kanal tedavisi görmüş dişleri korumak için, doğal mineye benzer sertlik sağlayan ve yüksek çiğneme kuvvetlerine dayanan gelişmiş zirkonyum ve porselen kronlar kullanıyoruz.',
          },
          {
            title: 'Diş eti hastalıkları tedavisi ve greft',
            text: 'Sağlıklı diş etleri güzel gülüşün çerçevesidir: derin tartar temizliği, diş eti cep tedavisi ve kararmayı, iltihabı ve ağız kokusunu ortadan kaldıran lazerli diş eti grefti.',
          },
        ],
        candidatesTitle: 'Restoratif diş tedavisi gereken durumlar',
        candidates: [
          'Soğuk veya sıcak yiyecek-içecek tüketiminde keskin ağrı veya nabız hissi.',
          'Çürük veya aşırı baskı sonucu diş yapısında boşluk, çukur veya kırıklar.',
          'Fırçalama sırasında diş eti kanaması veya ağızda kötü koku.',
        ],
        imageNote: 'Kanal tedavisi veya hassas estetik dolgu illüstrasyonu',
      },
      {
        num: '04',
        name: 'Diş Beyazlatma',
        tagline: 'Türkiye’de diş beyazlatma | Canlı bir gülüş için hızlı, güvenli ve cerrahi olmayan çözüm',
        intro:
          'Dişlerinizin doğal beyazlığını geri kazanmak ve günlük yaşam tarzından kaynaklanan sararmadan kurtulmak istiyorsanız — dişleri aşındırmadan veya lamine yaptırmadan — Orec Clinic’in Diş Beyazlatma bölümü mineye en etkili ve en güvenli tıbbi çözümleri sunar.',
        blocks: [
          {
            title: 'Klinikte lazer beyazlatma (Zoom)',
            text: 'Bir saatten kısa süren tek hızlı seans: ölçülü yoğunlukta tıbbi beyazlatma jeli uygulanır ve lazer veya gelişmiş Zoom cihazıyla aktive edilir — dişler aynı seansta 6-8 ton açılır, özel bir bariyerle diş eti tamamen korunur.',
          },
          {
            title: 'Kişiye özel ev tipi beyazlatma şablonları',
            text: 'Dişlerinizden ölçü alıp ağzınıza tam uyan esnek şablonlar üretiyor, evde güvenli yoğunlukta jel ile birlikte teslim ediyoruz. Birkaç gün kullanarak klinik sonucunu koruyabilir veya kademeli ve konforlu bir açılma elde edebilirsiniz.',
          },
        ],
        candidatesTitle: 'Kimler diş beyazlatma adayıdır?',
        candidates: [
          'Sigara ve yoğun çay, kahve, gazlı içecek tüketiminden kaynaklanan sararmalar.',
          'Yaşla birlikte doğal olarak azalan diş beyazlığı.',
          'Sıra sıra ve uyumlu dişlere sahip, yalnızca parlaklık ve daha açık ton isteyen hastalar.',
        ],
        tipsTitle: 'Seans sonrası beyazlığı korumak',
        tips: [
          '48 saat boyunca renkli tüm yiyecek-içeceklerden (kahve, çay, köri, domates) ve sigaradan uzak durun — “beyaz diyet” dönemi — çünkü dişler bu sürede pigmentleri daha kolay emer.',
          'İleride koyu renkli herhangi bir içecek tükettikten hemen sonra suyla çalkalayın.',
          'Orec hekiminizin yönlendirmesiyle haftada bir-iki kez beyazlatıcı diş macunu kullanarak periyodik bakım yapın.',
        ],
        imageNote: 'Lazer beyazlatma öncesi ve sonrası net görsel karşılaştırma',
      },
    ],
  },
  about: {
    eyebrow: 'OREC CLINIC',
    title: 'Orec Clinic Hakkımızda',
    intro: {
      title: 'Giriş',
      text: 'Orec Clinic’e hoş geldiniz; estetiğin ve tıbbi bakımın geçici işlemler olmadığına, sizi dinleyerek başlayan ve parlayan gülüşünüzü görmekle biten sıcak bir insan yolculuğu olduğuna inanıyoruz. 2015’te İstanbul’un kalbinde kapılarımızı açtığımızdan beri, olumlu değişim arayan herkesin destekçisi ve güvenilir danışmanı olmayı; modern tıbbın hassasiyetini aile sıcaklığıyla birleştirmeyi kendimize söz verdik — Sağlık Bakanlığı ve Turizm Bakanlığının sağlık turizmi resmi lisanslarıyla.',
    },
    vision: {
      title: 'Vizyonumuz ve felsefemiz',
      text: 'Hatları silen yapay değişime inanmıyoruz; güzelliği, görünümünüzün doğallığında ve spontanlığında görüyoruz. Sevgiyle, yüzünüzün doğal güzelliklerini öne çıkarmaya ve kusurları en nazik bilimsel yöntemlerle düzeltmeye odaklanıyor; size yakışan sonucu, yolculuğunuz boyunca içiniz rahat bir şekilde sunuyoruz.',
    },
    specialty: {
      title: 'Öncelikli uzmanlığımız: diş tedavisi ve estetiği',
      text: 'Gülüş, bizi başkalarıyla bağlayan ilk şeydir; bu yüzden Orec Clinic’te seçkin hekim ve danışmanların bulunduğu tam donanımlı ve son derece gelişmiş bir diş bölümü kurduk; size sunmak için:',
      items: [
        { title: 'Dijital gülüş tasarımı', text: 'Doğal yüz hatlarınıza son derece hassas uyum sağlayan büyüleyici bir Hollywood gülüşü tasarımı.' },
        { title: 'Hemen diş implantları', text: 'En güncel dünya teknikleri ve minimum ağrıyla; normal yaşamınıza hızla ve güvenle dönersiniz.' },
        { title: 'Bütünleşik diş tedavileri', text: 'Kanal tedavisinden estetik restorasyonlara (zirkonyum ve E-max) ve beyazlatmaya, estetik diş eti cerrahisine ve fonksiyonel sorunların tedavisine kadar.' },
      ],
    },
    founder: {
      title: 'Kalpten bir söz.. kliniğin kurucusu',
      quote:
        'Bu insani tutkuyu, kaliteye bağlılığı ve müşterilerimizle uzun vadeli ortaklıklar kurmaya dayalı güven yaklaşımını Orec Clinic’e taşımayı heyecanla istiyoruz. Onu kuru, sıradan bir klinik olarak değil; özellikle sağlıklı ve güzel bir gülüş hayal eden herkesin güvenle ve huzurla hissedeceği bir yer olarak tasarladık. Benim için gerçek başarımız ameliyat sayısıyla değil; yüzlerinizde gördüğümüz içten gülüşlerle ve sizi karşıladığımız ilk andan ülkenize sağ salim dönene kadar hissettiğiniz huzurla ölçülür.',
      closing:
        'Gerçek başarı hikâyemiz; sunduğumuz tıbbi bakımın ve lüksün sıcaklığını bizzat hissettiğinizde başlar. Danışmanlık ekibimiz tüm sorularınızı nazikçe yanıtlamak için her zaman yanınızda.. Bugün bize ulaşın ve hayata olan tutkunuzu geri kazandıran sağlıklı, güzel bir gülüşe doğru ilk adımınızı atın!',
      name: 'Dr. MHD GHIATH ALZUHAILI',
      nameEn: 'د. محمد غياث الزحيلي',
      role: 'Orec Clinic Kurucusu ve İcra Direktörü',
    },
    cta: 'Bugün bize ulaşın',
    license: 'Sağlık Bakanlığı ve Turizm Bakanlığı sağlık turizmi resmi lisansı',
  },
  why: {
    eyebrow: 'NEDEN OREC',
    title: 'Hastalar neden bizi aileleri olarak seçiyor?',
    intro: 'Orta Doğu, Avrupa, Kuzey Afrika ve Kuzey Amerika’dan gelen binlerce dost ve hastamızla aramızda sevgi ve güven köprüleri kuruldu; çünkü şunlarda özenliyiz:',
    items: [
      {
        num: '01',
        title: 'İnsani ve samimi yaklaşım',
        text: 'Endişelerinizi dinliyor, beklentilerinizi anlıyor ve sizi ailemizin kıymetli bir ferdi olarak görüyoruz.',
      },
      {
        num: '02',
        title: 'VIP misafirperverlik ve lojistik',
        text: 'Kurucumuzun lüks hizmetler sektöründeki köklü deneyimi sayesinde transferleriniz ve premium otel konaklamanız dahil her detayı üstleniyor, yolculuğunuzu kaygısız kılıyoruz.',
      },
      {
        num: '03',
        title: 'En güncel güvenli teknolojiler',
        text: 'Kliniğimiz; hassas, konforlu tedavi ve dünya standartlarında başarı oranları sağlayan en güncel tıbbi cihazlarla donatılmıştır.',
      },
      {
        num: '04',
        title: 'Sürekli birlikte',
        text: 'İlişkimiz tedavi bitince bitmez; tıbbi ekibimiz, ülkenize döndükten sonra bile sağlığınızdan ve güvenliğinizden emin olmak için sürekli iletişimde kalır.',
      },
    ],
  },
  contact: {
    eyebrow: 'BİZE ULAŞIN',
    title: 'İletişime geçin',
    quote:
      'Gerçek başarı hikâyemiz; sunduğumuz tıbbi bakımın ve lüksün sıcaklığını bizzat hissettiğinizde başlar. Danışmanlık ekibimiz tüm sorularınızı nazikçe yanıtlamak için her zaman yanınızda.. Bugün bize ulaşın ve hayata olan tutkunuzu geri kazandıran sağlıklı, güzel bir gülüşe doğru ilk adımınızı atın!',
    subtitle: 'Danışmanlık ekibimiz, size her zaman kulak vermek ve tüm sorularınızı içtenlikle yanıtlamak için hazırdır.',
    privacy: 'Beklentiler ve sonuçlar tam bir gizlilik ve mahremiyet içinde görüşülür.',
    infoTitle: 'İletişim bilgileri',
    email: 'E-posta',
    phone: 'Telefon',
    whatsapp: 'WhatsApp',
    whatsappCta: 'WhatsApp sohbeti aç',
    address: 'Adres',
    formTitle: 'Talebinizi gönderin',
    form: {
      name: 'Ad Soyad',
      phone: 'Telefon numarası (WhatsApp)',
      service: 'İlgilendiğiniz hizmet',
      servicePlaceholder: 'Bir hizmet seçin',
      message: 'Mesajınız',
      messagePlaceholder: 'Durumunuzu veya sorğunuzu buraya yazın..',
      submit: 'Talebinizi gönderin',
      sending: 'Gönderiliyor..',
      success: 'Talebiniz alındı! Danışmanlık ekibimiz en kısa sürede sizinle iletişime geçecek.',
      error: 'Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp’tan bize ulaşın.',
      required: 'Bu alan zorunludur',
    },
  },
  footer: {
    tagline: 'Orec Clinic.. Gülüşünüze ve güzelliğinize olan güveninizi geri kazanma yolculuğunuzda tıbbi aileniz',
    care: 'ÖZEN • HASSASİYET • MÜKEMMELLİK',
    follow: 'Bizi takip edin',
    quickLinks: 'Hızlı bağlantılar',
    servicesTitle: 'Hizmetlerimiz',
    contactTitle: 'Bize ulaşın',
    rights: 'Tüm hakları saklıdır.',
    location: 'İstanbul — Türkiye',
  },
  whatsapp: {
    floatLabel: 'WhatsApp sohbet',
    tooltip: 'WhatsApp’tan bize yazın — genellikle dakikalar içinde yanıtlıyoruz',
    prefill: 'Merhaba Orec Clinic, ücretsiz konsültasyon almak istiyorum.',
    aria: 'Orec Clinic ile WhatsApp sohbeti aç',
  },
}
