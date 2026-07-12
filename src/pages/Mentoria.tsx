import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SeamMarquee } from "@/components/SeamMarquee";
import { ConnectedBenefits } from "@/components/ConnectedBenefits";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Target, BookOpen, Trophy, CheckCircle2, Zap, Instagram, Brain, Rocket,
  Shield, Home, Layers, Award, Users, Play, MessageCircle, Calendar, TrendingUp,
  Database, Search, FileText, PenLine, Filter, BarChart3, Sparkles, Crown,
  AlertTriangle, XCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogoAsset from "@/assets/logo-gold.png.asset.json";
const mentoriaLogo = mentoriaLogoAsset.url;
import heroPhoto from "@/assets/hero-photo.webp";
import heroMain from "@/assets/hero-main.webp";
import bryanPhoto from "@/assets/bryan-photo.webp";
import ankiCardExample from "@/assets/anki-card-example.webp";
import mentoriaHeroDesktop from "@/assets/mentoria-hero-desktop-v2.jpg.asset.json";
import mentoriaHeroMobile from "@/assets/mentoria-hero-mobile.png.asset.json";
import metodoGridBanner from "@/assets/questoes-metodo-grid.png.asset.json";
import flashcardsCloseupBanner from "@/assets/questoes-flashcards-closeup.jpg.asset.json";
import militaryCollageBanner from "@/assets/questoes-military-collage.png.asset.json";
import planoMetasMissoes from "@/assets/plano-metas-missoes.png.asset.json";
import planoMetasSemanas from "@/assets/plano-metas-semanas.png.asset.json";
import planoMetasMissoesMobile from "@/assets/plano-metas-missoes-mobile-v2.png.asset.json";
import { GraduationCap } from "lucide-react";

const FloatingWhatsApp = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
      <Button variant="gold" size="lg" className="rounded-full shadow-glow-beige px-4 py-3 md:px-8 md:py-6 text-xs md:text-base font-bold whitespace-nowrap" onClick={() => window.open("https://api.whatsapp.com/send?phone=5521992104885", "_blank")}>
        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 inline-block" /> Fale Comigo
      </Button>
    </div>
  );
};

const Mentoria = () => {
  const scrollToPlans = () => {
    document.getElementById("planos-mentoria")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [vslPlaying, setVslPlaying] = React.useState(false);
  const [openPlan, setOpenPlan] = React.useState<null | "standard" | "ultra">(null);

  const pillars = [
    { icon: Brain, badge: "MÉTODO", title: "Método FULL Validado", desc: "O mesmo passo a passo que me levou ao 01º da AFA e 08º da EFOMM. Plano de metas pronto, sem furos." },
    { icon: Users, badge: "1:1", title: "Mentoria Personalizada", desc: "Acompanhamento direto comigo. Aulas ao vivo de Português, Inglês, Matemática e Física toda semana." },
    { icon: Layers, badge: "+10K", title: "Plataforma Completa", desc: "Banco FULL Questões com nivelamento automático + 2.000 flashcards Anki de todas as matérias." },
  ];

  const WPP_STANDARD = "https://wa.me/5521992104885?text=Quero%20fazer%20minha%20inscri%C3%A7%C3%A3o%20na%20Mentoria%20FULL%20Standard%21";
  const WPP_ULTRA = "https://wa.me/5521992104885?text=Quero%20fazer%20minha%20inscri%C3%A7%C3%A3o%20na%20Mentoria%20FULL%20Ultra%21";

  const detalheStandard = {
    tag: "PLANO STANDARD",
    titulo: "Mentoria FULL Hibeck — Standard",
    subtitulo: "Pra quem já tem preparatório e quer o método, a rotina e o acompanhamento que faltam pra virar aprovação.",
    para: "Serve pra QUALQUER concurso · inclusive CN e EPCAr",
    grupos: [
      {
        titulo: "Acompanhamento 1:1",
        icon: Users,
        itens: [
          "Direcionamento individual comigo, semana a semana",
          "Plano de metas personalizado pra sua realidade e concurso",
          "Ajuste de rotina de estudos (matérias, horários, pesos)",
          "Suporte direto no WhatsApp pra tirar dúvidas de estratégia",
        ],
      },
      {
        titulo: "Plataforma completa",
        icon: Layers,
        itens: [
          "Banco FULL Questões liberado (+10.000 questões resolvidas)",
          "+2.000 flashcards Anki de todas as matérias",
          "Nivelamento automático de questões por assunto",
          "Livro do Método Hibeck em PDF",
        ],
      },
      {
        titulo: "Comunidade & rotina",
        icon: Calendar,
        itens: [
          "Encontros ao vivo semanais de estudo em grupo",
          "Comunidade fechada de alunos da Mentoria FULL",
          "Cronograma de revisões inteligente (curva do esquecimento)",
        ],
      },
    ],
    naoInclui: [
      "Aulas AO VIVO de matérias específicas (Mat / Fís / Port / Ing)",
      "Aulas GRAVADAS de conteúdo de matérias",
    ],
    cta: "QUERO O PLANO STANDARD",
    link: WPP_STANDARD,
  };

  const detalheUltra = {
    tag: "PLANO ULTRA",
    titulo: "Mentoria FULL Hibeck — Ultra",
    subtitulo: "O pacote fechado: mentoria, método, aulas ao vivo e gravadas de todas as matérias. Você não precisa de mais nada além disso.",
    para: "EXCLUSIVO para AFA · EN · EFOMM",
    grupos: [
      {
        titulo: "Aulas AO VIVO comigo e minha equipe",
        icon: Play,
        itens: [
          "Matemática ao vivo toda semana",
          "Física ao vivo toda semana",
          "Português ao vivo toda semana",
          "Inglês ao vivo toda semana",
          "Aulas gravadas e disponíveis pra rever quando quiser",
        ],
      },
      {
        titulo: "Aulas GRAVADAS de todas as matérias",
        icon: BookOpen,
        itens: [
          "Videoaulas completas do zero ao avançado",
          "Resolução comentada de questões-chave por assunto",
          "Acesso ao acervo completo do Método Hibeck",
        ],
      },
      {
        titulo: "Mentoria 1:1 aprofundada",
        icon: Users,
        itens: [
          "Acompanhamento individual comigo, com foco em performance",
          "Plano de metas semanal ajustado ao seu ritmo",
          "Análise de simulados e correção de rota",
          "Suporte direto no WhatsApp",
        ],
      },
      {
        titulo: "Plataforma & comunidade",
        icon: Layers,
        itens: [
          "Banco FULL Questões (+10.000 questões) liberado",
          "+2.000 flashcards Anki de todas as matérias",
          "Encontros ao vivo semanais de estudo em grupo",
          "Comunidade fechada de alunos da Mentoria FULL",
          "Livro do Método Hibeck em PDF",
        ],
      },
    ],
    naoInclui: [],
    cta: "QUERO O PLANO ULTRA",
    link: WPP_ULTRA,
  };

  const detalhe = openPlan === "ultra" ? detalheUltra : detalheStandard;

  return (
    <div className="theme-mentoria min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end md:items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={mentoriaHeroMobile.url} alt="Background" className="block md:hidden w-full h-full object-cover object-center brightness-95 contrast-105 saturate-110" loading="eager" fetchPriority="high" />
          <img src={mentoriaHeroDesktop.url} alt="Background" className="hidden md:block w-full h-full object-cover object-center brightness-95 contrast-105 saturate-110" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/85 md:bg-gradient-to-br md:from-background/60 md:via-background/50 md:to-background/70" />
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[100px] opacity-25" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-24 pb-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="absolute top-4 md:top-8 left-4 md:left-8 z-20">
              <img src={mentoriaLogo} alt="Mentoria FULL" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-2xl" loading="eager" />
            </div>
            <Link to="/" className="absolute top-4 md:top-8 right-4 md:right-8 flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20 hover:border-accent/50 transition-all">
              <Home className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground hidden md:inline">Menu</span>
            </Link>
            <div className="absolute top-4 md:top-8 right-28 md:right-36 hidden md:flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20">
              <img src={heroPhoto} alt="Mentor" className="w-10 h-10 rounded-full object-cover ring-2 ring-accent" loading="eager" />
              <span className="text-sm font-semibold text-foreground">@hibeck_</span>
            </div>

            <div className="flex flex-col items-start md:items-start gap-5 md:gap-8 min-h-[88vh] md:min-h-[80vh] justify-end md:justify-center pb-24 md:pb-0">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2 backdrop-blur-sm animate-fade-in-up">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-xs md:text-sm font-bold text-accent uppercase tracking-wider">Aprovado AFA · EFOMM · EEAr · EPCAR</span>
              </div>

              <h1 className="text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <span className="text-foreground">A mentoria que vai te levar </span>
                <span className="bg-gradient-hero-text bg-clip-text text-transparent">do zero à aprovação</span>
                <span className="text-foreground"> nas escolas militares.</span>
              </h1>

              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                Você não precisa ser o mais inteligente da turma. Precisa de <strong className="text-foreground">METODOLOGIA</strong> e é exatamente isso que você terá dentro da Mentoria FULL.
              </p>

              <div className="flex flex-col items-start gap-3 pt-2 animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: "0.45s" }}>
                <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg shadow-glow-beige rounded-full font-bold px-6 py-5 md:px-12 md:py-8 w-full sm:w-auto">
                  QUERO ESSES BENEFÍCIOS →
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground/90">⚡ Garantia de 7 dias · Acesso imediato</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20">
          <div className="bg-gradient-primary py-2 md:py-4 border-y-2 border-accent-dark/30">
            <p className="text-center text-accent-foreground font-bold text-xs md:text-base tracking-wider px-4">
              ⭐ MENTORIA FULL · AFA · EFOMM · EN · EEAR · EPCAR ⭐
            </p>
          </div>
        </div>
      </section>

      {/* PAS - POR QUE TANTA GENTE TRAVA */}
      <section className="py-14 md:py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[160px]" />
        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2 mb-5 backdrop-blur-sm">
                <AlertTriangle className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Por que tanta gente trava</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                Não é talento. <br className="hidden md:block" />
                <span className="bg-gradient-primary bg-clip-text text-transparent">É método e direção.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Quem passa não estuda mais. <strong className="text-foreground">Estuda diferente</strong>. Quase toda reprovação cai em um destes três erros, e o problema raramente é falta de esforço.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              { n: "01", title: "Estuda sem plano e sem ordem", desc: "Sem alguém te dizendo o que estudar hoje, você gasta mais tempo decidindo do que praticando. Esforço grande, nota parada, sensação de andar em círculos." },
              { n: "02", title: "Desiste na primeira semana ruim", desc: "\u00a0Sem alguém direcionando, você não consegue seguir uma rotina. E constância é o que separa quem passa de quem fica." },
              { n: "03", title: "Faz questão sem filtro e não sabe o que errou", desc: "Caça PDF, resolve sem ver resolução, vê o gabarito e segue achando que aprendeu. Chega na prova sem saber nada e sem saber se evoluiu, porque nunca treinou direito." },
            ].map((e, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="relative h-full bg-card/85 backdrop-blur-sm border-2 border-accent/25 rounded-2xl p-6 md:p-7 hover:border-accent/60 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-black text-accent-foreground">{e.n}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-accent uppercase tracking-wider mt-3">
                      <XCircle className="w-3 h-3" />
                      Erro {e.n} de 03
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 leading-snug">{e.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
              <p className="text-base md:text-xl text-foreground font-semibold">
                E quando alguém te entrega <span className="text-accent">método</span>, <span className="text-accent">mentoria 1:1</span> e <span className="text-accent">plataforma completa</span>?
              </p>
              <p className="mt-4 text-lg md:text-2xl font-black leading-snug">
                <span className="text-foreground">A aprovação vira consequência. </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">Isso é MENTORIA FULL.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SeamMarquee text="FULL HIBECK" />

      {/* VSL - VÍDEO DE VENDAS (escopo roxo) */}
      <section className="theme-purple py-14 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[420px] h-[420px] bg-accent rounded-full blur-[180px] opacity-[0.08]" />
        <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] bg-primary/20 rounded-full blur-[160px] opacity-[0.12]" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-accent-foreground rounded-full px-4 py-2 mb-5 shadow-glow-beige">
                <Play className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold uppercase tracking-wider">Assista antes de decidir</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-black mb-3 leading-tight">
                Conheça o <span className="bg-gradient-primary bg-clip-text text-transparent">Banco FULL Questões</span> por dentro
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A plataforma vem inclusa na mentoria. Em poucos minutos eu te mostro <strong className="text-foreground">cada ferramenta</strong>, como o nivelamento funciona e por que ele encurta meses de estudo no escuro.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-primary rounded-3xl blur-3xl opacity-[0.18]" />
              <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden border-2 border-accent/40 shadow-premium bg-black">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
                        <div className="relative w-20 h-20 md:w-28 md:h-28 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-beige group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-9 h-9 md:w-12 md:h-12 text-accent-foreground fill-current ml-1.5" />
                        </div>
                      </div>
                      <div className="text-center px-4">
                        <p className="text-white font-bold text-base md:text-2xl drop-shadow-lg">Clique para assistir o tour completo</p>
                        <p className="text-white/80 text-xs md:text-sm mt-1 drop-shadow">⏱ Vídeo curto · sem enrolação</p>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-10 md:mt-12">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                QUERO ENTRAR PRA MENTORIA →
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground mt-3">⚡ Acesso imediato · 7 dias de garantia</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLANO DE METAS SEMANAL – banners reais (após o vídeo) */}
      <section className="theme-purple py-14 md:py-24 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[460px] h-[460px] bg-accent rounded-full blur-[160px] opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-[380px] h-[380px] bg-primary/30 rounded-full blur-[140px] opacity-25" />
        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-accent-foreground rounded-full px-4 py-2 mb-4 shadow-glow-beige">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Plano de metas semanal</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-black mb-3 leading-tight">
                Sua semana inteira <span className="bg-gradient-primary bg-clip-text text-transparent">mastigada</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Toda segunda você abre a plataforma e o plano já está lá. <strong className="text-foreground">Missão, semanas, assuntos, atividades e meta</strong>. Zero tempo perdido decidindo o que estudar.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-10">
            {/* Banner topo: missões por concurso */}
            <ScrollReveal variant="left">
              <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 bg-black">
                <div className="p-5 md:p-8">
                  <div className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 rounded-full px-3 py-1 mb-3 backdrop-blur-sm">
                    <Target className="w-3 h-3 text-accent" />
                    <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider">Uma missão por concurso</span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-black text-white mb-2">
                    Você escolhe a missão. A plataforma <span className="text-accent">monta o caminho.</span>
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-5 md:mb-6">
                    Barbacena, EEAR, AFA, EN, EFOMM. Cada concurso tem seu próprio trilho de estudo, com semanas, assuntos e atividades já organizados.
                  </p>
                  {/* Mobile: imagem vertical auto-explicativa */}
                  <img
                    src={planoMetasMissoesMobile.url}
                    alt="Missão FULL AFA/EN/EFOMM: objetivo, progresso e mapa de semanas"
                    className="md:hidden w-full max-w-sm mx-auto h-auto rounded-xl"
                    loading="lazy"
                  />
                  {/* Desktop: imagem larga completa (object-contain para não cortar) */}
                  <img
                    src={planoMetasMissoes.url}
                    alt="Missões FULL por concurso: Barbacena, EEAR e Oficialato AFA/EN/EFOMM"
                    className="hidden md:block w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Grid: dashboard de semanas + card de features */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <ScrollReveal variant="left">
                <div className="relative h-full group rounded-2xl md:rounded-3xl overflow-hidden border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 bg-black flex flex-col">
                  <div className="p-5 md:p-7">
                    <div className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 rounded-full px-3 py-1 mb-2 backdrop-blur-sm">
                      <BarChart3 className="w-3 h-3 text-accent" />
                      <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider">Mapa de semanas</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1">
                      Semana a semana com <span className="text-accent">meta clara</span>
                    </h3>
                    <p className="text-white/80 text-sm">
                      Progresso, aproveitamento e meta para concluir. Você vê exatamente onde está e o que falta pra desbloquear a próxima semana.
                    </p>
                  </div>
                  <div className="flex-1 flex items-end justify-center px-3 pb-3 md:px-4 md:pb-4">
                    <img
                      src={planoMetasSemanas.url}
                      alt="Progresso semanal da Missão FULL AFA/EN/EFOMM"
                      className="w-full h-auto max-h-[280px] md:max-h-[320px] object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="right">
                <div className="relative h-full bg-card/80 backdrop-blur-sm border-2 border-accent/30 rounded-2xl md:rounded-3xl p-6 md:p-8 min-h-[340px] md:min-h-[420px] flex flex-col justify-between hover:border-accent/60 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 bg-accent/15 border border-accent/40 rounded-full px-3 py-1">
                      <Calendar className="w-3 h-3 text-accent" />
                      <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider">O que vem pronto toda semana</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
                      Você abre a plataforma e já sabe <span className="text-accent">o que estudar hoje</span>
                    </h3>
                    <ul className="space-y-2.5 pt-2">
                      {[
                        { icon: BookOpen, t: "Assuntos da semana", d: "Português, Inglês, Matemática ou Física — sem você decidir nada." },
                        { icon: Layers, t: "Flashcards liberados por assunto", d: "Revisão espaçada que fixa de verdade." },
                        { icon: FileText, t: "Listas por nível", d: "Base, intermediário e avançado. Você sobe conforme acerta." },
                        { icon: Trophy, t: "Simulado semanal", d: "Toda semana fecha com simulado pra medir evolução real." },
                        { icon: Target, t: "Meta para concluir e desbloquear", d: "A próxima semana só libera quando você bate a meta." },
                      ].map((f, idx) => {
                        const Icon = f.icon;
                        return (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex-shrink-0 flex items-center justify-center shadow-glow-beige mt-0.5">
                              <Icon className="w-4 h-4 text-accent-foreground" />
                            </div>
                            <div>
                              <p className="text-sm md:text-base font-bold text-foreground leading-snug">{f.t}</p>
                              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-5 mt-5 border-t border-accent/20">
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-accent">6</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Semanas por ciclo</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-accent">100+</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Assuntos mapeados</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-accent">0</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Tempo decidindo</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className="text-center mt-12 md:mt-14">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                QUERO ENTRAR PRA MENTORIA →
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground mt-3">⚡ Acesso imediato · 7 dias de garantia</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DENTRO DA PLATAFORMA - banners reais (escopo roxo) */}
      <section className="theme-purple py-14 md:py-24 bg-gradient-to-b from-background via-secondary/15 to-background relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-accent rounded-full blur-[160px] opacity-[0.08]" />
        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2 mb-5 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">O que você desbloqueia</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-black mb-3 leading-tight">
                Tudo o que você vê aqui é <span className="bg-gradient-primary bg-clip-text text-transparent">real</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Não é mockup. É a plataforma que centenas de alunos da Mentoria já estão usando hoje pra estudar com método.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-10">
            <ScrollReveal variant="left">
              <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden border-2 border-accent/30 hover:border-accent/60 transition-all duration-300">
                <img src={metodoGridBanner.url} alt="Método FULL: aulas e conteúdos da plataforma" className="w-full h-auto object-cover" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                  <div className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 rounded-full px-3 py-1 mb-2 backdrop-blur-sm">
                    <GraduationCap className="w-3 h-3 text-accent" />
                    <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider">Método FULL incluso</span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-black text-white mb-1">Aulas que ensinam <span className="text-accent">como estudar</span></h3>
                  <p className="text-white/80 text-sm md:text-base">Introdução ao método, como filtrar questões, como usar flashcards, como revisar e simular. Tudo destrinchado.</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <ScrollReveal variant="left">
                <div className="relative h-full group rounded-2xl md:rounded-3xl overflow-hidden border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 min-h-[340px] md:min-h-[420px]">
                  <img src={flashcardsCloseupBanner.url} alt="+2.000 flashcards Anki" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                    <div className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 rounded-full px-3 py-1 mb-2 backdrop-blur-sm">
                      <Layers className="w-3 h-3 text-accent" />
                      <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider">+2.000 cards</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1">Flashcards Anki <span className="text-accent">de tudo que cai</span></h3>
                    <p className="text-white/80 text-sm">Revisão espaçada que fixa de verdade sem reler matéria de novo.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="right">
                <div className="relative h-full bg-card/80 backdrop-blur-sm border-2 border-accent/30 rounded-2xl md:rounded-3xl p-6 md:p-8 min-h-[340px] md:min-h-[420px] flex flex-col justify-between hover:border-accent/60 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 bg-accent/15 border border-accent/40 rounded-full px-3 py-1">
                      <Database className="w-3 h-3 text-accent" />
                      <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider">Banco completo</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground leading-tight">+10.000 questões resolvidas, todas <span className="text-accent">comentadas</span></h3>
                    <ul className="space-y-2 pt-2">
                      {[
                        "Bancas civis e militares (ESA, EAM, EsPCEx, EFOMM, AFA, EEAR e mais)",
                        "Filtros por matéria, assunto, banca, ano e dificuldade",
                        "Resolução passo a passo. Você não trava mais quando erra.",
                        "Listas personalizadas e simulados cronometrados",
                      ].map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-5 mt-5 border-t border-accent/20">
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-accent">10k+</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Questões</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-accent">2k+</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Flashcards</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-accent">50+</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Bancas</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className="text-center mt-12 md:mt-14">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                QUERO ENTRAR PRA MENTORIA →
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground mt-3">⚡ Acesso imediato · 7 dias de garantia</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SeamMarquee text="FULL HIBECK" />

      {/* 3 PILARES */}
      <section className="py-14 md:py-24 bg-gradient-to-b from-background to-secondary/10 relative">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px]" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-3">
              Por que tanta gente <span className="bg-gradient-primary bg-clip-text text-transparent">estuda errado?</span>
            </h2>
            <p className="text-base md:text-lg text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto">
              Falta método, falta plano, falta direção. A Mentoria FULL resolve isso com 3 pilares simples:
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={i} delay={i * 120}>
                  <div className="relative h-full bg-card/70 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-6 md:p-7 hover:border-accent hover:shadow-premium transition-all duration-300">
                    <div className="absolute -top-3 right-4 bg-gradient-primary text-accent-foreground text-[10px] font-black px-3 py-1 rounded-full shadow-glow-beige tracking-wider">{p.badge}</div>
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CICLO - Connected Benefits */}
      <section className="py-14 md:py-24 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-15" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[140px] opacity-25" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-accent-foreground rounded-full px-4 py-2 mb-4 shadow-glow-beige">
                <Crown className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Tudo conectado</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Um <span className="bg-gradient-primary bg-clip-text text-transparent">ciclo de estudo</span> que não deixa nada solto
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Você não precisa decidir o que estudar. A mentoria conecta cada peça pra que uma alimente a outra. 
              </p>
            </div>
          </ScrollReveal>

          <ConnectedBenefits
            items={[
              { icon: Calendar, title: "Semana pronta na segunda", desc: "Plano de metas já montado: o que assistir, quantas questões resolver, quais flashcards revisar.", next: "puxa a teoria" },
              { icon: Play, title: "Teoria com método", desc: "Aulas gravadas e ao vivo de Português, Inglês, Matemática e Física. Aprendeu o conteúdo? Já cai pra prática.", next: "vira questão" },
              { icon: Database, title: "Banco FULL Questões", desc: "+10.000 questões resolvidas e listas com nivelamento automático. Errou? tem resolução!", next: "vira flashcard" },
              { icon: Layers, title: "Flashcards de revisão", desc: "+2.000 cards Anki dos pontos que mais caem. Revisão espaçada que fixa de verdade.", next: "fecha com dados" },
              { icon: BarChart3, title: "Dados do seu desempenho", desc: "Gráficos por matéria, evolução semanal e ranking. Pare de estudar no escuro você vê a nota subir antes da prova.", next: "recomeça o ciclo" },
            ]}
          />

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                QUERO SER CLASSIFICADO →
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground/90 mt-3">⚡ Garantia de 7 dias · Acesso imediato</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-14 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-primary/30 rounded-full blur-[140px] opacity-30" style={{ animationDelay: "1.5s" }} />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-accent-foreground rounded-full px-4 py-2 mb-4 shadow-glow-beige">
                <Crown className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Pacote completo · top tier</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Tudo que está <span className="bg-gradient-primary bg-clip-text text-transparent">incluso</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada peça pensada pra te empurrar pra aprovação.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              { icon: Play, title: "Aulas gravadas, 4 matérias", desc: "Português, Inglês, Matemática e Física do zero ao avançado.", gold: true },
              { icon: Users, title: "Aulas ao vivo semanais", desc: "Encontros semanais de Português, Inglês, Matemática e Física com os professores.", gold: true },
              { icon: PenLine, title: "Correção de redação ao vivo", desc: "Sua redação corrigida em tempo real, com feedback direto pra subir nota rápido.", gold: true },
              { icon: Trophy, title: "Banco FULL Questões", desc: "+10.000 questões resolvidas, listas por nível e nivelamento automático." },
              { icon: Layers, title: "+2.000 flashcards Anki", desc: "Revisão espaçada de todas as matérias." },
              { icon: Calendar, title: "Plano de metas semanal", desc: "Todo dia você já sabe o que estudar. Zero tempo perdido decidindo." },
              { icon: BarChart3, title: "Gráficos de desempenho", desc: "Acompanhe sua evolução por matéria, dia, mês e geral, com tendência." },
              { icon: BookOpen, title: "Livro do Método Hibeck", desc: "Tudo que aprendi nos 8 meses que me aprovaram, num só material." },
              { icon: MessageCircle, title: "Suporte direto comigo", desc: "Dúvida no grupo? Resposta rápida. Você não estuda sozinho." },
            ].map((b, i) => (
              <ScrollReveal key={i} delay={i * 70} variant="scale">
                <div className={`group relative h-full backdrop-blur-sm rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] ${
                  b.gold
                    ? "bg-gradient-to-br from-card/90 to-card/70 border-2 border-accent shadow-glow-beige hover:shadow-[0_0_60px_hsl(45_90%_60%/0.45)]"
                    : "bg-card/70 border-2 border-accent/25 hover:border-accent"
                }`}>
                  {b.gold && (
                    <div className="absolute -top-2 -right-2 bg-gradient-primary text-accent-foreground text-[9px] font-black px-2 py-0.5 rounded-full shadow-glow-beige tracking-wider uppercase">
                      Destaque
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6 group-hover:scale-110 ${
                      b.gold ? "bg-gradient-beige-premium" : "bg-gradient-primary"
                    }`}>
                      <b.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{b.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                QUERO SER CLASSIFICADO →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLANO DE METAS SEMANAL */}
      {/* QUEM SOU EU – compacto */}
      <section className="py-14 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-6 md:p-10">
              <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-10 items-center">
                <div className="relative mx-auto md:mx-0 max-w-[260px]">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30" />
                  <img src={bryanPhoto} alt="Bryan Hibeck" className="relative rounded-2xl w-full object-cover shadow-premium border-2 border-accent/20" loading="lazy" />
                </div>
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-3 py-1.5">
                    <Trophy className="w-4 h-4 text-accent-foreground" />
                    <span className="text-xs font-bold text-accent-foreground">Criador do Método</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Bryan Hibeck</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Meu nome é <strong className="text-foreground">Bryan Hibeck</strong>, nascido em 17/03/2004. Ganhei destaque no mundo dos concursos por ter resolvido <strong className="text-accent">+10.000 questões</strong> durante meus <strong className="text-foreground">8 meses de preparação</strong> em 2024.
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
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOOK ANTES DOS DEPOIMENTOS */}
      <section className="pt-8 pb-2 md:pt-12 md:pb-4 bg-secondary/20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-center text-base md:text-2xl font-black text-accent tracking-wide">
              ↓ Vira isto aqui ↓
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-12 md:py-20 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-6 mb-6 md:mb-10">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-3">
              Resultados que <span className="bg-gradient-primary bg-clip-text text-transparent">comprovam</span>
            </h2>
            <p className="text-base md:text-lg text-center text-muted-foreground">A prova de que o método funciona.</p>
          </ScrollReveal>
        </div>

        <div className="relative w-full h-[45vh] md:h-[65vh] overflow-hidden">
          <div className="absolute inset-0 flex animate-scroll-left" style={{ width: "max-content" }}>
            {[...Array(2)].flatMap((_, dup) =>
              ["1","2","3","4","5","6","7","8","9"].map((n, i) => (
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
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                QUERO SER APROVADO →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLANOS */}
      <GuaranteeSection onScrollToPlans={scrollToPlans} />
      <section id="planos-mentoria" className="py-14 md:py-24 bg-background scroll-mt-8 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Escolha o seu <span className="text-accent">momento</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Dois caminhos, o <strong className="text-accent">mesmo método</strong>. Escolha o que combina com onde você está hoje.
              </p>
            </div>
          </ScrollReveal>

          {/* COMPARATIVO LADO A LADO */}
          <ScrollReveal>
            <div className="max-w-5xl mx-auto mb-10 md:mb-14 grid md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  mode: "standard" as const,
                  tag: "PLANO STANDARD",
                  title: "Já tenho um preparatório",
                  desc: "Você já estuda em um curso e quer o método, a rotina e o acompanhamento que faltam pra virar aprovação.",
                  para: "Serve pra QUALQUER concurso · inclusive CN e EPCAr",
                  bullets: [
                    "Acompanhamento e direcionamento 1:1",
                    "Banco FULL Questões + flashcards",
                    "Plano de metas e organização de rotina",
                    "Encontros ao vivo de estudo",
                  ],
                  excludes: ["Aulas ao vivo de matérias", "Aulas gravadas de matérias"],
                },
                {
                  mode: "ultra" as const,
                  tag: "PLANO ULTRA",
                  title: "Quero TUDO incluso",
                  desc: "Você não tem curso preparatório (ou quer trocar por algo direto ao ponto) e quer o pacote fechado de estudo.",
                  para: "EXCLUSIVO para AFA · EN · EFOMM",
                  bullets: [
                    "Tudo do Standard",
                    "Aulas AO VIVO de Mat, Fís, Port e Ing",
                    "Aulas GRAVADAS de todas as matérias",
                    "Mentoria 1:1 aprofundada",
                  ],
                  excludes: [],
                },
              ].map((c) => (
                <button
                  key={c.mode}
                  type="button"
                  onClick={() => setOpenPlan(c.mode)}
                  className="text-left rounded-2xl md:rounded-3xl p-5 md:p-7 border-2 bg-card/70 backdrop-blur-sm border-accent/25 hover:border-accent hover:shadow-glow-beige hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] md:text-xs font-black tracking-widest px-3 py-1 rounded-full bg-accent/15 text-accent">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-1.5 text-foreground">
                    {c.title}
                  </h3>
                  <p className="text-xs md:text-sm mb-3 text-muted-foreground">
                    {c.desc}
                  </p>
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wide mb-4 text-accent/90">
                    {c.para}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {c.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                    {c.excludes.map((b, i) => (
                      <li key={`x${i}`} className="flex items-start gap-2 text-sm text-muted-foreground/70">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-70" />
                        <span className="line-through">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 mt-1 text-sm font-black text-accent-foreground bg-gradient-primary rounded-full px-4 py-2 shadow-glow-beige">
                    Ver detalhes completos →
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          <Dialog open={openPlan !== null} onOpenChange={(o) => !o && setOpenPlan(null)}>
            <DialogContent className="w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] max-w-5xl max-h-[82dvh] md:max-h-[84vh] overflow-hidden rounded-2xl p-0 border-2 border-accent/40 bg-card/95 backdrop-blur-md shadow-glow-beige">
              <div className="max-h-[82dvh] md:max-h-[84vh] overflow-y-auto px-4 pb-28 pt-10 sm:px-6 md:px-8 md:pb-32 md:pt-10">
                <div className="flex justify-center mb-4 pr-8 sm:pr-0">
                  <div className="bg-gradient-primary text-accent-foreground px-3 py-1.5 rounded-full text-[10px] md:text-xs font-black shadow-glow-beige tracking-widest text-center max-w-full leading-tight">
                    {detalhe.tag} — TUDO QUE VOCÊ RECEBE
                  </div>
                </div>

                <div className="text-center mb-5 md:mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-2 leading-tight">
                    {detalhe.titulo}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    {detalhe.subtitulo}
                  </p>
                  <p className="mt-3 inline-block text-[11px] md:text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1">
                    {detalhe.para}
                  </p>
                </div>

                <div className={`grid gap-4 mb-5 md:mb-6 ${openPlan === "standard" ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                  {detalhe.grupos.map((g, i) => {
                    const Icon = g.icon;
                    return (
                      <div key={i} className="rounded-xl md:rounded-2xl bg-background/50 border border-accent/20 p-5 md:p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-beige flex-shrink-0">
                            <Icon className="w-5 h-5 text-accent-foreground" />
                          </div>
                          <h4 className="text-base font-black text-foreground leading-tight">{g.titulo}</h4>
                        </div>
                        <ul className="space-y-2">
                          {g.itens.map((it, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm md:text-[13px] text-foreground/90">
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {detalhe.naoInclui.length > 0 && (
                  <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 md:p-5 mb-5 md:mb-6">
                    <p className="text-xs md:text-sm font-bold text-destructive uppercase tracking-wider mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> O que NÃO está incluso neste plano
                    </p>
                    <ul className="space-y-1.5">
                      {detalhe.naoInclui.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XCircle className="w-4 h-4 text-destructive/70 flex-shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground/80 mt-2">
                      Se você quer aulas de matérias específicas incluídas, escolha o <button type="button" onClick={() => setOpenPlan("ultra")} className="text-accent font-bold underline underline-offset-2">Plano Ultra</button>.
                    </p>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 border-t border-accent/20 bg-card/95 px-4 py-4 backdrop-blur-md md:px-8 md:py-5">
                  <div className="flex justify-center">
                    <Button asChild variant="gold" size="lg" className="text-sm md:text-lg font-black px-6 py-6 md:px-12 md:py-7 rounded-full shadow-glow-beige w-full max-w-md">
                      <a href={detalhe.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>{detalhe.cta}</span>
                      </a>
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-accent" />
                    <span className="font-semibold">Atendimento humano</span>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-3">
              Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-base md:text-lg text-center text-muted-foreground mb-10 md:mb-14">Tire suas dúvidas antes de começar</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem value="item-1" question="Por que o mínimo é trimestral e não mensal?" answer="Em 1 mês você ainda está se adaptando ao método. A evolução real (dominar matérias, ganhar ritmo de questões, ver a nota subir) aparece a partir do 2º/3º mês. O trimestral existe pra você conseguir ver resultado de verdade." />
                <FAQItem value="item-2" question="O que está incluso na mentoria?" answer="Mentoria 1:1 personalizada, aulas ao vivo de matemática e física, vídeo-aulas do método, +2.000 flashcards Anki, acesso ao Banco FULL Questões com +10.000 questões resolvidas, plano de metas pronto, livro do Método Hibeck e suporte direto comigo." />
                <FAQItem value="item-3" question="Serve pra qualquer concurso militar?" answer="Sim. O método é o mesmo que me aprovou na AFA (01º), EFOMM (08º), EEAr (15º) e EPCAr. Funciona pra AFA, EN, EFOMM, EEAR, EPCAR, ESPCEX, ESA, EAM, IME, ITA e CN." />
                <FAQItem value="item-4" question="Qual a diferença entre o Standard e o Ultra?" answer="O Standard é pra quem já tem um preparatório e quer só o acompanhamento, o método e a plataforma. O Ultra inclui, além de tudo isso, as aulas AO VIVO e GRAVADAS de Matemática, Física, Português e Inglês. Pra saber qual faz mais sentido pra você, é só clicar no plano e falar comigo no WhatsApp." />
                <FAQItem value="item-5" question="Tem garantia?" answer="Sim, 7 dias incondicionais. Se não gostar por qualquer motivo, devolvemos 100% do valor sem perguntas." />
                <FAQItem value="item-6" question="Sirvo se sou iniciante?" answer="Sim. A mentoria começa do zero vídeos ensinando como estudar cada matéria, sem assumir que você já sabe alguma coisa." />
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FloatingWhatsApp />

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <img src={mentoriaLogo} alt="Mentoria FULL" className="w-12 h-12 md:w-16 md:h-16 mb-3" loading="lazy" />
              <p className="text-base text-muted-foreground italic font-semibold">"Transformando disciplina em aprovação."</p>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-3">Links Úteis</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Menu</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-3">Redes Sociais</h3>
              <a href="https://instagram.com/hibeck_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@hibeck_</span>
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-muted-foreground">
            <p className="text-sm">&copy; {new Date().getFullYear()} Mentoria FULL. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mentoria;
