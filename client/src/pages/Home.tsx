/**
 * Campus Amplificado — landing editorial juvenil: cartelera bento asimétrica, azul noche y dorado eléctrico.
 * Las acciones de proponer, votar y encontrar recursos permanecen por encima de lo institucional.
 */
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardPenLine,
  ExternalLink,
  FileText,
  Flag,
  GraduationCap,
  Instagram,
  Library,
  Menu,
  MessageCircleMore,
  Moon,
  NotebookTabs,
  Send,
  Sparkles,
  Sun,
  Trophy,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

type ProposalState = "cumplida" | "en proceso" | "próxima";

const proposals: { title: string; detail: string; state: ProposalState; area: string }[] = [
  { title: "Horarios de consulta", detail: "Tablero semanal por materia y curso.", state: "cumplida", area: "Académico" },
  { title: "Torneo intercurso", detail: "Inscripción, reglas y fixture colaborativo.", state: "en proceso", area: "Deportes" },
  { title: "Peña de primavera", detail: "Artistas, bandas y producción hecha en equipo.", state: "próxima", area: "Cultura" },
  { title: "Banco de apuntes", detail: "Un punto único para compartir y pedir material.", state: "en proceso", area: "Académico" },
];

const events = [
  { date: "28 AGO", type: "ASAMBLEA", title: "Traé una idea, salí con un plan", tone: "blue" },
  { date: "04 SEP", type: "DEPORTE", title: "Arranca el torneo: equipos mixtos", tone: "night" },
  { date: "12 SEP", type: "CULTURA", title: "Laboratorio de peña + playlist abierta", tone: "gold" },
];

const resources = [
  { title: "Banco de apuntes", icon: NotebookTabs, note: "Compartir suma", color: "bg-[#005A9C] text-white" },
  { title: "Horarios", icon: CalendarDays, note: "Tu semana clara", color: "bg-[#f5a623] text-[#0d1117]" },
  { title: "Calendario", icon: ClipboardPenLine, note: "Fechas que importan", color: "bg-[#10213a] text-white" },
  { title: "Modelos de pruebas", icon: FileText, note: "Para practicar", color: "bg-[#dcecf8] text-[#0d1117]" },
];

const crew = [
  { role: "Presidencia", year: "5° año", position: "top-6 left-5" },
  { role: "Cultura", year: "4° año", position: "top-11 right-4" },
  { role: "Deportes", year: "4° año", position: "bottom-5 left-11" },
];

function jumpTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [proposalFilter, setProposalFilter] = useState<ProposalState | "todas">("todas");
  const [vote, setVote] = useState("" as "Bandas locales" | "DJ recreo" | "Taller de mural" | "");
  const [voted, setVoted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleProposals = proposals.filter((proposal) => proposalFilter === "todas" || proposal.state === proposalFilter);
  const navLinks = [
    ["La posta", "propuestas"],
    ["El equipo", "equipo"],
    ["Movidas", "agenda"],
    ["Links clave", "herramientas"],
  ] as const;

  const submitIdea = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Tu mensaje quedó registrado", { description: "El buzón está listo para recibir la próxima idea." });
    event.currentTarget.reset();
  };

  const submitVote = () => {
    if (!vote) {
      toast.message("Elegí una opción antes de votar");
      return;
    }
    setVoted(true);
    toast.success("Voto anotado", { description: "Gracias por sumar tu voz a la próxima peña." });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className={`fixed inset-x-0 top-3 z-50 px-3 transition-all duration-300 ${scrolled ? "top-0 px-0" : ""}`}>
        <nav className={`mx-auto flex max-w-6xl items-center justify-between border px-3 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-4 ${scrolled ? "max-w-none rounded-none border-x-0 border-t-0 bg-[#0d1117]/93 shadow-xl dark:bg-[#0d1117]/93 light:bg-[#fffdf8]/94" : "rounded-[1.35rem] border-white/15 bg-[#0d1117]/72 shadow-[0_12px_35px_rgba(0,0,0,.22)] light:border-[#0d1117]/10 light:bg-[#fffdf8]/82"}`}>
          <button onClick={() => jumpTo("inicio")} className="group flex items-center gap-2 text-left" aria-label="Ir al inicio">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#f5a623] shadow-[3px_3px_0_#005A9C] transition-transform duration-200 group-hover:-rotate-6">
              <img src="/manus-storage/centro-ce-symbol_eb5181bc.png" alt="" className="size-7" />
            </span>
            <span className="leading-none">
              <strong className="display-face block text-[0.85rem] tracking-[-0.05em] text-white light:text-[#0d1117]">CENTRO</strong>
              <span className="block pt-0.5 text-[0.56rem] font-extrabold tracking-[0.18em] text-[#f5a623]">SECUNDARIA UNGS</span>
            </span>
          </button>

          <div className="hidden items-center gap-5 lg:flex">
            {navLinks.map(([label, id]) => <button key={id} onClick={() => jumpTo(id)} className="text-xs font-extrabold text-white/70 transition-colors hover:text-[#f5a623] light:text-[#0d1117]/68 light:hover:text-[#005A9C]">{label}</button>)}
          </div>

          <div className="flex items-center gap-1.5">
            <button onClick={toggleTheme} className="grid size-9 place-items-center rounded-xl border border-white/15 text-white/80 transition hover:bg-white/10 light:border-[#0d1117]/10 light:text-[#0d1117] light:hover:bg-[#005A9C]/10" aria-label="Cambiar modo de color">
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <Button onClick={() => jumpTo("participa")} className="hidden rounded-xl bg-[#f5a623] px-4 text-xs font-extrabold text-[#0d1117] shadow-[3px_3px_0_#005A9C] hover:bg-[#ffd26f] sm:inline-flex">
              Dejá tu idea <Sparkles className="ml-1.5 size-3.5" />
            </Button>
            <button onClick={() => setMobileMenuOpen((open) => !open)} className="grid size-9 place-items-center rounded-xl border border-white/15 text-white lg:hidden light:border-[#0d1117]/10 light:text-[#0d1117]" aria-label="Abrir menú" aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="mx-auto mt-2 max-w-6xl rounded-[1.35rem] border border-white/10 bg-[#101827]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
            {navLinks.map(([label, id]) => <button key={id} onClick={() => { jumpTo(id); setMobileMenuOpen(false); }} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-extrabold text-white hover:bg-white/10"><span>{label}</span><ChevronRight className="size-4 text-[#f5a623]" /></button>)}
            <Button onClick={() => { jumpTo("participa"); setMobileMenuOpen(false); }} className="mt-2 w-full rounded-xl bg-[#f5a623] font-extrabold text-[#0d1117]">Dejá tu idea</Button>
          </div>
        )}
      </header>

      <main id="inicio">
        <section className="poster-grid grain relative isolate overflow-hidden bg-[#0d1117] pb-10 pt-28 text-white sm:pb-14 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_9%_18%,rgba(0,90,156,.62),transparent_33%),radial-gradient(circle_at_80%_8%,rgba(245,166,35,.15),transparent_20%)]" />
          <div className="mx-auto grid max-w-6xl gap-9 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
            <div className="relative z-10 pt-3 lg:pt-9">
              <div className="entry section-label"><Zap className="size-3" /> Centro de Estudiantes 2026</div>
              <h1 className="entry entry-delay-1 display-face mt-5 max-w-xl text-[clamp(3.1rem,9vw,7.3rem)] leading-[0.82] text-white">
                EL CENTRO<br />LO HACEMOS<br /><span className="marker-underline text-[#0d1117]">TODXS.</span>
              </h1>
              <p className="entry entry-delay-2 mt-7 max-w-md text-base font-medium leading-7 text-white/76 sm:text-lg">Ideas que llegan, planes que se mueven y una secundaria que se organiza entre todos.</p>
              <div className="entry entry-delay-3 mt-8 flex flex-wrap gap-3">
                <Button onClick={() => jumpTo("participa")} className="rounded-xl bg-[#f5a623] px-5 py-6 text-sm font-extrabold text-[#0d1117] shadow-[4px_4px_0_#005A9C] hover:bg-[#ffd26f]">Dejá tu idea <Sparkles className="ml-2 size-4" /></Button>
                <Button onClick={() => jumpTo("participa")} variant="outline" className="rounded-xl border-white/25 bg-white/5 px-5 py-6 text-sm font-extrabold text-white hover:bg-white/12 hover:text-white">Votá por la peña <Trophy className="ml-2 size-4" /></Button>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-white/55">
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#92e2c6]" /> Hecho entre estudiantes</span>
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#f5a623]" /> Para vivir la escuela</span>
              </div>
            </div>

            <div className="entry entry-delay-2 relative mx-auto w-full max-w-[660px] pb-3 lg:pb-0">
              <div className="absolute -left-1 top-5 z-20 -rotate-6 rounded-xl bg-[#f5a623] px-3 py-2 text-xs font-black text-[#0d1117] shadow-[3px_3px_0_#005A9C]">IDEAS EN MOVIMIENTO</div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#162a44] p-2 shadow-[12px_13px_0_#005A9C] sm:p-3">
                <img src="/manus-storage/centro-hero-campus-amplificado_a54dc287.jpg" alt="Estudiantes organizando ideas en una cartelera del campus" className="aspect-[16/11] w-full rounded-[1.45rem] object-cover" />
                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between rounded-b-[1.4rem] bg-gradient-to-t from-[#0d1117]/82 via-[#0d1117]/5 to-transparent px-4 pb-4 pt-12 sm:inset-x-4 sm:bottom-4">
                  <span className="max-w-[13rem] text-sm font-extrabold leading-5 text-white">Que la escuela no se te pase de largo.</span>
                  <span className="sticker rotate-6 rounded-full bg-[#92e2c6] px-2 py-1 text-[0.6rem] font-black text-[#0d1117]">EN EQUIPO</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 flex size-20 rotate-12 items-center justify-center rounded-2xl border-2 border-[#0d1117] bg-[#f5a623] text-[#0d1117] shadow-[4px_4px_0_#005A9C] sm:-left-7 sm:size-24"><img src="/manus-storage/centro-ce-symbol_eb5181bc.png" alt="Sello CE" className="size-12" /></div>
            </div>
          </div>
        </section>

        <section aria-label="Mini cartelera" className="relative z-10 -mt-1 border-y border-[#0d1117]/10 bg-[#f5a623] text-[#0d1117] dark:border-white/10">
          <div className="mx-auto flex max-w-6xl items-center gap-5 overflow-x-auto px-4 py-3.5 sm:px-6 lg:px-8">
            <span className="shrink-0 text-xs font-black tracking-[0.16em]">LA POSTA DEL DÍA</span>
            <span className="h-5 w-px shrink-0 bg-[#0d1117]/30" />
            <p className="shrink-0 text-sm font-bold">El 28 de agosto hay asamblea: vení con una pregunta, una crítica o una idea.</p>
            <button onClick={() => jumpTo("agenda")} className="ml-auto flex shrink-0 items-center gap-1 rounded-full bg-[#0d1117] px-3 py-1.5 text-xs font-extrabold text-white transition hover:translate-x-0.5">Ver agenda <ArrowRight className="size-3.5" /></button>
          </div>
        </section>

        <section id="propuestas" className="scroll-mt-20 bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="section-label"><Flag className="size-3" /> Semáforo de propuestas</div>
                <h2 className="display-face mt-4 text-4xl leading-[0.92] sm:text-5xl">LO QUE<br /><span className="text-[#005A9C] dark:text-[#78b9ff]">DIJIMOS</span>, SE VE.</h2>
                <p className="mt-5 max-w-sm text-sm font-medium leading-6 text-muted-foreground">No prometemos humo. Acá está el avance de cada cosa que nos pidieron y la próxima que queremos activar.</p>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {(["todas", "cumplida", "en proceso", "próxima"] as const).map((filter) => {
                  const labels = { todas: "Todas", cumplida: "Hechas", "en proceso": "En proceso", próxima: "Se viene" };
                  return <button key={filter} onClick={() => setProposalFilter(filter)} className={`rounded-full border px-3.5 py-2 text-xs font-extrabold transition ${proposalFilter === filter ? "border-[#0d1117] bg-[#0d1117] text-white dark:border-[#f5a623] dark:bg-[#f5a623] dark:text-[#0d1117]" : "border-border bg-card hover:border-[#f5a623]"}`}>{labels[filter]}</button>;
                })}
              </div>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {visibleProposals.map((proposal, index) => {
                const map = {
                  cumplida: { label: "CUMPLIDA", dot: "bg-[#92e2c6]", border: "border-[#92e2c6]/55", icon: Check },
                  "en proceso": { label: "EN PROCESO", dot: "bg-[#f5a623]", border: "border-[#f5a623]/55", icon: Zap },
                  próxima: { label: "PRÓXIMA", dot: "bg-[#78b9ff]", border: "border-[#78b9ff]/55", icon: ArrowRight },
                }[proposal.state];
                const Icon = map.icon;
                return <article key={proposal.title} className={`interactive-lift poster-card relative overflow-hidden rounded-[1.45rem] border bg-card p-5 ${map.border} ${index % 2 ? "md:translate-y-7" : ""}`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex items-center gap-2 text-[0.63rem] font-black tracking-[0.12em] text-muted-foreground"><span className={`size-2.5 rounded-full ${map.dot}`} /> {map.label}</span>
                    <span className="rounded-full bg-muted px-2 py-1 text-[0.62rem] font-extrabold text-muted-foreground">{proposal.area}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold tracking-tight">{proposal.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">{proposal.detail}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-3"><span className="text-xs font-bold text-muted-foreground">Actualizado esta semana</span><Icon className="size-4 text-[#005A9C] dark:text-[#f5a623]" /></div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="equipo" className="scroll-mt-20 bg-[#dcecf8] py-20 text-[#0d1117] sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-9 px-4 sm:px-6 lg:grid-cols-[1.06fr_.94fr] lg:px-8">
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#005A9C] p-5 shadow-[10px_11px_0_#0d1117]">
              <img src="/manus-storage/centro-equipo-stickers_df740828.jpg" alt="Collage de estudiantes que forman parte del Centro" className="absolute inset-0 size-full object-cover mix-blend-luminosity opacity-93" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003e6b] via-transparent to-[#003e6b]/25" />
              <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between">
                <div className="flex justify-between"><span className="sticker -rotate-3 rounded-lg bg-[#f5a623] px-3 py-2 text-xs font-black">NO HAY UNA SOLA VOZ</span><span className="rounded-full bg-white/90 px-3 py-2 text-xs font-black text-[#005A9C]">EL EQUIPO</span></div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {crew.map((member) => <div key={member.role} className="rounded-2xl border border-white/25 bg-[#0d1117]/78 p-3 text-white backdrop-blur-sm"><p className="text-xs font-black text-[#f5a623]">{member.role}</p><p className="mt-1 text-xs font-semibold text-white/72">{member.year}</p></div>)}
                </div>
              </div>
            </div>
            <div className="self-center">
              <div className="section-label border-[#005A9C]/35 text-[#005A9C]"><UsersRound className="size-3" /> El equipo</div>
              <h2 className="display-face mt-4 text-4xl leading-[0.9] sm:text-5xl">UNA MESA<br />CON MÁS <span className="text-[#005A9C]">SILLAS.</span></h2>
              <p className="mt-6 max-w-md text-base font-semibold leading-7 text-[#0d1117]/70">El Centro se organiza por comisiones, años y propuestas. Si tenés ganas de sumarte, no hace falta venir con todo resuelto.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#0d1117]/12 bg-white/78 p-4"><UsersRound className="size-5 text-[#005A9C]" /><p className="mt-5 text-sm font-extrabold">Comisiones abiertas</p><p className="mt-1 text-xs font-semibold leading-5 text-[#0d1117]/60">Cultura, deporte, convivencia y acompañamiento.</p></div>
                <div className="rounded-2xl border border-[#0d1117]/12 bg-[#f5a623] p-4"><MessageCircleMore className="size-5" /><p className="mt-5 text-sm font-extrabold">Hablanos directo</p><p className="mt-1 text-xs font-semibold leading-5 text-[#0d1117]/65">Dejá tu interés y te contamos cuándo nos juntamos.</p></div>
              </div>
              <Button onClick={() => jumpTo("participa")} className="mt-6 rounded-xl bg-[#0d1117] px-5 py-6 text-sm font-extrabold text-white hover:bg-[#005A9C]">Quiero sumarme <ArrowRight className="ml-2 size-4" /></Button>
            </div>
          </div>
        </section>

        <section id="agenda" className="scroll-mt-20 bg-[#0d1117] py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><div className="section-label"><CalendarDays className="size-3" /> Agenda y movidas</div><h2 className="display-face mt-4 text-4xl leading-[0.92] sm:text-5xl">EL RECREO<br />TAMBIÉN <span className="text-[#f5a623]">ORGANIZA.</span></h2></div>
              <button onClick={() => toast.message("Calendario completo", { description: "Próximamente vas a poder sumarlo a tu calendario." })} className="flex w-fit items-center gap-2 text-sm font-extrabold text-white/70 transition hover:text-[#f5a623]">Ver todo el calendario <ExternalLink className="size-4" /></button>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {events.map((event, i) => {
                const palette = event.tone === "blue" ? "bg-[#005A9C]" : event.tone === "gold" ? "bg-[#f5a623] text-[#0d1117]" : "bg-[#152942]";
                return <article key={event.title} className={`interactive-lift ${palette} relative min-h-[260px] overflow-hidden rounded-[1.75rem] p-6 shadow-[6px_6px_0_rgba(255,255,255,.18)]`}>
                  <span className="text-xs font-black tracking-[0.16em]">{event.date}</span>
                  <span className="absolute right-5 top-5 rounded-full border border-current/30 px-2.5 py-1 text-[0.6rem] font-black">{event.type}</span>
                  <h3 className="display-face mt-16 max-w-[15rem] text-3xl leading-[.94]">{event.title}</h3>
                  <button onClick={() => toast.message("Anotación guardada", { description: "Te vamos a avisar cuando haya novedades." })} className="absolute bottom-5 left-6 flex items-center gap-1.5 text-xs font-extrabold underline-offset-4 hover:underline">Me interesa <ArrowRight className="size-3.5" /></button>
                  <span className="absolute -bottom-7 -right-2 text-8xl font-black opacity-15">0{i + 1}</span>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[.86fr_1.14fr] lg:px-8">
            <div className="rounded-[2rem] bg-[#f5a623] p-6 text-[#0d1117] shadow-[9px_9px_0_#005A9C] sm:p-8">
              <div className="flex items-center justify-between"><GraduationCap className="size-8" /><span className="sticker rotate-3 rounded-full px-3 py-1.5 text-[.62rem] font-black">CONEXIÓN UNGS</span></div>
              <h2 className="display-face mt-14 text-4xl leading-[.9] sm:text-5xl">EL CAMPUS ES MÁS GRANDE QUE EL AULA.</h2>
              <p className="mt-6 max-w-sm text-sm font-bold leading-6 text-[#0d1117]/72">Hay biblioteca, talleres, espacios para estudiar y lugares para merendar. Una guía corta para ubicarte y aprovecharlos.</p>
              <Button onClick={() => toast.message("Guía ampliada", { description: "La versión completa estará disponible en los links clave." })} className="mt-8 rounded-xl bg-[#0d1117] px-5 py-6 text-sm font-extrabold text-white hover:bg-[#005A9C]">Ver guía rápida <ArrowRight className="ml-2 size-4" /></Button>
            </div>
            <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#dcecf8] shadow-[9px_9px_0_rgba(0,90,156,.18)]">
              <img src="/manus-storage/centro-campus-guia_3fde1d46.jpg" alt="Estudiante explorando espacios del campus" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-6 sm:bottom-6">
                {[{ icon: Library, label: "Biblioteca" }, { icon: BookOpen, label: "Talleres" }, { icon: CircleHelp, label: "Orientación" }].map(({ icon: Icon, label }) => <div key={label} className="rounded-2xl bg-[#0d1117]/88 p-3 text-center text-white backdrop-blur-sm"><Icon className="mx-auto size-4 text-[#f5a623]" /><p className="mt-1 text-[.62rem] font-extrabold">{label}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="herramientas" className="scroll-mt-20 bg-[#edf6fb] py-20 text-[#0d1117] sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl"><div className="section-label border-[#005A9C]/35 text-[#005A9C]"><Sparkles className="size-3" /> Caja de herramientas</div><h2 className="display-face mt-4 text-4xl leading-[.9] sm:text-5xl">LO QUE NECESITÁS, SIN DAR MIL VUELTAS.</h2></div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map(({ title, icon: Icon, note, color }, index) => <button key={title} onClick={() => toast.message(`${title}: próximamente`, { description: "Este acceso se conectará cuando estén listos los enlaces oficiales." })} className={`interactive-lift group relative min-h-[184px] rounded-[1.55rem] p-5 text-left shadow-[5px_5px_0_#0d1117] ${color} ${index === 1 ? "sm:-translate-y-5" : index === 3 ? "sm:translate-y-5" : ""}`}><span className="absolute right-4 top-4 text-[.58rem] font-black tracking-[.15em] opacity-55">CE/ 0{index + 1}</span><div className="flex items-start justify-between"><Icon className="size-7" /><ArrowUpRightIcon /></div><p className="mt-12 text-lg font-extrabold leading-5">{title}</p><p className="mt-1 text-xs font-bold opacity-70">{note}</p></button>)}
            </div>
          </div>
        </section>

        <section id="participa" className="scroll-mt-20 bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="section-label"><MessageCircleMore className="size-3" /> Zona de participación</div><h2 className="display-face mt-4 text-4xl leading-[.9] sm:text-5xl">TU IDEA NO QUEDA<br />EN <span className="text-[#005A9C] dark:text-[#78b9ff]">VISTO.</span></h2></div><p className="max-w-sm text-sm font-semibold leading-6 text-muted-foreground">Elegí, sugerí o descargá una inquietud. Todas las entradas ayudan a decidir por dónde seguir.</p></div>
            <div className="mt-9 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
              <div className="poster-card overflow-hidden rounded-[1.75rem] bg-[#0d1117] p-6 text-white">
              <div className="flex items-start justify-between"><span className="sticker -rotate-2 rounded-full bg-[#f5a623] px-3 py-1.5 text-[.62rem] font-black text-[#0d1117]">CE/ ENCUESTA EXPRESS</span><Trophy className="size-5 text-[#f5a623]" /></div>
                <h3 className="display-face mt-9 text-3xl leading-[.95]">¿QUÉ TE COPA PARA LA PEÑA?</h3>
                <div className="mt-6 space-y-2">
                  {(["Bandas locales", "DJ recreo", "Taller de mural"] as const).map((choice) => <button key={choice} onClick={() => !voted && setVote(choice)} disabled={voted} className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-extrabold transition ${vote === choice ? "border-[#f5a623] bg-[#f5a623] text-[#0d1117]" : "border-white/15 bg-white/5 text-white hover:border-white/50"}`}><span>{choice}</span><span className={`grid size-5 place-items-center rounded-full border ${vote === choice ? "border-[#0d1117]" : "border-white/30"}`}>{vote === choice && <Check className="size-3.5" />}</span></button>)}
                </div>
                <Button onClick={submitVote} disabled={voted} className="mt-5 w-full rounded-xl bg-[#005A9C] py-6 font-extrabold text-white hover:bg-[#1678bd] disabled:bg-[#92e2c6] disabled:text-[#0d1117]">{voted ? "Voto anotado" : "Votar"}</Button>
              </div>
              <form onSubmit={submitIdea} className="rounded-[1.75rem] border border-border bg-card p-6 shadow-[7px_7px_0_rgba(0,90,156,.15)] sm:p-7">
                <div className="flex items-center justify-between"><div><span className="text-[.64rem] font-black tracking-[.12em] text-[#005A9C] dark:text-[#f5a623]">BUZÓN ANÓNIMO</span><h3 className="mt-2 text-2xl font-extrabold tracking-tight">¿Qué te gustaría cambiar?</h3></div><Send className="size-6 text-[#005A9C] dark:text-[#f5a623]" /></div>
                <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">No hace falta dejar nombre. Contanos qué pasa, dónde y qué imaginás para mejorarlo.</p>
                <label className="mt-6 block text-xs font-extrabold" htmlFor="idea">Tu mensaje</label>
                <textarea id="idea" required minLength={8} placeholder="Ej.: estaría bueno tener..." className="mt-2 min-h-32 w-full resize-none rounded-xl border border-border bg-muted/40 p-4 text-sm font-medium outline-none transition placeholder:text-muted-foreground/70 focus:border-[#005A9C] focus:ring-2 focus:ring-[#005A9C]/15 dark:focus:border-[#f5a623] dark:focus:ring-[#f5a623]/15" />
                <Button type="submit" className="mt-4 rounded-xl bg-[#f5a623] px-5 py-6 font-extrabold text-[#0d1117] shadow-[3px_3px_0_#005A9C] hover:bg-[#ffd26f]">Mandar al buzón <Send className="ml-2 size-4" /></Button>
              </form>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0d1117] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="text-[.65rem] font-black tracking-[.14em] text-[#f5a623]">DE LA ESCUELA AL FEED</span><h2 className="display-face mt-3 text-3xl leading-[.92] sm:text-4xl">LO QUE SE MUEVE, SE COMPARTE.</h2></div><button onClick={() => toast.message("Instagram del Centro", { description: "Sumá el enlace oficial cuando esté disponible." })} className="flex w-fit items-center gap-2 text-sm font-extrabold text-white/72 transition hover:text-[#f5a623]"><Instagram className="size-4" /> Seguir en Instagram</button></div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Asamblea", "Torneo", "Apuntes", "Peña"].map((label, index) => <button key={label} onClick={() => toast.message(`${label}: próxima publicación`)} className={`interactive-lift relative aspect-square overflow-hidden rounded-2xl border border-white/10 p-4 text-left ${["bg-[#005A9C]", "bg-[#152942]", "bg-[#005A9C]", "bg-[#f5a623] text-[#0d1117]"][index]} ${index === 1 ? "sm:translate-y-5" : index === 2 ? "sm:-translate-y-4" : ""}`}><span className="absolute right-3 top-3 text-[.58rem] font-black tracking-[.12em] opacity-70">CE/ POST 0{index + 1}</span><span className="display-face absolute bottom-4 left-4 max-w-[8rem] text-2xl leading-[.88]">{label}</span><Instagram className="absolute bottom-4 right-4 size-4 opacity-55" /></button>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#080c12] py-7 text-white/55">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-lg bg-[#f5a623]"><img src="/manus-storage/centro-ce-symbol_eb5181bc.png" alt="Sello CE" className="size-5" /></span><span><strong className="text-[#f5a623]">CE/</strong> Centro de Estudiantes · Secundaria UNGS</span></div><p>Hecho para participar, proponer y mover la escuela.</p></div>
      </footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowDownRight className="size-5 rotate-180 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />;
}
