"use client"

import { useTranslation, type Locale } from "@/lib/i18n"

type PrivacySection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

type PrivacyContent = {
  eyebrow: string
  title: string
  intro: string
  effective: string
  sections: PrivacySection[]
}

const content: Record<Locale, PrivacyContent> = {
  ru: {
    eyebrow: "Правовая информация",
    title: "Политика конфиденциальности и обработки персональных данных",
    intro: "Настоящая Политика определяет порядок сбора, обработки, хранения и защиты персональных данных пользователей сайта heatenergycapital.kz.",
    effective: "Дата вступления в силу: 4 сентября 2026 года",
    sections: [
      {
        title: "1. Оператор персональных данных",
        paragraphs: [
          "Оператором персональных данных является ТОО «Heat Energy Capital», БИН 240240013512.",
          "Юридический адрес: Республика Казахстан, г. Астана, район Есиль, ул. Әлихан Бөкейхан, д. 11, н.п. 1. Фактический адрес: г. Астана, район Есиль, ул. Әлихан Бөкейхан, д. 27/1, н.п. 10.",
          "По вопросам обработки данных и для отзыва согласия можно обратиться по адресу info@heatenergycapital.kz или телефону 8 701 773 44 44.",
        ],
      },
      {
        title: "2. Какие данные мы собираем",
        items: [
          "номер телефона и адрес электронной почты;",
          "текст обращения, сведения о выбранном товаре и иная информация, добровольно указанная пользователем;",
          "факт и параметры согласия, версия Политики, дата и время отправки формы;",
          "технические данные, которые могут обрабатываться поставщиками инфраструктуры: IP-адрес, сведения о браузере и устройстве, дата и время запроса, технические журналы;",
          "выбранный язык сайта, сохраняемый локально в браузере пользователя.",
        ],
      },
      {
        title: "3. Цели обработки",
        items: [
          "приём и обработка обращений, обратная связь с пользователем;",
          "подготовка коммерческих предложений, подбор продукции и обсуждение условий поставки;",
          "заключение и исполнение договоров, ведение деловой переписки;",
          "обеспечение работоспособности, безопасности и улучшение сайта;",
          "направление информационных и рекламных сообщений — только при наличии отдельного согласия пользователя;",
          "исполнение требований законодательства Республики Казахстан.",
        ],
      },
      {
        title: "4. Основания и способы обработки",
        paragraphs: [
          "Обработка осуществляется на основании согласия пользователя, необходимости рассмотрения обращения, заключения или исполнения договора, а также требований законодательства Республики Казахстан.",
          "Обработка может включать сбор, запись, систематизацию, накопление, хранение, уточнение, использование, передачу уполномоченным поставщикам услуг, блокирование и уничтожение данных.",
        ],
      },
      {
        title: "5. Сроки хранения",
        paragraphs: [
          "Данные, полученные через формы сайта, хранятся до достижения целей обработки, но не более 5 лет с даты последнего взаимодействия с пользователем. Данные, необходимые для исполнения договоров и требований законодательства, хранятся в течение установленных законодательством сроков. Контактные данные для информационных и рекламных рассылок обрабатываются до отзыва согласия пользователем.",
        ],
      },
      {
        title: "6. Внешние сервисы и передача данных",
        paragraphs: [
          "Сайт, обработчик обращений и корпоративная электронная почта размещаются на инфраструктуре PS.kz в Республике Казахстан. Данные формы передаются по защищённому соединению непосредственно на сервер сайта и доставляются в корпоративный почтовый ящик info@heatenergycapital.kz.",
          "Исходный код сайта может храниться в системе контроля версий GitHub, однако данные, введённые посетителями в формы сайта, туда не передаются. Ссылка на 2GIS открывается только по инициативе пользователя; после перехода обработка данных осуществляется по правилам соответствующего внешнего сервиса.",
          "Мы не продаём персональные данные и не передаём их третьим лицам для самостоятельных целей, кроме случаев, предусмотренных законодательством Республики Казахстан.",
        ],
      },
      {
        title: "7. Рассылки",
        paragraphs: [
          "Информационные и рекламные сообщения направляются только пользователям, отдельно согласившимся на их получение. Такое согласие не является обязательным условием отправки заявки. Пользователь может отказаться от рассылки в любое время, написав на info@heatenergycapital.kz.",
        ],
      },
      {
        title: "8. Файлы cookie и локальное хранилище",
        paragraphs: [
          "Сайт сохраняет выбранный язык в localStorage браузера. Мы не используем собственные рекламные или аналитические cookie-файлы и не загружаем сторонние карты без действия пользователя.",
        ],
      },
      {
        title: "9. Права пользователя",
        items: [
          "получать информацию об обработке своих персональных данных;",
          "требовать уточнения, блокирования или удаления данных при наличии законных оснований;",
          "отозвать согласие на обработку и отдельно отказаться от рекламных сообщений;",
          "обжаловать действия оператора в порядке, установленном законодательством Республики Казахстан.",
        ],
      },
      {
        title: "10. Защита и изменение Политики",
        paragraphs: [
          "Оператор принимает организационные и технические меры для защиты данных от неправомерного доступа, изменения, раскрытия или уничтожения.",
          "Политика может обновляться при изменении сайта, применяемых сервисов или законодательства. Новая редакция вступает в силу с даты, указанной на странице, и публикуется по адресу heatenergycapital.kz/privacy.",
        ],
      },
    ],
  },
  kz: {
    eyebrow: "Құқықтық ақпарат",
    title: "Құпиялылық және дербес деректерді өңдеу саясаты",
    intro: "Осы Саясат heatenergycapital.kz сайты пайдаланушыларының дербес деректерін жинау, өңдеу, сақтау және қорғау тәртібін айқындайды.",
    effective: "Күшіне ену күні: 2026 жылғы 4 қыркүйек",
    sections: [
      {
        title: "1. Дербес деректер операторы",
        paragraphs: [
          "Дербес деректер операторы — БСН 240240013512 «Heat Energy Capital» ЖШС.",
          "Заңды мекенжайы: Қазақстан Республикасы, Астана қ., Есіл ауданы, Әлихан Бөкейхан көш., 11 үй, т.е.б. 1. Нақты мекенжайы: Астана қ., Есіл ауданы, Әлихан Бөкейхан көш., 27/1 үй, т.е.б. 10.",
          "Деректерді өңдеу мәселелері және келісімді кері қайтарып алу бойынша info@heatenergycapital.kz мекенжайына немесе 8 701 773 44 44 телефонына хабарласуға болады.",
        ],
      },
      {
        title: "2. Қандай деректерді жинаймыз",
        items: [
          "телефон нөмірі және электрондық пошта мекенжайы;",
          "өтініш мәтіні, таңдалған өнім туралы мәліметтер және пайдаланушы ерікті түрде көрсеткен өзге ақпарат;",
          "келісім фактісі мен параметрлері, Саясат нұсқасы, нысанды жіберу күні мен уақыты;",
          "инфрақұрылым жеткізушілері өңдеуі мүмкін техникалық деректер: IP-мекенжай, браузер мен құрылғы туралы мәліметтер, сұрау күні мен уақыты, техникалық журналдар;",
          "пайдаланушы браузерінде жергілікті сақталатын сайт тілі.",
        ],
      },
      {
        title: "3. Өңдеу мақсаттары",
        items: [
          "өтініштерді қабылдау және өңдеу, пайдаланушымен кері байланыс;",
          "коммерциялық ұсыныстар дайындау, өнім таңдау және жеткізу шарттарын талқылау;",
          "шарттар жасасу және орындау, іскерлік хат алмасу;",
          "сайттың жұмысын, қауіпсіздігін және жетілдірілуін қамтамасыз ету;",
          "ақпараттық және жарнамалық хабарламалар жіберу — пайдаланушының бөлек келісімі болғанда ғана;",
          "Қазақстан Республикасы заңнамасының талаптарын орындау.",
        ],
      },
      {
        title: "4. Өңдеудің негіздері мен тәсілдері",
        paragraphs: [
          "Өңдеу пайдаланушының келісімі, өтінішті қарау, шарт жасасу немесе орындау қажеттілігі, сондай-ақ Қазақстан Республикасы заңнамасының талаптары негізінде жүзеге асырылады.",
          "Өңдеу деректерді жинауды, жазуды, жүйелеуді, жинақтауды, сақтауды, нақтылауды, пайдалануды, уәкілетті қызмет жеткізушілеріне беруді, бұғаттауды және жоюды қамтуы мүмкін.",
        ],
      },
      {
        title: "5. Сақтау мерзімдері",
        paragraphs: [
          "Сайт нысандары арқылы алынған деректер өңдеу мақсаттарына жеткенге дейін, бірақ пайдаланушымен соңғы өзара әрекеттескен күннен бастап 5 жылдан аспайтын мерзімде сақталады. Шарттарды орындау және заңнама талаптарын сақтау үшін қажетті деректер заңнамада белгіленген мерзімдер бойы сақталады. Ақпараттық және жарнамалық таратылымдарға арналған байланыс деректері пайдаланушы келісімін кері қайтарып алғанға дейін өңделеді.",
        ],
      },
      {
        title: "6. Сыртқы сервистер және деректерді беру",
        paragraphs: [
          "Сайт, өтініштерді өңдеуші және корпоративтік электрондық пошта Қазақстан Республикасындағы PS.kz инфрақұрылымында орналасады. Нысан деректері қорғалған байланыс арқылы тікелей сайт серверіне жіберіліп, info@heatenergycapital.kz корпоративтік пошта жәшігіне жеткізіледі.",
          "Сайттың бастапқы коды GitHub нұсқаларды басқару жүйесінде сақталуы мүмкін, алайда келушілер нысандарға енгізген деректер ол жаққа берілмейді. 2GIS сілтемесі пайдаланушының бастамасымен ғана ашылады; өткеннен кейін деректер тиісті сыртқы сервистің ережелеріне сәйкес өңделеді.",
          "Біз дербес деректерді сатпаймыз және Қазақстан Республикасының заңнамасында көзделген жағдайларды қоспағанда, оларды үшінші тұлғалардың дербес мақсаттарына бермейміз.",
        ],
      },
      {
        title: "7. Таратылымдар",
        paragraphs: [
          "Ақпараттық және жарнамалық хабарламалар оларды алуға бөлек келісім берген пайдаланушыларға ғана жіберіледі. Бұл келісім өтініш жіберудің міндетті шарты емес. Пайдаланушы info@heatenergycapital.kz мекенжайына жазу арқылы кез келген уақытта таратылымнан бас тарта алады.",
        ],
      },
      {
        title: "8. Cookie және жергілікті сақтау",
        paragraphs: [
          "Сайт таңдалған тілді браузердің localStorage қоймасында сақтайды. Біз өзіміздің жарнамалық немесе аналитикалық cookie файлдарын пайдаланбаймыз және пайдаланушы әрекетінсіз сыртқы карталарды жүктемейміз.",
        ],
      },
      {
        title: "9. Пайдаланушының құқықтары",
        items: [
          "өз дербес деректерінің өңделуі туралы ақпарат алу;",
          "заңды негіздер болған жағдайда деректерді нақтылауды, бұғаттауды немесе жоюды талап ету;",
          "өңдеуге берген келісімді кері қайтарып алу және жарнамалық хабарламалардан бөлек бас тарту;",
          "оператордың әрекеттеріне Қазақстан Республикасының заңнамасында белгіленген тәртіппен шағымдану.",
        ],
      },
      {
        title: "10. Қорғау және Саясатты өзгерту",
        paragraphs: [
          "Оператор деректерді заңсыз қол жеткізуден, өзгертуден, жария етуден немесе жоюдан қорғау үшін ұйымдастырушылық және техникалық шаралар қабылдайды.",
          "Сайт, қолданылатын сервистер немесе заңнама өзгерген кезде Саясат жаңартылуы мүмкін. Жаңа редакция бетте көрсетілген күннен бастап күшіне енеді және heatenergycapital.kz/privacy мекенжайында жарияланады.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Legal information",
    title: "Privacy and Personal Data Processing Policy",
    intro: "This Policy explains how personal data of users of heatenergycapital.kz is collected, processed, stored, and protected.",
    effective: "Effective date: September 4, 2026",
    sections: [
      {
        title: "1. Personal data operator",
        paragraphs: [
          "The personal data operator is Heat Energy Capital LLP, BIN 240240013512.",
          "Registered address: 11 Älihan Bökeyhan St., premises 1, Yesil district, Astana, Republic of Kazakhstan. Business address: 27/1 Älihan Bökeyhan St., premises 10, Yesil district, Astana.",
          "For questions about data processing or to withdraw consent, contact info@heatenergycapital.kz or +7 701 773 44 44.",
        ],
      },
      {
        title: "2. Data we collect",
        items: [
          "telephone number and email address;",
          "the inquiry text, selected product details, and other information voluntarily provided by the user;",
          "consent status and parameters, Policy version, and form submission date and time;",
          "technical data that may be processed by infrastructure providers: IP address, browser and device information, request date and time, and technical logs;",
          "the selected site language stored locally in the user's browser.",
        ],
      },
      {
        title: "3. Purposes of processing",
        items: [
          "receiving and processing inquiries and contacting the user;",
          "preparing commercial proposals, selecting products, and discussing supply terms;",
          "entering into and performing contracts and maintaining business correspondence;",
          "maintaining, securing, and improving the website;",
          "sending informational and promotional messages only where separate consent has been provided;",
          "complying with the laws of the Republic of Kazakhstan.",
        ],
      },
      {
        title: "4. Legal grounds and processing operations",
        paragraphs: [
          "Processing is based on the user's consent, the need to review an inquiry, enter into or perform a contract, and applicable laws of the Republic of Kazakhstan.",
          "Processing may include collection, recording, organization, accumulation, storage, updating, use, transfer to authorized service providers, restriction, and deletion.",
        ],
      },
      {
        title: "5. Retention periods",
        paragraphs: [
          "Data submitted through website forms is retained until the processing purposes are achieved, but no longer than five years from the user's last interaction. Data required to perform contracts or comply with legal obligations is retained for the periods prescribed by law. Contact details used for informational and promotional communications are processed until the user withdraws consent.",
        ],
      },
      {
        title: "6. External services and data transfers",
        paragraphs: [
          "The website, inquiry handler, and corporate email are hosted on PS.kz infrastructure in the Republic of Kazakhstan. Form data is transmitted over an encrypted connection directly to the website server and delivered to the corporate mailbox info@heatenergycapital.kz.",
          "The website source code may be stored in the GitHub version-control service, but information entered by visitors into website forms is not transmitted there. The 2GIS link opens only at the user's initiative; after navigation, data is processed under the external service's rules.",
          "We do not sell personal data or disclose it for third parties' independent purposes except where required by the laws of the Republic of Kazakhstan.",
        ],
      },
      {
        title: "7. Marketing communications",
        paragraphs: [
          "Informational and promotional messages are sent only to users who separately consent to receiving them. This consent is not required to submit an inquiry. Users may unsubscribe at any time by contacting info@heatenergycapital.kz.",
        ],
      },
      {
        title: "8. Cookies and local storage",
        paragraphs: [
          "The website stores the selected language in the browser's localStorage. We do not use our own advertising or analytics cookies and do not load third-party maps without user action.",
        ],
      },
      {
        title: "9. User rights",
        items: [
          "receive information about the processing of their personal data;",
          "request correction, restriction, or deletion where there are lawful grounds;",
          "withdraw processing consent and separately unsubscribe from promotional messages;",
          "challenge the operator's actions in accordance with the laws of the Republic of Kazakhstan.",
        ],
      },
      {
        title: "10. Security and Policy updates",
        paragraphs: [
          "The operator takes organizational and technical measures to protect data against unauthorized access, alteration, disclosure, or destruction.",
          "This Policy may be updated when the website, services, or applicable laws change. A new version takes effect on the date shown on this page and is published at heatenergycapital.kz/privacy.",
        ],
      },
    ],
  },
}

export default function PrivacyPage() {
  const { locale } = useTranslation()
  const page = content[locale]

  return (
    <main className="min-h-screen bg-[#f8fbff] pb-16 pt-24 sm:pb-24 sm:pt-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="rounded-[24px] border border-blue-100 bg-white p-6 shadow-[0_24px_70px_-48px_rgba(7,86,184,.45)] sm:p-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0756b8]">{page.eyebrow}</p>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{page.intro}</p>
          <p className="mt-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-[#0756b8]">
            {page.effective}
          </p>
        </header>

        <div className="mt-6 space-y-4 sm:mt-8">
          {page.sections.map((section) => (
            <section key={section.title} className="rounded-[20px] border border-slate-200 bg-white p-5 sm:p-8">
              <h2 className="text-lg font-semibold text-slate-950 sm:text-xl">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {paragraph}
                </p>
              ))}
              {section.items ? (
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0756b8]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
