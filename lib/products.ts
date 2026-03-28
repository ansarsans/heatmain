export type Category = "chemistry" | "metals" | "equipment"

export interface Product {
  id: string
  category: Category
  name: { ru: string; kz: string; en: string }
  description: { ru: string; kz: string; en: string }
  image?: string
}

export const products: Product[] = [
  // === CHEMISTRY (23 items) ===
  {
    id: "chem-1",
    category: "chemistry",
    name: {
      ru: "Сода каустическая, кальцинированная",
      kz: "Каустикалық сода, кальцинирленген сода",
      en: "Caustic soda, Soda ash",
    },
    description: {
      ru: "Щёлочь для процессов выщелачивания, нейтрализации и регулирования pH в промышленности.",
      kz: "Өнеркәсіптегі сілтілеу, бейтараптандыру және рН реттеу процестеріне арналған сілті.",
      en: "Alkalies for leaching, neutralization, and pH regulation in industry.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-2",
    category: "chemistry",
    name: {
      ru: "Ксантогенат калия бутиловый, амиловый",
      kz: "Калий бутилі, амил ксантогенаты",
      en: "Potassium butyl/amyl xanthate",
    },
    description: {
      ru: "Эффективные собиратели для флотации сульфидных руд цветных и благородных металлов.",
      kz: "Түсті және асыл металдардың сульфидтік кендерін флотациялауға арналған тиімді жинағыштар.",
      en: "Effective collectors for flotation of non-ferrous and precious metal sulfide ores.",
    },
    image: "/products/chem_liquid_drum.png",
  },
  {
    id: "chem-3",
    category: "chemistry",
    name: {
      ru: "Уголь активированный",
      kz: "Белсендірілген көмір",
      en: "Activated carbon",
    },
    description: {
      ru: "Для процессов сорбции золота (CIP/CIL), очистки газов и водоподготовки.",
      kz: "Алтынды сорбциялау (CIP/CIL), газдарды тазарту және суды дайындау процестері үшін.",
      en: "For gold sorption processes (CIP/CIL), gas purification, and water treatment.",
    },
    image: "/products/chem_activated_carbon.png",
  },
  {
    id: "chem-4",
    category: "chemistry",
    name: {
      ru: "Флотореагенты",
      kz: "Флотореагенттер",
      en: "Flotation reagents",
    },
    description: {
      ru: "Широкий спектр реагентов для обогащения полезных ископаемых (вспениватели, собиратели).",
      kz: "Пайдалы қазбаларды байытуға арналған реагенттердің кең спектрі (көбіктендіргіштер, жинағыштар).",
      en: "A wide range of reagents for mineral processing (frothers, collectors).",
    },
    image: "/products/chem_liquid_drum.png",
  },
  {
    id: "chem-5",
    category: "chemistry",
    name: {
      ru: "Тиомочевина",
      kz: "Тионесепнәр",
      en: "Thiourea",
    },
    description: {
      ru: "Реагент для гидрометаллургии, синтеза и специального промышленного применения.",
      kz: "Гидрометаллургия, синтез және арнайы өнеркәсіптік қолдануға арналған реагент.",
      en: "Reagent for hydrometallurgy, synthesis, and special industrial applications.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-6",
    category: "chemistry",
    name: {
      ru: "Цианистый натрий",
      kz: "Натрий цианиді",
      en: "Sodium cyanide",
    },
    description: {
      ru: "Основной реагент для извлечения золота методом цианирования. Поставки в брикетах.",
      kz: "Цианидтеу әдісімен алтын алудың негізгі реагенті. Брикеттерде жеткізу.",
      en: "Primary reagent for gold extraction by cyanidation. Supplied in briquettes.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-7",
    category: "chemistry",
    name: {
      ru: "Реагент собиратель",
      kz: "Жинағыш реагент",
      en: "Collector reagent",
    },
    description: {
      ru: "Специализированные химические составы для повышения эффективности флотационных процессов.",
      kz: "Флотациялық процестердің тиімділігін арттыруға арналған мамандандырылған химиялық қосылыстар.",
      en: "Specialized chemical compositions to increase the efficiency of flotation processes.",
    },
    image: "/products/chem_liquid_drum.png",
  },
  {
    id: "chem-8",
    category: "chemistry",
    name: {
      ru: "Смола ионообменная для добычи золота, урана",
      kz: "Алтын, уран өндіруге арналған ионалмасу шайыры",
      en: "Ion exchange resin for gold/uranium",
    },
    description: {
      ru: "Высокоселективные смолы для извлечения ценных металлов из продуктивных растворов.",
      kz: "Өнімді ерітінділерден бағалы металдарды алуға арналған жоғары селективті шайырлар.",
      en: "Highly selective resins for the extraction of precious metals from productive solutions.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-9",
    category: "chemistry",
    name: {
      ru: "Железный купорос",
      kz: "Темір купоросы",
      en: "Iron vitriol",
    },
    description: {
      ru: "Применяется в водоочистке, химической промышленности и как флотационный реагент.",
      kz: "Су тазартуда, химия өнеркәсібінде және флотациялық реагент ретінде қолданылады.",
      en: "Used in water treatment, chemical industry, and as a flotation reagent.",
    },
    image: "/products/chem_crystals.png",
  },
  {
    id: "chem-10",
    category: "chemistry",
    name: {
      ru: "Медный купорос",
      kz: "Мыс купоросы",
      en: "Copper vitriol",
    },
    description: {
      ru: "Реагент-активатор для флотации, антисептик и сырье для получения соединений меди.",
      kz: "Флотацияға арналған реагент-активатор, антисептик және мыс қосылыстарын алуға арналған шикізат.",
      en: "Reagent-activator for flotation, antiseptic, and raw material for copper compounds.",
    },
    image: "/products/chem_crystals.png",
  },
  {
    id: "chem-11",
    category: "chemistry",
    name: {
      ru: "Метабисульфит натрия",
      kz: "Натрий метабисульфиті",
      en: "Sodium metabisulfite",
    },
    description: {
      ru: "Восстановитель, консервант и дезинфектант для различных отраслей промышленности.",
      kz: "Әртүрлі өнеркәсіп салаларына арналған тотықсыздандырғыш, консервант және дезинфекциялаушы.",
      en: "Reducing agent, preservative, and disinfectant for various industries.",
    },
    image: "/сульфит.jpg",
  },
  {
    id: "chem-12",
    category: "chemistry",
    name: {
      ru: "Гидросульфит натрия",
      kz: "Натрий гидросульфиті",
      en: "Sodium hydrosulfite",
    },
    description: {
      ru: "Мощный восстановитель, применяемый в текстильной, бумажной и добывающей промышленности.",
      kz: "Тоқыма, қағаз және тау-кен өнеркәсібінде қолданылатын қуатты тотықсыздандырғыш.",
      en: "Powerful reducing agent used in textile, paper, and mining industries.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-13",
    category: "chemistry",
    name: {
      ru: "Перекись натрия",
      kz: "Натрий асқын тотығы",
      en: "Sodium peroxide",
    },
    description: {
      ru: "Сильный окислитель для регенерации воздуха и специальных химических процессов.",
      kz: "Ауаны регенерациялау и арнайы химиялық процестерге арналған күшті тотықтырғыш.",
      en: "Strong oxidizing agent for air regeneration and special chemical processes.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-14",
    category: "chemistry",
    name: {
      ru: "Сульфид натрия, сульфит натрия",
      kz: "Натрий сульфиді, натрий сульфиті",
      en: "Sodium sulfide, sodium sulfite",
    },
    description: {
      ru: "Реагенты для кожевенной, горнодобывающей и целлюлозно-бумажной промышленности.",
      kz: "Былғары, тау-кен және целлюлоза-қағаз өнеркәсібіне арналған реагенттер.",
      en: "Reagents for leather, mining, and pulp and paper industries.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-15",
    category: "chemistry",
    name: {
      ru: "Силикокальций",
      kz: "Силикокальций",
      en: "Silicocalcium",
    },
    description: {
      ru: "Комплексный раскислитель и дегазатор для производства высококачественной стали.",
      kz: "Жоғары сапалы болат өндіруге арналған кешенді тотықсыздандырғыш және дегазатор.",
      en: "Complex deoxidizer and degasser for high-quality steel production.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-16",
    category: "chemistry",
    name: {
      ru: "Фурфуриловый спирт",
      kz: "Фурфурил спирті",
      en: "Furfuryl alcohol",
    },
    description: {
      ru: "Сырье для производства смол, клеев и литейных связующих.",
      kz: "Шайырлар, желімдер және құю байланыстырғыштарын өндіруге арналған шикізат.",
      en: "Raw material for the production of resins, adhesives, and foundry binders.",
    },
    image: "/products/chem_liquid_drum.png",
  },
  {
    id: "chem-17",
    category: "chemistry",
    name: {
      ru: "Катализатор ванадиевый",
      kz: "Ванадий катализаторы",
      en: "Vanadium catalyst",
    },
    description: {
      ru: "Применяется в производстве серной кислоты и органическом синтезе.",
      kz: "Күкірт қышқылын өндіруде және органикалық синтезде қолданылады.",
      en: "Used in sulfuric acid production and organic synthesis.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-18",
    category: "chemistry",
    name: {
      ru: "Пероксид марганца",
      kz: "Марганец пероксиді",
      en: "Manganese peroxide",
    },
    description: {
      ru: "Окислитель для химического синтеза и производства гальванических элементов.",
      kz: "Химиялық синтезге және гальваникалық элементтерді өндіруге арналған тотықтырғыш.",
      en: "Oxidant for chemical synthesis and production of galvanic cells.",
    },
    image: "/products/chem_activated_carbon.png",
  },
  {
    id: "chem-19",
    category: "chemistry",
    name: {
      ru: "Антрацит",
      kz: "Антрацит",
      en: "Anthracite",
    },
    description: {
      ru: "Высококачественный уголь для металлургии и фильтрации воды.",
      kz: "Металлургия және су сүзуге арналған жоғары сапалы көмір.",
      en: "High-quality coal for metallurgy and water filtration.",
    },
    image: "/products/chem_activated_carbon.png",
  },
  {
    id: "chem-20",
    category: "chemistry",
    name: {
      ru: "Феррованадий",
      kz: "Феррованадий",
      en: "Ferrovanadium",
    },
    description: {
      ru: "Легирующая добавка для повышения прочности и износостойкости стали.",
      kz: "Болаттың беріктігі мен тозуға төзімділігін арттыруға арналған легирлеуші қоспа.",
      en: "Alloying additive for increasing strength and wear resistance of steel.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-21",
    category: "chemistry",
    name: {
      ru: "Депрессора",
      kz: "Депрессорлар",
      en: "Depressants",
    },
    description: {
      ru: "Реагенты для подавления флотации определенных минералов при разделении руд.",
      kz: "Кенді ажырату кезінде белгілі бір минералдардың флотациясын басуға арналған реагенттер.",
      en: "Reagents to suppress the flotation of certain minerals during ore separation.",
    },
    image: "/products/chem_liquid_drum.png",
  },
  {
    id: "chem-22",
    category: "chemistry",
    name: {
      ru: "Ферросилиций",
      kz: "Ферросилиций",
      en: "Ferrosilicon",
    },
    description: {
      ru: "Раскислитель и легирующий элемент для выплавки железа и стали.",
      kz: "Шойын мен болатты балқытуға арналған тотықсыздандырғыш және легирлеуші элемент.",
      en: "Deoxidizer and alloying element for iron and steel production.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "chem-23",
    category: "chemistry",
    name: {
      ru: "Селитра натриевая",
      kz: "Натрий селитрасы",
      en: "Sodium nitrate",
    },
    description: {
      ru: "Окислитель в металлургии, компонент стекольной массы и пиротехники.",
      kz: "Металлургиядағы тотықтырғыш, шыны массасының және пиротехниканың компоненті.",
      en: "Oxidant in metallurgy, component of glass mass and pyrotechnics.",
    },
    image: "/products/chem_powder_bag.png",
  },

  // === METALS (15 items) ===
  {
    id: "met-1",
    category: "metals",
    name: {
      ru: "Трубы, круги, листы",
      kz: "Құбырлар, үйірмелер, парақтар",
      en: "Pipes, rounds, sheets",
    },
    description: {
      ru: "Прокат различного профиля из нержавеющих и конструкционных сталей.",
      kz: "Тот баспайтын және конструктивті болаттан жасалған әртүрлі профильдегі прокат.",
      en: "Rolled metal of various profiles from stainless and structural steels.",
    },
    image: "/trubi.jpg",
  },
  {
    id: "met-2",
    category: "metals",
    name: {
      ru: "Листовой, сортовой прокат",
      kz: "Парақтық, сорттық прокат",
      en: "Sheet and section steel",
    },
    description: {
      ru: "Широкий ассортимент продукции для строительства и машиностроения.",
      kz: "Құрылыс және машина жасау үшін өнімдердің кең ассортименті.",
      en: "A wide range of products for construction and mechanical engineering.",
    },
    image: "/products/metal_sheets.png",
  },
  {
    id: "met-3",
    category: "metals",
    name: {
      ru: "Стальные канаты",
      kz: "Болат арқандар",
      en: "Steel wire ropes",
    },
    description: {
      ru: "Для подъемного и шахтного оборудования. ГОСТ и международные стандарты.",
      kz: "Көтергіш және шахта жабдықтарына арналған. МЕМСТ және халықаралық стандарттар.",
      en: "For lifting and mining equipment. GOST and international standards.",
    },
    image: "/products/metal_pipes.png",
  },
  {
    id: "met-4",
    category: "metals",
    name: {
      ru: "Лента стальная упаковочная",
      kz: "Буып-түюге арналған болат таспа",
      en: "Steel packing strap",
    },
    description: {
      ru: "Высокопрочная лента для надежной фиксации крупногабаритных грузов.",
      kz: "Ірі габаритті жүктерді сенімді бекітуге арналған жоғары беріктігі бар таспа.",
      en: "High-strength strap for reliable securing of large cargoes.",
    },
    image: "/products/metal_sheets.png",
  },
  {
    id: "met-5",
    category: "metals",
    name: {
      ru: "Ферромарганец",
      kz: "Ферромарганец",
      en: "Ferromanganese",
    },
    description: {
      ru: "Ферросплав для раскисления и легирования стали марганцем.",
      kz: "Болатты марганецпен тотықсыздандыруға және легирлеуге арналған ферроқорытпа.",
      en: "Ferroalloy for deoxidizing and alloying steel with manganese.",
    },
    image: "/main.jpg",
  },
  {
    id: "met-6",
    category: "metals",
    name: {
      ru: "Феррохром, ферротитан",
      kz: "Феррохром, ферротитан",
      en: "Ferrochrome, ferrotitanium",
    },
    description: {
      ru: "Ключевые добавки для производства нержавеющих и спецсталей.",
      kz: "Тот баспайтын және арнайы болаттарды өндіруге арналған негізгі қоспалар.",
      en: "Key additives for the production of stainless and special steels.",
    },
    image: "/main.jpg",
  },
  {
    id: "met-7",
    category: "metals",
    name: {
      ru: "Никель",
      kz: "Никель",
      en: "Nickel",
    },
    description: {
      ru: "Никель в катодах и гранулах для металлургии и гальваники.",
      kz: "Металлургия мен гальваникаға арналған катодтар мен түйіршіктердегі никель.",
      en: "Nickel in cathodes and granules for metallurgy and electroplating.",
    },
    image: "/products/chem_crystals.png",
  },
  {
    id: "met-8",
    category: "metals",
    name: {
      ru: "Чугунные валки, прокатные валки",
      kz: "Шойын біліктер, прокат біліктері",
      en: "Cast iron rolls, rolling rolls",
    },
    description: {
      ru: "Сменные инструменты для прокатных станов различного назначения.",
      kz: "Әртүрлі мақсаттағы прокат стандарына арналған ауыстырмалы құралдар.",
      en: "Replaceable tools for rolling mills of various purposes.",
    },
    image: "/products/metal_pipes.png",
  },
  {
    id: "met-9",
    category: "metals",
    name: {
      ru: "Алюминиевые листы, плиты",
      kz: "Алюминий парақтар, плиталар",
      en: "Aluminum sheets, plates",
    },
    description: {
      ru: "Прокат из первичного алюминия и сплавов для авиации и судостроения.",
      kz: "Авиация мен кеме жасауға арналған бастапқы алюминий мен қорытпалардан жасалған прокат.",
      en: "Rolled aluminum and alloys for aviation and shipbuilding.",
    },
    image: "/products/metal_sheets.png",
  },
  {
    id: "met-10",
    category: "metals",
    name: {
      ru: "Порошок алюминиевый",
      kz: "Алюминий ұнтағы",
      en: "Aluminum powder",
    },
    description: {
      ru: "Для производства газобетона, ЛКМ, металлургии и пиротехники.",
      kz: "Газобетон, бояу-лак материалдары, металлургия және пиротехника өндірісі үшін.",
      en: "For the production of aerated concrete, paints, metallurgy, and pyrotechnics.",
    },
    image: "/products/chem_powder_bag.png",
  },
  {
    id: "met-11",
    category: "metals",
    name: {
      ru: "Модификатор стали",
      kz: "Болат модификаторы",
      en: "Steel modifier",
    },
    description: {
      ru: "Добавки для улучшения структуры и механических свойств отливок.",
      kz: "Құймалардың құрылымы мен механикалық қасиеттерін жақсартуға арналған қоспалар.",
      en: "Additives to improve the structure and mechanical properties of castings.",
    },
    image: "/main.jpg",
  },
  {
    id: "met-12",
    category: "metals",
    name: {
      ru: "Дробь стальная",
      kz: "Болат бытыра",
      en: "Steel shot",
    },
    description: {
      ru: "Для пескоструйной обработки, подготовки поверхностей и литья.",
      kz: "Құм себу үшін, беттерді дайындау және құю үшін.",
      en: "For shot blasting, surface preparation, and casting.",
    },
    image: "/main.jpg",
  },
  {
    id: "met-13",
    category: "metals",
    name: {
      ru: "Проволока порошковая",
      kz: "Ұнтақты сым",
      en: "Cored wire",
    },
    description: {
      ru: "Для сварки и внепечной обработки стали. Различные наполнители.",
      kz: "Дәнекерлеу және болатты пештен тыс өңдеу үшін. Әртүрлі толтырғыштар.",
      en: "For welding and out-of-furnace steel treatment. Various fillers.",
    },
    image: "/products/metal_pipes.png",
  },
  {
    id: "met-14",
    category: "metals",
    name: {
      ru: "Нихромовая проволока, лента",
      kz: "Нихром сым, таспа",
      en: "Nichrome wire, tape",
    },
    description: {
      ru: "Жаростойкий сплав для нагревательных элементов и резисторов.",
      kz: "Қыздыру элементтері мен резисторларға арналған ыстыққа төзімді қорытпа.",
      en: "Heat-resistant alloy for heating elements and resistors.",
    },
    image: "/products/metal_pipes.png",
  },
  {
    id: "met-15",
    category: "metals",
    name: {
      ru: "Электроды графитированные",
      kz: "Графиттелген электродтар",
      en: "Graphite electrodes",
    },
    description: {
      ru: "Для дуговых сталеплавильных и руднотермических печей.",
      kz: "Доғалы болат балқыту және кен-термиялық пештер үшін.",
      en: "For electric arc steelmaking and ore-thermal furnaces.",
    },
    image: "/products/metal_sheets.png",
  },

  // === EQUIPMENT (20 items) ===
  {
    id: "equip-1",
    category: "equipment",
    name: {
      ru: "Шарошечные долота, Долота PDC",
      kz: "Шарошкалы қашаулар, PDC қашаулары",
      en: "Roller bits, PDC bits",
    },
    description: {
      ru: "Для бурения скважин в породах любой твердости.",
      kz: "Кез келген қаттылықтағы жыныстарда ұңғымаларды бұрғылау үшін.",
      en: "For drilling wells in rocks of any hardness.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-2",
    category: "equipment",
    name: {
      ru: "Автошины КГШ, грузовые, для подземной техники",
      kz: "КГШ шиналары, жүк көлігі, жерасты техникасы үшін",
      en: "OTR, truck and underground equipment tires",
    },
    description: {
      ru: "Специализированные шины для тяжелых условий эксплуатации в карьерах и шахтах.",
      kz: "Карьерлер мен шахталардағы ауыр пайдалану жағдайларына арналған мамандандырылған шиналар.",
      en: "Specialized tires for high-intensity operations in quarries and mines.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-3",
    category: "equipment",
    name: {
      ru: "Лента конвейерная, транспортерная",
      kz: "Конвейер таспасы, транспортерлік",
      en: "Conveyor and conveyor belt",
    },
    description: {
      ru: "Для транспортировки руды, угля и строительных материалов.",
      kz: "Кенді, көмірді және құрылыс материалдарын тасымалдауға арналған.",
      en: "For transporting ore, coal, and construction materials.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-4",
    category: "equipment",
    name: {
      ru: "Керамические шары",
      kz: "Керамикалық шарлар",
      en: "Ceramic balls",
    },
    description: {
      ru: "Мелющие тела для сверхтонкого помола в керамической и химической промышленности.",
      kz: "Керамика және химия өнеркәсібіндегі өте жұқа ұнтақтауға арналған ұнтағыш денелер.",
      en: "Grinding media for ultra-fine grinding in the ceramic and chemical industries.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-5",
    category: "equipment",
    name: {
      ru: "Стальные шары",
      kz: "Болат шарлар",
      en: "Steel balls",
    },
    description: {
      ru: "Мелющие шары для шаровых мельниц. Высокая твердость и износостойкость.",
      kz: "Шарлы диірмендерге арналған ұнтақтағыш шарлар. Жоғары қаттылық пен тозуға төзімділік.",
      en: "Grinding balls for ball mills. High hardness and wear resistance.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-6",
    category: "equipment",
    name: {
      ru: "Компрессора",
      kz: "Компрессорлар",
      en: "Compressors",
    },
    description: {
      ru: "Воздушные и газовые компрессоры для промышленного применения.",
      kz: "Өнеркәсіптік қолдануға арналған ауа және газ компрессорлары.",
      en: "Air and gas compressors for industrial applications.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-7",
    category: "equipment",
    name: {
      ru: "Венцы зубчатые",
      kz: "Тісті тәждер",
      en: "Gear rims",
    },
    description: {
      ru: "Крупногабаритные детали приводов для мельниц и барабанов.",
      kz: "Диірмендер мен барабандарға арналған жетектердің ірі габаритті бөлшектері.",
      en: "Large drive parts for mills and drums.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-8",
    category: "equipment",
    name: {
      ru: "Буровые штанги",
      kz: "Бұрғылау штангалары",
      en: "Drill rods",
    },
    description: {
      ru: "Инструмент для передачи крутящего момента и подачи очистного агента при бурении.",
      kz: "Бұрғылау кезінде айналу моментін беруге және тазалау агентин беруге арналған құрал.",
      en: "Tool for torque transmission and cleaning agent delivery during drilling.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-9",
    category: "equipment",
    name: {
      ru: "Бурильные трубы",
      kz: "Бұрғылау құбырлары",
      en: "Drill pipes",
    },
    description: {
      ru: "Трубы высокой прочности для глубокого бурения нефтяных и газовых скважин.",
      kz: "Мұнай және газ ұңғымаларын терең бұрғылауға арналған жоғары беріктігі бар құбырлар.",
      en: "High-strength pipes for deep drilling of oil and gas wells.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-10",
    category: "equipment",
    name: {
      ru: "Электродвигатели",
      kz: "Электр қозғалтқыштары",
      en: "Electric motors",
    },
    description: {
      ru: "Общепромышленные и специальные двигатели большой мощности.",
      kz: "Жалпы өнеркәсіптік және арнайы жоғары қуатты қозғалтқыштар.",
      en: "General industrial and special high-power motors.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-11",
    category: "equipment",
    name: {
      ru: "Буровые станки",
      kz: "Бұрғылау қондырғылары",
      en: "Drilling rigs",
    },
    description: {
      ru: "Комплексы для геологоразведки и добычи полезных ископаемых.",
      kz: "Геологиялық барлау және пайдалы қазбаларды өндіруге арналған кешендер.",
      en: "Systems for mineral exploration and extraction.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-12",
    category: "equipment",
    name: {
      ru: "Кислородные станции",
      kz: "Оттегі станциялары",
      en: "Oxygen stations",
    },
    description: {
      ru: "Автономные системы для получения технического и медицинского кислорода.",
      kz: "Техникалық және медициналық оттегін алуға арналған автономды жүйелер.",
      en: "Autonomous systems for producing technical and medical oxygen.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-13",
    category: "equipment",
    name: {
      ru: "Станки, печи",
      kz: "Станциялар, пештер",
      en: "Machines and furnaces",
    },
    description: {
      ru: "Металлообрабатывающее оборудование и печи для термообработки.",
      kz: "Металл өңдеу жабдықтары және термиялық өңдеуге арналған пештер.",
      en: "Metalworking equipment and heat treatment furnaces.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-14",
    category: "equipment",
    name: {
      ru: "Фильтр-пресс, запасные части к фильтр-прессу",
      kz: "Сүзгі-пресс, қосалқы бөлшектер",
      en: "Filter press and filter press spare parts",
    },
    description: {
      ru: "Оборудование для эффективного разделения твердой и жидкой фаз.",
      kz: "Қатты және сұйық фазаларды тиімді бөлуге арналған жабдық.",
      en: "Equipment for efficient solid-liquid separation.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-15",
    category: "equipment",
    name: {
      ru: "Шаровая мельница",
      kz: "Шарлы диірмен",
      en: "Ball mill",
    },
    description: {
      ru: "Оборудование для сухого и мокрого помола различных материалов.",
      kz: "Әртүрлі материалдарды құрғақ және ылғалды ұнтақтауға арналған жабдық.",
      en: "Equipment for dry and wet grinding of various materials.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-16",
    category: "equipment",
    name: {
      ru: "Запчасти промышленных мельниц, дробилок, печей, барабанов: шестерни, вал-шестерни, бандажи, цапфы, торцевые стенки, брони, зубчатые колеса",
      kz: "Өнеркәсіптік диірмендердің, ұсатқыштардың, пештердің қосалқы бөлшектері: тісті дөңгелектер, вал-шестернялар, брондар.",
      en: "Spare parts for industrial mills, crushers, furnaces, drums: gears, shaft-gears, liners, etc.",
    },
    description: {
      ru: "Полный спектр комплектующих для тяжелого промышленного оборудования.",
      kz: "Ауыр өнеркәсіптік жабдықтарға арналған компоненттердің толық спектрі.",
      en: "A full range of components for heavy industrial equipment.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-17",
    category: "equipment",
    name: {
      ru: "Мотор-редуктора",
      kz: "Мотор-редукторлар",
      en: "Gear motors",
    },
    description: {
      ru: "Приводы для конвейерных линий, смесителей и другого оборудования.",
      kz: "Конвейер желілеріне, араластырғыштарға және басқа жабдықтарға арналған жетектер.",
      en: "Drives for conveyor lines, mixers, and other equipment.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-18",
    category: "equipment",
    name: {
      ru: "Огнеупорные изделия",
      kz: "Отқа төзімді бұйымдар",
      en: "Refractory products",
    },
    description: {
      ru: "Материалы для футеровки печей и тепловых агрегатов.",
      kz: "Пештер мен жылу агрегаттарын футеровкалауға арналған материалдар.",
      en: "Materials for lining furnaces and thermal units.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-19",
    category: "equipment",
    name: {
      ru: "Запасные части",
      kz: "Қосалқы бөлшектер",
      en: "Spare parts",
    },
    description: {
      ru: "Изготовление деталей по чертежам и техническим параметрам заказчика.",
      kz: "Тапсырыс берушінің сызбалары мен техникалық параметрлері бойынша бөлшектерді дайындау.",
      en: "Manufacture of parts according to customer drawings and technical parameters.",
    },
    image: "/main.jpg",
  },
  {
    id: "equip-20",
    category: "equipment",
    name: {
      ru: "Насосы",
      kz: "Сорғылар",
      en: "Pumps",
    },
    description: {
      ru: "Промышленные насосы для перекачки воды, шлама и агрессивных сред.",
      kz: "Су, шлам және агрессивті ортаны айдауға арналған өнеркәсіптік сорғылар.",
      en: "Industrial pumps for pumping water, slurry, and corrosive media.",
    },
    image: "/main.jpg",
  },
]

export const categoryIcons: Record<Category, string> = {
  chemistry: "flask",
  metals: "layers",
  equipment: "cog",
}
