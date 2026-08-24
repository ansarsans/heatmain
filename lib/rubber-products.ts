import type { LocalizedText, Product, ProductDetailTable, ProductSpecification } from "./products"

const localized = (ru: string, kz: string, en: string): LocalizedText => ({ ru, kz, en })

const technical = (value: string): LocalizedText => localized(value, value, value)

const specification = (
  name: LocalizedText,
  grades: LocalizedText,
  width: LocalizedText,
  supplier: string,
): ProductSpecification => ({ name, grades, width, supplier })

const detailTable = (
  title: LocalizedText,
  columns: LocalizedText[],
  rows: LocalizedText[][],
): ProductDetailTable => ({ title, columns, rows })

export const rubberProducts: Product[] = [
  {
    id: "rubber-fabric-conveyor-belts",
    category: "rubber",
    name: localized(
      "Конвейерные ленты резинотканевые",
      "Резеңке-маталы конвейер таспалары",
      "Rubber-fabric conveyor belts",
    ),
    description: localized(
      "Конвейерные ленты с полиэфирным, нейлоновым и полиэфирно-хлопковым каркасом для транспортировки сыпучих и штучных грузов.",
      "Сусымалы және даналық жүктерді тасымалдауға арналған полиэфирлі, нейлонды және полиэфир-мақта қаңқалы конвейер таспалары.",
      "Conveyor belts with polyester, nylon, and polyester-cotton carcasses for transporting bulk and unit loads.",
    ),
    image: "/images/Конвейерные_ленты_резинотканевые.jpg",
    specifications: [
      specification(
        localized("Лента полиэфирная EP", "Полиэфирлі EP таспасы", "EP polyester belt"),
        technical("EP-80, EP-100, EP-125, EP-150, EP-170, EP-200, EP-250, EP-300, EP-350, EP-400, EP-500"),
        technical("300–2500"),
        "Shenzhen Jinlong",
      ),
      specification(
        localized("Лента нейлоновая NN", "Нейлонды NN таспасы", "NN nylon belt"),
        technical("NN-100, NN-125, NN-150, NN-200, NN-250, NN-300"),
        technical("300–2500"),
        "Shenzhen Jinlong",
      ),
      specification(
        localized("Лента полиэфирно-хлопковая CC", "Полиэфир-мақта CC таспасы", "CC polyester-cotton belt"),
        technical("160, 200, 250, 315, 400, 500, 600, 630, 800 Н/мм"),
        technical("300–2500"),
        "Shenzhen Jinlong",
      ),
      specification(
        localized("Лента многопрокладочная", "Көпқабатты таспа", "Multi-ply belt"),
        technical("EP100, EP150, EP200, EP250, EP300, EP400; NN100, NN150, NN200, NN250, NN300, NN400; CC-56"),
        localized("до 2600", "2600-ге дейін", "up to 2600"),
        "Wenzhou Rubber",
      ),
      specification(
        localized("Лента энергосберегающая DPP", "DPP энергия үнемдейтін таспасы", "DPP energy-saving belt"),
        technical("630, 800, 1000, 1250, 1600, 2000, 2500, 3150 Н/мм"),
        technical("—"),
        "Shenzhen Jinlong",
      ),
    ],
  },
  {
    id: "rubber-steel-cord-conveyor-belts",
    category: "rubber",
    name: localized(
      "Конвейерные ленты резинотросовые",
      "Болат арқанды конвейер таспалары",
      "Steel-cord conveyor belts",
    ),
    description: localized(
      "Высокопрочные конвейерные ленты со стальным тросовым каркасом для протяжённых трасс, тяжёлых грузов и высоких нагрузок.",
      "Ұзын трассаларға, ауыр жүктерге және жоғары жүктемелерге арналған болат арқанды қаңқасы бар беріктігі жоғары конвейер таспалары.",
      "High-strength conveyor belts with a steel-cord carcass for long routes, heavy loads, and demanding operating conditions.",
    ),
    image: "/images/Конвейерные_ленты_резинотросовые.jpg",
    specifications: [
      specification(
        localized("Лента резинотросовая ST", "ST болат арқанды таспасы", "ST steel-cord belt"),
        technical("ST630, ST800, ST1000, ST1250, ST1600, ST2000, ST2500, ST3150, ST3500, ST4000, ST4500, ST5000, ST5400, ST6300, ST7000, ST7500"),
        localized("800–2000 (Jinlong), 800–3200 (Wenzhou)", "800–2000 (Jinlong), 800–3200 (Wenzhou)", "800–2000 (Jinlong), 800–3200 (Wenzhou)"),
        "Shenzhen Jinlong / Wenzhou Rubber",
      ),
      specification(
        localized("Лента резинотросовая GX", "GX болат арқанды таспасы", "GX steel-cord belt"),
        technical("GX630, GX800, GX1000, GX1250, GX1600, GX2000, GX2500, GX3000, GX3500, GX4000, GX4500, GX5000, GX5500, GX6000"),
        technical("800–2000"),
        "Shenzhen Jinlong",
      ),
    ],
  },
  {
    id: "rubber-special-purpose-belts",
    category: "rubber",
    name: localized("Ленты специального назначения", "Арнайы мақсаттағы таспалар", "Special-purpose belts"),
    description: localized(
      "Конвейерные ленты для эксплуатации при высоких и низких температурах, воздействии масел, кислот, щелочей и повышенных требованиях к пожарной безопасности.",
      "Жоғары және төмен температураларда, майлар, қышқылдар мен сілтілер әсерінде және өрт қауіпсіздігіне жоғары талаптар қойылған жағдайда пайдалануға арналған конвейер таспалары.",
      "Conveyor belts for high and low temperatures, exposure to oils, acids and alkalis, and applications with enhanced fire-safety requirements.",
    ),
    image: "/images/Ленты_специального_назначения.jpg",
    specifications: [
      specification(localized("Лента термостойкая", "Ыстыққа төзімді таспа", "Heat-resistant belt"), technical("T1, T2, T3, T4, HOR"), technical("300–2500"), "Shenzhen Jinlong / Wenzhou Rubber"),
      specification(localized("Лента морозостойкая", "Аязға төзімді таспа", "Cold-resistant belt"), technical("C1 (-45 °C), C2 (-50 °C)"), technical("300–2500"), "Shenzhen Jinlong / Wenzhou Rubber"),
      specification(localized("Лента маслостойкая", "Майға төзімді таспа", "Oil-resistant belt"), localized("По каркасу EP / NN", "EP / NN қаңқасы бойынша", "EP / NN carcass"), technical("300–2500"), "Shenzhen Jinlong / Wenzhou Rubber"),
      specification(localized("Лента кислотощелочестойкая", "Қышқыл-сілтіге төзімді таспа", "Acid- and alkali-resistant belt"), localized("По каркасу EP / NN", "EP / NN қаңқасы бойынша", "EP / NN carcass"), technical("300–2500"), "Shenzhen Jinlong / Wenzhou Rubber"),
      specification(localized("Лента трудногорючая", "Қиын жанатын таспа", "Flame-retardant belt"), localized("Общего назначения; шахтная; высокотемпературная прожогостойкая", "Жалпы мақсаттағы; шахталық; жоғары температураға және күйіп кетуге төзімді", "General-purpose; mining; high-temperature burn-resistant"), technical("300–2500"), "Shenzhen Jinlong"),
      specification(localized("Лента износостойкая", "Тозуға төзімді таспа", "Wear-resistant belt"), localized("Марки обкладки H, D, L", "Қаптама маркалары H, D, L", "Cover grades H, D, L"), technical("300–2500"), "Shenzhen Jinlong"),
      specification(localized("Лента пищевая (белая)", "Тағамдық таспа (ақ)", "Food-grade belt (white)"), localized("По каркасу EP / NN", "EP / NN қаңқасы бойынша", "EP / NN carcass"), localized("по каркасу", "қаңқасына сәйкес", "according to carcass"), "Wenzhou Rubber"),
    ],
  },
  {
    id: "rubber-profiled-engineered-belts",
    category: "rubber",
    name: localized(
      "Ленты профильные и конструктивные",
      "Профильді және конструкциялық таспалар",
      "Profiled and engineered belts",
    ),
    description: localized(
      "Специализированные конструкции конвейерных лент для наклонной транспортировки, герметичных трасс, ковшовых элеваторов и нестандартных транспортных систем.",
      "Көлбеу тасымалдауға, герметикалық трассаларға, шөмішті элеваторларға және стандартты емес көлік жүйелеріне арналған мамандандырылған конвейер таспалары.",
      "Specialized conveyor-belt designs for inclined conveying, enclosed routes, bucket elevators, and non-standard material-handling systems.",
    ),
    image: "/images/Ленты_профильные_и_конструктивные.jpg",
    specifications: [
      specification(localized("Лента шевронная (рифлёная)", "Шевронды (бедерлі) таспа", "Chevron (patterned) belt"), localized("Open V, Closed V, тип L, тип H, тип Y, тип A, тип F. Ёлочка, восьмёрка, рыбья кость, U-образный, цилиндрический, точечный", "Open V, Closed V, L, H, Y, A, F типтері. Шырша, сегіздік, балық сүйегі, U-тәрізді, цилиндрлік, нүктелік", "Open V, Closed V, types L, H, Y, A, F. Herringbone, figure-eight, fishbone, U-shaped, cylindrical, dotted"), technical("300–1600"), "Shenzhen Jinlong / Wenzhou Rubber"),
      specification(localized("Лента с гофробортом", "Гофрленген борты бар таспа", "Corrugated-sidewall belt"), technical("XE 200; XOE 315/500/630/800/1000; XSE 315/500/630; XDE 315/500/630"), localized("300–2500 (матрица размеров 300–1800)", "300–2500 (өлшемдер матрицасы 300–1800)", "300–2500 (size matrix 300–1800)"), "Shenzhen Jinlong / Wenzhou Rubber"),
      specification(localized("Лента трубчатая", "Құбырлы таспа", "Pipe conveyor belt"), localized("Диаметр трубы 100, 150, 200, 250, 300, 350, 400, 450, 500, 600 мм", "Құбыр диаметрі 100, 150, 200, 250, 300, 350, 400, 450, 500, 600 мм", "Pipe diameter 100, 150, 200, 250, 300, 350, 400, 450, 500, 600 mm"), technical("430, 600, 780, 900, 1050, 1300, 1600, 1650, 1900, 2250"), "Wenzhou Rubber"),
      specification(localized("Лента цельнотканая PVC / PVG", "PVC / PVG тұтас тоқылған таспа", "PVC / PVG solid-woven belt"), localized("PVG (обкладка NBR), PVC", "PVG (NBR қаптамасы), PVC", "PVG (NBR cover), PVC"), technical("500–2000"), "Wenzhou Rubber"),
      specification(localized("Лента для ковшовых элеваторов", "Шөмішті элеваторларға арналған таспа", "Bucket-elevator belt"), localized("По каркасу EP / NN", "EP / NN қаңқасы бойынша", "EP / NN carcass"), localized("по каркасу", "қаңқасына сәйкес", "according to carcass"), "Wenzhou Rubber"),
      specification(localized("Лента кольцевая (бесстыковая)", "Сақиналы (жіксіз) таспа", "Endless belt"), localized("По каркасу EP / NN", "EP / NN қаңқасы бойынша", "EP / NN carcass"), technical("300–2500"), "Shenzhen Jinlong"),
    ],
  },
  {
    id: "rubber-rollers",
    category: "rubber",
    name: localized("Ролики", "Роликтер", "Conveyor rollers"),
    description: localized(
      "Конвейерные ролики различных конструкций для поддержки, центрирования, амортизации и направления ленты.",
      "Таспаны ұстап тұруға, орталықтандыруға, амортизациялауға және бағыттауға арналған әртүрлі конструкциядағы конвейер роликтері.",
      "Conveyor rollers in various designs for belt support, tracking, impact absorption, and guidance.",
    ),
    image: "/images/Ролики.jpg",
    detailTables: [
      detailTable(
        localized("Ассортимент роликов", "Роликтер ассортименті", "Roller range"),
        [
          localized("Тип ролика", "Ролик түрі", "Roller type"),
          localized("Диаметр", "Диаметрі", "Diameter"),
        ],
        [
          [localized("Ролик желобчатый (опорный)", "Науашалы (тірек) ролик", "Troughing (carrying) idler"), technical("Ø50–159 мм")],
          [localized("Ролик амортизирующий (буферный)", "Амортизациялаушы (буферлік) ролик", "Impact (buffer) idler"), technical("Ø50–159 мм")],
          [localized("Ролик прямой (поддерживающий)", "Тік (қолдаушы) ролик", "Flat supporting idler"), technical("Ø50–159 мм")],
          [localized("Ролик центрирующий", "Орталықтандырушы ролик", "Self-aligning idler"), technical("Ø50–159 мм")],
          [localized("Ролик гребенчатый", "Тарақты ролик", "Comb idler"), technical("Ø50–159 мм")],
          [localized("Ролик спиральный", "Спиральды ролик", "Spiral idler"), technical("Ø50–159 мм")],
          [localized("Ролик конический", "Конустық ролик", "Tapered idler"), technical("Ø50–159 мм")],
          [localized("Ролик обрезиненный", "Резеңкемен қапталған ролик", "Rubber-coated idler"), technical("Ø50–159 мм")],
          [localized("Ролик футерованный литой резиной", "Құйма резеңкемен қапталған ролик", "Cast-rubber-lined idler"), technical("Ø50–159 мм")],
          [localized("Ролик керамический", "Керамикалық ролик", "Ceramic idler"), technical("Ø50–159 мм")],
          [localized("Ролик полимерный (композитный)", "Полимерлі (композиттік) ролик", "Polymer (composite) idler"), technical("Ø50–159 мм")],
          [localized("Ролик фрикционный", "Фрикциялық ролик", "Friction idler"), technical("Ø50–159 мм")],
          [localized("Ролик отклоняющий", "Ауытқытушы ролик", "Deflection idler"), technical("Ø50–159 мм")],
          [localized("Ролик натяжной", "Кергіш ролик", "Take-up idler"), technical("Ø50–159 мм")],
          [localized("Ролик V-образный прижимной", "V-тәрізді қысқыш ролик", "V-shaped pressure idler"), technical("Ø50–159 мм")],
        ],
      ),
      detailTable(
        localized(
          "ОБЩИЕ ПАРАМЕТРЫ СЕРИИ РОЛИКОВ",
          "РОЛИКТЕР СЕРИЯСЫНЫҢ ЖАЛПЫ ПАРАМЕТРЛЕРІ",
          "GENERAL PARAMETERS OF THE ROLLER SERIES",
        ),
        [localized("Параметр", "Параметр", "Parameter"), localized("Значение", "Мәні", "Value")],
        [
          [localized("Диаметр ролика", "Ролик диаметрі", "Roller diameter"), technical("50–159 мм")],
          [localized("Типовые трубы", "Типтік құбырлар", "Standard tubes"), technical("Ø89, Ø108, Ø133, Ø159 мм")],
          [localized("Длина ролика", "Ролик ұзындығы", "Roller length"), technical("190–3000 мм")],
          [localized("Ширина обслуживаемой ленты", "Қызмет көрсетілетін таспа ені", "Supported belt width"), technical("B = 500–2200 мм")],
        ],
      ),
    ],
  },
  {
    id: "rubber-drums",
    category: "rubber",
    name: localized("Барабаны", "Барабандар", "Conveyor drums"),
    description: localized(
      "Приводные и моторизованные барабаны для конвейерных систем, изготавливаемые по параметрам проекта.",
      "Жоба параметрлері бойынша дайындалатын конвейер жүйелеріне арналған жетек және моторлы барабандар.",
      "Drive and motorized drums for conveyor systems, manufactured to project specifications.",
    ),
    image: "/images/барабаны.jpg",
    detailTables: [
      detailTable(
        localized("Ассортимент барабанов", "Барабандар ассортименті", "Drum range"),
        [
          localized("Тип барабана", "Барабан түрі", "Drum type"),
          localized("Исполнение", "Орындалуы", "Configuration"),
        ],
        [
          [localized("Барабан приводной", "Жетек барабаны", "Drive pulley"), localized("по проекту", "жоба бойынша", "according to project")],
          [localized("Мотор-барабан (электроролик)", "Мотор-барабан (электроролик)", "Motorized drum (electric roller)"), localized("по проекту", "жоба бойынша", "according to project")],
        ],
      ),
    ],
  },
]
