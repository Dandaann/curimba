import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ChangeEvent } from "react";
import { Instagram, Menu, X, MapPin, Phone, ArrowRight, MessageCircle, Camera } from "lucide-react";
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
      { title: "Curimba Produções Cultural — Cultura preta, periférica e transformadora" },
      { name: "description", content: "Produtora preta focada em cultura afro-brasileira: produção executiva, festivais, shows, estúdio e oficinas." },
      { property: "og:title", content: "Curimba Produções Cultural" },
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
    name: "Naiara",
    role: "Direção & Produção Executiva",
    bio: "Articuladora cultural e produtora executiva dedicada a fortalecer e projetar a potência da arte preta e periférica.",
    accentBg: "bg-terracotta text-cream",
    badgeBg: "bg-mustard text-earth",
    placeholderBg: "bg-olive text-cream",
    number: "01",
    defaultPhoto: "",
  },
  {
    id: "juventino",
    name: "Juventino",
    role: "Direção Artística & Cultural",
    bio: "Guardião do ritmo, da ancestralidade e do tambor, conduzindo vivências, oficinas e produções que conectam memória e futuro.",
    accentBg: "bg-olive text-cream",
    badgeBg: "bg-terracotta text-cream",
    placeholderBg: "bg-earth text-cream",
    number: "02",
    defaultPhoto: "",
  },
];

const services = [
  { t: "Produção Executiva", c: "bg-olive text-cream", n: "01" },
  { t: "Festivais e Shows", c: "bg-terracotta text-cream", n: "02" },
  { t: "Ensaios e Estúdio", c: "bg-mustard text-earth", n: "03" },
  { t: "Formações e Oficinas", c: "bg-earth text-cream", n: "04" },
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
  const [photos, setPhotos] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("curimba_team_photos");
      if (saved) {
        setPhotos(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handlePhotoUpload = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPhotos((prev) => {
          const next = { ...prev, [id]: reader.result as string };
          try {
            localStorage.setItem("curimba_team_photos", JSON.stringify(next));
          } catch {
            // ignore quota errors
          }
          return next;
        });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-display text-2xl">
            <span className="text-earth">Curimba</span> <span className="text-terracotta">Cultural</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="text-sm font-bold uppercase tracking-wide transition-colors hover:text-terracotta">{l}</a>
            ))}
            <a href={IG} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-olive p-2 text-cream transition-transform hover:scale-110 hover:bg-terracotta">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="font-display text-2xl">{l}</a>
            ))}
            <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-terracotta"><Instagram className="h-5 w-5" /> @curimbaproducoes</a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-olive pt-28 pb-20 text-cream md:pt-40 md:pb-32">
        <div className="pattern-geo absolute inset-0 text-cream" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mustard/90 md:h-[28rem] md:w-[28rem]" />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="mb-6 inline-block rounded-md bg-terracotta px-3 py-1 text-xs font-bold uppercase tracking-widest">Produtora Preta</p>
          <h1 className="font-display max-w-4xl text-5xl sm:text-7xl md:text-8xl">
            A nossa missão é <span className="text-mustard">preta, periférica</span> e transformadora.
          </h1>
          <p className="mt-8 max-w-xl text-lg opacity-90 md:text-xl">
            Resgatamos, preservamos e movimentamos a cultura afro-brasileira com consciência, respeito e potência.
          </p>
          <a href="#vitrine" className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-terracotta px-7 py-4 font-bold uppercase tracking-wide shadow-[6px_6px_0_var(--earth)] transition-all hover:-translate-y-1 hover:bg-mustard hover:text-earth">
            Conheça nossos projetos <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section id="missao" className="scroll-mt-20 px-5 py-20 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <h2 className="font-display text-6xl text-terracotta md:text-8xl">Missão</h2>
          <p className="text-2xl leading-relaxed md:text-3xl">
            A Curimba nasce do <strong className="text-olive">tambor</strong> e da necessidade. Do direito de existir, criar e ocupar. Fazemos <strong className="text-terracotta">por preto e para preto</strong> — com arte, afeto e responsabilidade. Aqui, a cultura é resistência, e cada produção é um ato de memória e futuro.
          </p>
        </div>
      </section>

      <section id="quem-somos" className="relative scroll-mt-20 border-t border-border px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 inline-block rounded-md bg-olive px-3 py-1 text-xs font-bold uppercase tracking-widest text-cream">
                Nossa Raiz
              </p>
              <h2 className="font-display text-5xl md:text-7xl">
                Quem <span className="text-terracotta">Somos</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed opacity-90 md:text-xl">
              Quem faz a Curimba pulsar no dia a dia, construindo pontes entre ancestralidade, território e produção cultural.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {teamMembers.map((member) => {
              const photoSrc = photos[member.id] || member.defaultPhoto;
              return (
                <article
                  key={member.id}
                  className={`poster ${member.accentBg} relative flex flex-col overflow-hidden rounded-lg`}
                >
                  <div className="pattern-geo pointer-events-none absolute inset-0" />

                  <div className={`relative aspect-[4/5] w-full overflow-hidden ${member.placeholderBg}`}>
                    <div className="pattern-geo absolute inset-0 opacity-60" />
                    <span className="font-display absolute left-5 top-5 z-10 rounded bg-earth/80 px-2.5 py-1 text-lg text-cream">
                      {member.number}
                    </span>

                    {photoSrc ? (
                      <img
                        src={photoSrc}
                        alt={`Foto de ${member.name}`}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="relative flex h-full w-full flex-col items-center justify-center p-8 text-center">
                        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-cream/50 bg-earth/30">
                          <span className="font-display text-5xl text-mustard">
                            {member.name[0]}
                          </span>
                        </div>
                        <p className="font-display text-2xl tracking-wide text-cream">
                          Espaço para foto de {member.name}
                        </p>
                        <p className="mt-2 max-w-xs text-sm text-cream/80">
                          Clique no botão abaixo para selecionar a foto de {member.name}
                        </p>
                      </div>
                    )}

                    <label className="absolute right-4 bottom-4 z-10 inline-flex cursor-pointer items-center gap-2 rounded-md bg-mustard px-4 py-2 text-xs font-bold uppercase tracking-wider text-earth shadow-[4px_4px_0_var(--earth)] transition-transform hover:-translate-y-0.5 hover:bg-cream">
                      <Camera className="h-4 w-4" />
                      {photoSrc ? "Trocar foto" : "Adicionar foto"}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(member.id, e)}
                      />
                    </label>
                  </div>

                  <div className="relative flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                      <span className={`inline-block rounded px-3 py-1 text-xs font-bold uppercase tracking-widest ${member.badgeBg}`}>
                        {member.role}
                      </span>
                      <h3 className="font-display mt-3 text-5xl md:text-6xl">
                        {member.name}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed opacity-95 md:text-lg">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="servicos" className="relative scroll-mt-20 bg-muted px-5 py-20 md:py-28">
        <div className="pattern-geo absolute inset-0 text-earth" />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="font-display mb-12 text-5xl md:text-7xl">O que fazemos <span className="text-terracotta">por aqui?</span></h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.t} className={`poster ${s.c} relative flex aspect-[3/4] flex-col items-center justify-center rounded-lg p-6 text-center`}>
                <span className="absolute left-4 top-4 font-display text-lg opacity-70">{s.n}</span>
                <div className="pattern-geo absolute inset-0 rounded-lg" />
                <h3 className="font-display relative text-5xl">{s.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vitrine" className="scroll-mt-20 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display mb-12 text-5xl md:text-7xl">Nosso Movimento <span className="text-olive">(Projetos)</span></h2>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {projects.map((p, i) => (
              <figure key={i} className="group relative mb-5 break-inside-avoid overflow-hidden rounded-lg">
                <img src={p.src} alt={p.alt} loading="lazy" width={1024} height={p.tall ? 1280 : 1024} className={`${p.tall ? "aspect-[4/5]" : "aspect-square"} w-full object-cover transition-transform duration-500 group-hover:scale-105`} />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-earth/90 p-4 font-display text-xl text-cream transition-transform group-hover:translate-y-0">{p.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer id="contato" className="relative scroll-mt-20 overflow-hidden bg-earth px-5 py-20 text-cream md:py-28">
        <div className="pattern-geo absolute inset-0 text-cream" />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="font-display text-6xl md:text-8xl">Quer produzir <span className="text-mustard">com a gente?</span></h2>
          <p className="mt-6 text-xl opacity-90">Fortaleça sua arte com quem vive a cultura preta!</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-mustard px-7 py-4 font-bold uppercase tracking-wide text-earth shadow-[6px_6px_0_var(--terracotta)] transition-all hover:-translate-y-1 hover:bg-cream">
            Fale com a gente <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
          </a>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="flex items-start gap-3 rounded-lg bg-olive p-5"><MapPin className="h-6 w-6 shrink-0 text-mustard" /><span>Av. dos Esportes, 653<br />Vila dos Marmiteiros</span></div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-lg bg-terracotta p-5 transition-transform hover:-translate-y-1"><Phone className="h-6 w-6 shrink-0" /><span className="font-bold">(31) 99951-922<br /><span className="text-sm font-normal opacity-90">Chame no WhatsApp</span></span></a>
            <a href={IG} target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-lg bg-mustard p-5 font-bold text-earth transition-transform hover:-translate-y-1"><Instagram className="h-6 w-6 shrink-0" />@curimbaproducoes</a>
          </div>
          <p className="mt-16 border-t border-cream/20 pt-6 text-sm opacity-70">© {new Date().getFullYear()} Curimba Produções Cultural</p>
        </div>
      </footer>
    </div>
  );
}
