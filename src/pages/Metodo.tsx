import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FeatureCard } from "@/components/FeatureCard";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Target, BookOpen, Users, Trophy, CheckCircle2, FileText, Zap, Award, Instagram, TrendingUp, Brain, Clock, Rocket, Shield, ChevronDown, ArrowDown, Lightbulb, BarChart3, Repeat, Home } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import bryanPhoto from "@/assets/bryan-photo.jpg";
import militaryWallpaper from "@/assets/military-wallpaper.png";
import metodoHeroWallpaper from "@/assets/metodo-hero-wallpaper.jpg";
import flashcardsWallpaper from "@/assets/flashcards-wallpaper.png";
import benefitsWallpaper from "@/assets/benefits-wallpaper.png";
const Metodo = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos-metodo');
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
        {/* Background Image with enhanced treatment */}
        <div className="absolute inset-0 z-0">
          {/* Mobile image - Priority loading */}
          <img src={metodoHeroWallpaper} alt="Background" className="block md:hidden w-full h-full object-cover object-[center_top] brightness-90 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          {/* Desktop image - Priority loading */}
          <img src={metodoHeroWallpaper} alt="Background" className="hidden md:block w-full h-full object-cover object-center brightness-90 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          {/* Gradient overlay for better text readability and depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80 md:bg-gradient-to-br md:from-background/60 md:via-background/50 md:to-background/70" />
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Mobile minimal floating icons */}
          <div className="absolute top-[30%] right-6 animate-float opacity-60 md:hidden will-change-transform" style={{
          animationDelay: "0.5s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20">
              <Brain className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute top-[45%] left-6 animate-float opacity-60 md:hidden will-change-transform" style={{
          animationDelay: "1s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20">
              <Lightbulb className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          
          {/* Desktop floating icons */}
          <div className="absolute top-32 right-20 animate-float opacity-80 hidden md:block lg:block will-change-transform" style={{
          animationDelay: "0.5s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Brain className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute bottom-40 left-20 animate-float opacity-80 hidden md:block lg:block" style={{
          animationDelay: "1s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Lightbulb className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute top-1/2 right-32 animate-float opacity-80 hidden xl:block" style={{
          animationDelay: "1.5s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <BarChart3 className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-accent/20 animate-float hidden lg:block" style={{
          animationDelay: "0.8s"
        }} />
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/20 animate-float hidden lg:block" style={{
          animationDelay: "1.2s"
        }} />
          
          {/* Subtle glow effects */}
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-glow-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[100px] opacity-25 animate-glow-pulse" style={{
          animationDelay: "1.5s"
        }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 pt-24 pb-8 md:py-20 h-full">
          <div className="max-w-7xl mx-auto h-full">
            {/* Logo - Fixed top left */}
            <div className="absolute top-4 md:top-8 left-4 md:left-8 animate-fade-in-up z-20">
              <img src={mentoriaLogo} alt="Método FULL Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-2xl" loading="eager" />
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
                    ENTENDA OS FUNDAMENTOS QUE REALMENTE FAZEM ALGUÉM SER{" "}
                  </span>
                  <span className="bg-gradient-hero-text bg-clip-text text-transparent">
                    CLASSIFICADO
                  </span>
                </h1>
                
                <p className="text-[0.85rem] md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl text-left md:text-left">
                  Da mesma forma que eu fui o 08º da EFOMM, 01º da AFA e ainda classificado na AFA e na EPCAr, você também pode!
                </p>
                
                <div className="flex flex-col items-start md:items-start gap-3 md:gap-4 pt-2 md:pt-4 animate-fade-in-up" style={{
                animationDelay: "0.5s"
              }}>
                  <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-[0.85rem] leading-tight md:text-base lg:text-lg shadow-glow-beige rounded-full transition-all font-bold px-6 py-4 md:px-12 md:py-8 w-full sm:w-auto">
                    VENHA PARA O MÉTODO FULL →
                  </Button>
                  <p className="text-xs md:text-sm text-muted-foreground/80 text-left md:text-left">
                    ⚡ Acesso vitalício • Comece agora mesmo
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
                ⭐ MÉTODO FULL • ESTUDE COM ESTRATÉGIA ⭐
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
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
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
                  {/* Foto */}
                  <div className="relative mx-auto md:mx-0 max-w-[280px] md:max-w-none">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl md:rounded-3xl blur-2xl opacity-30" />
                    <img src={bryanPhoto} alt="Bryan Hibeck" className="relative rounded-2xl md:rounded-3xl w-full h-auto object-cover shadow-premium border-2 border-accent/20" loading="lazy" decoding="async" />
                  </div>
                  
                  {/* Descrição */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-1 md:mb-2">
                      <Trophy className="w-4 md:w-5 h-4 md:h-5 text-accent-foreground" />
                      <span className="text-xs md:text-sm font-bold text-accent-foreground">Criador do Método</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 md:mb-2">
                      Bryan Hibeck
                    </h3>
                    
                    <p className="text-sm md:text-sm text-accent font-semibold mb-3 md:mb-4">
                      Nascido em 17/03/2004
                    </p>
                    
                    <div className="space-y-3 md:space-y-4 text-base md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      <p>
                        Ganhei destaque no mundo dos concursos por ter feito <strong className="text-accent">mais de 20 mil questões</strong> durante os meus 8 meses de preparação no ano de 2024.
                      </p>
                      
                      <p>
                        Consegui aprovação na <strong className="text-foreground">AFA</strong>, sendo o <strong className="text-accent">10º colocado geral</strong> (01 de infantaria, 04 de intendência e 05 de aviação), <strong className="text-foreground">EFOMM</strong> sendo o <strong className="text-accent">08º colocado</strong> e na <strong className="text-foreground">EEAr (BCT)</strong> sendo o <strong className="text-accent">15º colocado</strong>.
                      </p>
                      
                      <p>
                        Estudo desde o ano de 2021 e consegui minha primeira classificação no concurso da <strong className="text-foreground">EPCAr</strong> estudando apenas 3 meses no ano de 2021.
                      </p>
                      
                      <p className="text-foreground font-semibold pt-1 md:pt-2">
                        Minha missão agora é compartilhar esse método que me levou ao sucesso e ajudar você a conquistar sua aprovação! 🎯
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* What is Método FULL Section */}
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
                  <span className="text-base font-semibold text-foreground">Método FULL</span>
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-background" />
                  </div>
                </div>
                
                <h2 className="text-[1.5rem] md:text-3xl lg:text-4xl font-bold mb-4 md:mb-4 leading-tight">
                  O QUE É O MÉTODO FULL?
                </h2>
                
                <p className="text-[0.95rem] md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  O Método FULL é um sistema completo de estudos que te ensina <strong className="text-foreground">como estudar</strong>, independentemente da matéria, do concurso ou do nível.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Aqui você aprende a estudar com lógica, constância e resultado, sem improviso, sem excesso de conteúdo e sem perda de tempo.<strong className="text-accent">lógica, constância e resultado</strong> — sem improviso, sem excesso de conteúdo e sem perda de tempo.
                </p>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed font-semibold">
                  Tudo isso seguindo um método testado, replicável e aplicável a qualquer prova.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-3xl blur-2xl" />
                <img alt="Setup de estudos premium" className="relative rounded-3xl shadow-premium border border-accent/20" src="/lovable-uploads/7f4563c1-e84f-4543-88ac-c6bcd4a0b0a8.png" loading="lazy" decoding="async" />
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-12">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-lg md:text-lg font-bold px-8 py-6 md:px-12 md:py-8 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all w-full sm:w-auto">
                  QUERO O MÉTODO FULL →
                </Button>
                <p className="text-sm md:text-sm text-muted-foreground text-center">
                  💳 Pagamento único • Acesso vitalício
                </p>
              </div>
            </div>
          </ScrollReveal>
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

      {/* What You Will Learn Section - Timeline Style */}
      <section className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] opacity-40" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[120px] opacity-30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4">
              O que você vai <span className="text-accent italic font-extrabold font-sans text-4xl">DOMINAR?</span>
            </h2>
            <p className="text-base md:text-lg text-center text-muted-foreground mb-12 md:mb-20 max-w-xl mx-auto">
              Um caminho claro do zero à aprovação
            </p>
          </ScrollReveal>
          
          {/* Timeline Container */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent md:-translate-x-1/2" />
            
            {[{
            step: "01",
            title: "Planejamento",
            desc: "Monte um plano de estudos realista e executável",
            icon: Target
          }, {
            step: "02",
            title: "Eficiência",
            desc: "Aprenda a estudar de verdade, mesmo com pouco tempo",
            icon: Zap
          }, {
            step: "03",
            title: "Revisão",
            desc: "Revise do jeito certo — sem recomeçar do zero",
            icon: Repeat
          }, {
            step: "04",
            title: "Questões",
            desc: "Filtre e resolva apenas o que realmente importa",
            icon: FileText
          }, {
            step: "05",
            title: "Evolução",
            desc: "Use simulados para medir progresso e ajustar rota",
            icon: TrendingUp
          }].map((item, index) => <ScrollReveal key={index} delay={index * 150}>
                <div className={`relative flex items-center gap-6 md:gap-8 mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-glow-beige md:-translate-x-1/2 z-10" />
                  
                  {/* Content Card */}
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
              </ScrollReveal>)}
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

      {/* Section Transition - Subtle */}
      <div className="py-6 bg-background">
        <div className="flex justify-center">
          <div className="flex items-center gap-2 opacity-40">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <div className="w-3 h-3 bg-accent rounded-full" />
            <div className="w-2 h-2 bg-accent rounded-full" />
          </div>
        </div>
      </div>

      {/* Flashcards/Anki Section - Distinct Visual */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Background Wallpaper */}
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
          
          {/* Horizontal Cards with Icons */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[{
              icon: Brain,
              label: "Memorização",
              value: "Ativa"
            }, {
              icon: Clock,
              label: "Revisões",
              value: "Rápidas"
            }, {
              icon: Zap,
              label: "Tempo",
              value: "Otimizado"
            }, {
              icon: Target,
              label: "Fixação",
              value: "Permanente"
            }].map((item, index) => <ScrollReveal key={index} delay={index * 80}>
                  <div className="group bg-card/80 backdrop-blur-sm border-2 border-accent/30 rounded-xl p-4 md:p-5 text-center hover:border-accent hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm md:text-base font-bold text-foreground">{item.value}</p>
                  </div>
                </ScrollReveal>)}
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
      <div className="relative py-8 bg-gradient-to-b from-background to-secondary/10">
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

      {/* Target Audience Section */}
      <section className="py-12 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Para quem é o <span className="bg-gradient-primary bg-clip-text text-transparent">Método FULL?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Se você se identifica com algum desses perfis, esse método foi feito para você.
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[{
            icon: Target,
            title: "Estuda Sozinho",
            description: "Para quem precisa de direção clara e estruturada"
          }, {
            icon: Zap,
            title: "Já Tentou Vários Métodos",
            description: "Para quem não teve resultado com outras abordagens"
          }, {
            icon: Trophy,
            title: "Quer Estratégia",
            description: "Para quem quer estudar com método, não no improviso"
          }, {
            icon: BookOpen,
            title: "Busca Evolução Real",
            description: "Para quem quer constância, clareza e progresso"
          }].map((item, index) => <ScrollReveal key={index} delay={index * 100}>
                <FeatureCard {...item} />
              </ScrollReveal>)}
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-12">
              <p className="text-lg md:text-xl text-foreground font-semibold">
                Se você quer parar de estudar no escuro, esse método é pra você.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Transition */}
      <div className="flex justify-center py-8 bg-gradient-to-b from-secondary/10 to-background">
        <div className="flex items-center gap-2">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-accent"></div>
          <Shield className="w-6 h-6 text-accent" />
          <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-accent/50 to-accent"></div>
        </div>
      </div>

      {/* Guarantee Section */}
      <GuaranteeSection onScrollToPlans={scrollToPlans} />

      {/* Section Transition */}
      <div className="flex justify-center py-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="flex items-center gap-2">
          <ChevronDown className="w-5 h-5 text-accent opacity-30" />
          <ChevronDown className="w-6 h-6 text-accent" />
          <ChevronDown className="w-5 h-5 text-accent opacity-30" />
        </div>
      </div>

      {/* Why it Works Section */}
      <section className="py-12 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Por que o Método <span className="text-accent">FULL funciona?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Porque ele não foca em "estudar mais". Ele foca em estudar melhor.
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[{
            icon: <Target className="w-6 h-6 text-primary-foreground" />,
            title: "O que estudar",
            description: "Foco no que realmente importa"
          }, {
            icon: <Clock className="w-6 h-6 text-primary-foreground" />,
            title: "Quando estudar",
            description: "Organize seu tempo com eficiência"
          }, {
            icon: <Repeat className="w-6 h-6 text-primary-foreground" />,
            title: "Como revisar",
            description: "Técnicas de revisão que funcionam"
          }, {
            icon: <BarChart3 className="w-6 h-6 text-primary-foreground" />,
            title: "Como medir evolução",
            description: "Acompanhe seu progresso real"
          }].map((item, index) => <ScrollReveal key={index} delay={index * 100}>
                <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-premium">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>)}
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-12">
              <p className="text-lg md:text-xl text-foreground font-semibold">
                Resultado: <span className="text-accent">menos ansiedade, mais controle e muito mais progresso.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
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

      {/* Section Transition */}
      <div className="flex justify-center py-8 bg-gradient-to-b from-background to-secondary/20">
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
                  QUERO O MÉTODO FULL AGORA →
                </Button>
                <p className="text-sm md:text-sm text-muted-foreground text-center">
                  🎯 Junte-se aos aprovados • Resultados comprovados
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
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

      {/* What You Receive Section */}
      <section className="py-12 md:py-32 relative overflow-hidden">
        {/* Background Wallpaper */}
        <div className="absolute inset-0">
          <img src={benefitsWallpaper} alt="Benefits Background" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              O que você recebe <span className="text-accent">ao entrar</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Tudo que você precisa para estudar com estratégia
            </p>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[{
            icon: BookOpen,
            text: "Acesso completo ao Método FULL"
          }, {
            icon: Brain,
            text: "+2000 flashcards de todas as matérias"
          }, {
            icon: Zap,
            text: "Acesso vitalício ao conteúdo"
          }, {
            icon: Shield,
            text: "Garantia incondicional de 7 dias"
          }].map((item, index) => <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-5 hover:bg-card/70 hover:border-accent/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-lg md:text-xl text-foreground font-medium">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>)}
          </div>
          
          <ScrollReveal>
            <p className="text-center text-muted-foreground mt-8 text-lg">
              Você pode entrar, testar e decidir com tranquilidade.
            </p>
          </ScrollReveal>
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
      <section id="planos-metodo" className="py-12 md:py-24 bg-background scroll-mt-8">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              A decisão agora é <span className="text-accent">simples</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Você pode continuar estudando sem método ou pode estudar com estratégia, clareza e constância.
            </p>
          </ScrollReveal>
          
          {/* Single Pricing Card */}
          <div className="max-w-lg mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-beige-premium border-2 border-accent rounded-xl md:rounded-3xl p-6 md:p-10 hover:shadow-premium transition-all duration-300 flex flex-col shadow-glow-beige">
                <div className="inline-flex items-center gap-2 bg-background/90 border border-accent/30 rounded-full px-4 py-2 mb-6 w-fit mx-auto">
                  <span className="font-semibold text-foreground">Acesso Vitalício</span>
                  <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-background" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-background text-center">
                  Método <span className="text-background">FULL</span>
                </h3>
                
                <p className="text-sm text-background/80 mb-6 text-center">Pagamento Único</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {["Acesso completo ao Método FULL", "+2000 flashcards de todas as matérias", "Como montar plano de estudos realista", "Como estudar com eficiência", "Como revisar do jeito certo", "Como filtrar questões importantes", "Como usar simulados estrategicamente", "Acesso vitalício ao conteúdo"].map((item, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-background flex-shrink-0 mt-0.5" />
                      <span className="text-base text-background font-medium">{item}</span>
                    </li>)}
                </ul>
                
                <div className="mb-6 text-center">
                  <p className="text-sm text-background/80 mb-2">10x de</p>
                  <p className="text-5xl md:text-6xl font-bold text-background mb-1">R$32,09</p>
                  <p className="text-sm text-background/80">ou R$267,00 à vista</p>
                </div>
                
                <div className="space-y-3">
                <Button variant="default" className="w-full py-6 text-base font-bold bg-background text-accent hover:bg-background/90" onClick={() => window.open('https://pay.kiwify.com.br/0MZI5tk', '_blank')}>
                    QUERO O MÉTODO FULL →
                  </Button>
                  <p className="text-xs text-center text-background/90 font-medium">
                    Pagamento único • Acesso imediato após compra
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
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o Método FULL.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem value="item-1" question="O que é o Método FULL?" answer="O Método FULL é um sistema completo de estudos que te ensina como estudar, independentemente da matéria, do concurso ou do nível. Você aprende a estudar com lógica, constância e resultado — sem improviso, sem excesso de conteúdo e sem perda de tempo." />
                <FAQItem value="item-2" question="Por quanto tempo terei acesso?" answer="Você terá acesso VITALÍCIO a todo o conteúdo do Método FULL. Uma vez adquirido, o acesso é seu para sempre, incluindo todas as atualizações futuras." />
                <FAQItem value="item-3" question="Os flashcards estão inclusos?" answer="Sim! Você recebe mais de 2000 flashcards organizados e prontos para uso, cobrindo todas as matérias. É só baixar e começar a usar." />
                <FAQItem value="item-4" question="Tem garantia?" answer="Sim! Oferecemos garantia incondicional de 7 dias. Se você não estiver satisfeito por qualquer motivo, devolvemos 100% do valor investido sem complicações." />
                <FAQItem value="item-5" question="Serve para qualquer concurso?" answer="Sim! O Método FULL foi desenvolvido para ser aplicável a qualquer prova. As técnicas de organização, revisão e memorização funcionam independentemente do concurso que você está se preparando." />
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
              <img src={mentoriaLogo} alt="Método FULL" className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4" loading="lazy" />
              <p className="text-base md:text-base text-muted-foreground italic font-semibold">
                "Estudar com estratégia, não no improviso."
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
              <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                <span>@hibeck_</span>
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 md:pt-8 text-center text-muted-foreground">
            <p className="text-sm md:text-sm">&copy; 2024 Método FULL. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Metodo;