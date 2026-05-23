import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import {
  Target, BookOpen, Trophy, CheckCircle2, Zap, Instagram, Brain, Rocket,
  Shield, Home, Layers, Award, Users, Play, MessageCircle, Calendar, TrendingUp,
  Database, Search, FileText, PenLine, Filter, BarChart3, Sparkles, Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import heroMain from "@/assets/hero-main.png";
import bryanPhoto from "@/assets/bryan-photo.jpg";
import ankiCardExample from "@/assets/anki-card-example.png";

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
        💬 Fale Comigo
      </Button>
    </div>
  );
};

const Mentoria = () => {
  const scrollToPlans = () => {
    document.getElementById("planos-mentoria")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pillars = [
    { icon: Brain, badge: "MÉTODO", title: "Método FULL Validado", desc: "O mesmo passo a passo que me levou ao 01º da AFA e 08º da EFOMM. Plano de metas pronto, sem furos." },
    { icon: Users, badge: "1:1", title: "Mentoria Personalizada", desc: "Acompanhamento direto comigo. Aulas ao vivo de Português, Inglês, Matemática e Física toda semana." },
    { icon: Layers, badge: "+20K", title: "Plataforma Completa", desc: "Banco FULL Questões com nivelamento automático + 2.000 flashcards Anki de todas as matérias." },
  ];

  const planos = [
    {
      nome: "Trimestral", destaque: false, preco: "R$ 134,54", precoAntigo: "R$ 159,90",
      periodo: "/mês", parcela: "ou 1x de R$ 377,00 /trimestre",
      total: "3 meses para ver evolução real", link: "https://pay.kiwify.com.br/HPQnlLY", cta: "QUERO O TRIMESTRAL",
    },
    {
      nome: "Anual", destaque: true, preco: "R$ 122,76", precoAntigo: "R$ 159,90",
      periodo: "/mês", parcela: "ou 1x de R$ 1.187,00 /ano",
      total: "Melhor custo-benefício", link: "https://pay.kiwify.com.br/Vv3N6zi", cta: "QUERO O ANUAL",
    },
    {
      nome: "Semestral", destaque: false, preco: "R$ 125,13", precoAntigo: "R$ 159,90",
      periodo: "/mês", parcela: "ou 1x de R$ 667,00 /semestre",
      total: "Economize a cada mês", link: "https://pay.kiwify.com.br/TifHiat", cta: "QUERO O SEMESTRAL",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end md:items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/hero-mobile.png" alt="Background" className="block md:hidden w-full h-full object-cover object-[center_0%] brightness-90 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          <img src={heroMain} alt="Background" className="hidden md:block w-full h-full object-cover object-center brightness-90 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/85 md:bg-gradient-to-br md:from-background/60 md:via-background/50 md:to-background/70" />
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[100px] opacity-25" />
        </div>

        {/* floating decorative (mobile + desktop) */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="absolute top-[30%] right-6 animate-float opacity-60 md:hidden will-change-transform" style={{ animationDelay: "0.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20"><Trophy className="w-6 h-6 text-accent-foreground" /></div>
          </div>
          <div className="absolute top-[45%] left-6 animate-float opacity-60 md:hidden will-change-transform" style={{ animationDelay: "1s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20"><Target className="w-6 h-6 text-accent-foreground" /></div>
          </div>
          <div className="absolute top-32 right-20 animate-float opacity-80 hidden md:block will-change-transform" style={{ animationDelay: "0.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20"><Trophy className="w-10 h-10 text-accent-foreground" /></div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float opacity-80 hidden md:block" style={{ animationDelay: "1s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20"><Target className="w-10 h-10 text-accent-foreground" /></div>
          </div>
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
                <span className="text-xs md:text-sm font-bold text-accent uppercase tracking-wider">Aprovado AFA · EFOMM · EEAr</span>
              </div>

              <h1 className="text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <span className="text-foreground">O método que me levou a ser </span>
                <span className="bg-gradient-hero-text bg-clip-text text-transparent">01 da AFA e 08 da EFOMM</span>
                <span className="text-foreground">, agora na sua mão.</span>
              </h1>

              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                Mentoria 1:1, plano de metas pronto, aulas ao vivo e a plataforma completa. Tudo num lugar só, sem você precisar adivinhar o que estudar.
              </p>

              <div className="flex flex-col items-start gap-3 pt-2 animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: "0.45s" }}>
                <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg shadow-glow-beige rounded-full font-bold px-6 py-5 md:px-12 md:py-8 w-full sm:w-auto">
                  QUERO ENTRAR PRA MENTORIA →
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

      {/* 3 PILARES */}
      <section className="py-14 md:py-24 bg-gradient-to-b from-background to-secondary/10 relative">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px]" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-3">
              Tudo que você precisa pra <span className="bg-gradient-primary bg-clip-text text-transparent">passar</span>
            </h2>
            <p className="text-base md:text-lg text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto">
              Três pilares conectados que transformam estudo em aprovação.
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

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-14 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10 animate-glow-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-primary/30 rounded-full blur-[140px] opacity-30 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-accent-foreground rounded-full px-4 py-2 mb-4 shadow-glow-beige animate-gold-shimmer">
                <Crown className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Pacote completo · top tier</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Tudo que está <span className="bg-gradient-primary bg-clip-text text-transparent">incluso</span> ✨
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada peça pensada pra te empurrar pra aprovação. Passe o mouse e veja cada uma ganhar vida.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              { icon: Play, title: "Aulas gravadas — 4 matérias", desc: "Português, Inglês, Matemática e Física do zero ao avançado.", gold: true },
              { icon: Users, title: "Aulas ao vivo semanais", desc: "Encontros semanais de Português, Inglês, Matemática e Física com os professores.", gold: true },
              { icon: PenLine, title: "Correção de redação ao vivo", desc: "Sua redação corrigida em tempo real, com feedback direto pra subir nota rápido.", gold: true },
              { icon: Trophy, title: "Banco FULL Questões", desc: "+20.000 questões resolvidas, listas por nível e nivelamento automático." },
              { icon: Layers, title: "+2.000 flashcards Anki", desc: "Revisão espaçada de todas as matérias — fixa de verdade." },
              { icon: Calendar, title: "Plano de metas semanal", desc: "Toda segunda você já sabe o que estudar. Zero tempo perdido decidindo." },
              { icon: BarChart3, title: "Gráficos de desempenho", desc: "Acompanhe sua evolução por matéria, dia, mês e geral — com tendência." },
              { icon: BookOpen, title: "Livro do Método Hibeck", desc: "Tudo que aprendi nos 8 meses que me aprovaram, num só material." },
              { icon: MessageCircle, title: "Suporte direto comigo", desc: "Dúvida no grupo? Resposta rápida. Você não estuda sozinho." },
            ].map((b, i) => (
              <ScrollReveal key={i} delay={i * 70} variant="scale">
                <div className={`group relative h-full backdrop-blur-sm rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] ${
                  b.gold
                    ? "bg-gradient-to-br from-card/90 to-card/70 border-2 border-accent shadow-glow-beige hover:shadow-[0_0_60px_hsl(45_90%_60%/0.45)] animate-gold-shimmer"
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
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto animate-gold-shimmer">
                QUERO CLASSIFICAR →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FLASHCARDS – compacto */}
      <section className="py-14 md:py-24 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal variant="left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                  <Layers className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Flashcards Anki</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Revise igual quem <span className="text-accent">passa de verdade</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  São <strong className="text-accent">+2.000 flashcards</strong> prontos, com teoria objetiva, exemplos e questões. Você só abre e revisa — sem perder uma hora montando material.
                </p>
                <ul className="space-y-2">
                  {["Todas as matérias do edital", "Imagens ilustrativas pra fixar", "Revisão espaçada que funciona"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />{t}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30" />
                <img src={ankiCardExample} alt="Exemplo de Flashcard" className="relative rounded-2xl shadow-premium border-2 border-accent/30 w-full max-w-md mx-auto" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BANCO FULL QUESTÕES SHOWCASE */}
      <section className="py-14 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[160px] opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[140px] opacity-25" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-accent-foreground rounded-full px-4 py-2 mb-4 shadow-glow-beige">
                <Database className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Plataforma Inclusa</span>
              </div>
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Banco <span className="bg-gradient-primary bg-clip-text text-transparent">FULL Questões</span> de quebra
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                +20.000 questões resolvidas, nivelamento automático e listas inteligentes. <strong className="text-accent">Acesso liberado pra todo aluno da mentoria.</strong>
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
            {[
              { icon: Database, t: "+20.000 questões", d: "Resolvidas e comentadas em detalhes." },
              { icon: Filter, t: "Filtros avançados", d: "Matéria, banca, ano, dificuldade e nível." },
              { icon: FileText, t: "Listas por nível", d: "Base, intermediário e avançado por assunto." },
              { icon: TrendingUp, t: "Painel com tendência", d: "Acerto por matéria, dia, mês, ranking e simulado semanal." },
            ].map((b, i) => (
              <ScrollReveal key={i} delay={i * 80} variant="scale">
                <div className="group h-full bg-card/70 backdrop-blur-sm border border-accent/30 rounded-2xl p-4 md:p-5 hover:border-accent hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg mb-3 group-hover:rotate-6 transition-transform">
                    <b.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-foreground mb-1">{b.t}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
            <ScrollReveal variant="right">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <Search className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Filtros inteligentes</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Achou. Resolveu. <span className="text-accent">Aprendeu.</span></h3>
                  <p className="text-muted-foreground leading-relaxed">Filtre por matéria, assunto, banca, ano e dificuldade. Cada questão vem com <strong className="text-accent">resolução comentada passo a passo</strong> — você não fica mais travado quando erra.</p>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/10 rounded-2xl blur-xl opacity-60" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3">
                    <img src="/platform/resolucao.png" alt="Resolução comentada" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="left">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group order-2 md:order-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/10 rounded-2xl blur-xl opacity-60" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3">
                    <img src="/platform/listas-desktop.png" alt="Listas de estudo" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <FileText className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Listas inteligentes</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Seu plano de ataque <span className="text-accent">já montado</span></h3>
                  <p className="text-muted-foreground leading-relaxed">3 listas progressivas por assunto (base, intermediário, avançado) + flashcard de fechamento. Você só abre, executa e sobe de nível.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Desempenho em tempo real</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Saiba <span className="text-accent">exatamente</span> onde você está</h3>
                  <p className="text-muted-foreground leading-relaxed">Gráficos de acerto por matéria, evolução semanal e ranking. Pare de estudar no escuro — <strong className="text-accent">você vê a nota subir antes da prova</strong>.</p>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/10 rounded-2xl blur-xl opacity-60" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3">
                    <img src="/platform/desempenho-desktop.png" alt="Painel de desempenho" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-lg font-bold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige w-full max-w-sm md:w-auto">
                QUERO ESSA PLATAFORMA →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* QUEM SOU EU – compacto */}
      <section className="py-14 md:py-24 bg-background relative overflow-hidden">
        {/* This wrapper is preserved. Section above this one is the weekly plan. */}
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
                    Meu nome é <strong className="text-foreground">Bryan Hibeck</strong>, nascido em 17/03/2004. Ganhei destaque no mundo dos concursos por ter resolvido <strong className="text-accent">+20.000 questões</strong> durante meus <strong className="text-foreground">8 meses de preparação</strong> em 2024.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Fui aprovado na <strong className="text-foreground">AFA como 10º colocado geral</strong> (01 de Infantaria, 04 de Intendência e 05 de Aviação), na <strong className="text-foreground">EFOMM como 08º colocado</strong> e na <strong className="text-foreground">EEAr (BCT) como 15º colocado</strong>.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Estudo concurso militar desde 2021 e consegui minha primeira classificação na <strong className="text-foreground">EPCAr</strong> estudando apenas 3 meses, ainda no mesmo ano. Vivi cada bastidor, errei muito, ajustei o método — e hoje meu trabalho é te entregar o atalho que eu não tive.
                  </p>
                  <p className="text-sm md:text-base text-foreground font-semibold">
                    Minha missão agora é simples: te entregar o passo a passo que me levou ao topo. 🎯
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
                QUERO MEU NOME NESSA LISTA →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos-mentoria" className="py-14 md:py-24 bg-background scroll-mt-8 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
              <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold mb-3">
                Escolha seu <span className="text-accent">plano</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Mesmo acesso, mesmo método. <strong className="text-accent">Quanto mais tempo, mais você economiza.</strong>
              </p>
              <p className="text-sm text-muted-foreground/80 mt-3 max-w-xl mx-auto">
                💡 O <strong className="text-accent">trimestral</strong> é o mínimo pra ver evolução real. Em 1 mês, você ainda está se adaptando ao método.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto items-stretch">
            {planos.map((plano, i) => (
              <ScrollReveal key={i} delay={i * 100}>
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
                      "Mentoria 1:1 personalizada",
                      "Aulas ao vivo (mat/física)",
                      "+2.000 flashcards Anki",
                      "Banco FULL Questões",
                      "Plano de metas pronto",
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
                    onClick={() => window.open(plano.link, "_blank")}
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
                <FAQItem value="item-1" question="Por que o mínimo é trimestral e não mensal?" answer="Em 1 mês você ainda está se adaptando ao método. A evolução real (dominar matérias, ganhar ritmo de questões, ver a nota subir) aparece a partir do 2º/3º mês. O trimestral existe pra você conseguir ver resultado de verdade." />
                <FAQItem value="item-2" question="O que está incluso na mentoria?" answer="Mentoria 1:1 personalizada, aulas ao vivo de matemática e física, vídeo-aulas do método, +2.000 flashcards Anki, acesso ao Banco FULL Questões com +20.000 questões resolvidas, plano de metas pronto, livro do Método Hibeck e suporte direto comigo." />
                <FAQItem value="item-3" question="Serve pra qualquer concurso militar?" answer="Sim. O método é o mesmo que me aprovou na AFA (01º), EFOMM (08º), EEAr (15º) e EPCAr. Funciona pra AFA, EN, EFOMM, EEAR, EPCAR, ESPCEX, ESA, EAM, IME, ITA e CN." />
                <FAQItem value="item-4" question="Qual a diferença entre os planos?" answer="O acesso é exatamente o mesmo. A diferença é o preço: o anual sai R$ 122,76/mês (1x de R$ 1.187,00), o semestral R$ 125,13/mês (1x de R$ 667,00) e o trimestral R$ 134,54/mês (1x de R$ 377,00)." />
                <FAQItem value="item-5" question="Tem garantia?" answer="Sim, 7 dias incondicionais. Se não gostar por qualquer motivo, devolvemos 100% do valor sem perguntas." />
                <FAQItem value="item-6" question="Sirvo se sou iniciante?" answer="Sim. A mentoria começa do zero — vídeos ensinando como estudar cada matéria, sem assumir que você já sabe alguma coisa." />
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
