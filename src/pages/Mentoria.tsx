import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { NumberStat } from "@/components/NumberStat";
import { ComparisonCard } from "@/components/ComparisonCard";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Target, BookOpen, Users, Trophy, CheckCircle2, FileText, Zap, Award, Instagram, TrendingUp, Brain, Clock, Rocket, Shield, ChevronDown, ArrowDown, Layers, Play, MoveRight, Home, Database, Search, Timer, BarChart3, MessageCircle, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import heroMain from "@/assets/hero-main.png";
import certificates from "@/assets/certificates.png";
import bryanPhoto from "@/assets/bryan-photo.jpg";
import militaryHeritage from "@/assets/military-heritage.png";
import militaryWallpaper from "@/assets/military-wallpaper.png";
import metodoShowcaseBanner from "@/assets/metodo-showcase-banner.png";
import ankiWallpaper from "@/assets/anki-wallpaper.png";
import ankiCardExample from "@/assets/anki-card-example.png";
import Autoplay from "embla-carousel-autoplay";
const FloatingWhatsApp = () => {
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={`fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <Button variant="gold" size="lg" className="rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all px-4 py-3 md:px-8 md:py-6 text-xs md:text-base font-bold whitespace-nowrap" onClick={() => window.open('https://api.whatsapp.com/send?phone=5521992104885', '_blank')}>
        💬 Fale Comigo
      </Button>
    </div>
  );
};

const Index = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos-mentoria');
    if (plansSection) {
      plansSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-[100vh] flex items-end md:items-center justify-center overflow-hidden">
        {/* Background Image with enhanced treatment */}
        <div className="absolute inset-0 z-0">
          {/* Mobile image - Priority loading */}
          <img src="/lovable-uploads/hero-mobile.png" alt="Background" className="block md:hidden w-full h-full object-cover object-[center_0%] brightness-90 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          {/* Desktop image - Priority loading */}
          <img src={heroMain} alt="Background" className="hidden md:block w-full h-full object-cover object-center brightness-90 contrast-110 saturate-110" loading="eager" fetchPriority="high" />
          {/* Gradient overlay for better text readability and depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80 md:bg-gradient-to-br md:from-background/60 md:via-background/50 md:to-background/70" />
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Mobile minimal floating icons - Reduced for performance */}
          <div className="absolute top-[30%] right-6 animate-float opacity-60 md:hidden will-change-transform" style={{
          animationDelay: "0.5s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20">
              <Trophy className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute top-[45%] left-6 animate-float opacity-60 md:hidden will-change-transform" style={{
          animationDelay: "1s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-xl p-3 shadow-glow-beige border border-accent/20">
              <Target className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          
          {/* Desktop floating icons */}
          <div className="absolute top-32 right-20 animate-float opacity-80 hidden md:block lg:block will-change-transform" style={{
          animationDelay: "0.5s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Trophy className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute bottom-40 left-20 animate-float opacity-80 hidden md:block lg:block" style={{
          animationDelay: "1s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Target className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute top-1/2 right-32 animate-float opacity-80 hidden xl:block" style={{
          animationDelay: "1.5s"
        }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <BookOpen className="w-10 h-10 text-accent-foreground" />
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
              <img src={mentoriaLogo} alt="Mentoria FULL Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-2xl" loading="eager" />
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
                    ENTENDA A FORMA DE ESTUDOS QUE ME PERMITIU SER{" "}
                  </span>
                  <span className="bg-gradient-hero-text bg-clip-text text-transparent">
                    CLASSIFICADO NA AFA, EPCAR, EEAR e EFOMM!
                  </span>
                </h1>
                
                <p className="text-[0.85rem] md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl text-left md:text-left">
                  Se você se vê perdido, sem direção ou pensando em desistir dos concursos militares constantemente, relaxa que isso é normal, basta que tenha um bom método para ter resultados.
                </p>
                
                <div className="flex flex-col items-start md:items-start gap-3 md:gap-4 pt-2 md:pt-4 animate-fade-in-up" style={{
                animationDelay: "0.5s"
              }}>
                  <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-[0.85rem] leading-tight md:text-base lg:text-lg shadow-glow-beige rounded-full transition-all font-bold px-6 py-4 md:px-12 md:py-8 w-full sm:w-auto">
                    QUERO ME INSCREVER AGORA MESMO! →
                  </Button>
                  <p className="text-xs md:text-sm text-muted-foreground/80 text-left md:text-left">
                    ⚡ Vagas limitadas • Comece agora mesmo
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
                ⭐ MENTORIA FULL AFA EFOMM EN EEAR ⭐
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
              Conheça quem vai te guiar até a aprovação
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
                      <span className="text-xs md:text-sm font-bold text-accent-foreground">Mentor e Aprovado</span>
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
              <Users className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Who Am I Section */}
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
                  <span className="text-base font-semibold text-foreground">Mentoria FULL</span>
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-background" />
                  </div>
                </div>
                
                <h2 className="text-[1.5rem] md:text-3xl lg:text-4xl font-bold mb-4 md:mb-4 leading-tight">
                  O PASSO A PASSO QUE TRANSFORMA O ESTUDO EM RESULTADO REAL
                </h2>
                
                <p className="text-[0.95rem] md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Se você já tentou estudar para concursos militares e não teve resultado, não foi culpa sua.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  A verdade é que não basta só estudar, você precisa de um <strong className="text-foreground">método validado</strong> que realmente funcione.
                </p>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed font-semibold">
                  A Mentoria FULL é um método validado, usado por concurseiros para conquistar suas vagas nas academias militares, com um passo a passo simples e direto ao ponto.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Mesmo que você não tenha experiência com o estudo em si, vai conseguir criar resultados extraordinários que realmente levam à aprovação.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Com planejamento pronto, plano de metas e um passo a passo, você nunca mais vai estudar no escuro!
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
                  GARANTA SUA VAGA AGORA →
                </Button>
                <p className="text-sm md:text-sm text-muted-foreground text-center">
                  💳 Parcelamento em até 12x • Satisfação garantida
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Método Showcase Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Background Wallpaper */}
        <div className="absolute inset-0">
          <img 
            src={metodoShowcaseBanner} 
            alt="Método FULL Background" 
            className="w-full h-full object-cover object-center opacity-60"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-accent rounded-full blur-[150px] opacity-15" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-[1.5rem] md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 leading-tight">
              O método que me levou a ser o{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">08 da EFOMM</span>
              {" "}e o{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">01 da AFA</span>
            </h2>
            
            {/* Mini arrow */}
            <div className="flex justify-center mb-6 md:mb-8">
              <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-md border border-accent/30 rounded-2xl md:rounded-3xl p-6 md:p-10">
                <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground leading-relaxed mb-6">
                  Domine as técnicas que transformaram minha preparação:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {[
                    { icon: BookOpen, text: "Separação estratégica de matérias por peso e dificuldade" },
                    { icon: Clock, text: "Organização inteligente das horas de estudo" },
                    { icon: TrendingUp, text: "Otimização máxima do seu rendimento" },
                    { icon: Target, text: "Filtragem cirúrgica de questões por relevância" },
                    { icon: Brain, text: "Método infalível de revisões efetivas" },
                    { icon: Trophy, text: "Timing perfeito para simulados e provas anteriores" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-sm md:text-base text-foreground/90 leading-relaxed pt-2">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm md:text-base text-center text-accent font-medium mt-6 md:mt-8">
                  + Estratégias específicas para cada concurso militar
                </p>
                
                {/* CTA Button */}
                <div className="flex justify-center mt-8">
                  <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-base lg:text-lg font-bold px-8 py-5 md:px-12 md:py-7 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all">
                    QUERO FAZER PARTE DO FULL AGORA →
                  </Button>
                </div>
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

      {/* Target Audience Section */}
      <section className="py-12 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Para quem é a <span className="bg-gradient-primary bg-clip-text text-transparent">Mentoria FULL?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Se você se identifica com algum desses perfis, essa mentoria foi feita para você.
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[{
            icon: Target,
            title: "Perdido no Caminho",
            description: "Quer um plano claro e estruturado para sua aprovação"
          }, {
            icon: Zap,
            title: "Busca Disciplina",
            description: "Precisa de um método pronto e eficaz para estudar corretamente"
          }, {
            icon: Trophy,
            title: "Foco em Carreiras Militares",
            description: "Está determinado a conquistar sua vaga na AFA, EN, EFOMM ou EEAR"
          }, {
            icon: BookOpen,
            title: "Cansado de Errar",
            description: "Já tentou estudar sozinho mas não viu resultados concretos"
          }].map((item, index) => <ScrollReveal key={index} delay={index * 100}>
                <FeatureCard {...item} />
              </ScrollReveal>)}
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-12">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm sm:text-base md:text-lg font-bold px-5 py-4 sm:px-8 sm:py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all w-full max-w-xs sm:max-w-sm md:w-auto">
                  GARANTIR MINHA VAGA AGORA →
                </Button>
                <p className="text-sm md:text-sm text-muted-foreground text-center">
                  🚀 Transforme seu estudo • Método comprovado
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Transition */}
      <div className="flex justify-center py-8 bg-gradient-to-b from-secondary/20 to-background">
        <div className="flex items-center gap-3">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
          <div className="flex flex-col items-center">
            <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
        </div>
      </div>

      {/* Comparison Section - Antes vs Depois */}
      <section className="py-12 md:py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
              A Transformação é <span className="text-accent">Real</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <ScrollReveal variant="left">
              <ComparisonCard title="❌ Sem a Mentoria" type="before" items={["Estudando sem direção clara", "Perdendo tempo com o que não cai", "Sem saber como revisar de verdade", "Fazendo só o que 'acha' certo", "Resultados lentos ou inexistentes"]} />
            </ScrollReveal>
            
            <ScrollReveal variant="right">
              <ComparisonCard title="✅ Com a Mentoria FULL" type="after" items={["Vídeos ensinando como estudar cada matéria", "+ 2.000 flashcards para revisões efetivas", "Encontros ao vivo de matemática e física", "Acompanhamento 1:1 personalizado", "Método validado pelo 01º da AFA"]} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Anki Flashcards Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Background Wallpaper - Higher opacity */}
        <div className="absolute inset-0">
          <img 
            src={ankiWallpaper} 
            alt="Anki Flashcards Background" 
            className="w-full h-full object-cover object-center opacity-80"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />
        </div>
        
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-accent rounded-full blur-[150px] opacity-15" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2">
                <Layers className="w-5 h-5 text-accent" />
                <span className="text-base font-semibold text-foreground">Flashcards Anki</span>
              </div>
            </div>
            
            <h2 className="text-[1.5rem] md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 leading-tight">
              Mais de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">2.000 flashcards</span>
              {" "}de todas as matérias
            </h2>
            
            <p className="text-base md:text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-4">
              Teoria objetiva, exemplos práticos, questões comentadas e imagens ilustrativas para revisões efetivas e aprendizado acelerado
            </p>
            
            {/* Mini arrow */}
            <div className="flex justify-center mb-8 md:mb-12">
              <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="bg-card/90 backdrop-blur-md border border-accent/30 rounded-2xl p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      O que você vai encontrar:
                    </h3>
                    
                    <ul className="space-y-4">
                      {[
                        "Teoria organizada de forma objetiva",
                        "Exemplos práticos de cada assunto",
                        "Questões comentadas para fixação",
                        "Imagens ilustrativas que facilitam a compreensão",
                        "Cards de revisão para todas as matérias",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="flex justify-center md:justify-start">
                    <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm md:text-base lg:text-lg font-bold px-8 py-5 md:px-10 md:py-6 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all">
                      QUERO REVISAR COM QUALIDADE! →
                    </Button>
                  </div>
                </div>
                
                {/* Card Example with Elegant Arrow */}
                <div className="relative">
                  {/* Desktop Elegant Arrow */}
                  <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 hidden md:flex items-center z-10">
                    <div className="flex items-center gap-1 animate-pulse">
                      <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-accent rounded-full" />
                      <MoveRight className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  
                  {/* Mobile Elegant Arrow */}
                  <div className="flex md:hidden items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1 animate-pulse">
                      <ArrowDown className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img 
                      src={ankiCardExample} 
                      alt="Exemplo de Flashcard Anki" 
                      className="relative rounded-2xl shadow-premium border-2 border-accent/30 w-full max-w-md mx-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Transition */}
      <div className="flex justify-center py-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="flex items-center gap-2">
          <ChevronDown className="w-5 h-5 text-accent opacity-30" />
          <ChevronDown className="w-6 h-6 text-accent" />
          <ChevronDown className="w-5 h-5 text-accent opacity-30" />
        </div>
      </div>

      {/* What You Will Learn Section */}
      <section className="py-12 md:py-32 relative overflow-hidden bg-secondary/10">
        <div className="container relative z-10 mx-auto px-6 md:px-4">
          <ScrollReveal>
            <div className="flex justify-center mb-6 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 md:px-6 py-2">
                <span className="text-sm md:text-sm font-semibold text-foreground">Mentoria FULL</span>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-background" />
                </div>
              </div>
            </div>
            
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-16">
              O que <span className="text-accent">você vai Aprender?</span>
            </h2>
          </ScrollReveal>
          
          <div className="max-w-5xl mx-auto space-y-3 md:space-y-4">
            {["Método completo que me aprovou na AFA (01º), EFOMM (08º), EEAr e EPCAr", "Vídeo-aulas ensinando como estudar cada matéria do zero ao avançado", "+ de 2.000 flashcards Anki com teoria, exemplos e questões para revisão", "Encontros ao vivo semanais focados em matemática e física", "Técnicas de organização, filtragem de questões e revisões efetivas", "Aulas gravadas + listas exclusivas de questões – método direto ao ponto!"].map((item, index) => <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:bg-card/70 hover:border-accent/40 transition-all duration-300">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/20 rounded-lg md:rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                      </div>
                    </div>
                    <p className="text-base md:text-base lg:text-lg text-muted-foreground">{item}</p>
                  </div>
                </div>
              </ScrollReveal>)}
          </div>
          
          <ScrollReveal>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center mt-8 md:mt-16 max-w-4xl mx-auto leading-relaxed px-2">
              <span className="font-bold text-foreground">E o melhor?</span>{" "}
              <span className="text-muted-foreground">
                Nada de ficar perdido! Você recebe planejamento pronto, checklists, vídeos explicativos e um passo a passo validado para seguir e aplicar.
              </span>
            </p>
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
                  QUERO FAZER PARTE AGORA →
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

      {/* Fun Stats Section */}
      <section className="py-12 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Por que a Mentoria <span className="text-accent">FULL?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Conheça os benefícios que fazem a diferença
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[{
            icon: <Play className="w-6 h-6 text-primary-foreground" />,
            title: "Vídeo-Aulas Exclusivas",
            description: "Aprenda como estudar cada matéria com vídeos passo a passo"
          }, {
            icon: <Layers className="w-6 h-6 text-primary-foreground" />,
            title: "2.000+ Flashcards Anki",
            description: "Teoria, exemplos e questões comentadas para revisão efetiva"
          }, {
            icon: <Clock className="w-6 h-6 text-primary-foreground" />,
            title: "Encontros ao Vivo",
            description: "Aulas semanais de matemática e física com suporte direto"
          }, {
            icon: <TrendingUp className="w-6 h-6 text-primary-foreground" />,
            title: "Método Validado",
            description: "Estratégias que me levaram ao 01º da AFA e 08º da EFOMM"
          }, {
            icon: <Users className="w-6 h-6 text-primary-foreground" />,
            title: "Comunidade de Aprovados",
            description: "Grupo exclusivo de estudantes focados na aprovação"
          }, {
            icon: <Award className="w-6 h-6 text-primary-foreground" />,
            title: "Acompanhamento 1:1",
            description: "Mentoria personalizada para ajustar seu plano de estudos"
          }].map((item, index) => <ScrollReveal key={index} delay={index * 100}>
                <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-premium">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>)}
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-12">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm sm:text-base md:text-lg font-bold px-5 py-4 sm:px-8 sm:py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all w-full max-w-xs sm:max-w-sm md:w-auto">
                  QUERO FAZER PARTE AGORA →
                </Button>
                <p className="text-sm md:text-sm text-muted-foreground text-center">
                  ✨ Seja um dos próximos aprovados • Método FULL 
                </p>
              </div>
            </div>
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
      <section id="planos-mentoria" className="py-12 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/military-background.png" alt="Military background" className="w-full h-full object-cover opacity-20" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-16">
              Planos da <span className="text-accent">​Mentoria FULL </span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-sm md:max-w-6xl mx-auto items-stretch">
            {/* Plano Mensal */}
            <ScrollReveal variant="left" className="h-full">
              <div className="bg-card border border-border rounded-xl md:rounded-3xl p-4 md:p-6 hover:shadow-premium transition-all duration-300 flex flex-col h-full">
                <div className="inline-flex items-center gap-2 bg-background/50 border border-accent/20 rounded-full px-3 py-1.5 mb-4 w-fit text-xs md:text-sm">
                  <span className="font-semibold text-muted-foreground">Plano Mensal</span>
                  <div className="w-5 h-5 bg-accent rounded-lg flex items-center justify-center">
                    <BookOpen className="w-3 h-3 text-background" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Mentoria <span className="text-accent">FULL</span>
                </h3>
                
                <p className="text-xs text-muted-foreground mb-4">Renovação mensal</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {["Mentoria 1:1 personalizada", "Vídeos ensinando como estudar", "+ 2.000 flashcards Anki completos", "Simulados + correção detalhada", "Aulas ao vivo semanais", "Estratégia AFA, EN, EFOMM, EEAR", "Revisões com método infalível", "Suporte direto com mentores", "Comunidade de aprovados", "Acesso por 1 mês"].map((item, index) => <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-foreground">{item}</span>
                    </li>)}
                </ul>
                
                <div className="mb-4 mt-auto">
                  <p className="text-xs text-muted-foreground mb-1">de <span className="line-through">R$ 139,90</span> por apenas</p>
                  <p className="text-2xl md:text-3xl font-bold text-accent">R$129,90</p>
                  <p className="text-xs text-muted-foreground">/mês</p>
                </div>
                
                <Button variant="gold" className="w-full py-4 text-sm font-bold" onClick={() => window.open('https://pay.kiwify.com.br/SxulQ3q', '_blank')}>
                  ASSINAR MENSAL →
                </Button>
              </div>
            </ScrollReveal>
            
            {/* Plano Anual - MAIS POPULAR */}
            <ScrollReveal variant="scale" className="h-full">
              <div className="bg-gradient-beige-premium border-2 border-accent rounded-xl md:rounded-3xl p-4 md:p-6 hover:shadow-glow-gold transition-all duration-300 relative flex flex-col h-full md:scale-105">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                    ⭐ MAIS POPULAR
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 bg-background/90 border border-background rounded-full px-3 py-1.5 mb-4 w-fit text-xs md:text-sm mt-2">
                  <span className="font-semibold text-foreground">Plano Anual</span>
                  <div className="w-5 h-5 bg-background rounded-lg flex items-center justify-center">
                    <Trophy className="w-3 h-3 text-accent" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-background">
                  Mentoria <span className="text-background">FULL</span>
                </h3>
                
                <p className="text-xs text-background/80 mb-4">Melhor custo-benefício</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {["Mentoria 1:1 personalizada", "Vídeos ensinando como estudar", "+ 2.000 flashcards Anki completos", "Simulados + correção detalhada", "Aulas ao vivo semanais", "Estratégia AFA, EN, EFOMM, EEAR", "Revisões com método infalível", "Suporte direto com mentores", "Comunidade de aprovados", "Acesso por 12 meses"].map((item, index) => <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-background flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-background font-medium">{item}</span>
                    </li>)}
                </ul>
                
                <div className="mb-4 mt-auto">
                  <p className="text-xs text-background/80 mb-1">de <span className="line-through">R$ 129,90</span> por apenas</p>
                  <p className="text-2xl md:text-3xl font-bold text-background">R$122,76</p>
                  <p className="text-xs text-background/80">/mês ou R$ 1.187,00 à vista</p>
                </div>
                
                <Button variant="default" className="w-full py-4 text-sm font-bold bg-background text-accent hover:bg-background/90" onClick={() => window.open('https://pay.kiwify.com.br/Vv3N6zi', '_blank')}>
                  GARANTIR PLANO ANUAL →
                </Button>
                
                <p className="text-xs text-center text-background/90 font-medium mt-2">
                  Economize 5% • 12x de R$122,76
                </p>
              </div>
            </ScrollReveal>
            
            {/* Plano Semestral */}
            <ScrollReveal variant="right" className="h-full">
              <div className="bg-card border border-border rounded-xl md:rounded-3xl p-4 md:p-6 hover:shadow-premium transition-all duration-300 flex flex-col h-full">
                <div className="inline-flex items-center gap-2 bg-background/50 border border-accent/20 rounded-full px-3 py-1.5 mb-4 w-fit text-xs md:text-sm">
                  <span className="font-semibold text-muted-foreground">Plano Semestral</span>
                  <div className="w-5 h-5 bg-accent rounded-lg flex items-center justify-center">
                    <Zap className="w-3 h-3 text-background" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Mentoria <span className="text-accent">FULL</span>
                </h3>
                
                <p className="text-xs text-muted-foreground mb-4">6 meses de acesso</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {["Mentoria 1:1 personalizada", "Vídeos ensinando como estudar", "+ 2.000 flashcards Anki completos", "Simulados + correção detalhada", "Aulas ao vivo semanais", "Estratégia AFA, EN, EFOMM, EEAR", "Revisões com método infalível", "Suporte direto com mentores", "Comunidade de aprovados", "Acesso por 6 meses"].map((item, index) => <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-foreground">{item}</span>
                    </li>)}
                </ul>
                
                <div className="mb-4 mt-auto">
                  <p className="text-xs text-muted-foreground mb-1">de <span className="line-through">R$ 129,90</span> por apenas</p>
                  <p className="text-2xl md:text-3xl font-bold text-accent">R$125,13</p>
                  <p className="text-xs text-muted-foreground">/mês ou R$ 667,00 à vista</p>
                </div>
                
                <Button variant="gold" className="w-full py-4 text-sm font-bold" onClick={() => window.open('https://pay.kiwify.com.br/TifHiat', '_blank')}>
                  ASSINAR SEMESTRAL →
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Economize 4%
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <p className="text-center text-muted-foreground mt-6 md:mt-8 text-sm">
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
              <Award className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bonus Section */}
      <section className="py-12 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Bônus <span className="bg-gradient-primary bg-clip-text text-transparent">Exclusivos</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Método Hibeck 
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[{
            icon: FileText,
            title: "Oficina de Redação",
            description: "Técnicas de redação que me renderam nota 9,1 no concurso da AFA"
          }, {
            icon: BookOpen,
            title: "Física do Zero ao Halliday",
            description: "Do básico ao avançado com exercícios resolvidos"
          }, {
            icon: Award,
            title: "Intensivo de Simulados",
            description: "Simulados exclusivos para testar se a sua preparação está progredindo"
          }, {
            icon: Zap,
            title: "Acesso Imediato",
            description: "Receba todos os materiais imediatamente ao realizar o pagamento"
          }].map((item, index) => <ScrollReveal key={index} delay={index * 100}>
                <FeatureCard {...item} />
              </ScrollReveal>)}
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-8 md:mt-12">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <Button variant="gold" size="lg" onClick={scrollToPlans} className="text-sm sm:text-base md:text-lg font-bold px-5 py-4 sm:px-8 sm:py-6 md:px-10 md:py-7 rounded-full shadow-glow-beige hover:shadow-glow-beige/70 transition-all w-full max-w-xs sm:max-w-sm md:w-auto">
                  QUERO TODOS OS BÔNUS AGORA →
                </Button>
                <p className="text-sm md:text-sm text-muted-foreground text-center">
                  🎁 Bônus exclusivos inclusos • Valor inestimável
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8 bg-gradient-to-b from-secondary/10 to-background">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-secondary/10 px-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
              <Brain className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-4">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-4">
              Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto">
              Tire suas dúvidas sobre a Mentoria FULL.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem value="item-1" question="Como funciona a mentoria?" answer="A Mentoria FULL oferece acompanhamento completo através de grupos exclusivos, aulas ao vivo e gravadas, material didático premium e suporte direto com mentores especializados. Você terá um plano personalizado de estudos adaptado ao seu ritmo." />
                <FAQItem value="item-2" question="Por quanto tempo terei acesso?" answer="Você terá acesso aos materiais durante o período da sua assinatura escolhida (mensal ou semestral). O acompanhamento ativo com mentores e o acesso à plataforma são válidos durante a vigência do plano. Apenas o Livro Digital tem acesso vitalício." />
                <FAQItem value="item-3" question="Em quanto tempo recebo o plano de estudos?" answer="Após a confirmação do pagamento, você recebe acesso imediato à plataforma. Nas primeiras 48h, nosso time entrará em contato para montar seu plano personalizado baseado no seu perfil e objetivos." />
                <FAQItem value="item-4" question="Tem garantia?" answer="Sim! Oferecemos garantia incondicional de 7 dias. Se você não estiver satisfeito por qualquer motivo, devolvemos 100% do valor investido sem complicações." />
                <FAQItem value="item-5" question="A mentoria serve para iniciantes?" answer="Absolutamente! A Mentoria FULL foi desenvolvida para atender desde iniciantes que estão começando do zero até alunos avançados que querem refinar sua preparação. Nosso método se adapta ao seu nível." />
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating Contact Button - appears on scroll */}
      <FloatingWhatsApp />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <img src={mentoriaLogo} alt="Mentoria FULL" className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4" loading="lazy" />
              <p className="text-base md:text-base text-muted-foreground italic font-semibold">
                "Transformando disciplina em aprovação."
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
                <span>​@hibeck_</span>
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 md:pt-8 text-center text-muted-foreground">
            <p className="text-sm md:text-sm">&copy; 2024 Mentoria FULL. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;