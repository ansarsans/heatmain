"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"
import { 
  Search, Factory, ShieldCheck, Truck, 
  FileText, Calculator, PackageCheck, MapPin, 
  Globe2, Zap, Recycle, Building2, Shield, Users, Hammer
} from "lucide-react"

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-[#fcfcfc] overflow-hidden">
      
      {/* 1. Hero Section (Dark, Industrial) */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-zinc-950 overflow-hidden text-center">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Industrial Background" 
            fill 
            className="object-cover opacity-[0.15] grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950" />
        </div>
        
        {/* Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.15] z-0 mix-blend-overlay pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md shadow-2xl">
             <span className="flex h-2 w-2 rounded-full bg-[#0241c0] mr-3 animate-pulse"></span>
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">О компании</span>
          </div>
          
          <h1 className="mb-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Надежный партнер в поставках промышленной химии и оборудования
          </h1>
          
          <p className="max-w-2xl text-base lg:text-lg leading-relaxed text-zinc-400 text-pretty">
            Обеспечиваем бесперебойную работу промышленных предприятий по всему миру. 
            Прямые контракты с производителями, строгий контроль качества и логистика "под ключ".
          </p>
        </div>
      </section>

      {/* 2. Кто мы и чем полезны (Light Section with Glass Dark Cards) */}
      <section className="py-24 lg:py-32 bg-[#fcfcfc] relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
           <div className="mb-16 text-center">
             <span className="text-[#0241c0] font-bold tracking-widest uppercase text-[10px] mb-4 block">Экспертиза</span>
             <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight">
               Чем мы полезны вашему бизнесу
             </h2>
           </div>
            
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
               {[
                 { icon: <Search className="w-8 h-8 text-[#0241c0]" />, title: "Подбор продукции", desc: "Точный подбор по ТЗ и строгим техническим параметрам заказчика." },
                 { icon: <Factory className="w-8 h-8 text-[#0241c0]" />, title: "Прямые поставки", desc: "Эксклюзивные контракты напрямую с ведущими мировыми производителями." },
                 { icon: <ShieldCheck className="w-8 h-8 text-[#0241c0]" />, title: "Контроль качества", desc: "Многоуровневая проверка и сертификация каждой партии перед отгрузкой." },
                 { icon: <Truck className="w-8 h-8 text-[#0241c0]" />, title: "Логистика под ключ", desc: "Организация доставки до вашего склада с полным таможенным оформлением." }
               ].map((card, idx) => (
                 <div key={idx} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#0241c0]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                   <div className="relative z-10">
                     <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 transition-colors group-hover:bg-white group-hover:border-[#0241c0]/20">
                       {card.icon}
                     </div>
                     <h3 className="mb-3 text-lg font-bold text-zinc-900">{card.title}</h3>
                     <p className="text-sm leading-relaxed text-zinc-600">{card.desc}</p>
                   </div>
                 </div>
               ))}
           </div>
        </div>
      </section>


      {/* 5. География (Dark Section with Visualization) */}
      <section className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
        {/* Glows and Map Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#0241c0]/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
           <div>
             <span className="text-[#0241c0] font-bold tracking-widest uppercase text-[10px] mb-4 block">Масштаб</span>
             <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 text-balance tracking-tight">
                Международная география поставок
             </h2>
             <p className="text-zinc-400 leading-relaxed text-lg mb-10 text-pretty">
               Мы работаем без границ, обеспечивая надежные логистические цепочки между ведущими производственными хабами и предприятиями заказчиков.
             </p>
             <div className="flex flex-wrap gap-4">
                {['Казахстан', 'Китай', 'Европа', 'Узбекистан'].map(country => (
                  <span key={country} className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm backdrop-blur-md text-white font-semibold flex items-center gap-2 transition-colors hover:bg-white/10 hover:border-white/20 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0241c0]" />
                    {country}
                  </span>
                ))}
             </div>
           </div>
           
           {/* Abstract Map Visual */}
           <div className="relative aspect-square lg:aspect-auto lg:h-[400px] w-full flex items-center justify-center">
             <div className="absolute inset-0 flex items-center justify-center opacity-40">
               <Globe2 className="w-full h-full text-[#0241c0] max-w-[350px] max-h-[350px]" strokeWidth={0.5} />
             </div>
             <div className="relative z-10 grid grid-cols-2 gap-4">
               {/* Decorative dots indicating regions */}
               <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#fff] animate-pulse"></div>
               <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#0241c0] rounded-full shadow-[0_0_15px_#0241c0] animate-pulse delay-700"></div>
               <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#fff] animate-pulse delay-300"></div>
             </div>
           </div>
        </div>
      </section>



      {/* 7. Реквизиты (Light, Minimalist Block) */}
      <section className="py-12 bg-[#fcfcfc] border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 lg:p-12 shadow-sm">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-900">ТОО "Heat Energy Capital"</h2>
            <div className="grid lg:grid-cols-5 gap-12">
               <div className="lg:col-span-2">
                  <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#0241c0]">Реквизиты</h3>
                  <div className="space-y-3 text-sm text-zinc-800">
                    <p className="flex justify-between border-b border-zinc-100 pb-2"><span className="text-zinc-500">БИН:</span> <span className="font-semibold">240240013512</span></p>
                    <p className="flex justify-between border-b border-zinc-100 pb-2"><span className="text-zinc-500">ИИК:</span> <span className="font-semibold">KZ33601A871023954571 <span className="text-zinc-400 font-medium">KZT</span></span></p>
                    <p className="flex justify-between border-b border-zinc-100 pb-2"><span className="text-zinc-500">БИК:</span> <span className="font-semibold">HSBKKZKX</span></p>
                    <p className="flex flex-col gap-1 border-b border-zinc-100 pb-2"><span className="text-zinc-500">Банк:</span> <span className="font-semibold">АО “Народный Банк Казахстана”</span></p>
                  </div>
               </div>
               
               <div className="lg:col-span-3">
                 <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#0241c0]">Адреса и деятельность</h3>
                 <div className="grid sm:grid-cols-2 gap-8 text-sm text-zinc-800 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Юридический адрес</span>
                      <span className="font-medium">г. Астана, район Есиль, ул. Әлихан Бөкейхан, д. 11, н.п. 1</span>
                      <span className="block mt-1 text-xs text-zinc-500">Индекс: 010000</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Фактический адрес</span>
                      <span className="font-medium">г. Астана, район Есиль, ул. Әлихан Бөкейхан, д. 27/1, н.п. 10</span>
                    </div>
                    <div className="sm:col-span-2 pt-4 border-t border-zinc-200/60">
                       <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">ОКЭД</span>
                       <div className="space-y-2">
                         <p className="flex gap-2 items-start"><span className="font-bold whitespace-nowrap">46.90.9</span> <span className="text-zinc-600">— оптовая торговля широким ассортиментом товаров</span></p>
                         <p className="flex gap-2 items-start"><span className="font-bold whitespace-nowrap">33.12.2</span> <span className="text-zinc-600">— ремонт машин и оборудования</span></p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA (Dark card, premium) */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
           <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 px-8 py-20 text-center shadow-2xl lg:px-16 lg:py-28 border border-zinc-800">
              {/* Noise and Glow Layers */}
              <div 
                className="absolute inset-0 opacity-[0.1] z-0 pointer-events-none mix-blend-overlay" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
              ></div>
              <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#0241c0]/20 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#0241c0]/20 rounded-full blur-[120px] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="mb-6 max-w-3xl text-3xl font-extrabold tracking-tight text-white lg:text-5xl text-balance">
                    Рассчитаем поставку под вашу задачу
                 </h2>
                 <p className="mb-12 max-w-xl text-lg leading-relaxed text-zinc-400 text-pretty">
                    Оставьте заявку, и наши специалисты подготовят персональное коммерческое предложение с оптимальными условиями и логистикой.
                 </p>
                 
                 <style>{`
                  @keyframes ctaPulse {
                    0% { box-shadow: 0 0 15px rgba(2, 65, 192, 0.4); opacity: 1; transform: scale(1); }
                    50% { box-shadow: 0 0 40px rgba(2, 65, 192, 0.7); opacity: 0.95; transform: scale(1.02); }
                    100% { box-shadow: 0 0 15px rgba(2, 65, 192, 0.4); opacity: 1; transform: scale(1); }
                  }
                 `}</style>
                 
                 <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center rounded-full bg-[#0241c0] px-12 py-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#023190]"
                    style={{ animation: 'ctaPulse 3s ease-in-out infinite' }}
                 >
                    Получить расчёт
                 </Link>
              </div>
           </div>
        </div>
      </section>

    </main>
  )
}
