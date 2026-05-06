export type Category = "chemistry" | "metals" | "equipment"

export interface Product {
  id: string
  category: Category
  name: { ru: string; kz: string; en: string }
  description: { ru: string; kz: string; en: string }
  image?: string
}

export const products: Product[] = [
  // === CHEMISTRY (8 items) ===
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
    image: "/images/causticsoda1.jpg",
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
    image: "/images/coal1.jpg",
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
    image: "/images/цианистыйнатрий1.jpg",
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
    image: "/images/Железныйкупорос1.jpg",
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
    image: "/images/медныйкупорос1.jpg",
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
    image: "/images/метабисульфитнатрия.jpg",
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
      kz: "Химиялық синтезге и гальваникалық элементтерді өндіруге арналған тотықтырғыш.",
      en: "Oxidant for chemical synthesis and production of galvanic cells.",
    },
    image: "/images/пероксидмарганца.jpg",
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
      kz: "Металлургиядағы тотықтырғыш, шыны массасының и пиротехниканың компоненті.",
      en: "Oxidant in metallurgy, component of glass mass and pyrotechnics.",
    },
    image: "/images/селитранатриевая.jpg",
  },

  // === METALS (9 items) ===
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
    image: "/images/трубы.jpg",
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
    image: "/images/канаты.jpg",
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
      kz: "Болатты марганецпен тотықсыздандыруға и легирлеуге арналған ферроқорытпа.",
      en: "Ferroalloy for deoxidizing and alloying steel with manganese.",
    },
    image: "/images/ферромарганец.jpg",
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
    image: "/images/валки.jpg",
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
    image: "/images/порошокалюминиевый.jpg",
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
    image: "/images/Модификаторстали.jpg",
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
    image: "/images/Дробьстальная.jpg",
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
    image: "/images/Нихромоваяпроволока.jpg",
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
    image: "/images/электродыграфитированные.jpg",
  },

  // === EQUIPMENT (8 items) ===
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
    image: "/images/шарошечныедолота.jpg",
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
    image: "/images/автошины.jpg",
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
    image: "/images/керамическиешары.jpg",
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
    image: "/images/венцызубчатые.jpg",
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
    image: "/images/Буровыештанги.jpg",
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
    image: "/images/электродвигатели.jpg",
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
    image: "/images/запчасти.jpg",
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
    image: "images/огнеупорныеизделия.jpg",
  },
]

export const categoryIcons: Record<Category, string> = {
  chemistry: "flask",
  metals: "layers",
  equipment: "cog",
}
