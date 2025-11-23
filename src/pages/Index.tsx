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
import { 
  Target, BookOpen, Users, Trophy, CheckCircle2, 
  FileText, Zap, Award, Instagram, TrendingUp, 
  Brain, Clock, Rocket
} from "lucide-react";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import heroMain from "@/assets/hero-main.png";
import certificates from "@/assets/certificates.png";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with enhanced treatment */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroMain} 
            alt="Background" 
            className="w-full h-full object-cover brightness-90 contrast-110 saturate-110"
          />
          {/* Gradient overlay for better text readability and depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/50 to-background/70" />
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Top right floating icon */}
          <div className="absolute top-32 right-20 animate-float opacity-80 hidden lg:block" style={{ animationDelay: "0.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Trophy className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          {/* Bottom left floating icon */}
          <div className="absolute bottom-40 left-20 animate-float opacity-80 hidden lg:block" style={{ animationDelay: "1s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <Target className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          {/* Middle right floating icon */}
          <div className="absolute top-1/2 right-32 animate-float opacity-80 hidden xl:block" style={{ animationDelay: "1.5s" }}>
            <div className="bg-gradient-primary backdrop-blur-md rounded-2xl p-5 shadow-glow-beige border border-accent/20">
              <BookOpen className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-accent/20 animate-float hidden lg:block" style={{ animationDelay: "0.8s" }} />
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/20 animate-float hidden lg:block" style={{ animationDelay: "1.2s" }} />
          
          {/* Subtle glow effects */}
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-glow-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[100px] opacity-25 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="absolute top-8 left-8 animate-fade-in-up z-20">
              <img src={mentoriaLogo} alt="Mentoria FULL Logo" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl" />
            </div>
            
            <div className="absolute top-8 right-8 animate-fade-in-up hidden md:flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 z-20" style={{ animationDelay: "0.2s" }}>
              <img src={heroPhoto} alt="Mentor" className="w-10 h-10 rounded-full object-cover ring-2 ring-accent" />
              <span className="text-sm font-semibold text-foreground">@hibeck_</span>
            </div>
            
            <div className="flex flex-col items-start justify-center gap-12 min-h-[80vh]">
              <div className="space-y-6 md:space-y-8 animate-fade-in-up max-w-2xl z-10" style={{ animationDelay: "0.3s" }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                  <span className="text-foreground">
                    ENTENDA A FORMA DE ESTUDOS QUE ME LEVOU A SER{" "}
                  </span>
                  <span className="bg-gradient-hero-text bg-clip-text text-transparent">
                    CLASSIFICADO NA AFA, EPCAR, EEAR e EFOMM!
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Se você se vê perdido, sem direção ou pensando em desistir dos concursos militares constantemente, relaxa que isso é normal, basta que tenha um bom método para ter resultados.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4" style={{ animationDelay: "0.5s" }}>
                  <Button variant="gold" size="lg" className="text-base shadow-glow-beige text-center rounded-full transition-all font-semibold px-12 py-8 text-lg">
                    QUERO ME INSCREVER AGORA MESMO! →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* X-shaped banner strips */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
          {/* Background strip (faded) */}
          <div className="absolute inset-0 -rotate-6 translate-y-8">
            <div className="bg-gradient-primary/30 backdrop-blur-sm py-6 border-y-2 border-accent-dark/20">
              <div className="flex whitespace-nowrap animate-scroll-left">
                <span className="inline-block text-accent-foreground/50 font-bold text-lg px-4 tracking-wider">
                  ⭐ GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS •
                </span>
              </div>
            </div>
          </div>
          
          {/* Foreground strip (bright) */}
          <div className="absolute inset-0 rotate-6 translate-y-8">
            <div className="bg-gradient-primary py-6 border-y-2 border-accent-dark/30">
              <div className="flex whitespace-nowrap animate-scroll-right">
                <span className="inline-block text-accent-foreground font-bold text-lg px-4 tracking-wider">
                  ⭐ GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS • GESTÃO DE CONTRATOS •
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-20" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <ScrollReveal variant="left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2">
                  <span className="text-sm font-semibold text-foreground">Mentoria FULL</span>
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-background" />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  O PASSO A PASSO QUE TRANSFORMA O ESTUDO EM RESULTADO REAL
                </h2>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
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
                <img 
                  alt="Setup de estudos premium" 
                  className="relative rounded-3xl shadow-premium border border-accent/20" 
                  src="/lovable-uploads/7f4563c1-e84f-4543-88ac-c6bcd4a0b0a8.png" 
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Para quem é a <span className="bg-gradient-primary bg-clip-text text-transparent">Mentoria FULL?</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Se você se identifica com algum desses perfis, essa mentoria foi feita para você.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Perdido no Caminho",
                description: "Quer um plano claro e estruturado para sua aprovação"
              },
              {
                icon: Zap,
                title: "Busca Disciplina",
                description: "Precisa de um método pronto e eficaz para estudar corretamente"
              },
              {
                icon: Trophy,
                title: "Foco em Carreiras Militares",
                description: "Está determinado a conquistar sua vaga na AFA, EN, EFOMM ou EEAR"
              },
              {
                icon: BookOpen,
                title: "Cansado de Errar",
                description: "Já tentou estudar sozinho mas não viu resultados concretos"
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <FeatureCard {...item} />
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="gold" size="lg" className="text-lg font-bold px-12 py-8 rounded-full shadow-glow-gold hover:shadow-glow-gold/70 transition-all">
                GARANTIR MINHA VAGA AGORA →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Section - Antes vs Depois */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              A Transformação é <span className="text-accent">Real</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal variant="left">
              <ComparisonCard 
                title="❌ Sem a Mentoria"
                type="before"
                items={[
                  "Estudando sem direção clara",
                  "Perdendo tempo com o que não cai na prova",
                  "Sem método validado de aprovação",
                  "Fazendo apenas o que 'acha' que está certo",
                  "Resultados lentos ou inexistentes"
                ]}
              />
            </ScrollReveal>
            
            <ScrollReveal variant="right">
              <ComparisonCard 
                title="✅ Com a Mentoria FULL"
                type="after"
                items={[
                  "Plano de estudos estruturado e personalizado",
                  "Foco total nas matérias que realmente importam",
                  "Método comprovado de aprovação",
                  "Acompanhamento direto de quem já passou",
                  "Resultados rápidos e consistentes"
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What You Will Learn Section */}
      <section className="py-32 relative overflow-hidden bg-secondary/10">
        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2">
                <span className="text-sm font-semibold text-foreground">Mentoria FULL</span>
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-background" />
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
              O que <span className="text-accent">você vai Aprender?</span>
            </h2>
          </ScrollReveal>
          
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              "Método usado por mim para aprovação na AFA, EFOMM, EEAr e EPCAr",
              "Encontros ao vivo com foco em matemática e física do zero",
              "Técnicas para criar planos de estudo que realmente funcionam",
              "Aulas gravadas e acesso a listas de questões inéditas",
              "Método prático e direto ao ponto – sem enrolação!"
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-3xl p-6 hover:bg-card/70 hover:border-accent/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground">{item}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-center mt-16 max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold text-foreground">E o melhor?</span>{" "}
              <span className="text-muted-foreground">
                Nada de ficar perdido! Você recebe planejamento pronto, checklists e um passo a passo validado para seguir e aplicar.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Big Numbers Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Números que <span className="text-accent">Impressionam</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Resultados reais de quem confia no método FULL
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <NumberStat 
                number="+1.500" 
                label="Alunos Impactados"
                icon={<Users className="w-8 h-8 text-primary-foreground" />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <NumberStat 
                number="+300" 
                label="Aprovações Diretas"
                icon={<Trophy className="w-8 h-8 text-primary-foreground" />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <NumberStat 
                number="95%" 
                label="Taxa de Satisfação"
                icon={<Award className="w-8 h-8 text-primary-foreground" />}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results with Testimonials Carousel */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Resultados Que <span className="bg-gradient-primary bg-clip-text text-transparent">Comprovam</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              A prova de que o método realmente funciona
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <Carousel 
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {[
                  "/lovable-uploads/feedback-1.png",
                  "/lovable-uploads/feedback-2.png",
                  "/lovable-uploads/feedback-3.png",
                  "/lovable-uploads/feedback-4.png",
                  "/lovable-uploads/feedback-5.png"
                ].map((image, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-premium transition-all duration-300">
                      <img 
                        src={image} 
                        alt={`Depoimento ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="gold" size="lg" className="text-lg font-bold px-12 py-8 rounded-full shadow-glow-gold hover:shadow-glow-gold/70 transition-all">
                QUERO FAZER PARTE AGORA →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fun Stats Section */}
      <section className="py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Por Que a Mentoria <span className="text-accent">FULL?</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Conheça os diferenciais que fazem a diferença
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Rocket className="w-6 h-6 text-primary-foreground" />,
                title: "Resultado Rápido",
                description: "Método acelerado para você ver progresso em semanas, não anos"
              },
              {
                icon: <Brain className="w-6 h-6 text-primary-foreground" />,
                title: "Aprenda de Verdade",
                description: "Técnicas de memorização de longo prazo que realmente funcionam"
              },
              {
                icon: <Clock className="w-6 h-6 text-primary-foreground" />,
                title: "Flexível para Você",
                description: "Estude no seu ritmo, com acesso vitalício aos materiais"
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-primary-foreground" />,
                title: "Evolução Constante",
                description: "Acompanhe seu progresso com métricas e ajustes personalizados"
              },
              {
                icon: <Users className="w-6 h-6 text-primary-foreground" />,
                title: "Comunidade Ativa",
                description: "Faça parte de um grupo de estudantes focados na aprovação"
              },
              {
                icon: <Award className="w-6 h-6 text-primary-foreground" />,
                title: "Mentores Aprovados",
                description: "Aprenda com quem já passou e sabe o caminho das pedras"
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-premium">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
              Planos de <span className="text-accent">Investimento</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal variant="left">
              <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-premium transition-all duration-300">
                <div className="inline-flex items-center gap-2 bg-background/50 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="text-xs font-semibold text-muted-foreground">Plano Básico</span>
                  <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-background" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-2">
                  Mentoria <span className="text-accent">Essencial</span>
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6">Acesso ao Treinamento Essencial</p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Planejamento semanal personalizado",
                    "Grupo de estudos exclusivo",
                    "PDFs e materiais básicos",
                    "Simulados mensais",
                    "Aulas gravadas",
                    "Suporte via grupo"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground line-through decoration-1">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">de R$ 497,00 por</p>
                  <p className="text-5xl md:text-6xl font-bold text-accent mb-1">R$297</p>
                  <p className="text-sm text-muted-foreground">ou 12x de R$ 29,90</p>
                </div>
                
                <Button variant="outline" className="w-full py-6 text-base font-bold border-accent/30 hover:bg-accent/10 hover:border-accent">
                  CONSULTAR PLANO →
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="right">
              <div className="bg-accent/95 border-2 border-accent rounded-3xl p-8 hover:shadow-glow-gold transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MAIS POPULAR
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 bg-background/90 border border-background rounded-full px-4 py-1.5 mb-6">
                  <span className="text-xs font-semibold text-foreground">Plano Completo</span>
                  <div className="w-6 h-6 bg-background rounded-lg flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-accent" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-2 text-background">
                  Mentoria <span className="text-background">FULL</span>
                </h3>
                
                <p className="text-sm text-background/80 mb-6">Acesso ao Treinamento Completo</p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Mentoria 1:1 personalizada",
                    "Acompanhamento diário exclusivo",
                    "PDFs completos + bônus premium",
                    "Simulados semanais + correção detalhada",
                    "Aulas ao vivo e gravadas",
                    "Estratégia AFA, EN, EFOMM, EEAR",
                    "Revisões com professores especializados",
                    "Suporte direto com mentores",
                    "Acesso vitalício a materiais",
                    "Comunidade de aprovados"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-background flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-background font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-sm text-background/80 mb-2">de R$ 1.997,00 por</p>
                  <p className="text-5xl md:text-6xl font-bold text-background mb-1">R$997</p>
                  <p className="text-sm text-background/80">ou 12x de R$ 97,00</p>
                </div>
                
                <Button variant="default" className="w-full py-6 text-base font-bold bg-background text-accent hover:bg-background/90">
                  GARANTIR MINHA VAGA →
                </Button>
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

      {/* Bonus Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Bônus <span className="bg-gradient-primary bg-clip-text text-transparent">Exclusivos</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Além de tudo, você recebe conteúdos especiais sem custo adicional.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Oficina de Redação",
                description: "Técnicas avançadas para nota máxima na redação militar"
              },
              {
                icon: BookOpen,
                title: "Física do Zero ao Halliday",
                description: "Do básico ao avançado com exercícios resolvidos"
              },
              {
                icon: Award,
                title: "Intensivo de Simulados",
                description: "Bateria extra de testes para acelerar resultados"
              },
              {
                icon: Zap,
                title: "Acesso Antecipado",
                description: "Receba novos materiais antes de todos"
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <FeatureCard {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Tire suas dúvidas sobre a Mentoria FULL.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem 
                  value="item-1" 
                  question="Como funciona a mentoria?" 
                  answer="A Mentoria FULL oferece acompanhamento completo através de grupos exclusivos, aulas ao vivo e gravadas, material didático premium e suporte direto com mentores especializados. Você terá um plano personalizado de estudos adaptado ao seu ritmo." 
                />
                <FAQItem 
                  value="item-2" 
                  question="Por quanto tempo terei acesso?" 
                  answer="Você terá acesso vitalício a todos os materiais da mentoria, incluindo atualizações futuras. O acompanhamento ativo com mentores depende do plano escolhido, mas o conteúdo fica disponível para sempre." 
                />
                <FAQItem 
                  value="item-3" 
                  question="Em quanto tempo recebo o plano de estudos?" 
                  answer="Após a confirmação do pagamento, você recebe acesso imediato à plataforma. Nas primeiras 48h, nosso time entrará em contato para montar seu plano personalizado baseado no seu perfil e objetivos." 
                />
                <FAQItem 
                  value="item-4" 
                  question="Tem garantia?" 
                  answer="Sim! Oferecemos garantia incondicional de 7 dias. Se você não estiver satisfeito por qualquer motivo, devolvemos 100% do valor investido sem complicações." 
                />
                <FAQItem 
                  value="item-5" 
                  question="A mentoria serve para iniciantes?" 
                  answer="Absolutamente! A Mentoria FULL foi desenvolvida para atender desde iniciantes que estão começando do zero até alunos avançados que querem refinar sua preparação. Nosso método se adapta ao seu nível." 
                />
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={mentoriaLogo} alt="Mentoria FULL" className="w-16 h-16 mb-4" />
              <p className="text-muted-foreground italic font-semibold">
                "Transformando disciplina em aprovação."
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Redes Sociais</h3>
              <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@mentoriafull</span>
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Mentoria FULL. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
