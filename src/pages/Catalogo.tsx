import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Filter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import lobbyWallpaper from "@/assets/lobby-wallpaper.webp";

type Mentoria = {
  id: string;
  concurso: string;
  sigla: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
  price: string;
  gradient: string;
  featured?: boolean;
  categoria: "Oficial" | "Praça" | "Federal";
};

const MENTORIAS: Mentoria[] = [
  { id: "afa", concurso: "Academia da Força Aérea", sigla: "AFA", nivel: "Avançado", price: "R$ 297,00", gradient: "from-sky-600 via-blue-800 to-slate-900", featured: true, categoria: "Oficial" },
  { id: "en", concurso: "Escola Naval", sigla: "EN", nivel: "Avançado", price: "R$ 297,00", gradient: "from-blue-700 via-blue-950 to-slate-900", categoria: "Oficial" },
  { id: "efomm", concurso: "Marinha Mercante", sigla: "EFOMM", nivel: "Avançado", price: "R$ 297,00", gradient: "from-cyan-700 via-blue-900 to-slate-900", featured: true, categoria: "Oficial" },
  { id: "espcex", concurso: "Escola Preparatória", sigla: "EsPCEx", nivel: "Avançado", price: "R$ 297,00", gradient: "from-emerald-800 via-green-950 to-slate-900", categoria: "Oficial" },
  { id: "eear", concurso: "Especialistas da Aeronáutica", sigla: "EEAR", nivel: "Intermediário", price: "R$ 197,00", gradient: "from-indigo-700 via-slate-900 to-black", categoria: "Praça" },
  { id: "epcar", concurso: "Preparatório de Cadetes do Ar", sigla: "EPCAR", nivel: "Intermediário", price: "R$ 197,00", gradient: "from-sky-800 via-indigo-950 to-slate-900", categoria: "Oficial" },
  { id: "esa", concurso: "Escola de Sargentos das Armas", sigla: "ESA", nivel: "Intermediário", price: "R$ 197,00", gradient: "from-amber-800 via-yellow-950 to-slate-900", categoria: "Praça" },
  { id: "cn", concurso: "Colégio Naval", sigla: "CN", nivel: "Básico", price: "R$ 147,00", gradient: "from-blue-800 via-slate-900 to-black", categoria: "Oficial" },
  { id: "cfn", concurso: "Fuzileiros Navais", sigla: "CFN", nivel: "Básico", price: "R$ 147,00", gradient: "from-teal-800 via-slate-900 to-black", categoria: "Praça" },
  { id: "pf", concurso: "Polícia Federal", sigla: "PF", nivel: "Avançado", price: "R$ 297,00", gradient: "from-slate-700 via-neutral-900 to-black", categoria: "Federal" },
];

const CATEGORIAS = ["Todas", "Oficial", "Praça", "Federal"] as const;

const Catalogo = () => {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIAS)[number]>("Todas");

  const filtered = useMemo(() => {
    return MENTORIAS.filter((m) => {
      const matchesQ =
        !query ||
        m.concurso.toLowerCase().includes(query.toLowerCase()) ||
        m.sigla.toLowerCase().includes(query.toLowerCase());
      const matchesC = cat === "Todas" || m.categoria === cat;
      return matchesQ && matchesC;
    });
  }, [query, cat]);

  return (
    <div className="min-h-screen bg-background relative theme-mentoria">
      {/* Fixed wallpaper */}
      <div
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${lobbyWallpaper})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Back to lobby */}
      <Link
        to="/"
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-accent/30 text-foreground hover:border-accent hover:bg-card transition-all text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Lobby
      </Link>

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${lobbyWallpaper})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.12),transparent_60%)]" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase mb-6">
                <Star className="w-3.5 h-3.5 fill-current" /> Mentorias por concurso
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                Mentorias para organizar{" "}
                <span className="bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent">
                  sua aprovação
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                Escolha a mentoria que se encaixa no seu momento e avance com direcionamento
                individual, plano de metas e suporte direto com o mentor.
              </p>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="relative -mt-6 md:-mt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto rounded-2xl border border-accent/30 bg-card/80 backdrop-blur-xl p-4 md:p-6 shadow-[0_10px_40px_-10px_hsl(var(--accent)/0.35)]">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                  <Filter className="w-4 h-4 text-accent" />
                  <span className="hidden md:inline">
                    {filtered.length} mentoria{filtered.length !== 1 && "s"}
                  </span>
                </div>

                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar por concurso (AFA, EN, EFOMM...)"
                    className="pl-9 bg-background/60 border-border"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {CATEGORIAS.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCat(c)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        cat === c
                          ? "bg-accent text-accent-foreground border-accent shadow-[0_0_20px_hsl(var(--accent)/0.4)]"
                          : "bg-transparent text-muted-foreground border-border hover:border-accent/60 hover:text-foreground"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GRID */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filtered.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">
                  Nenhuma mentoria encontrada.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                  {filtered.map((m) => (
                    <article
                      key={m.id}
                      className={`group relative rounded-2xl overflow-hidden border bg-card/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                        m.featured
                          ? "border-accent shadow-[0_0_30px_hsl(var(--accent)/0.25)]"
                          : "border-border hover:border-accent/60"
                      }`}
                    >
                      {/* Cover */}
                      <div className={`relative h-44 md:h-52 bg-gradient-to-br ${m.gradient} overflow-hidden`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.75)_100%)]" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur border border-white/20 text-white">
                            Mentoria
                          </span>
                        </div>
                        {m.featured && (
                          <div className="absolute top-3 right-3">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground flex items-center gap-1">
                              <Star className="w-2.5 h-2.5 fill-current" /> Top
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <div className="text-white/70 text-[10px] uppercase tracking-[0.2em] mb-1">
                            {m.categoria}
                          </div>
                          <div className="text-4xl md:text-5xl font-black text-white leading-none drop-shadow-lg">
                            {m.sigla}
                          </div>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-4 md:p-5 flex flex-col gap-3">
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">
                            Mentoria {m.sigla}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {m.concurso} · {m.nivel}
                          </p>
                        </div>

                        <div className="flex items-baseline gap-1">
                          <span className="text-[11px] text-muted-foreground">a partir de</span>
                          <span className="text-xl font-bold text-accent">{m.price}</span>
                        </div>

                        <div className="flex gap-2 pt-1">
                          <Link to="/mentoria" className="flex-1">
                            <Button variant="outline" size="sm" className="w-full border-accent/40 text-foreground hover:bg-accent/10">
                              Detalhes
                            </Button>
                          </Link>
                          <Link to="/mentoria" className="flex-1">
                            <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                              Assinar
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-border/30">
          <div className="container mx-auto px-4 text-center text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} FULL · Catálogo de Mentorias (teste)
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Catalogo;