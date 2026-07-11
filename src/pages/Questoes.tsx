import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SeamMarquee } from "@/components/SeamMarquee";
import { ConnectedBenefits } from "@/components/ConnectedBenefits";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Target, BookOpen, Trophy, CheckCircle2, FileText, Zap, Instagram, TrendingUp, Brain, Rocket, Shield, Database, MessageCircle, LineChart, Search, Home, Calendar, Layers, GraduationCap, Award, Crown, Play, AlertTriangle, Flame, Sparkles, Clock, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogoAsset from "@/assets/logo-silver.png.asset.json";
const mentoriaLogo = mentoriaLogoAsset.url;
import heroPhoto from "@/assets/hero-photo.webp";
import bryanPhoto from "@/assets/bryan-photo.webp";
import bryanUniform from "@/assets/bryan-uniform.jpg.asset.json";
import metodoGridBanner from "@/assets/questoes-metodo-grid.png.asset.json";
import flashcardsCloseupBanner from "@/assets/questoes-flashcards-closeup.jpg.asset.json";
import militaryCollageBanner from "@/assets/questoes-military-collage.png.asset.json";

const FloatingWhatsApp = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <Button variant="gold" size="lg" className="rounded-full shadow-glow-beige px-4 py-3 md:px-8 md:py-6 text-xs md:text-base font-bold whitespace-nowrap" onClick={() => window.open('https://api.whatsapp.com/send?phone=5521992104885', '_blank')}>
        💬 Fale Comigo
      </Button>
    </div>
  );
};

const PILLAR_ICON_MAP = { Layers, GraduationCap, Database } as const;

const Questoes = () => {
  const scrollToPlans = () => {
    document.getElementById('planos-questoes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [vslPlaying, setVslPlaying] = React.useState(false);

  const pillars = [
     { iconKey: "Layers" as const, badge: "NOVO", title: "Nivelamento Automático", desc: "Bancas civis e militares comentadas. Filtre por matéria, assunto, banca, ano e dificuldade." },
    { iconKey: "GraduationCap" as const, badge: "EXCLUSIVO", title: "Método FULL Incluso", desc: "Videoaulas ensinando como estudar, filtrar, revisar e se organizar. Plano de metas, livro da metodologia e grupo de suporte." },
     { iconKey: "Database" as const, badge: "+10.000", title: "Questões Resolvidas", desc: "Bancas civis e militares com resolução detalhada passo a passo. Você não fica mais travado quando erra." },
  ];

  const planos = [
    {
      nome: "Trimestral",
      destaque: false,
      preco: "R$ 56,04",
      precoAntigo: "R$ 59,90",
      periodo: "/mês",
      parcela: "ou R$ 157,00 à vista",
      total: "Comece com baixo compromisso",
      link: "https://pay.kiwify.com.br/HQCYyoR",
      cta: "QUERO O TRIMESTRAL",
      badge: null,
      economia: null,
    },
    {
      nome: "Semestral",
      destaque: false,
      preco: "R$ 50,07",
      precoAntigo: "R$ 56,04",
      periodo: "/mês",
      parcela: "ou R$ 266,90 à vista",
      total: "Economize R$ 35,82 vs Trimestral",
      link: "https://pay.kiwify.com.br/5Y3FKc4",
      cta: "QUERO O SEMESTRAL",
      badge: "ECONOMIA",
      economia: "R$ 35,82",
    },
    {
      nome: "Anual",
      destaque: true,
      preco: "R$ 38,99",
      precoAntigo: "R$ 56,04",
      periodo: "/mês",
      parcela: "ou R$ 377,00 à vista",
      total: "Economize R$ 204,60/ano vs Trimestral",
      link: "https://pay.kiwify.com.br/QM4Ph8c",
      cta: "QUERO O ANUAL",
      badge: "MELHOR PLANO",
      economia: "R$ 204,60",
    },
  ];

  return <div className="theme-questoes min-h-screen bg-background text-foreground">
    {/* HERO */}
    <section className="relative min-h-[105vh] md:min-h-[100vh] flex items-end md:items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/questoes-hero-wallpaper.jpg" alt="Background" className="w-full h-full object-cover object-[50%_28%] md:object-center brightness-75 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/90" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[100px] opacity-25" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 pb-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="absolute top-4 md:top-8 left-4 md:left-8 z-20">
            <img src={mentoriaLogo} alt="FULL" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-2xl" loading="eager" />
          </div>
          <Link to="/" className="absolute top-4 md:top-8 right-4 md:right-8 flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20 hover:border-accent/50 transition-all">
            <Home className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground hidden md:inline">Menu</span>
          </Link>
          <div className="absolute top-4 md:top-8 right-28 md:right-36 hidden md:flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20">
            <img src={heroPhoto} alt="Mentor" className="w-10 h-10 rounded-full object-cover ring-2 ring-accent" loading="eager" />
            <span className="text-sm font-semibold text-foreground">@hibeck_</span>
          </div>

          <div className="flex flex-col items-center text-center justify-end md:justify-center gap-5 md:gap-8 min-h-[85vh] md:min-h-[80vh] pb-20 md:pb-0">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 rounded-full px-4 py-2 backdrop-blur-sm animate-fade-in-up">
              <Award className="w-4 h-4 text-accent" />
               <span className="text-xs md:text-sm font-bold text-accent uppercase tracking-wider">Bancas civis e militares</span>
            </div>

            <h1 className="text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-center max-w-4xl animate-fade-in-up mx-auto" style={{ animationDelay: "0.15s" }}>
              <span className="text-foreground">O banco de questões mais </span>
              <span className="bg-gradient-hero-text bg-clip-text text-transparent">completo do Brasil</span>
              <span className="text-foreground">, com </span>
               <span className="bg-gradient-hero-text bg-clip-text text-transparent">método FULL</span>
              <span className="text-foreground"> e </span>
              <span className="bg-gradient-hero-text bg-clip-text text-transparent">nivelamento automático</span>
              <span className="text-foreground">.</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl text-center mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Chega de estudar perdido e sem material. O <strong className="text-accent">Banco FULL</strong> te entrega um plano de metas pronto, flashcards de todos os assuntos e questões comentadas em vários níveis.
            </p>

            <div className="flex flex-col items-center gap-3 pt-2 animate-fade-in-up w-full" style={{ animationDelay: "0.45s" }}>
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg shadow-glow-beige rounded-full font-bold px-6 py-5 md:px-12 md:py-8 w-full sm:w-auto">
                QUERO UMA ORGANIZAÇÃO →
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground/90">
                Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20">
        <div className="bg-gradient-primary py-2 md:py-4 border-y-2 border-accent-dark/30">
          <p className="text-center text-accent-foreground font-bold text-xs md:text-base tracking-wider px-4">
            ⭐ NIVELAMENTO • MÉTODO • +10.000 QUESTÕES RESOLVIDAS ⭐
          </p>
        </div>
      </div>
    </section>

    {/* SEÇÃO PAS - 3 ERROS QUE TRAVAM SUA APROVAÇÃO */}
    <section className="py-14 md:py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={militaryCollageBanner.url} alt="" className="w-full h-full object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[160px]" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 rounded-full px-4 py-2 mb-5 backdrop-blur-sm">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Por que tanta gente trava</span>
            </div>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              Não é talento. <br className="hidden md:block" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">É técnica e esforço.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Quem classifica não estuda mais. <strong className="text-foreground">Estuda diferente</strong>. Quase toda reprovação cai em um destes três erros, e o problema raramente é falta de esforço.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
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
          ].map((e, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="relative h-full bg-card/85 backdrop-blur-sm border-2 border-amber-900/40 rounded-2xl p-6 md:p-7 hover:border-amber-500/60 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-800 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-black text-white">{e.n}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-300 uppercase tracking-wider mt-3">
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
              E quando alguém junta <span className="text-accent">direção</span>, <span className="text-accent">constância</span> e <span className="text-accent">treino no lugar certo</span>?
            </p>
            <p className="mt-4 text-lg md:text-2xl font-black leading-snug">
              <span className="text-foreground">A aprovação vem. </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">E é pra isso que existe o FULL Questões.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* VSL - VÍDEO DE VENDAS (escopo roxo) */}
    <SeamMarquee text="FULL QUESTÕES" />
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
              Conheça a <span className="bg-gradient-primary bg-clip-text text-transparent">plataforma</span> por dentro
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Em poucos minutos eu te mostro <strong className="text-foreground">cada ferramenta</strong>, como o nivelamento funciona e por que ele encurta meses de estudo no escuro.
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
              QUERO ACESSAR A PLATAFORMA →
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
              Não é mockup. É a plataforma que centenas de alunos já estão usando hoje pra estudar com método.
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
              DESTRAVAR TUDO ISSO →
            </Button>
            <p className="text-xs md:text-sm text-muted-foreground mt-3">⚡ Acesso imediato · 7 dias de garantia</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <SeamMarquee text="FULL QUESTÕES" />
    {/* 3 PILARES */}
    <section className="py-14 md:py-24 bg-gradient-to-b from-background to-secondary/10 relative">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px]" />
      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-3">
            Tudo que você precisa para <span className="bg-gradient-primary bg-clip-text text-transparent">passar</span>
          </h2>
          <p className="text-base md:text-lg text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto">
            Três pilares que se conectam para transformar estudo em aprovação.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {pillars.map((p, i) => {
            const Icon = PILLAR_ICON_MAP[p.iconKey];
            return (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="relative h-full bg-card/70 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-6 md:p-7 hover:border-accent hover:shadow-premium transition-all duration-300">
                  <div className="absolute -top-3 right-4 bg-gradient-primary text-accent-foreground text-[10px] font-black px-3 py-1 rounded-full shadow-glow-beige tracking-wider">
                    {p.badge}
                  </div>
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

    {/* CICLO - Connected Benefits (moved to top of landing) */}
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
              Um <span className="bg-gradient-primary bg-clip-text text-transparent">ciclo</span> que te leva à aprovação em modo automático
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Você não precisa pensar no que estudar hoje. A plataforma encaixa cada etapa. Você só executa e vê a nota subir toda semana.
            </p>
          </div>
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
          <div className="text-center mt-12 md:mt-16">
            <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
              QUERO ENTRAR NESSE CICLO →
            </Button>
            <p className="text-xs md:text-sm text-muted-foreground mt-4">⚡ Acesso imediato · Garantia de 7 dias</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* QUEM SOU EU */}
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

    {/* DEPOIMENTOS */}
    <section className="py-12 md:py-20 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 md:mb-10">
        <ScrollReveal>
          <p className="text-center text-sm md:text-base text-muted-foreground italic mb-3">↓ Vira isto aqui ↓</p>
          <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-3">
            Resultados que <span className="bg-gradient-primary bg-clip-text text-transparent">comprovam</span>
          </h2>
          <p className="text-base md:text-lg text-center text-muted-foreground">A prova de que o método funciona.</p>
        </ScrollReveal>
      </div>

      <div className="relative w-full h-[45vh] md:h-[65vh] overflow-hidden">
        <div className="absolute inset-0 flex animate-scroll-left" style={{ width: 'max-content' }}>
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
              QUERO COMEÇAR AGORA →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* PLANOS */}
    <section id="planos-questoes" className="py-14 md:py-24 bg-background scroll-mt-8 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
              Escolha seu <span className="text-accent">plano</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Mesmo acesso completo. Quanto mais tempo, <strong className="text-accent">mais você economiza</strong>.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto items-stretch">
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
              <div className={`relative h-full rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-300 ${
                plano.destaque
                  ? "bg-gradient-beige-premium border-2 border-accent shadow-glow-beige md:scale-[1.04]"
                  : "bg-card/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/50"
              }`}>
                {plano.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-black shadow-lg whitespace-nowrap">
                      ⭐ MAIS ESCOLHIDO
                    </div>
                  </div>
                )}
                <h3 className={`text-2xl md:text-3xl font-black mb-2 text-center mt-2 ${plano.destaque ? "text-background" : "text-foreground"}`}>
                  {plano.nome}
                </h3>
                <div className="text-center mb-5">
                  {plano.precoAntigo && (
                    <p className={`text-sm line-through mb-1 ${plano.destaque ? "text-background/60" : "text-muted-foreground/70"}`}>
                      De {plano.precoAntigo}{plano.periodo}
                    </p>
                  )}
                  <p className={`text-4xl md:text-5xl font-black ${plano.destaque ? "text-background" : "text-accent"}`}>
                    {plano.preco}
                    <span className={`text-sm font-medium ${plano.destaque ? "text-background/80" : "text-muted-foreground"}`}>{plano.periodo}</span>
                  </p>
                  {plano.parcela && (
                    <p className={`text-xs md:text-sm mt-1 font-semibold ${plano.destaque ? "text-background/90" : "text-muted-foreground"}`}>
                      {plano.parcela}
                    </p>
                  )}
                  <div className={`inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-bold ${plano.destaque ? "bg-background/20 text-background" : "bg-accent/15 text-accent"}`}>
                    <Zap className="w-3 h-3" />
                    {plano.total}
                  </div>
                </div>
                <ul className={`space-y-2.5 mb-6 flex-grow text-sm ${plano.destaque ? "text-background" : "text-foreground"}`}>
                  {[
                    "Nivelamento automático semanal",
                    "Método FULL completo",
                    "+10.000 questões resolvidas",
                    "+2.000 flashcards",
                    "Listas, simulados e desempenho",
                     "Suporte direto comigo",
                  ].map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plano.destaque ? "text-background" : "text-accent"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plano.destaque ? "default" : "gold"}
                  className={`w-full py-5 text-sm md:text-base font-bold ${plano.destaque ? "bg-background text-accent hover:bg-background/90" : ""}`}
                  onClick={() => window.open(plano.link, '_blank')}
                >
                  {plano.cta} →
                </Button>
                <div className={`mt-3 flex items-center justify-center gap-1.5 text-xs ${plano.destaque ? "text-background" : "text-muted-foreground"}`}>
                  <Shield className="w-3.5 h-3.5" />
                  <span className="font-semibold">Garantia de 7 dias</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-muted-foreground mt-8 text-sm">
            🔒 Pagamento 100% seguro • Cartão, PIX ou Boleto • Acesso imediato
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* GARANTIA */}
    <GuaranteeSection onScrollToPlans={scrollToPlans} />

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

    {/* FOOTER */}
    <footer className="bg-card border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <img src={mentoriaLogo} alt="FULL" className="w-12 h-12 md:w-16 md:h-16 mb-3" loading="lazy" />
            <p className="text-base text-muted-foreground italic font-semibold">
              "Pratique com inteligência, aprove com excelência."
            </p>
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
          <p className="text-sm">&copy; 2024 FULL QUESTÕES + Método. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>;
};

export default Questoes;
