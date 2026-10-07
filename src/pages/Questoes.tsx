import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SeamMarquee } from "@/components/SeamMarquee";
import { ConnectedBenefits } from "@/components/ConnectedBenefits";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Play, CheckCircle2, Database, Layers, GraduationCap, TrendingUp, Brain, Calendar, XCircle, Shield, Instagram, Home, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/logo-silver.webp";
import bryanPhoto from "@/assets/bryan-photo.webp";
import metodoGridBanner from "@/assets/questoes-metodo-grid.webp";
import questoesHero from "/public/lovable-uploads/questoes-hero-wallpaper.jpg";
import flashcardsCloseupBanner from "@/assets/questoes-flashcards-closeup.jpg";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521992104885";

const SectionHead = ({ label, title, desc }: { label: string; title: React.ReactNode; desc?: string }) => (
  <div className="mb-10 md:mb-14">
    <div className="flex items-center gap-3 mb-5">
      <span className="h-px w-10 bg-accent/70" />
      <span className="font-mono text-[10px] md:text-xs uppercase tracking-normal text-muted-foreground">{label}</span>
    </div>
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-normal leading-[1.02]">{title}</h2>
    {desc && <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">{desc}</p>}
  </div>
);

const FloatingWhatsApp = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
      <Button
        size="lg"
        className="rounded-lg font-mono text-xs md:text-sm font-bold tracking-normal px-5 py-6 shadow-glow-beige"
        onClick={() => window.open(WHATSAPP_URL, "_blank")}
      >
        <MessageCircle className="w-4 h-4" />
        FALE COMIGO
      </Button>
    </div>
  );
};

/* ---------- página ---------- */

const Questoes = () => {
  const scrollToPlans = () => {
    document.getElementById("planos-questoes")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollTo = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [vslPlaying, setVslPlaying] = React.useState(false);


  const erros = [
    {
      n: "01",
      title: "Passa mais tempo decidindo do que estudando",
      desc: "Sem plano de metas e sem ordem certa, 60% do seu tempo vai embora só decidindo o que fazer. Esforço grande, nota parada, sensação de andar em círculos.",
    },
    {
      n: "02",
      title: "Some na primeira semana ruim",
      desc: "Dois dias firme, para três, volta com culpa e repete o ciclo. Sem alguém puxando, a rotina desmorona. E constância é o que separa quem passa de quem fica.",
    },
    {
      n: "03",
      title: "Faz questão solta e não sabe o que errou",
      desc: "Caça PDF perdido, resolve sem critério, vê o gabarito e segue achando que aprendeu. Chega na prova sem repertório e sem saber se evoluiu, porque nunca treinou no padrão real da banca.",
    },
  ];

  const planos = [
    {
      nome: "TRIMESTRAL",
      destaque: false,
      preco: "R$ 56,04",
      precoAntigo: "R$ 59,90",
      periodo: "/mês",
      parcela: "ou R$ 157,00 à vista",
      total: "Comece com baixo compromisso",
      link: "https://pay.kiwify.com.br/HQCYyoR",
      cta: "QUERO O TRIMESTRAL",
    },
    {
      nome: "SEMESTRAL",
      destaque: false,
      preco: "R$ 50,07",
      precoAntigo: "R$ 56,04",
      periodo: "/mês",
      parcela: "ou R$ 266,90 à vista",
      total: "Economize R$ 35,82 vs Trimestral",
      link: "https://pay.kiwify.com.br/5Y3FKc4",
      cta: "QUERO O SEMESTRAL",
    },
    {
      nome: "ANUAL",
      destaque: true,
      preco: "R$ 38,99",
      precoAntigo: "R$ 56,04",
      periodo: "/mês",
      parcela: "ou R$ 377,00 à vista",
      total: "Economize R$ 204,60/ano vs Trimestral",
      link: "https://pay.kiwify.com.br/QM4Ph8c",
      cta: "QUERO O ANUAL",
    },
  ];

  return (
    <div className="theme-questoes min-h-screen bg-background text-foreground font-sans">
      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-12 md:h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={mentoriaLogo} alt="FULL" className="h-10 w-10 object-contain" />
            <span className="font-mono text-xs uppercase">FULL QUESTÕES</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 font-mono text-[11px] uppercase tracking-normal text-muted-foreground">
            <Button variant="ghost" onClick={scrollTo("metodo")} className="h-auto px-0 text-xs hover:text-accent">Método</Button>
            <Button variant="ghost" onClick={scrollTo("plataforma")} className="h-auto px-0 text-xs hover:text-accent">Plataforma</Button>
            <Button variant="ghost" onClick={scrollTo("planos-questoes")} className="h-auto px-0 text-xs hover:text-accent">Planos</Button>
            <Button variant="ghost" onClick={scrollTo("faq")} className="h-auto px-0 text-xs hover:text-accent">FAQ</Button>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-normal hover:text-accent transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Menu</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="questoes-hero relative flex items-center overflow-hidden">
        <img src={questoesHero} alt="Bryan Hibeck e os conteúdos do Método FULL" className="questoes-hero-image absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="questoes-hero-shade absolute inset-0" />
        <div className="absolute inset-0 z-[1] term-grid opacity-80 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 py-24">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase text-accent mb-5">Método, direção e treino de verdade</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[1.02] mb-6">
              FULL QUESTÕES
              <span className="block bg-gradient-hero-text bg-clip-text text-transparent mt-3 text-3xl sm:text-4xl md:text-5xl">Toda aprovação é feita de questões.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              Chega de estudar perdido e sem material. O <strong className="text-foreground">Banco FULL</strong> te entrega um plano de metas pronto, flashcards de todos os assuntos e questões comentadas em vários níveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" onClick={scrollToPlans} className="font-mono text-xs font-bold rounded-lg px-7 py-6">
                QUERO ESTUDAR COM O FULL <ArrowRight className="w-4 h-4 shrink-0" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open(WHATSAPP_URL, "_blank")} className="font-mono text-xs font-bold rounded-lg px-7 py-6 border-accent/40 bg-background/50">
                <MessageCircle className="w-4 h-4 shrink-0" /> FALAR COMIGO
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-xs font-mono text-muted-foreground">
              <span>+10.000 questões comentadas</span>
              <span>+2.000 flashcards</span>
              <span>7 dias de garantia</span>
            </div>
          </div>
        </div>
      </section>

      {/* faixa */}
      <SeamMarquee text="FULL QUESTÕES" />

      {/* ===== 01 / ERROS ===== */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 term-grid opacity-60" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <SectionHead
              label="Por que tanta gente trava"
              title={<>Não é talento.<br />É técnica e esforço.</>}
              desc="Quem classifica não estuda mais. Estuda diferente. Quase toda reprovação cai em um destes três erros, e o problema raramente é falta de esforço."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {erros.map((e, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="h-full border border-border bg-card/60 p-6 hover:border-foreground/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-border/60">
                    <span className="font-mono text-xs text-accent">O QUE TE TRAVA</span>
                    <XCircle className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 leading-snug">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-14 md:mt-20 max-w-3xl">
              <p className="font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-normal mb-4">E quando alguém junta direção, constância e treino no lugar certo?</p>
              <p className="text-2xl md:text-4xl font-black uppercase leading-tight">
                A aprovação vem. <span className="bg-gradient-hero-text bg-clip-text text-transparent">E é pra isso que existe o FULL Questões.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SeamMarquee text="FULL QUESTÕES" />

      {/* ===== 02 / PLATAFORMA (VSL) ===== */}
      <section id="plataforma" className="py-16 md:py-24 relative overflow-hidden scroll-mt-16">
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal>
            <SectionHead
              label="Seu próximo passo"
              title={<>Conheça a plataforma<br />por dentro</>}
              desc="Em poucos minutos eu te mostro cada ferramenta, como o nivelamento funciona e por que ele encurta meses de estudo no escuro."
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto border border-border bg-card/60">
              <div className="relative aspect-video bg-background">
                {vslPlaying ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/q0UI_9flCFQ?autoplay=1&rel=0&modestbranding=1"
                    title="Conheça a plataforma FULL Questões"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setVslPlaying(true)}
                    className="group absolute inset-0 w-full h-full cursor-pointer"
                    aria-label="Assistir ao vídeo da plataforma"
                  >
                    <img
                      src="https://img.youtube.com/vi/q0UI_9flCFQ/maxresdefault.jpg"
                      alt="Tour pela plataforma FULL Questões"
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-accent text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 md:w-9 md:h-9 fill-current ml-1" />
                      </div>
                      <p className="font-mono text-[10px] md:text-xs uppercase tracking-normal text-foreground">Clique para assistir o tour completo</p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Button size="lg" onClick={scrollToPlans} className="font-mono text-xs md:text-sm font-bold tracking-normal rounded-lg px-8 py-6">
                QUERO ACESSAR A PLATAFORMA →
              </Button>
              <p className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-normal mt-3">Acesso imediato · 7 dias de garantia</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== DENTRO DA PLATAFORMA ===== */}
      <section className="py-16 md:py-24 relative overflow-hidden border-t border-border/40">
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <SectionHead
              label="O que você desbloqueia"
              title={<>Tudo o que você vê aqui<br />é real</>}
              desc="Não é mockup. É a plataforma que centenas de alunos já estão usando hoje pra estudar com método."
            />
          </ScrollReveal>

          <div className="space-y-6 md:space-y-10">
            <ScrollReveal variant="left">
              <div className="relative group border border-border hover:border-foreground/50 transition-all duration-300">
                <img src={metodoGridBanner} alt="Método FULL: aulas e conteúdos da plataforma" className="w-full h-auto object-cover" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-background/95 via-background/70 to-transparent">
                  <p className="font-mono text-[10px] md:text-xs uppercase tracking-normal text-foreground/70 mb-2">Método FULL incluso</p>
                  <h3 className="text-xl md:text-3xl font-black uppercase text-foreground mb-1">Aulas que ensinam como estudar</h3>
                  <p className="text-foreground/80 text-sm md:text-base">Introdução ao método, como filtrar questões, como usar flashcards, como revisar e simular. Tudo destrinchado.</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <ScrollReveal variant="left">
                <div className="relative h-full group border border-border hover:border-foreground/50 transition-all duration-300 min-h-[340px] md:min-h-[420px] overflow-hidden">
                  <img src={flashcardsCloseupBanner} alt="+2.000 flashcards Anki" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                    <p className="font-mono text-[10px] md:text-xs uppercase tracking-normal text-foreground/70 mb-2">+2.000 cards</p>
                    <h3 className="text-xl md:text-2xl font-black uppercase text-foreground mb-1">Flashcards Anki de tudo que cai</h3>
                    <p className="text-foreground/80 text-sm">Revisão espaçada que fixa de verdade sem reler matéria de novo.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="right">
                <div className="relative h-full border border-border bg-card/60 p-6 md:p-8 min-h-[340px] md:min-h-[420px] flex flex-col justify-between hover:border-foreground/50 transition-all duration-300">
                  <div className="space-y-4">
                    <p className="font-mono text-[10px] md:text-xs uppercase tracking-normal text-muted-foreground">Banco completo</p>
                    <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight">+10.000 questões resolvidas, todas comentadas</h3>
                    <ul className="space-y-2 pt-2">
                      {[
                        "Bancas civis e militares (ESA, EAM, EsPCEx, EFOMM, AFA, EEAR e mais)",
                        "Filtros por matéria, assunto, banca, ano e dificuldade",
                        "Resolução passo a passo. Você não trava mais quando erra.",
                        "Listas personalizadas e simulados cronometrados",
                      ].map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-foreground flex-shrink-0 mt-1" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-5 mt-5 border-t border-border">
                    <div>
                      <p className="text-2xl md:text-3xl font-black">10k+</p>
                      <p className="font-mono text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-normal">Questões</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-black">2k+</p>
                      <p className="font-mono text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-normal">Flashcards</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-black">50+</p>
                      <p className="font-mono text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-normal">Bancas</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button size="lg" onClick={scrollToPlans} className="font-mono text-xs md:text-sm font-bold tracking-normal rounded-lg px-8 py-6">
                DESTRAVAR TUDO ISSO →
              </Button>
              <p className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-normal mt-3">Acesso imediato · 7 dias de garantia</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 03 / PILARES ===== */}
      <section id="metodo" className="py-16 md:py-24 border-t border-border/40 relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 term-grid opacity-40" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <SectionHead
              label="Os pilares do FULL"
              title={<>Tudo que você precisa<br />para passar</>}
              desc="Três pilares que se conectam para transformar estudo em aprovação."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { abbr: "NIV", badge: "NOVO", title: "Nivelamento Automático", desc: "Bancas civis e militares comentadas. Filtre por matéria, assunto, banca, ano e dificuldade." },
              { abbr: "MET", badge: "EXCLUSIVO", title: "Método FULL Incluso", desc: "Videoaulas ensinando como estudar, filtrar, revisar e se organizar. Plano de metas, livro da metodologia e grupo de suporte." },
              { abbr: "QST", badge: "+10.000", title: "Questões Resolvidas", desc: "Bancas civis e militares com resolução detalhada passo a passo. Você não fica mais travado quando erra." },
            ].map((p, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="h-full border border-border bg-card/60 hover:border-foreground/50 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 font-mono text-[10px] uppercase tracking-normal">
                    <span className="text-muted-foreground">{p.title}</span>
                    <span className="text-foreground">{p.badge}</span>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold uppercase mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="px-5 py-3 border-t border-border/60 font-mono text-[10px] uppercase tracking-normal text-muted-foreground">
                    <span className="text-accent">Incluso no seu acesso</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 04 / CICLO ===== */}
      <section className="py-16 md:py-24 border-t border-border/40 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal>
            <SectionHead
              label="Tudo conectado"
              title={<>Um ciclo que te leva à<br />aprovação no automático</>}
              desc="Você não precisa pensar no que estudar hoje. A plataforma encaixa cada etapa. Você só executa e vê a nota subir toda semana."
            />
          </ScrollReveal>

          <ConnectedBenefits
            items={[
              { icon: Calendar, title: "Meta semanal pronta", desc: "Toda segunda você abre a plataforma e já sabe o que estudar. Zero tempo perdido decidindo.", next: "vira lista" },
              { icon: Database, title: "Listas com nivelamento automático", desc: "Questões organizadas por dificuldade. Você sobe de nível conforme acerta, sem furar etapa.", next: "explica o erro" },
              { icon: Brain, title: "Resolução comentada passo a passo", desc: "Errou uma vez? A resolução te mostra exatamente onde travou, sem você precisar caçar PDF.", next: "vira flashcard" },
              { icon: Layers, title: "Flashcards do que mais cai", desc: "+2.000 cards Anki com revisão espaçada que fixa de verdade sem reler tudo de novo.", next: "mede com dados" },
              { icon: TrendingUp, title: "Painel de desempenho", desc: "Gráficos por matéria, evolução semanal e ranking. A próxima meta nasce do que os números mostram.", next: "fecha o ciclo" },
            ]}
          />

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button size="lg" onClick={scrollToPlans} className="font-mono text-xs md:text-sm font-bold tracking-normal rounded-lg px-8 py-6">
                QUERO ENTRAR NESSE CICLO →
              </Button>
              <p className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-normal mt-4">Acesso imediato · Garantia de 7 dias</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 05 / OPERADOR ===== */}
      <section className="py-16 md:py-24 border-t border-border/40 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal>
            <SectionHead
              label="Experiência de quem viveu a prova"
              title={<>Quem tá do seu lado</>}
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="border border-border bg-card/60">
              <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-10 p-6 md:p-10 items-center">
                <div className="mx-auto md:mx-0 max-w-[260px]">
                  <img src={bryanPhoto} alt="Bryan Hibeck" className="w-full object-cover border border-border" loading="lazy" />
                </div>
                <div className="space-y-3">
                  <p className="font-mono text-[10px] uppercase tracking-normal text-muted-foreground">Criador do Método FULL</p>
                  <h3 className="text-2xl md:text-3xl font-black uppercase">Bryan Hibeck</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Meu nome é <strong className="text-foreground">Bryan Hibeck</strong>, nascido em 17/03/2004. Ganhei destaque no mundo dos concursos por ter resolvido <strong className="text-foreground">+10.000 questões</strong> durante meus <strong className="text-foreground">8 meses de preparação</strong> em 2024.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Fui aprovado na <strong className="text-foreground">AFA como 10º colocado geral</strong> (01 de Infantaria, 04 de Intendência e 05 de Aviação), na <strong className="text-foreground">EFOMM como 08º colocado</strong> e na <strong className="text-foreground">EEAr (BCT) como 15º colocado</strong>.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Estudo concurso militar desde 2021 e consegui minha primeira classificação na <strong className="text-foreground">EPCAr</strong> estudando apenas 3 meses, ainda no mesmo ano. Vivi cada bastidor, errei muito, ajustei o método e hoje meu trabalho é te entregar o atalho que eu não tive.
                  </p>
                  <p className="text-sm md:text-base text-foreground font-semibold">
                    Minha missão agora é simples: te entregar o passo a passo que me levou ao topo.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 pt-2 font-mono text-[10px] md:text-xs uppercase tracking-normal text-muted-foreground">
                    <span>Aprovação AFA</span>
                    <span>Aprovação EFOMM</span>
                    <span>Aprovação EEAr</span>
                    <span>Classificação EPCAr</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 06 / RESULTADOS ===== */}
      <section className="py-16 md:py-24 border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-6 md:mb-10">
          <ScrollReveal>
            <SectionHead
              label="Alunos FULL"
              title={<>Resultados que comprovam</>}
              desc="A prova de que o método funciona."
            />
          </ScrollReveal>
        </div>

        <div className="relative w-full h-[45vh] md:h-[65vh] overflow-hidden">
          <div className="absolute inset-0 flex animate-scroll-left" style={{ width: "max-content" }}>
            {[...Array(2)].flatMap((_, dup) =>
              ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((n, i) => (
                <div key={`${dup}-${i}`} className="h-[45vh] md:h-[65vh] w-auto flex-shrink-0">
                  <img src={`/lovable-uploads/feedback-${n}.jpg`} alt={`Depoimento ${n}`} className="h-full w-auto object-contain" loading="lazy" decoding="async" />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          <ScrollReveal>
            <div className="text-center">
              <Button size="lg" onClick={scrollToPlans} className="font-mono text-xs md:text-sm font-bold tracking-normal rounded-lg px-8 py-6">
                QUERO COMEÇAR AGORA →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 07 / PLANOS ===== */}
      <section id="planos-questoes" className="py-16 md:py-24 border-t border-border/40 relative overflow-hidden scroll-mt-16">
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <SectionHead
              label="Seu acesso ao FULL"
              title={<>Escolha seu plano</>}
              desc="Mesmo acesso completo. Quanto mais tempo, mais você economiza."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto items-stretch">
            {planos.map((plano, i) => (
              <ScrollReveal
                key={i}
                delay={i * 100}
                className={
                  i === 0
                    ? "order-3 lg:order-1"
                    : i === 2
                    ? "order-1 lg:order-3"
                    : "order-2 lg:order-2"
                }
              >
                <div className={`relative h-full flex flex-col transition-all duration-300 ${
                  plano.destaque
                    ? "bg-accent text-accent-foreground md:scale-[1.03]"
                    : "border border-border bg-card/60 hover:border-foreground/50"
                }`}>
                  <div className={`flex items-center justify-between px-5 py-3 border-b font-mono text-[10px] uppercase tracking-normal ${
                    plano.destaque ? "border-accent-foreground/20" : "border-border/60"
                  }`}>
                    <span className={plano.destaque ? "text-accent-foreground/70" : "text-muted-foreground"}>PLANO</span>
                    <span>{plano.nome}</span>
                  </div>

                  <div className="p-6 md:p-8 flex-grow">
                    <div className="mb-6">
                      {plano.precoAntigo && (
                        <p className={`font-mono text-xs line-through mb-1 ${plano.destaque ? "text-accent-foreground/60" : "text-muted-foreground/70"}`}>
                          DE {plano.precoAntigo}{plano.periodo}
                        </p>
                      )}
                      <p className="text-4xl md:text-5xl font-black tracking-normal">
                        {plano.preco}
                        <span className={`text-sm font-medium ${plano.destaque ? "text-accent-foreground/80" : "text-muted-foreground"}`}>{plano.periodo}</span>
                      </p>
                      {plano.parcela && (
                        <p className={`font-mono text-xs mt-1 ${plano.destaque ? "text-accent-foreground/90" : "text-muted-foreground"}`}>
                          {plano.parcela}
                        </p>
                      )}
                      <p className={`font-mono text-[10px] uppercase tracking-normal mt-2 ${plano.destaque ? "text-accent-foreground" : "text-foreground"}`}>
                        {plano.total}
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-sm mb-6">
                      {[
                        "Nivelamento automático semanal",
                        "Método FULL completo",
                        "+10.000 questões resolvidas",
                        "+2.000 flashcards",
                        "Listas, simulados e desempenho",
                        "Suporte direto comigo",
                      ].map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plano.destaque ? "text-accent-foreground" : "text-foreground"}`} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <Button
                      variant={plano.destaque ? "default" : "outline"}
                      className={`w-full py-5 font-mono text-xs md:text-sm font-bold tracking-normal rounded-lg ${
                        plano.destaque
                          ? "bg-background text-foreground hover:bg-background/90 border border-foreground/20"
                          : "border-foreground/30 hover:border-foreground"
                      }`}
                      onClick={() => window.open(plano.link, "_blank")}
                    >
                      {plano.cta} →
                    </Button>
                    <div className={`mt-3 flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-normal ${plano.destaque ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                      <Shield className="w-3.5 h-3.5" />
                      <span>Garantia de 7 dias</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-normal mt-8">
              Pagamento 100% seguro · Cartão, PIX ou Boleto · Acesso imediato
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* GARANTIA */}
      <GuaranteeSection onScrollToPlans={scrollToPlans} />

      {/* ===== 08 / FAQ ===== */}
      <section id="faq" className="py-16 md:py-24 border-t border-border/40 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHead
              label="Sem dúvidas"
              title={<>Perguntas frequentes</>}
              desc="Tire suas dúvidas antes de começar."
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem value="item-1" question="O que é o sistema de nivelamento automático?" answer="É um plano de metas semanal pronto. Cada semana traz os assuntos que você deve estudar, com 3 listas (níveis 1, 2 e 3) que evoluem em dificuldade, mais o flashcard daquele assunto. Você só precisa seguir a plataforma cuida do que estudar e quando." />
                <FAQItem value="item-2" question="Serve para qualquer concurso ou só militares?" answer="Serve para QUALQUER concurso. Temos questões de bancas civis e militares (ESA, EAM, ESPCEX, CFN, EEAR, EFOMM, AFA, EN, IME, ITA, CN, EPCAR, CMRJ, vestibulares e bancas civis em geral). O método e o nivelamento funcionam para qualquer prova." />
                <FAQItem value="item-3" question="O que está incluso na assinatura?" answer="Banco com +10.000 questões resolvidas, Método FULL completo (videoaulas, livro, plano de metas, grupo de suporte), +2.000 flashcards, sistema de nivelamento automático semanal, filtros avançados, listas personalizadas, simulados cronometrados, painel de desempenho e suporte direto com professores." />
                <FAQItem value="item-4" question="Qual a diferença entre os planos?" answer="O acesso é exatamente o mesmo nos três planos. A diferença está só no preço por mês. Anual sai R$ 38,99/mês (ou R$ 377 à vista) e é o plano com maior economia. Semestral fica em R$ 50,07/mês (ou R$ 266,90 à vista). Trimestral em R$ 56,04/mês (ou R$ 157 à vista). Quanto maior o compromisso, menor o valor." />
                <FAQItem value="item-5" question="Tem garantia?" answer="Sim, 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do valor sem perguntas." />
                <FAQItem value="item-6" question="Como funciona o acesso?" answer="Após o pagamento, você recebe acesso imediato à plataforma. Pode estudar pelo celular, tablet ou computador, no horário que quiser." />
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FloatingWhatsApp />

      {/* ===== FOOTER ===== */}
      <footer className="bg-card border-t border-border py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <img src={mentoriaLogo} alt="FULL" className="w-10 h-10" loading="lazy" />
                <span className="font-mono text-[10px] uppercase tracking-normal text-muted-foreground">FULL / QUESTÕES</span>
              </div>
              <p className="text-sm text-muted-foreground italic">"Pratique com inteligência, aprove com excelência."</p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-normal text-muted-foreground mb-3">Navegação</h3>
              <ul className="space-y-1.5 font-mono text-xs uppercase tracking-normal">
                <li><Link to="/" className="hover:text-foreground transition-colors">Menu</Link></li>
                <li><button onClick={scrollToPlans} className="hover:text-foreground transition-colors">Planos</button></li>
                <li><Button variant="ghost" onClick={scrollTo("faq")} className="h-auto px-0 text-xs hover:text-accent">FAQ</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-normal text-muted-foreground mb-3">Contato</h3>
              <a href="https://instagram.com/hibeck_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-normal hover:text-foreground transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@hibeck_</span>
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between gap-2 font-mono text-[10px] uppercase tracking-normal text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} FULL QUESTÕES + MÉTODO</span>
            <span>TODOS OS DIREITOS RESERVADOS</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Questoes;
