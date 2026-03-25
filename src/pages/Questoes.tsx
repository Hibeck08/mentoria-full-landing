import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FeatureCard } from "@/components/FeatureCard";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Target, BookOpen, Users, Trophy, CheckCircle2, FileText, Zap, Award, Instagram, TrendingUp, Brain, Clock, Rocket, Shield, ChevronDown, ArrowDown, Lightbulb, BarChart3, Repeat, Database, Timer, MessageCircle, User, LineChart, Search, Home } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import bryanPhoto from "@/assets/bryan-photo.jpg";
import militaryWallpaper from "@/assets/military-wallpaper.png";
import flashcardsWallpaper from "@/assets/flashcards-wallpaper.png";
import benefitsWallpaper from "@/assets/benefits-wallpaper.png";

const Questoes = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos-questoes');
    if (plansSection) {
      plansSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[115vh] md:min-h-[100vh] flex items-end md:items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/questoes-hero-wallpaper.jpg" alt="Background" className="block md:hidden w-full h-full object-cover object-[center_top] brightness-75 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          <img src="/lovable-uploads/questoes-hero-wallpaper.jpg" alt="Background" className="hidden md:block w-full h-full object-cover object-center brightness-75 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 md:bg-gradient-to-br md:from-background/70 md:via-background/50 md:to-background/80" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-glow-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[100px] opacity-25 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="absolute top-[30%] right-6 animate-float opacity-60 md:hidden will-change-transform" style={{ animationDelay: "0.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20">
              <Database className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          <div className="absolute top-[45%] left-6 animate-float opacity-60 md:hidden will-change-transform" style={{ animationDelay: "1s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20">
              <Brain className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          <div className="absolute top-32 right-20 animate-float opacity-80 hidden md:block will-change-transform" style={{ animationDelay: "0.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Database className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float opacity-80 hidden md:block" style={{ animationDelay: "1s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Brain className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          <div className="absolute top-1/2 right-32 animate-float opacity-80 hidden xl:block" style={{ animationDelay: "1.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Lightbulb className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-accent/20 animate-float hidden lg:block" style={{ animationDelay: "0.8s" }} />
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/20 animate-float hidden lg:block" style={{ animationDelay: "1.2s" }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 pt-24 pb-8 md:py-20 h-full">
          <div className="max-w-7xl mx-auto h-full">
            {/* Logo */}
            <div className="absolute top-4 md:top-8 left-4 md:left-8 animate-fade-in-up z-20">
              <img src={mentoriaLogo} alt="FULL Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-2xl" loading="eager" />
            </div>
            
            {/* Menu Button */}
            <Link to="/" className="absolute top-4 md:top-8 right-4 md:right-8 animate-fade-in-up flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20 hover:bg-card/90 hover:border-accent/50 transition-all" style={{ animationDelay: "0.2s" }}>
              <Home className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground hidden md:inline">Menu</span>
            </Link>
            
            {/* Badge - Desktop only */}
            <div className="absolute top-4 md:top-8 right-28 md:right-36 animate-fade-in-up hidden md:flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20" style={{ animationDelay: "0.2s" }}>
              <img src={heroPhoto} alt="Mentor" className="w-10 h-10 rounded-full object-cover ring-2 ring-accent" loading="eager" />
              <span className="text-sm font-semibold text-foreground">@hibeck_</span>
            </div>
            
            <div className="flex flex-col items-start justify-end md:justify-center md:items-start gap-5 md:gap-12 min-h-[90vh] md:min-h-[80vh] pb-32 md:pt-0 md:pb-0">
              <div className="space-y-6 md:space-y-6 lg:space-y-8 animate-fade-in-up max-w-2xl z-10 w-full" style={{ animationDelay: "0.3s" }}>
                <h1 className="text-[1.35rem] sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.2] text-left">
                  <span className="text-foreground">QUESTÕES RESOLVIDAS </span>
                  <span className="bg-gradient-hero-text bg-clip-text text-transparent">+ MÉTODO DE ESTUDO </span>
                  <span className="text-foreground">POR MENOS DE </span>
                  <span className="bg-gradient-hero-text bg-clip-text text-transparent">R$1,83 POR DIA</span>
                </h1>
                
                <p className="text-[0.85rem] md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl text-left">
                  O melhor banco de questões para concursos militares <strong className="text-accent">+ o método completo de estudos</strong> que me fez ser o 08º da EFOMM e 01º da AFA. Tudo em um lugar só.
                </p>
                
                <div className="flex flex-col items-start gap-3 md:gap-4 pt-2 md:pt-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                  <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-[0.85rem] leading-tight md:text-base lg:text-lg shadow-glow-beige rounded-full transition-all font-bold px-6 py-4 md:px-12 md:py-8 w-full sm:w-auto">
                    QUERO IMPULSIONAR MEUS ESTUDOS →
                  </Button>
                  <p className="text-xs md:text-sm text-muted-foreground/80 text-left">
                    ⚡ +20.000 questões • Método completo • R$54,90/mês
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Banner strip */}
        <div className="absolute bottom-4 md:bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-20">
          <div className="bg-gradient-primary py-2 md:py-6 border-y-2 border-accent-dark/30">
            <div className="flex justify-center">
              <span className="text-accent-foreground font-bold text-xs md:text-base lg:text-lg tracking-wider px-4">
                ⭐ FULL QUESTÕES + MÉTODO FULL • ESTUDE COM ESTRATÉGIA ⭐
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8 bg-gradient-to-b from-background to-primary/5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
              <Database className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Combined Value Proposition */}
      <section className="py-12 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={militaryWallpaper} alt="Military Background" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95"></div>
        </div>
        
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <ScrollReveal variant="left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2">
                  <span className="text-base font-semibold text-foreground">FULL QUESTÕES</span>
                  <span className="text-xs font-bold text-accent">+MÉTODO</span>
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-background" />
                  </div>
                </div>
                
                <h2 className="text-[1.5rem] md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  BANCO DE QUESTÕES + MÉTODO DE ESTUDO EM UM SÓ LUGAR
                </h2>
                
                <p className="text-[0.95rem] md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Mais de <strong className="text-accent">20.000 questões</strong> resolvidas e comentadas, organizadas por matéria, banca e nível de dificuldade — combinadas com o <strong className="text-accent">Método FULL</strong>, o sistema de estudos que te ensina como estudar de verdade.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Filtre questões, monte listas, faça simulados cronometrados e acompanhe seu desempenho — tudo isso com uma <strong className="text-accent">metodologia testada e replicável</strong> que transforma estudo em resultado.
                </p>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed font-semibold">
                  A combinação perfeita: prática inteligente + estratégia comprovada.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-accent/10 rounded-2xl p-6 text-center">
                      <p className="text-4xl font-bold text-accent">20K+</p>
                      <p className="text-sm text-muted-foreground">Questões</p>
                    </div>
                    <div className="bg-accent/10 rounded-2xl p-6 text-center">
                      <p className="text-4xl font-bold text-accent">100%</p>
                      <p className="text-sm text-muted-foreground">Resolvidas</p>
                    </div>
                    <div className="bg-accent/10 rounded-2xl p-6 text-center">
                      <p className="text-4xl font-bold text-accent">2K+</p>
                      <p className="text-sm text-muted-foreground">Flashcards</p>
                    </div>
                    <div className="bg-accent/10 rounded-2xl p-6 text-center">
                      <p className="text-4xl font-bold text-accent">📊</p>
                      <p className="text-sm text-muted-foreground">Método</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-12">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-lg md:text-lg font-bold px-8 py-6 md:px-12 md:py-8 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all w-full sm:w-auto">
                  QUERO COMEÇAR AGORA →
                </Button>
                <p className="text-sm md:text-sm text-muted-foreground text-center">
                  💳 Acesso imediato após pagamento
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8 bg-gradient-to-b from-background to-primary/5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Who Am I Section */}
      <section className="py-12 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-15" />
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Quem <span className="bg-gradient-primary bg-clip-text text-transparent">sou eu?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Conheça quem desenvolveu este método
            </p>
          </ScrollReveal>
          
          <div className="max-w-5xl mx-auto">
            <ScrollReveal variant="scale">
              <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 hover:shadow-premium transition-all duration-300">
                <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-6 md:gap-8 lg:gap-12 items-center">
                  <div className="relative mx-auto md:mx-0 max-w-[280px] md:max-w-none">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl md:rounded-3xl blur-2xl opacity-30" />
                    <img src={bryanPhoto} alt="Bryan Hibeck" className="relative rounded-2xl md:rounded-3xl w-full h-auto object-cover shadow-premium border-2 border-accent/20" loading="lazy" decoding="async" />
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-1 md:mb-2">
                      <Trophy className="w-4 md:w-5 h-4 md:h-5 text-accent-foreground" />
                      <span className="text-xs md:text-sm font-bold text-accent-foreground">Criador do Método</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 md:mb-2">Bryan Hibeck</h3>
                    <p className="text-sm md:text-sm text-accent font-semibold mb-3 md:mb-4">Nascido em 17/03/2004</p>
                    
                    <div className="space-y-3 md:space-y-4 text-base md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      <p>Ganhei destaque no mundo dos concursos por ter feito <strong className="text-accent">mais de 20 mil questões</strong> durante os meus 8 meses de preparação no ano de 2024.</p>
                      <p>Consegui aprovação na <strong className="text-foreground">AFA</strong>, sendo o <strong className="text-accent">10º colocado geral</strong> (01 de infantaria, 04 de intendência e 05 de aviação), <strong className="text-foreground">EFOMM</strong> sendo o <strong className="text-accent">08º colocado</strong> e na <strong className="text-foreground">EEAr (BCT)</strong> sendo o <strong className="text-accent">15º colocado</strong>.</p>
                      <p>Estudo desde o ano de 2021 e consegui minha primeira classificação no concurso da <strong className="text-foreground">EPCAr</strong> estudando apenas 3 meses no ano de 2021.</p>
                      <p className="text-foreground font-semibold pt-1 md:pt-2">Minha missão agora é compartilhar esse método que me levou ao sucesso e ajudar você a conquistar sua aprovação! 🎯</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
              <Target className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* What You Will Dominate - Methodology Timeline */}
      <section className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] opacity-40" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[120px] opacity-30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-5 py-2.5">
                <Brain className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Método FULL incluso</span>
              </div>
            </div>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              O que você vai <span className="text-accent italic font-extrabold font-sans text-4xl">DOMINAR?</span>
            </h2>
            <p className="text-base md:text-lg text-center text-muted-foreground mb-12 md:mb-20 max-w-xl mx-auto">
              Um caminho claro do zero à aprovação
            </p>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent md:-translate-x-1/2" />
            
            {[
              { step: "01", title: "Planejamento", desc: "Monte um plano de estudos realista e executável", icon: Target },
              { step: "02", title: "Eficiência", desc: "Aprenda a estudar de verdade, mesmo com pouco tempo", icon: Zap },
              { step: "03", title: "Revisão", desc: "Revise do jeito certo — sem recomeçar do zero", icon: Repeat },
              { step: "04", title: "Questões", desc: "Filtre e resolva apenas o que realmente importa", icon: FileText },
              { step: "05", title: "Evolução", desc: "Use simulados para medir progresso e ajustar rota", icon: TrendingUp },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className={`relative flex items-center gap-6 md:gap-8 mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-glow-beige md:-translate-x-1/2 z-10" />
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="group bg-card/60 backdrop-blur-sm border border-accent/20 rounded-2xl p-5 md:p-6 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 hover:shadow-premium">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6 text-accent-foreground" />
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-accent/70 uppercase tracking-wider">Passo {item.step}</span>
                          <h3 className="text-lg md:text-xl font-bold text-foreground mt-1">{item.title}</h3>
                          <p className="text-sm md:text-base text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-16 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-foreground font-bold">
                Um método <span className="text-accent">testado</span>, replicável e aplicável a <span className="underline decoration-accent decoration-2 underline-offset-4">qualquer prova</span>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transition */}
      <div className="py-6 bg-background">
        <div className="flex justify-center">
          <div className="flex items-center gap-2 opacity-40">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <div className="w-3 h-3 bg-accent rounded-full" />
            <div className="w-2 h-2 bg-accent rounded-full" />
          </div>
        </div>
      </div>

      {/* Flashcards Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={flashcardsWallpaper} alt="Flashcards Background" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-5 py-2.5">
                <span className="text-sm font-bold text-accent uppercase tracking-wider">🎁 Bônus Incluso</span>
              </div>
            </div>
            <h2 className="text-[2rem] md:text-5xl lg:text-6xl font-black text-center mb-4">
              <span className="bg-gradient-hero-text bg-clip-text text-transparent">+2000</span> Flashcards
            </h2>
            <p className="text-base md:text-lg text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
              Teoria, exemplos e questões comentadas — tudo pronto para você revisar em minutos por dia.
            </p>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: Brain, label: "Memorização", value: "Ativa" },
                { icon: Clock, label: "Revisões", value: "Rápidas" },
                { icon: Zap, label: "Tempo", value: "Otimizado" },
                { icon: Target, label: "Fixação", value: "Permanente" },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <div className="group bg-card/80 backdrop-blur-sm border-2 border-accent/30 rounded-xl p-4 md:p-5 text-center hover:border-accent hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm md:text-base font-bold text-foreground">{item.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-10 md:mt-14">
              <div className="inline-block bg-card/90 backdrop-blur-sm border border-accent/30 rounded-2xl px-8 py-5">
                <p className="text-lg md:text-xl text-foreground font-bold">
                  Você <span className="text-accent">não precisa criar nada</span> do zero.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mt-1">
                  É só baixar, abrir e começar a revisar. 📚
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8 bg-gradient-to-b from-background to-primary/5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Timeline - Platform */}
      <section className="py-12 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-15" />
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              O que você vai <span className="bg-gradient-primary bg-clip-text text-transparent">encontrar</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Tudo que você precisa para praticar e evoluir
            </p>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-accent rounded-full hidden md:block" />
            
            {[
              { icon: Database, title: "Banco de +20.000 Questões", description: "Questões de todas as bancas militares, organizadas e com resolução detalhada em texto." },
              { icon: Search, title: "Filtros Avançados", description: "Filtre por matéria, assunto, banca, ano e nível de dificuldade para estudar o que realmente importa." },
              { icon: FileText, title: "Listas Personalizadas", description: "Monte suas próprias listas de questões organizadas por matéria e assunto." },
              { icon: Timer, title: "Simulados com Cronômetro", description: "Faça simulados cronometrados que simulam a prova real, com ranking de acertos." },
              { icon: BookOpen, title: "Método Completo de Estudo", description: "Aprenda como planejar, revisar e filtrar questões com o Método FULL incluso." },
              { icon: MessageCircle, title: "Suporte Direto com Professores", description: "Tire suas dúvidas diretamente com nossos professores especialistas." },
              { icon: LineChart, title: "Painel de Desempenho", description: "Acompanhe seu progresso com gráficos de erros e acertos por matéria." },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={`flex items-center gap-6 md:gap-12 mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-6 hover:shadow-premium transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-glow-beige z-10 flex-shrink-0">
                    <item.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Showcase Section */}
      <section className="py-12 md:py-24 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-10" />
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Conheça a <span className="bg-gradient-primary bg-clip-text text-transparent">plataforma</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Uma experiência completa para sua preparação
            </p>
          </ScrollReveal>
          
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
            {/* 1. Home */}
            <ScrollReveal variant="left">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <Rocket className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Tela Inicial</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Tudo ao seu alcance em <span className="text-accent">um clique</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Assim que você entra, já sabe exatamente onde ir. Banco de questões, simulados, listas — sem enrolação, sem perda de tempo.
                  </p>
                </div>
                <div className="relative group order-1 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/home-mobile.png" alt="Tela inicial da plataforma" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Filtros */}
            <ScrollReveal variant="right">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/banco-filtros.png" alt="Banco de questões com filtros" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <Search className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Filtros Inteligentes</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Encontre a questão <span className="text-accent">perfeita</span> em segundos
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Matéria, assunto, banca, prova, ano e resolução — filtre do jeito que quiser. Chega de perder horas procurando questão.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 3. Resolução */}
            <ScrollReveal variant="left">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <Brain className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Resolução Completa</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Errou? Sem problema. <span className="text-accent">Aprenda com cada questão</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada questão tem resolução detalhada passo a passo. Não é só gabarito — é uma aula dentro de cada alternativa.
                  </p>
                </div>
                <div className="relative group order-1 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/resolucao.png" alt="Resolução detalhada" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 4. Listas */}
            <ScrollReveal variant="right">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/listas-desktop.png" alt="Listas personalizadas" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <FileText className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Suas Listas</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Monte seu <span className="text-accent">plano de ataque</span> personalizado
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Crie listas com as questões que você quer revisar. Organize por matéria, por fraqueza, ou do jeito que funcionar melhor pra você.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 5. Questões na lista */}
            <ScrollReveal variant="left">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <Target className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Prática Direcionada</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Foco total nas questões que <span className="text-accent">realmente importam</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dentro de cada lista, resolva questão por questão no seu ritmo. Acompanhe seu progresso e veja exatamente quanto falta para dominar aquele assunto.
                  </p>
                </div>
                <div className="relative group order-1 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/questoes-lista.png" alt="Questões dentro de uma lista" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 6. Desempenho */}
            <ScrollReveal variant="right">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/desempenho-desktop.png" alt="Painel de desempenho" className="w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Seu Desempenho</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Saiba exatamente <span className="text-accent">onde você precisa melhorar</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acertos, erros, taxa de aproveitamento — tudo por matéria. Com dados reais, você sabe onde atacar e quando está pronto.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-12 md:mt-16">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm sm:text-base md:text-lg font-bold px-5 py-4 sm:px-8 sm:py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all w-full max-w-xs sm:max-w-sm md:w-auto">
                QUERO IMPULSIONAR MEUS ESTUDOS →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-12 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Para quem é o <span className="bg-gradient-primary bg-clip-text text-transparent">FULL QUESTÕES + Método?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Se você se identifica com algum desses perfis, esse combo foi feito para você.
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Target, title: "Estuda Sozinho", description: "Para quem precisa de direção clara e estruturada" },
              { icon: Zap, title: "Já Tentou Vários Métodos", description: "Para quem não teve resultado com outras abordagens" },
              { icon: Trophy, title: "Quer Estratégia", description: "Para quem quer estudar com método, não no improviso" },
              { icon: BookOpen, title: "Busca Evolução Real", description: "Para quem quer constância, clareza e progresso" },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <FeatureCard {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="flex justify-center py-8 bg-gradient-to-b from-secondary/10 to-background">
        <div className="flex items-center gap-2">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-accent"></div>
          <Shield className="w-6 h-6 text-accent" />
          <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-accent/50 to-accent"></div>
        </div>
      </div>

      {/* Guarantee */}
      <GuaranteeSection onScrollToPlans={scrollToPlans} />

      {/* Transition */}
      <div className="flex justify-center py-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-accent font-semibold tracking-wider">VEJA OS RESULTADOS</p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-4 mb-6 md:mb-12">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Resultados que <span className="bg-gradient-primary bg-clip-text text-transparent">comprovam</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              A prova de que o método realmente funciona
            </p>
          </ScrollReveal>
        </div>
        
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          <div className="absolute inset-0 flex animate-scroll-left" style={{ width: 'max-content' }}>
            {["/lovable-uploads/feedback-1.jpg", "/lovable-uploads/feedback-2.jpg", "/lovable-uploads/feedback-3.jpg", "/lovable-uploads/feedback-4.jpg", "/lovable-uploads/feedback-5.jpg", "/lovable-uploads/feedback-6.jpg", "/lovable-uploads/feedback-7.jpg", "/lovable-uploads/feedback-8.jpg", "/lovable-uploads/feedback-9.jpg"].map((image, index) => (
              <div key={index} className="h-[50vh] md:h-[70vh] lg:h-[80vh] w-auto flex-shrink-0">
                <img src={image} alt={`Depoimento ${index + 1}`} className="h-full w-auto object-contain" loading="lazy" decoding="async" />
              </div>
            ))}
            {["/lovable-uploads/feedback-1.jpg", "/lovable-uploads/feedback-2.jpg", "/lovable-uploads/feedback-3.jpg", "/lovable-uploads/feedback-4.jpg", "/lovable-uploads/feedback-5.jpg", "/lovable-uploads/feedback-6.jpg", "/lovable-uploads/feedback-7.jpg", "/lovable-uploads/feedback-8.jpg", "/lovable-uploads/feedback-9.jpg"].map((image, index) => (
              <div key={`dup-${index}`} className="h-[50vh] md:h-[70vh] lg:h-[80vh] w-auto flex-shrink-0">
                <img src={image} alt={`Depoimento ${index + 1}`} className="h-full w-auto object-contain" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-12">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm sm:text-base md:text-lg font-bold px-5 py-4 sm:px-8 sm:py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all w-full max-w-xs sm:max-w-sm md:w-auto">
                QUERO COMEÇAR AGORA →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transition */}
      <div className="relative py-8 bg-gradient-to-b from-secondary/20 to-background">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-secondary/20 px-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
              <Rocket className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* What You Receive */}
      <section className="py-12 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={benefitsWallpaper} alt="Benefits Background" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              O que você recebe <span className="text-accent">ao assinar</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Tudo que você precisa em um único pacote
            </p>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { icon: Database, text: "Acesso a +20.000 questões resolvidas" },
              { icon: BookOpen, text: "Método FULL completo de estudo" },
              { icon: Brain, text: "+2000 flashcards de todas as matérias" },
              { icon: Search, text: "Filtros avançados por matéria e banca" },
              { icon: Timer, text: "Simulados cronometrados com ranking" },
              { icon: LineChart, text: "Painel de desempenho detalhado" },
              { icon: MessageCircle, text: "Suporte direto com professores" },
              { icon: Shield, text: "Garantia incondicional de 7 dias" },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-5 hover:bg-card/70 hover:border-accent/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-lg md:text-xl text-foreground font-medium">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8 bg-gradient-to-b from-background to-background">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
              <Trophy className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section id="planos-questoes" className="py-12 md:py-24 bg-background scroll-mt-8">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              A decisão agora é <span className="text-accent">simples</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Banco de questões + método de estudo por um preço que cabe no seu bolso.
            </p>
          </ScrollReveal>
          
          {/* Single Pricing Card */}
          <div className="max-w-lg mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-beige-premium border-2 border-accent rounded-xl md:rounded-3xl p-6 md:p-10 hover:shadow-premium transition-all duration-300 flex flex-col shadow-glow-beige relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                    ⭐ QUESTÕES + MÉTODO
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 bg-background/90 border border-accent/30 rounded-full px-4 py-2 mb-6 w-fit mx-auto mt-2">
                  <span className="font-semibold text-foreground">Assinatura Mensal</span>
                  <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-background" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-1 text-background text-center">
                  FULL QUESTÕES
                </h3>
                <p className="text-sm text-center text-accent-foreground/80 mb-6">
                  <span className="text-background/70">com </span>
                  <span className="font-bold text-background">+Método FULL</span>
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Acesso a +20.000 questões resolvidas",
                    "Método FULL completo de estudos",
                    "+2000 flashcards de todas as matérias",
                    "Filtros por matéria, banca e assunto",
                    "Listas personalizadas de estudo",
                    "Simulados com cronômetro e ranking",
                    "Painel de desempenho detalhado",
                    "Suporte direto com professores",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-background flex-shrink-0 mt-0.5" />
                      <span className="text-base text-background font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6 text-center">
                  <p className="text-5xl md:text-6xl font-bold text-background mb-1">R$54,90</p>
                  <p className="text-sm text-background/80">/mês</p>
                </div>
                
                <div className="space-y-3">
                  <Button variant="default" className="w-full py-6 text-base font-bold bg-background text-accent hover:bg-background/90" onClick={() => window.open('https://pay.kiwify.com.br/cS3oAhK', '_blank')}>
                    QUERO IMPULSIONAR MEUS ESTUDOS →
                  </Button>
                  <p className="text-xs text-center text-background/90 font-medium">
                    Acesso imediato • Cancele quando quiser
                  </p>
                  <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
                    <div className="bg-background/90 rounded px-2 py-1">
                      <span className="text-xs font-bold text-accent">MASTERCARD</span>
                    </div>
                    <div className="bg-background/90 rounded px-2 py-1">
                      <span className="text-xs font-bold text-accent">VISA</span>
                    </div>
                    <div className="bg-background/90 rounded px-2 py-1">
                      <span className="text-xs font-bold text-accent">PIX</span>
                    </div>
                    <div className="bg-background/90 rounded px-2 py-1">
                      <span className="text-xs font-bold text-accent">BOLETO</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-background">
                  <Shield className="w-4 h-4" />
                  <span className="font-semibold">Garantia de 7 dias</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              🔒 Garantia de 7 dias • Pagamento 100% seguro
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
              <Brain className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o FULL QUESTÕES + Método
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem value="item-1" question="O que está incluso na assinatura?" answer="Você recebe acesso completo ao banco com +20.000 questões resolvidas, ao Método FULL de estudos, +2000 flashcards, simulados cronometrados, painel de desempenho, filtros avançados, listas personalizadas e suporte direto com professores." />
                <FAQItem value="item-2" question="O que é o Método FULL?" answer="O Método FULL é um sistema completo de estudos que te ensina como estudar de verdade — planejamento, revisão estratégica, filtragem de questões e uso inteligente de simulados. Tudo com lógica, constância e resultado." />
                <FAQItem value="item-3" question="Por quanto tempo terei acesso?" answer="O acesso é por assinatura mensal. Enquanto sua assinatura estiver ativa, você tem acesso completo a tudo — questões, método, flashcards e todas as funcionalidades. Você pode cancelar quando quiser." />
                <FAQItem value="item-4" question="Quantas questões tem no banco?" answer="Nosso banco possui mais de 20.000 questões de concursos militares, todas com resolução detalhada em texto. Em breve, todas terão resolução em vídeo também!" />
                <FAQItem value="item-5" question="Como funcionam os simulados?" answer="Você pode montar simulados personalizados com cronômetro, simulando a prova real. Ao final, você vê seu desempenho e pode comparar com outros alunos no ranking." />
                <FAQItem value="item-6" question="Tem garantia?" answer="Sim! Oferecemos garantia incondicional de 7 dias. Se você não estiver satisfeito por qualquer motivo, devolvemos 100% do valor investido sem complicações." />
                <FAQItem value="item-7" question="Serve para qualquer concurso militar?" answer="Sim! As questões cobrem todas as principais bancas militares e o Método FULL foi desenvolvido para ser aplicável a qualquer prova. As técnicas funcionam independentemente do concurso." />
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 animate-float">
        <Button variant="gold" size="lg" className="rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all px-4 py-3 md:px-8 md:py-6 text-xs md:text-base font-bold whitespace-nowrap" onClick={() => window.open('https://api.whatsapp.com/send?phone=5521992104885', '_blank')}>
          💬 Fale Comigo
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <img src={mentoriaLogo} alt="FULL" className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4" loading="lazy" />
              <p className="text-base text-muted-foreground italic font-semibold">
                "Pratique com inteligência, aprove com excelência."
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-3 md:mb-4">Links Úteis</h3>
              <ul className="space-y-1.5 md:space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-3 md:mb-4">Redes Sociais</h3>
              <a href="https://instagram.com/hibeck_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                <span>@hibeck_</span>
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 md:pt-8 text-center text-muted-foreground">
            <p className="text-sm">&copy; 2024 FULL QUESTÕES + Método. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Questoes;
