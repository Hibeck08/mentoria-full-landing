import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Target, BookOpen, Users, Trophy, CheckCircle2, FileText, Zap, Award, Instagram, TrendingUp, Brain, Clock, Rocket, Shield, ChevronDown, ArrowDown, Lightbulb, BarChart3, Repeat, Database, Timer, MessageCircle, User, LineChart, Search, Home } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import bryanPhoto from "@/assets/bryan-photo.jpg";
import militaryWallpaper from "@/assets/military-wallpaper.png";
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
        {/* Background with hero wallpaper */}
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/questoes-hero-wallpaper.jpg" alt="Background" className="block md:hidden w-full h-full object-cover object-[center_top] brightness-75 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          <img src="/lovable-uploads/questoes-hero-wallpaper.jpg" alt="Background" className="hidden md:block w-full h-full object-cover object-center brightness-75 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 md:bg-gradient-to-br md:from-background/70 md:via-background/50 md:to-background/80" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
          {/* Subtle glow effects */}
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-glow-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[100px] opacity-25 animate-glow-pulse" style={{
          animationDelay: "1.5s"
        }} />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Mobile minimal floating icons */}
          <div className="absolute top-[30%] right-6 animate-float opacity-60 md:hidden will-change-transform" style={{
          animationDelay: "0.5s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20">
              <Database className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute top-[45%] left-6 animate-float opacity-60 md:hidden will-change-transform" style={{
          animationDelay: "1s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20">
              <Search className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          
          {/* Desktop floating icons */}
          <div className="absolute top-32 right-20 animate-float opacity-80 hidden md:block lg:block will-change-transform" style={{
          animationDelay: "0.5s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Database className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute bottom-40 left-20 animate-float opacity-80 hidden md:block lg:block" style={{
          animationDelay: "1s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Search className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute top-1/2 right-32 animate-float opacity-80 hidden xl:block" style={{
          animationDelay: "1.5s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Timer className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-accent/20 animate-float hidden lg:block" style={{
          animationDelay: "0.8s"
        }} />
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/20 animate-float hidden lg:block" style={{
          animationDelay: "1.2s"
        }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 pt-24 pb-8 md:py-20 h-full">
          <div className="max-w-7xl mx-auto h-full">
            {/* Logo - Fixed top left */}
            <div className="absolute top-4 md:top-8 left-4 md:left-8 animate-fade-in-up z-20">
              <img src={mentoriaLogo} alt="FULL QUESTÕES Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-2xl" loading="eager" />
            </div>
            
            {/* Menu Button */}
            <Link to="/" className="absolute top-4 md:top-8 right-4 md:right-8 animate-fade-in-up flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20 hover:bg-card/90 hover:border-accent/50 transition-all" style={{
            animationDelay: "0.2s"
          }}>
              <Home className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground hidden md:inline">Menu</span>
            </Link>
            
            {/* Badge - Desktop only */}
            <div className="absolute top-4 md:top-8 right-28 md:right-36 animate-fade-in-up hidden md:flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20" style={{
            animationDelay: "0.2s"
          }}>
              <img src={heroPhoto} alt="Mentor" className="w-10 h-10 rounded-full object-cover ring-2 ring-accent" loading="eager" />
              <span className="text-sm font-semibold text-foreground">@hibeck_</span>
            </div>
            
            {/* Mobile Layout: Centered image with text below */}
            <div className="flex flex-col items-start justify-end md:justify-center md:items-start gap-5 md:gap-12 min-h-[90vh] md:min-h-[80vh] pb-32 md:pt-0 md:pb-0">
              <div className="space-y-6 md:space-y-6 lg:space-y-8 animate-fade-in-up max-w-2xl z-10 w-full" style={{
              animationDelay: "0.3s"
            }}>
                <h1 className="text-[1.35rem] sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.2] text-left md:text-left">
                  <span className="text-foreground">
                    POR MENOS DE{" "}
                  </span>
                  <span className="bg-gradient-hero-text bg-clip-text text-transparent">
                    R$1,35 POR DIA
                  </span>
                  <span className="text-foreground">
                    , TENHA ACESSO A MILHARES DE QUESTÕES COM{" "}
                  </span>
                  <span className="bg-gradient-hero-text bg-clip-text text-transparent">
                    RESOLUÇÃO DETALHADA
                  </span>
                </h1>
                
                <p className="text-[0.85rem] md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl text-left md:text-left">
                  O melhor banco de questões para concursos militares. Resolução em texto detalhado (em breve em vídeo), simulados com cronômetro, ranking de desempenho e muito mais!
                </p>
                
                <div className="flex flex-col items-start md:items-start gap-3 md:gap-4 pt-2 md:pt-4 animate-fade-in-up" style={{
                animationDelay: "0.5s"
              }}>
                  <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-[0.85rem] leading-tight md:text-base lg:text-lg shadow-glow-beige rounded-full transition-all font-bold px-6 py-4 md:px-12 md:py-8 w-full sm:w-auto">
                    QUERO IMPULSIONAR MEUS ESTUDOS →
                  </Button>
                  <p className="text-xs md:text-sm text-muted-foreground/80 text-left md:text-left">
                    ⚡ +20.000 questões • Simulados ilimitados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Static Horizontal banner strip */}
        <div className="absolute bottom-4 md:bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-20">
          <div className="bg-gradient-primary py-2 md:py-6 border-y-2 border-accent-dark/30">
            <div className="flex justify-center">
              <span className="text-accent-foreground font-bold text-xs md:text-base lg:text-lg tracking-wider px-4">
                ⭐ FULL QUESTÕES • PRATIQUE COM INTELIGÊNCIA ⭐
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

      {/* What is FULL QUESTÕES Section */}
      <section className="py-12 md:py-32 relative overflow-hidden">
        {/* Background Military Wallpaper */}
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
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-background" />
                  </div>
                </div>
                
                <h2 className="text-[1.5rem] md:text-3xl lg:text-4xl font-bold mb-4 md:mb-4 leading-tight">
                  O MELHOR BANCO DE QUESTÕES PARA CONCURSOS MILITARES
                </h2>
                
                <p className="text-[0.95rem] md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Mais de <strong className="text-accent">20.000 questões</strong> resolvidas e comentadas em texto, organizadas por matéria, banca e nível de dificuldade.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Filtre, monte listas personalizadas, faça simulados cronometrados e acompanhe seu desempenho em tempo real. <strong className="text-accent">Em breve, todas com resolução em vídeo!</strong>
                </p>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed font-semibold">
                  A plataforma perfeita para quem quer praticar com inteligência.
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
                      <p className="text-4xl font-bold text-accent">Filtros</p>
                      <p className="text-sm text-muted-foreground">e Simulados</p>
                    </div>
                    <div className="bg-accent/10 rounded-2xl p-6 text-center">
                      <p className="text-4xl font-bold text-accent">📊</p>
                      <p className="text-sm text-muted-foreground">Ranking</p>
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
                  QUERO O FULL QUESTÕES →
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
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Timeline Section */}
      <section className="py-12 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-15" />
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              O que você vai <span className="bg-gradient-primary bg-clip-text text-transparent">encontrar</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Tudo que você precisa para praticar e evoluir
            </p>
          </ScrollReveal>
          
          {/* Timeline Layout */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-accent rounded-full hidden md:block" />
            
            {[{
            icon: Database,
            title: "Banco de +20.000 Questões",
            description: "Questões de todas as bancas militares, organizadas e com resolução detalhada em texto."
          }, {
            icon: Search,
            title: "Filtros Avançados",
            description: "Filtre por matéria, assunto, banca, ano e nível de dificuldade para estudar o que realmente importa."
          }, {
            icon: FileText,
            title: "Listas Personalizadas",
            description: "Monte suas próprias listas de questões organizadas por matéria e assunto."
          }, {
            icon: Timer,
            title: "Simulados com Cronômetro",
            description: "Faça simulados cronometrados que simulam a prova real, com ranking de acertos."
          }, {
            icon: MessageCircle,
            title: "Suporte Direto com Professores",
            description: "Tire suas dúvidas diretamente com nossos professores especialistas."
          }, {
            icon: LineChart,
            title: "Painel de Desempenho",
            description: "Acompanhe seu progresso com gráficos de erros e acertos por matéria."
          }, {
            icon: User,
            title: "Perfil Personalizável",
            description: "Personalize seu perfil e interaja com outros alunos nas questões."
          }].map((item, index) => <ScrollReveal key={index} delay={index * 100}>
                <div className={`flex items-center gap-6 md:gap-12 mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-6 hover:shadow-premium transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Icon */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-glow-beige z-10 flex-shrink-0">
                    <item.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>)}
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
          
          {/* Platform Screenshots - Alternating layout with copy */}
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
            
            {/* 1. Home / Dashboard */}
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
                    Assim que você entra, já sabe exatamente onde ir. Banco de questões, simulados, listas — sem enrolação, sem perda de tempo. Seu estudo começa agora.
                  </p>
                </div>
                <div className="relative group order-1 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/home-desktop.png" alt="Tela inicial da plataforma" className="w-full rounded-xl hidden md:block" loading="lazy" decoding="async" />
                    <img src="/platform/home-mobile.png" alt="Tela inicial mobile" className="w-full rounded-xl block md:hidden max-h-[500px] object-contain mx-auto" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Banco de Questões + Filtros */}
            <ScrollReveal variant="right">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/banco-filtros.png" alt="Banco de questões com filtros" className="w-full rounded-xl" loading="lazy" decoding="async" />
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
                    Matéria, assunto, banca, prova, ano e resolução — filtre do jeito que quiser. Chega de perder horas procurando questão. Aqui, o estudo inteligente é o padrão.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 3. Questão com Resolução */}
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
                    Cada questão tem resolução detalhada passo a passo. Não é só gabarito — é uma aula dentro de cada alternativa. Aqui você entende o porquê, não apenas o quê.
                  </p>
                </div>
                <div className="relative group order-1 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/resolucao.png" alt="Resolução detalhada de questão" className="w-full rounded-xl" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 4. Listas Personalizadas */}
            <ScrollReveal variant="right">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 md:p-3 overflow-hidden">
                    <img src="/platform/listas-desktop.png" alt="Listas personalizadas" className="w-full rounded-xl" loading="lazy" decoding="async" />
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
                    Crie listas com as questões que você quer revisar. Organize por matéria, por fraqueza, ou do jeito que funcionar melhor pra você. Seu estudo, suas regras.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 5. Questões dentro da Lista */}
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
                    <img src="/platform/questoes-lista.png" alt="Questões dentro de uma lista" className="w-full rounded-xl" loading="lazy" decoding="async" />
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
                    <img src="/platform/desempenho-desktop.png" alt="Painel de desempenho" className="w-full rounded-xl hidden md:block" loading="lazy" decoding="async" />
                    <img src="/platform/desempenho-mobile.png" alt="Painel de desempenho mobile" className="w-full rounded-xl block md:hidden max-h-[500px] object-contain mx-auto" loading="lazy" decoding="async" />
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
                    Acertos, erros, taxa de aproveitamento — tudo por matéria. Nada de chutar no escuro. Com dados reais do seu desempenho, você sabe onde atacar e quando está pronto.
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

      {/* Section Transition */}
      <div className="flex justify-center py-8 bg-gradient-to-b from-secondary/10 to-secondary/20">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-accent font-semibold tracking-wider">VEJA OS RESULTADOS</p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{
            animationDelay: "0.2s"
          }}></div>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{
            animationDelay: "0.4s"
          }}></div>
          </div>
        </div>
      </div>

      {/* Results with Testimonials - True Infinite Scroll */}
      <section className="py-12 md:py-24 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-4 mb-6 md:mb-12">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Resultados que <span className="bg-gradient-primary bg-clip-text text-transparent">comprovam</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              A prova de que o método realmente funciona
            </p>
          </ScrollReveal>
        </div>
        
        {/* True infinite horizontal scroll with huge images side by side */}
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          <div className="absolute inset-0 flex animate-scroll-left" style={{
          width: 'max-content'
        }}>
            {/* First set of images - HUGE and side by side */}
            {["/lovable-uploads/feedback-1.jpg", "/lovable-uploads/feedback-2.jpg", "/lovable-uploads/feedback-3.jpg", "/lovable-uploads/feedback-4.jpg", "/lovable-uploads/feedback-5.jpg", "/lovable-uploads/feedback-6.jpg", "/lovable-uploads/feedback-7.jpg", "/lovable-uploads/feedback-8.jpg", "/lovable-uploads/feedback-9.jpg"].map((image, index) => <div key={index} className="h-[50vh] md:h-[70vh] lg:h-[80vh] w-auto flex-shrink-0">
                <img src={image} alt={`Depoimento ${index + 1}`} className="h-full w-auto object-contain" loading="lazy" decoding="async" />
              </div>)}
            {/* Duplicate for seamless infinite loop */}
            {["/lovable-uploads/feedback-1.jpg", "/lovable-uploads/feedback-2.jpg", "/lovable-uploads/feedback-3.jpg", "/lovable-uploads/feedback-4.jpg", "/lovable-uploads/feedback-5.jpg", "/lovable-uploads/feedback-6.jpg", "/lovable-uploads/feedback-7.jpg", "/lovable-uploads/feedback-8.jpg", "/lovable-uploads/feedback-9.jpg"].map((image, index) => <div key={`dup-${index}`} className="h-[50vh] md:h-[70vh] lg:h-[80vh] w-auto flex-shrink-0">
                <img src={image} alt={`Depoimento ${index + 1}`} className="h-full w-auto object-contain" loading="lazy" decoding="async" />
              </div>)}
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-12">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm sm:text-base md:text-lg font-bold px-5 py-4 sm:px-8 sm:py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all w-full max-w-xs sm:max-w-sm md:w-auto">
                  QUERO O FULL QUESTÕES AGORA →
                </Button>
                <p className="text-sm md:text-sm text-muted-foreground text-center">
                  🎯 Junte-se aos aprovados • Resultados comprovados
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Transition */}
      <div className="flex justify-center py-8 bg-gradient-to-b from-secondary/20 to-background">
        <div className="flex items-center gap-2">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-accent"></div>
          <Shield className="w-6 h-6 text-accent" />
          <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-accent/50 to-accent"></div>
        </div>
      </div>

      {/* Guarantee Section */}
      <GuaranteeSection onScrollToPlans={scrollToPlans} />

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
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Escolha seu <span className="text-accent">plano</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Comece a praticar agora com o plano que cabe no seu bolso
            </p>
          </ScrollReveal>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Plano Mensal */}
            <ScrollReveal variant="left">
              <div className="bg-card border border-border rounded-xl md:rounded-3xl p-6 md:p-8 hover:shadow-premium transition-all duration-300 flex flex-col h-full">
                <div className="inline-flex items-center gap-2 bg-background/50 border border-accent/20 rounded-full px-4 py-2 mb-6 w-fit">
                  <span className="font-semibold text-muted-foreground">Plano Mensal</span>
                  <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                    <Database className="w-4 h-4 text-background" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  FULL <span className="text-accent">QUESTÕES</span>
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6">Renovação mensal</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {["Acesso a +20.000 questões", "Resolução detalhada em texto", "Filtros por matéria e banca", "Listas personalizadas", "Simulados com cronômetro", "Ranking de desempenho", "Suporte com professores", "Perfil personalizável", "Acesso por 1 mês"].map((item, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base text-foreground">{item}</span>
                    </li>)}
                </ul>
                
                <div className="mb-6">
                  <p className="text-5xl md:text-6xl font-bold text-accent mb-1">R$39,90</p>
                  <p className="text-sm text-muted-foreground">/mês</p>
                </div>
                
                <Button variant="gold" className="w-full py-6 text-base font-bold" onClick={() => window.open('https://pay.kiwify.com.br/cS3oAhK', '_blank')}>
                  ASSINAR MENSAL →
                </Button>
              </div>
            </ScrollReveal>
            
            {/* Plano Semestral - MAIS POPULAR */}
            <ScrollReveal variant="right">
              <div className="bg-gradient-beige-premium border-2 border-accent rounded-xl md:rounded-3xl p-6 md:p-8 hover:shadow-premium transition-all duration-300 flex flex-col h-full shadow-glow-beige relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                    ⭐ MAIS POPULAR
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 bg-background/90 border border-background rounded-full px-4 py-2 mb-6 w-fit mt-2">
                  <span className="font-semibold text-foreground">Plano Semestral</span>
                  <div className="w-6 h-6 bg-background rounded-lg flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-accent" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-background">
                  FULL <span className="text-background">QUESTÕES</span>
                </h3>
                
                <p className="text-sm text-background/80 mb-6">Melhor custo-benefício</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {["Acesso a +20.000 questões", "Resolução detalhada em texto", "Filtros por matéria e banca", "Listas personalizadas", "Simulados com cronômetro", "Ranking de desempenho", "Suporte com professores", "Perfil personalizável", "Acesso por 6 meses"].map((item, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-background flex-shrink-0 mt-0.5" />
                      <span className="text-base text-background font-medium">{item}</span>
                    </li>)}
                </ul>
                
                <div className="mb-6 text-center">
                  <p className="text-sm text-background/80 mb-2">6x de</p>
                  <p className="text-5xl md:text-6xl font-bold text-background mb-1">R$38,84</p>
                  <p className="text-sm text-background/80">ou R$207,00 à vista</p>
                </div>
                
                <div className="space-y-3">
                  <Button variant="default" className="w-full py-6 text-base font-bold bg-background text-accent hover:bg-background/90" onClick={() => window.open('https://pay.kiwify.com.br/Ra2vsjP', '_blank')}>
                    ASSINAR SEMESTRAL →
                  </Button>
                  <p className="text-xs text-center text-background/90 font-medium">
                    Economia de R$32,40 • Acesso imediato
                  </p>
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
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o FULL QUESTÕES.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem value="item-1" question="Quantas questões tem no banco?" answer="Nosso banco possui mais de 20.000 questões de concursos militares, todas com resolução detalhada em texto. Em breve, todas terão resolução em vídeo também!" />
                <FAQItem value="item-2" question="Posso filtrar as questões?" answer="Sim! Você pode filtrar por matéria, assunto, banca, ano, nível de dificuldade e muito mais. Isso permite focar exatamente no que você precisa estudar." />
                <FAQItem value="item-3" question="Como funcionam os simulados?" answer="Você pode montar simulados personalizados com cronômetro, simulando a prova real. Ao final, você vê seu desempenho e pode comparar com outros alunos no ranking." />
                <FAQItem value="item-4" question="Posso tirar dúvidas com professores?" answer="Sim! Você tem acesso direto aos nossos professores especialistas para tirar dúvidas sobre qualquer questão do banco." />
                <FAQItem value="item-5" question="Tem garantia?" answer="Sim! Oferecemos garantia incondicional de 7 dias. Se você não estiver satisfeito por qualquer motivo, devolvemos 100% do valor investido." />
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
              <img src={mentoriaLogo} alt="FULL QUESTÕES" className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4" loading="lazy" />
              <p className="text-base md:text-base text-muted-foreground italic font-semibold">
                "Pratique com inteligência, aprove com excelência."
              </p>
            </div>
            <div>
              <h3 className="text-base md:text-base font-bold text-foreground mb-3 md:mb-4">Links Úteis</h3>
              <ul className="space-y-1.5 md:space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-base font-bold text-foreground mb-3 md:mb-4">Redes Sociais</h3>
              <a href="https://instagram.com/hibeck_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                <span>@hibeck_</span>
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 md:pt-8 text-center text-muted-foreground">
            <p className="text-sm md:text-sm">&copy; 2024 FULL QUESTÕES. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Questoes;