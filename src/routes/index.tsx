import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Menu, X, MapPin, Phone, ArrowRight, MessageCircle } from "lucide-react";
import logoCream from "@/assets/logo-cream.png";
import naiaraPhoto from "@/assets/naiara.jpg";
import juventinoPhoto from "@/assets/juventino.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

const IG = "https://www.instagram.com/curimbaproducoes/";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=553199951922&text=Ol%C3%A1%21+Gratid%C3%A3o+por+entrar+em+contato.+Em+qual+de+nossos+servi%C3%A7os+voc%C3%AA+tem+interesse%3F+&type=phone_number&app_absent=0";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curimba Produções — A nossa cultura é viva e potente" },
      { name: "description", content: "Produtora preta focada em cultura afro-brasileira: produção executiva, festivais, shows, estúdio e oficinas na Vila dos Marmiteiros (BH/MG)." },
      { property: "og:title", content: "Curimba Produções" },
      { property: "og:description", content: "Resgatamos, preservamos e movimentamos a cultura afro-brasileira com consciência, respeito e potência." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  ["Missão", "#missao"],
  ["Quem Somos", "#quem-somos"],
  ["Serviços", "#servicos"],
  ["Vitrine", "#vitrine"],
  ["Contato", "#contato"],
];

const teamMembers = [
  {
    id: "naiara",
    name: "Naiara Galvão",
    role: "Coordenação Geral & Produção Executiva",
    paragraphs: [
      "Responsável pela coordenação geral, gestão institucional e produção executiva das ações e projetos da Curimba Produções.",
      "Atua diretamente na articulação comunitária na Vila dos Marmiteiros, conectando artistas, mestres dos saberes, parceiros e território.",
    ],
    accentBg: "bg-terracotta text-cream border border-cream/15",
    badgeBg: "bg-olive text-cream",
    placeholderBg: "bg-earth text-cream",
    photo: naiaraPhoto,
  },
  {
    id: "juventino",
    name: "Juventino Dias",
    role: "Direção Musical & Coordenação Pedagógica",
    paragraphs: [
      "Músico e educador à frente da direção musical e da coordenação pedagógica dos processos formativos e artísticos da Curimba.",
      "Conduz formações em instrumentos de sopro, percussão e cordas, além de ensaios, práticas de conjunto e direção de espetáculos.",
    ],
    accentBg: "bg-card text-cream border border-olive/40",
    badgeBg: "bg-mustard text-earth",
    placeholderBg: "bg-earth text-cream",
    photo: juventinoPhoto,
  },
];

const services = [
  {
    t: "Produção Executiva",
    d: "Planejamento, gestão cultural, elaboração de projetos, logística e realização completa de ações artísticas.",
    c: "bg-terracotta text-cream border border-cream/15",
    bar: "bg-cream",
  },
  {
    t: "Festivais e Shows",
    d: "Curadoria, direção artística e produção de rodas de samba, mostras culturais, shows e eventos no território.",
    c: "bg-olive text-cream border border-cream/15",
    bar: "bg-cream",
  },
  {
    t: "Ensaios e Estúdio",
    d: "Sede climatizada e com tratamento acústico na Vila dos Marmiteiros para ensaios, gravações e criação musical.",
    c: "bg-mustard text-earth border border-earth/20",
    bar: "bg-earth",
  },
  {
    t: "Formações e Oficinas",
    d: "Educação musical continuada em sopro, percussão e cordas, além de oficinas de memória, fotografia e audiovisual.",
    c: "bg-card text-cream border border-cream/15",
    bar: "bg-mustard",
  },
];

const projects = [
  { src: p2, alt: "Samba do Marmiteiro", tall: true },
  { src: p1, alt: "Roda de samba", tall: true },
  { src: p3, alt: "Festival na quebrada", tall: false },
  { src: p4, alt: "Oficina de percussão", tall: false },
  { src: p3, alt: "Dança afro", tall: true },
  { src: p1, alt: "Noite de tambor", tall: false },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-earth/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#" className="flex items-center gap-3" aria-label="Curimba Produções">
            <img
              src={logoCream}
              alt="Logotipo Curimba Produções"
              className="h-12 w-auto object-contain transition-transform hover:scale-105"
            />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/90 transition-colors hover:text-mustard"
              >
                {l}
              </a>
            ))}
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-olive p-2.5 text-cream transition-transform hover:scale-110 hover:bg-mustard hover:text-earth"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <button className="text-cream md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="flex flex-col gap-4 border-t border-border bg-earth px-5 py-5 md:hidden">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-cream hover:text-mustard"
              >
                {l}
              </a>
            ))}
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-mustard"
            >
              <Instagram className="h-5 w-5" /> @curimbaproducoes
            </a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-terracotta pt-32 pb-24 text-cream md:pt-44 md:pb-32">
        <div className="pattern-geo pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="mb-6 inline-block bg-olive px-4 py-1.5 text-xs font-medium lowercase tracking-[0.25em] text-cream">
            cultura preta • música • afrocentralidade
          </p>
          <h1 className="font-display max-w-4xl text-6xl sm:text-8xl md:text-9xl">
            A nossa cultura é <span className="text-mustard">viva e potente.</span>
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-cream/95 md:text-lg">
            <p>
              A nossa missão é preta, periférica e transformadora. Resgatamos, preservamos e movimentamos a cultura afro-brasileira com consciência, respeito e potência.
            </p>
            <p className="text-cream/85">
              Da música à produção audiovisual, construímos experiências culturais enraizadas na memória, na ancestralidade e no futuro da Vila dos Marmiteiros.
            </p>
          </div>
          <a
            href="#vitrine"
            className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-mustard px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-earth shadow-[6px_6px_0_var(--earth)] transition-all hover:-translate-y-1 hover:bg-cream"
          >
            Conheça nossos projetos <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section id="missao" className="relative scroll-mt-20 bg-earth px-5 py-20 md:py-32">
        <div className="pattern-geo pointer-events-none absolute inset-0 opacity-5" />
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <p className="mb-3 inline-block bg-olive px-3.5 py-1 text-xs font-medium lowercase tracking-[0.22em] text-cream">
              nosso propósito
            </p>
            <h2 className="font-display text-7xl text-mustard md:text-8xl">Missão</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-cream/95 md:text-xl">
            <p>
              A Curimba nasce do <strong className="font-semibold text-mustard">tambor</strong> e da necessidade. Nasce do direito de existir, criar e ocupar espaços com autonomia, identidade e afrocentralidade.
            </p>
            <p>
              Fazemos <strong className="font-semibold text-olive">por preto e para preto</strong> — com arte, afeto e responsabilidade. Compreendemos o território não apenas como lugar onde a cultura chega, mas onde ela já existe, é produzida, transmitida e reinventada todos os dias.
            </p>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="relative scroll-mt-20 bg-background px-5 py-20 md:py-28">
        <div className="pattern-geo pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-14 grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-end">
            <div>
              <p className="mb-3 inline-block bg-terracotta px-3.5 py-1 text-xs font-medium lowercase tracking-[0.22em] text-cream">
                vila dos marmiteiros • bh/mg
              </p>
              <h2 className="font-display text-6xl text-cream md:text-8xl">
                Quem <span className="text-mustard">Somos</span>
              </h2>
            </div>
            <div className="space-y-3 text-base leading-relaxed text-cream/85 md:text-lg">
              <p>
                Com sede na Vila dos Marmiteiros, em Belo Horizonte/MG, a Curimba Produções articula música, memória, formação artística e produção cultural.
              </p>
              <p>
                Nossa liderança une gestão executiva, articulação comunitária e direção musical para fortalecer artistas, jovens e mestres da cultura afro-brasileira.
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className={`poster ${member.accentBg} relative flex flex-col overflow-hidden rounded-lg`}
              >
                <div className="pattern-geo pointer-events-none absolute inset-0" />

                <div className={`relative aspect-[4/5] w-full overflow-hidden ${member.placeholderBg}`}>
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="relative flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <span className={`inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${member.badgeBg}`}>
                      {member.role}
                    </span>
                    <h3 className="font-display mt-4 text-5xl text-cream md:text-6xl">
                      {member.name}
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-cream/90 md:text-base">
                      {member.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="relative scroll-mt-20 bg-muted px-5 py-20 md:py-28">
        <div className="pattern-geo pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl space-y-3">
            <p className="inline-block bg-olive px-3.5 py-1 text-xs font-medium lowercase tracking-[0.22em] text-cream">
              nossas frentes de atuação
            </p>
            <h2 className="font-display text-6xl text-cream md:text-8xl">
              O que fazemos <span className="text-mustard">por aqui?</span>
            </h2>
            <p className="text-base leading-relaxed text-cream/85 md:text-lg">
              Estruturamos cada etapa da produção artística e formativa com excelência técnica e respeito às matrizes afro-brasileiras.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.t} className={`poster ${s.c} relative flex min-h-80 flex-col justify-between rounded-lg p-7`}>
                <div className="pattern-geo pointer-events-none absolute inset-0 rounded-lg" />
                <div className={`relative h-1.5 w-12 rounded-full ${s.bar}`} />
                <div className="relative mt-8 space-y-4">
                  <h3 className="font-display text-5xl">{s.t}</h3>
                  <p className="text-sm leading-relaxed opacity-90 md:text-base">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vitrine" className="relative scroll-mt-20 bg-earth px-5 py-20 md:py-28">
        <div className="pattern-geo pointer-events-none absolute inset-0 opacity-5" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl space-y-3">
            <p className="inline-block bg-terracotta px-3.5 py-1 text-xs font-medium lowercase tracking-[0.22em] text-cream">
              memória e presença
            </p>
            <h2 className="font-display text-6xl text-cream md:text-8xl">
              Nosso Movimento <span className="text-olive">(Projetos)</span>
            </h2>
            <p className="text-base leading-relaxed text-cream/85 md:text-lg">
              Vivências, rodas, festivais e oficinas que ocupam a Vila dos Marmiteiros e fortalecem a cena cultural de Belo Horizonte.
            </p>
          </div>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {projects.map((p, i) => (
              <figure key={i} className="group relative mb-5 break-inside-avoid overflow-hidden rounded-lg border border-border">
                <img src={p.src} alt={p.alt} loading="lazy" width={1024} height={p.tall ? 1280 : 1024} className={`${p.tall ? "aspect-[4/5]" : "aspect-square"} w-full object-cover transition-transform duration-500 group-hover:scale-105`} />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-earth/95 p-4 font-display text-3xl text-mustard transition-transform group-hover:translate-y-0">{p.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer id="contato" className="relative scroll-mt-20 overflow-hidden bg-terracotta px-5 py-20 text-cream md:py-28">
        <div className="pattern-geo pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 inline-block bg-olive px-3.5 py-1 text-xs font-medium lowercase tracking-[0.22em] text-cream">
            vamos construir juntos
          </p>
          <h2 className="font-display text-6xl md:text-8xl">Quer produzir <span className="text-mustard">com a gente?</span></h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
            Fortaleça sua arte com quem vive, produz e valoriza a cultura preta todos os dias. Entre em contato com a nossa equipe!
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-mustard px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-earth shadow-[6px_6px_0_var(--earth)] transition-all hover:-translate-y-1 hover:bg-cream">
            Fale com a gente <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
          </a>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="flex items-start gap-3 rounded-lg border border-cream/15 bg-earth p-5"><MapPin className="h-6 w-6 shrink-0 text-mustard" /><span>Av. dos Esportes, 653<br />Vila dos Marmiteiros • BH/MG</span></div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg border border-cream/15 bg-olive p-5 transition-transform hover:-translate-y-1"><Phone className="h-6 w-6 shrink-0" /><span className="font-bold">(31) 99951-922<br /><span className="text-sm font-normal opacity-90">Chame no WhatsApp</span></span></a>
            <a href={IG} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg bg-mustard p-5 font-bold text-earth transition-transform hover:-translate-y-1"><Instagram className="h-6 w-6 shrink-0" />@curimbaproducoes</a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-cream/20 pt-6 text-sm opacity-90">
            <img src={logoCream} alt="Logotipo Curimba Produções" className="h-10 w-auto object-contain" />
            <p>© {new Date().getFullYear()} Curimba Produções</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
