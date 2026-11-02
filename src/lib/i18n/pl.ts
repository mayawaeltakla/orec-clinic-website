import type { Dictionary } from './types'

export const pl: Dictionary = {
  meta: {
    title: 'Klinika Orec.. Twoja medyczna rodzina w podróży do odzyskania pewności uśmiechu i piękna',
    description:
      'Klinika Orec w sercu Stambułu — estetyka i leczenie stomatologiczne, chirurgia plastyczna, przeszczep włosów i chirurgia bariatryczna na podstawie oficjalnych licencji tureckich ministerstw zdrowia i turystyki.',
  },
  brand: {
    name: 'Klinika Orec',
    suffix: 'Orec Clinic',
    tagline: 'Twoja medyczna rodzina w podróży do odzyskania pewności uśmiechu i piękna',
    care: 'OPIEKA • PRECYZJA • EKSELENJCJA',
  },
  nav: {
    home: 'Strona główna',
    services: 'Usługi',
    about: 'O nas',
    why: 'Dlaczego my',
    contact: 'Kontakt',
    book: 'Umów konsultację',
    servicesIndex: 'Oddziały',
    menuOpen: 'Otwórz menu',
    menuClose: 'Zamknij menu',
    themeToggle: 'Przełącz tryb ciemny i jasny',
  },
  hero: {
    eyebrow: 'OPIEKA • PRECYZJA • EKSELENJCJA',
    title1: 'Klinika Orec..',
    title2: 'Twoja medyczna rodzina w podróży do odzyskania pewności uśmiechu i piękna',
    badges: ['W sercu Stambułu', 'Od 2015 roku', 'Oficjalne licencje ministerstw zdrowia i turystyki'],
    ctaPrimary: 'Skontaktuj się z nami',
    ctaSecondary: 'Poznaj nasze usługi',
    location: 'STAMBULL · OD 2015',
    prevSlide: 'Poprzedni slajd',
    nextSlide: 'Następny slajd',
    stats: [
      { value: '2015', label: 'Rok założenia w Stambule' },
      { value: '+10', label: 'Języków, którymi mówimy' },
      { value: '4', label: 'Wyspecjalizowane oddziały' },
    ],
  },
  services: {
    eyebrow: 'NASZE USŁUGI',
    title: 'Usługi',
    subtitle: 'Cztery zintegrowane oddziały medyczne pod jednym dachem, pod kierunkiem elitarnych tureckich i arabskich konsultantów, z pełnym wsparciem od pierwszej konsultacji do powrotu do domu.',
    viewAll: 'Zobacz wszystkie usługi',
    categories: [
      {
        id: 'dental',
        num: '01',
        code: 'STOMATOLOGIA',
        title: 'Estetyka i leczenie zębów',
        description: 'Nasza główna specjalność: od implantów natychmiastowych do hollywoodzkiego uśmiechu, z precyzyjną technologią cyfrową i materiałami cyrkonowymi oraz E-max światowej klasy.',
        items: [
          { name: 'Implanty zębowe', en: 'Dental Implants' },
          { name: 'Hollywoodzki uśmiech', en: 'Hollywood Smile' },
          { name: 'Leczenie i rekonstrukcja zębów', en: 'Restorative Dentistry' },
          { name: 'Wybielanie zębów', en: 'Teeth Whitening' },
        ],
      },
      {
        id: 'cosmetic',
        num: '02',
        code: 'ESTETYKA',
        title: 'Chirurgia Estetyczna',
        description: 'Operacje twarzy i ciała wykonywane przez wyspecjalizowanych chirurgów, z planowaniem 3D i pełną opieką przed- i pooperacyjną.',
        items: [],
        groups: [
          {
            name: 'Chirurgia twarzy',
            items: [
              'Lifting twarzy (Facelift)',
              'Lifting brwi (Brow Lift)',
              'Rynoplastyka (nos)',
              'Otoplastyka (uszy)',
              'Estetyka ust (cheiloplastyka)',
              'Lifting szyi (Neck Lift)',
              'Blefaroplastyka (powieki)',
              'Konturowanie czoła',
              'Genioplastyka (podbródek)',
              'Korekcja policzków / dołki',
            ],
          },
          {
            name: 'Modelowanie ciała',
            items: [
              'Modelowanie ciała / Liposukcja',
              'Chirurgia piersi (mammoplastyka)',
              'Ginekomastia',
              'Abdominoplastyka (lifting brzucha)',
              'Lifting ramion (brachioplastyka)',
              'Lifting ud',
            ],
          },
          {
            name: 'Estetyka miejsc intymnych',
            items: [
              'Estetyka pośladków (BBL)',
              'Odmlodzenie pochwy / Labioplastyka',
              'Iniekcje tłuszczu i wypełniaczy do pochwy',
              'Waginoplastyka',
              'Estetyka i poprawa prącia',
              'Wydłużanie prącia',
            ],
          },
        ],
      },
      {
        id: 'hair',
        num: '03',
        code: 'WŁOSY',
        title: 'Przeszczep Włosów',
        description: 'Najnowsze techniki Sapphire i DHI z projekcją naturalnej linii włosów w harmonii z rysami twarzy.',
        items: [
          { name: 'Przeszczep włosów skóry głowy', en: 'Scalp Hair Transplantation' },
          { name: 'Przeszczep brody i wąsów', en: 'Beard & Mustache Transplantation' },
          { name: 'Przeszczep brwi', en: 'Eyebrow Transplantation' },
        ],
      },
      {
        id: 'obesity',
        num: '04',
        code: 'BARIATRIA',
        title: 'Chirurgia Bariatryczna',
        description: 'Chirurgiczne rozwiązania redukcji wagi pod nadzorem zespołu żywieniowo-behawioralnego, z opieką dietetyczną do osiągnięcia idealnej wagi.',
        items: [
          { name: 'Rękaw żołądkowy', en: 'Gastric Sleeve' },
          { name: 'Bypass żołądkowy', en: 'Gastric Bypass' },
          { name: 'Balon żołądkowy', en: 'Gastric Balloon' },
          { name: 'Botoks żołądkowy', en: 'Gastric Botox' },
        ],
      },
    ],
  },
  dental: {
    eyebrow: '01 · STOMATOLOGIA',
    title: 'Estetyka i leczenie zębów',
    subtitle: 'Nasz najbardziej zaawansowany oddział: cztery pełne ścieżki leczenia od implantów po wybielanie — wszystkie zaczynają się od precyzyjnej diagnozy cyfrowej, a kończą uśmiechem dopasowanym do Ciebie.',
    cta: 'Umów bezpłatną konsultację',
    sections: [
      {
        num: '01',
        name: 'Implanty zębowe',
        tagline: 'Implanty zębowe w Turcji | Idealne i ostateczne rozwiązanie dla brakujących zębów',
        intro:
          'Implanty zębowe to najnowsza rewolucja współczesnej stomatologii — najbardziej trwałe medyczne rozwiązanie do zastąpienia brakującego lub startego zęba bez uszkadzania sąsiednich zębów. W klinice Orec łączymy zaawansowaną technologię cyfrową z najlepszymi tureckimi lekarzami, gwarantując światowe wskaźniki sukcesu i leczenie bez bólu.',
        blocks: [
          {
            title: 'Podstawowe elementy implantu',
            text: 'Implantowany ząb składa się z trzech części, które zrastają się, dając wygląd i uczucie naturalnego zęba: Fixture — śruba z czystego tytanu, która integruje się z kością bez odrzucania i alergii; Abutment — element łączący na fixture; Korona — z cyrkonu lub E-max, naturalnie stapiająca się z Twoimi zębami siłą i blaskiem.',
          },
          {
            title: 'Implanty klasyczne (standardowe)',
            text: 'Korzenie wszczepia się w tkankę kostną żuchwy, następnie czekamy 3-4 miesiące na pełne zespolenie kości z implantem, po czym ostateczny ząb zostaje trwale zamocowany.',
          },
          {
            title: 'Implanty natychmiastowe',
            text: 'Zaawansowana technika, w której implant wszczepia się bezpośrednio — zwykle tuż po usunięciu uszkodzonego zęba — z pominięciem długich okresów oczekiwania, kończąc się w jednej lub dwóch wizytach. Idealna przy pilnych podróżach i doskonałej gęstości kości.',
          },
          {
            title: 'Stałe implanty całego łuku (All-on-4 i All-on-6)',
            text: 'Przy całkowitej utracie zębów i zaniku dziąseł wszczepiamy tylko 4 lub 6 korzeni; dwa z nich pod kątem do 65 stopni dla maksymalnego kontaktu i stabilności z kością z omijaniem zatok, po czym pełna proteza zostaje na stałe zamocowana na tych korzeniach.',
          },
        ],
        candidatesTitle: 'Kto jest kandydatem do implantów?',
        candidates: [
          'Osoby powyżej 17-18 lat, wcześniej żucha wciąż rośnie.',
          'Utrata zębów w wyniku wypadków, chorób lub sportów kontaktowych.',
          'Osoby z problemami żucia lub wymowy z powodu brakujących zębów.',
        ],
        tipsTitle: 'Etapy Twojej podróży leczniczej',
        tips: [
          'Poinformuj lekarza o chorobach przewlekłych (hemofilia, cukrzyca, ciśnienie); u diabetyków hemoglobina glikowana musi być stabilna od dłuższego czasu.',
          'Skan 3D CT mapuje grubość i gęstość kości, zakończenia nerwowe i zatoki, aby z maksymalną precyzją określić miejsca wiercenia.',
          'Zabieg wykonuje się w znieczuleniu miejscowym (lub sedacji na życzenie), bez bólu, według wcześniejszego planu cyfrowego.',
        ],
        imageNote: 'Żuchwa z implantami, łącznikami i koronami',
      },
      {
        num: '02',
        name: 'Hollywoodzki uśmiech',
        tagline: 'Hollywoodzki uśmiech w Turcji | Sekret atrakcyjności, pewności siebie i trwałego blasku',
        intro:
          'Piękny uśmiech oznacza pewność siebie — a hollywoodzki uśmiech w Turcji jest teraz w Twoim zasięgu. W klinice Orec oferujemy najfinejniejsze licówki porcelanowe (veneers) dla harmonijnych zębów o jaśniejącym blasku: zdrowy, równy i wyrównany wygląd, który trwa bardzo długo bez zmiany koloru i przebarwień.',
        blocks: [
          {
            title: 'Jak przebiega zabieg',
            text: 'Najpierw kompleksowe leczenie wszystkich istniejących problemów zębów (próchnica, zapalenie dziąseł); potem minimalne mikroskopowe zeszlifowanie cienkiej warstwy szkliwa, aby zrobić miejsce na licówki; na koniec licówki porcelanowe są przyklejane z maksymalną precyzją za pomocą wysoce wytrzymałych klejów medycznych.',
          },
          {
            title: 'Wykorzystywane materiały',
            text: 'Licówki wykonane są z ulepszonego niemieckiego cyrkonu lub czystego E-max, zakładane tylko na górny łuk, tylko na dolny lub oba dla idealnego efektu. Projekt i praca laboratoryjna trwają dwa-trzy tygodnie (2-3 wizyty w klinice).',
          },
          {
            title: 'Medyczna uczciwość przed zabiegiem',
            text: 'Upewniamy się, że Twój przypadek naprawdę wymaga licówek; jeśli zwykłe wybielanie wystarczy, odradzamy je, ponieważ szlifowanie szkliwa jest zabiegiem trwałym i nieodwracalnym. Dlatego najpierw leczymy wszystkie problemy zębów, wymieniamy mocno zniszczone zęby na implanty i wykonujemy leczenie kanałowe, gdy to konieczne.',
          },
        ],
        candidatesTitle: 'Kto jest kandydatem do hollywoodzkiego uśmiechu?',
        candidates: [
          'Osoby z silnym, opornym przebarwieniem i plamami na zębach.',
          'Części konsumenci kawy, herbaty i tytoniu, którzy chcą rozwiązania, które w przyszłości się nie przebarwi.',
          'Szpary między zębami, częściowo złamane zęby lub nierówne co do długości i wielkości.',
        ],
        tipsTitle: 'Wskazówki po zabiegu',
        tips: [
          'Codzienne szczotkowanie pastą i nitkowaniem, aby zapobiec kamieniowi na brzegu dziąseł.',
          'Unikaj gryzienia bardzo twardych przedmiotów (otwierania opakowań, gryzienia długopisów), aby chronić licówki.',
          'Odwiedzaj dentystę co 6 miesięcy na kontrolę i profesjonalne czyszczenie.',
        ],
        imageNote: 'Promienny, atrakcyjny uśmiech przed i po licówkach',
      },
      {
        num: '03',
        name: 'Leczenie i rekonstrukcja zębów',
        tagline: 'Zdrowie Twoich zębów to fundament piękna Twojego uśmiechu',
        intro:
          'Zanim pomyślisz o jakichkolwiek zabiegach estetycznych, Twoje zęby muszą cieszyć się zdrowiem i siłą. Oddział leczenia i rekonstrukcji zębów kliniki Orec to Twój adres do pozbycia się bólu, próchnicy i problemów funkcjonalnych najnowszymi technikami małoinwazyjnymi i najwyższymi standardami komfortu i bezpieczeństwa.',
        blocks: [
          {
            title: 'Estetyczne wypełnienia (kompozytowe)',
            text: 'Całkowicie usuwamy próchnicę i zastępujemy ją wysokiej jakości wypełnieniami kompozytowymi utwardzanymi światłem, które idealnie wtapiają się w naturalny kolor zęba, przywracając mu siłę i pierwotny kształt bez żadnych skaz.',
          },
          {
            title: 'Leczenie kanałowe',
            text: 'Używamy najnowszych precyzyjnych urządzeń cyfrowych do głębokiego czyszczenia zainfekowanych i zapalonych kanałów nerwowych oraz trwałego usunięcia bólu — zwykle w jednym szybkim i komfortowym spotkaniu w skutecznym znieczuleniu miejscowym.',
          },
          {
            title: 'Korony i mosty',
            text: 'Aby chronić osłabione, złamane lub leczone kanałowo zęby, stosujemy zaawansowane korony cyrkonowe i porcelanowe, które dają twardość zbliżoną do naturalnego szkliwa i wytrzymują duże siły żucia.',
          },
          {
            title: 'Leczenie chorób dziąseł i przeszczep',
            text: 'Zdrowe dziąsła to rama pięknego uśmiechu: głębokie czyszczenie kamienia, leczenie kieszeni dziąsłowych i przeszczep dziąseł laserem, aby pozbyć się przebarwień, stanów zapalnych i nieświeżego oddechu.',
          },
        ],
        candidatesTitle: 'Przypadki wymagające rekonstrukcji zębów',
        candidates: [
          'Ostry ból lub pulsowanie przy spożywaniu zimnych lub gorących potraw i napojów.',
          'Szpary, dziury lub pęknięcia w strukturze zęba spowodowane próchnicą lub nadmiernym naciskiem.',
          'Krwawienie dziąseł podczas szczotkowania lub nieprzyjemny zapach z ust.',
        ],
        imageNote: 'Ilustracja leczenia kanałowego lub precyzyjnego wypełnienia estetycznego',
      },
      {
        num: '04',
        name: 'Wybielanie zębów',
        tagline: 'Wybielanie zębów w Turcji | Szybkie, bezpieczne i niechirurgiczne rozwiązanie dla pełnego życia uśmiechu',
        intro:
          'Jeśli chcesz odzyskać naturalną białość zębów i pozbyć się żółknięcia spowodowanego codziennym stylem życia — bez szlifowania zębów i licówek — oddział wybielania kliniki Orec oferuje najskuteczniejsze i najbezpieczniejsze dla szkliwa rozwiązania medyczne.',
        blocks: [
          {
            title: 'Wybielanie laserem w klinice (Zoom)',
            text: 'Jedna szybka sesja krótsza niż godzina: nakładany jest medyczny żel wybielający o dozowanym stężeniu, aktywowany laserem lub zaawansowanym urządzeniem Zoom — zęby natychmiast jaśnieją o 6-8 odcieni, a dziąsła są całkowicie chronione specjalnym izolatorem.',
          },
          {
            title: 'Indywidualne szyny wybielające do domu',
            text: 'Pobieramy odcisk Twoich zębów i wykonujemy elastyczne szyny idealnie dopasowane do ust, dostarczane z żelem o bezpiecznym domowym stężeniu. Stosowane kilka dni, przedłużają wynik kliniki lub dają łagodne stopniowe rozjaśnienie.',
          },
        ],
        candidatesTitle: 'Kto jest kandydatem do wybielania?',
        candidates: [
          'Żółknięcie spowodowane paleniem i częstym piciem herbaty, kawy i napojów gazowanych.',
          'Naturalny spadek białości zębów wraz z wiekiem.',
          'Pacjenci z równymi i wyrównanymi zębami, którzy potrzebują tylko blasku i jaśniejszego odcienia.',
        ],
        tipsTitle: 'Jak zachować białość po sesji',
        tips: [
          'Przez 48 godzin unikaj wszystkich barwionych potraw i napojów (kawa, herbata, curry, pomidor) i palenia — „biała dieta” — ponieważ zęby łatwiej wtedy wchłaniają pigmenty.',
          'W przyszłości płucz usta wodą bezpośrednio po każdym ciemnym napoju.',
          'Stosuj pastę wybielającą raz lub dwa razy w tygodniu jako okresową pielęgnację, według wskazówek lekarza Orec.',
        ],
        imageNote: 'Wyraźne porównanie wizualne przed i po wybielaniu laserem',
      },
    ],
  },
  about: {
    eyebrow: 'KLINIKA OREC',
    title: 'O klinice Orec',
    intro: {
      title: 'Wprowadzenie',
      text: 'Witamy w klinice Orec, gdzie wierzymy, że estetyka i opieka medyczna to nie przemijające zabiegi, ale ciepła ludzka podróż, która zaczyna się od wysłuchania Ciebie, a kończy widokiem Twojego promiennego uśmiechu. Od otwarcia drzwi w sercu Stambułu w 2015 roku zobowiązaliśmy się być podporą i zaufanym doradcą każdego, kto szuka pozytywnej zmiany, łącząc precyzję nowoczesnej medycyny z ciepłem rodzinnej opieki, na podstawie oficjalnych licencji tureckich ministerstw zdrowia i turystyki dla turystyki medycznej.',
    },
    vision: {
      title: 'Nasza wizja i filozofia',
      text: 'Nie wierzymy w sztuczną zmianę wymazującą rysy; piękno widzimy w naturalności i spontaniczności Twojego wyglądu. Z miłością koncentrujemy się na wyeksponowaniu naturalnego piękna Twojej twarzy i korekcie niedoskonałości najłagodniejszymi metodami naukowymi, aby dać Ci wynik, który Ci się podoba, i pełen spokój w całej podróży z nami.',
    },
    specialty: {
      title: 'Nasza wyróżniająca się specjalność: leczenie i estetyka zębów',
      text: 'Ponieważ uśmiech jest pierwszym łączem z innymi, w klinice Orec poświęciliśmy w pełni zintegrowany i bardzo zaawansowany oddział stomatologiczny z elitą lekarzy i konsultantów, aby zaoferować Ci:',
      items: [
        { title: 'Cyfrowy projekt uśmiechu', text: 'Zaprojektowanie czarującego hollywoodzkiego uśmiechu precyzyjnie pasującego do naturalnych rysów Twojej twarzy.' },
        { title: 'Natychmiastowe implanty zębowe', text: 'Według najnowszych światowych technik i przy minimalnym bólu, abyś szybko i pewnie wrócił do normalnego życia.' },
        { title: 'Kompleksowe leczenie zębów', text: 'Od leczenia kanałowego i estetycznych rekonstrukcji (cyrkon i E-max) i wybielania, po estetyczną chirurgię dziąseł i leczenie problemów funkcjonalnych.' },
      ],
    },
    founder: {
      title: 'Słowo od serca.. założyciel kliniki',
      quote:
        'Cieszę się, że mogę przenieść tę ludzką pasję, zaangażowanie w jakość i podejście oparte na zaufaniu oraz budowaniu długoterminowych partnerstw z naszymi klientami do kliniki Orec. Nie chcieliśmy, by była suchą, konwencjonalną kliniką, lecz miejscem, gdzie czujesz bezpieczeństwo i wygodę — szczególnie dla wszystkich, którzy marzą o zdrowym, pięknym uśmiechu przywracającym pasję do życia. Dla mnie nasz prawdziwy sukces nie mierzy się liczbą operacji, lecz szczerymi uśmiechami, które widzimy na Waszych twarzach i komfortem, który czujecie od pierwszej chwili powitania aż do powrotu do domu cało i zdrowo.',
      closing:
        'Nasza prawdziwa historia sukcesu zaczyna się, gdy na własnej skórze poczujesz ciepło opieki medycznej i luksusu, które oferujemy. Nasz zespół konsultantów zawsze jest do dyspozycji, aby Cię wysłuchać i życzliwie odpowiedzieć na wszystkie pytania.. Skontaktuj się z nami już dziś i zrób pierwszy krok do zdrowego, pięknego uśmiechu, który przywróci Ci pasję do życia!',
      name: 'Dr. MHD GHIATH ALZUHAILI',
      nameEn: 'د. محمد غياث الزحيلي',
      role: 'Założyciel i dyrektor generalny kliniki Orec',
    },
    cta: 'Skontaktuj się z nami już dziś',
    license: 'Oficjalna licencja tureckich ministerstw zdrowia i turystyki dla turystyki zdrowotnej',
  },
  why: {
    eyebrow: 'DLACZEGO OREC',
    title: 'Dlaczego pacjenci wybierają nas jako rodzinę?',
    intro: 'Mosty miłości i zaufania połączyły nas z tysiącami przyjaciół i pacjentów z Bliskiego Wschodu, Europy, Afryki Północnej i Ameryki Północnej, ponieważ wyróżniamy się:',
    items: [
      {
        num: '01',
        title: 'Ludzkie i serdeczne podejście',
        text: 'Słuchamy Twoich obaw, rozumiemy Twoje aspiracje i traktujemy Cię jak drogą osobę z naszej rodziny.',
      },
      {
        num: '02',
        title: 'Gościnność i logistyka VIP',
        text: 'Dzięki bogatemu doświadczeniu naszego założyciela w sektorze usług luksusowych, przejmujemy każdy detal transferów i pobytu w prestiżowym hotelu, abyś cieszył się podróżą bez zmartwień.',
      },
      {
        num: '03',
        title: 'Najnowsze bezpieczne technologie',
        text: 'Nasza klinika jest wyposażona w najnowszy sprzęt medyczny gwarantujący precyzyjne, komfortowe leczenie o światowych wskaźnikach sukcesu.',
      },
      {
        num: '04',
        title: 'Stałe towarzystwo',
        text: 'Nasza relacja nie kończy się z końcem leczenia; nasz zespół medyczny pozostaje w stałym kontakcie, aby czuwać nad Twoim zdrowiem i bezpieczeństwem nawet po powrocie do kraju.',
      },
    ],
  },
  contact: {
    eyebrow: 'SKONTAKTUJ SIĘ',
    title: 'Nawiąż kontakt',
    quote:
      'Nasza prawdziwa historia sukcesu zaczyna się, gdy na własnej skórze poczujesz ciepło opieki medycznej i luksusu, które oferujemy. Nasz zespół konsultantów zawsze jest do dyspozycji, aby Cię wysłuchać i życzliwie odpowiedzieć na wszystkie pytania.. Skontaktuj się z nami już dziś i zrób pierwszy krok do zdrowego, pięknego uśmiechu, który przywróci Ci pasję do życia!',
    subtitle: 'Nasz zespół konsultantów jest zawsze dostępny, aby Cię wysłuchać i życzliwie odpowiedzieć na wszystkie pytania.',
    privacy: 'Oczekiwania i wyniki są omawiane z pełną prywatnością i poufnością.',
    infoTitle: 'Informacje kontaktowe',
    email: 'E-mail',
    phone: 'Telefon',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Otwórz czat WhatsApp',
    address: 'Adres',
    formTitle: 'Wyślij swoją prośbę',
    form: {
      name: 'Imię i nazwisko',
      phone: 'Numer telefonu (WhatsApp)',
      service: 'Usługa, która Cię interesuje',
      servicePlaceholder: 'Wybierz usługę',
      message: 'Twoja wiadomość',
      messagePlaceholder: 'Opisz tutaj swój przypadek lub pytanie..',
      submit: 'Wyślij prośbę',
      sending: 'Wysyłanie..',
      success: 'Twoja prośba została przyjęta! Nasz zespół konsultantów wkrótce się z Tobą skontaktuje.',
      error: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub skontaktuj się przez WhatsApp.',
      required: 'To pole jest wymagane',
    },
  },
  footer: {
    tagline: 'Klinika Orec.. Twoja medyczna rodzina w podróży do odzyskania pewności uśmiechu i piękna',
    care: 'OPIEKA • PRECYZJA • EKSELENJCJA',
    follow: 'Śledź nas',
    quickLinks: 'Szybkie linki',
    servicesTitle: 'Nasze usługi',
    contactTitle: 'Skontaktuj się',
    rights: 'Wszelkie prawa zastrzeżone.',
    location: 'Stambuł — Turcja',
  },
  whatsapp: {
    floatLabel: 'Czat WhatsApp',
    tooltip: 'Napisz do nas na WhatsApp — zwykle odpowiadamy w ciągu kilku minut',
    prefill: 'Witaj Kliniko Orec, chciał(a)bym bezpłatną konsultację.',
    aria: 'Otwórz czat WhatsApp z Kliniką Orec',
  },
}
