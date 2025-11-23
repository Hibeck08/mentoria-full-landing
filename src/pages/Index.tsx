import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";
import { Target, BookOpen, Users, Trophy, CheckCircle2, Calendar, FileText, Video, Zap, Award, Instagram } from "lucide-react";
import mentoriaLogo from "@/assets/mentoria-logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import studyDesk from "@/assets/study-desk.png";
import student1 from "@/assets/student-1.png";
import student2 from "@/assets/student-2.png";
import student3 from "@/assets/student-3.png";
import certificates from "@/assets/certificates.png";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Modelo Premium com Glow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Glow effects atrás da foto */}
        <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] opacity-40 animate-glow-pulse" />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-accent rounded-full blur-[120px] opacity-30 animate-glow-pulse" style={{
        animationDelay: "1.5s"
      }} />
        
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Logo no topo */}
            <div className="absolute top-8 left-8 animate-fade-in-up">
              <img src={mentoriaLogo} alt="Mentoria FULL Logo" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl" />
            </div>
            
            {/* Badge no canto superior direito */}
            <div className="absolute top-8 right-8 animate-fade-in-up hidden md:flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2" style={{
            animationDelay: "0.2s"
          }}>
              <img src={heroPhoto} alt="Mentor" className="w-10 h-10 rounded-full object-cover ring-2 ring-accent" />
              <span className="text-sm font-semibold text-foreground">@hibeck_</span>
            </div>
            
            {/* Conteúdo principal */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[80vh]">
              {/* Left side - Copy */}
              <div className="flex-1 space-y-6 md:space-y-8 animate-fade-in-up max-w-2xl" style={{
              animationDelay: "0.3s"
            }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                  <span className="bg-gradient-hero-text bg-clip-text text-transparent">
                    ENTENDA A FORMA DE ESTUDOS QUE ME LEVOU A SER CLASSIFICADO
                  </span>{" "}
                  <span className="text-foreground">
                    NA AFA, EPCAR, EEAR e EFOMM!
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Se você se vê perdido, sem direção ou pensando em desistir dos concursos militares constantemente, relaxa que isso é normal, basta que tenha um bom método para ter resultados.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4" style={{
                animationDelay: "0.5s"
              }}>
                  <Button variant="gold" size="lg" className="text-base md:text-lg shadow-glow-gold text-center py-6 px-12 rounded-full hover:shadow-glow-gold/70 transition-all font-semibold pr-[35px] pl-[40px] pt-[30px] pb-[30px]">
                    QUERO ENTRAR AGORA! →
                  </Button>
                </div>
              </div>
              
              {/* Right side - Foto com elementos flutuantes */}
              <div className="flex-1 relative animate-fade-in-up" style={{
              animationDelay: "0.4s"
            }}>
                <div className="relative">
                  {/* Foto principal */}
                  <img src={heroPhoto} alt="Mentor aprovado em múltiplas academias militares" className="relative z-10 w-full max-w-md mx-auto h-auto object-cover" />
                  
                  {/* Elementos flutuantes */}
                  <div className="absolute -top-10 -left-10 animate-float opacity-80" style={{
                  animationDelay: "0.5s"
                }}>
                    <div className="bg-card/90 backdrop-blur-sm border border-accent/30 rounded-2xl p-4 shadow-premium">
                      <Trophy className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-10 -right-10 animate-float opacity-80" style={{
                  animationDelay: "1s"
                }}>
                    <div className="bg-card/90 backdrop-blur-sm border border-accent/30 rounded-2xl p-4 shadow-premium">
                      <BookOpen className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  
                  <div className="absolute top-20 -right-16 animate-float opacity-80 hidden lg:block" style={{
                  animationDelay: "1.5s"
                }}>
                    <div className="bg-card/90 backdrop-blur-sm border border-accent/30 rounded-2xl p-4 shadow-premium">
                      <Target className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Faixa animada na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 bg-accent py-4 overflow-hidden">
          <div className="animate-scroll-left whitespace-nowrap">
            <span className="inline-block text-background font-bold text-lg px-8">
              ⭐ MENTORIA FULL • AFA • EN • EFOMM • EEAR •         
            </span>
            <span className="inline-block text-background font-bold text-lg px-8">
              ⭐ MENTORIA FULL • AFA • EN • EFOMM • EEAR • 
            </span>
            <span className="inline-block text-background font-bold text-lg px-8">
              ⭐ MENTORIA FULL • AFA • EN • EFOMM • EEAR •     
            </span>
            <span className="inline-block text-background font-bold text-lg px-8">
              ⭐ MENTORIA FULL • AFA • EN • EFOMM • EEAR • 
            </span>
          </div>
        </div>
      </section>

      {/* About Section - Two Column Layout */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-20" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left side - Copy */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2">
                <span className="text-sm font-semibold text-foreground">Mentoria FULL</span>
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-background" />
                </div>
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Se você já tentou estudar para concursos militares e não teve resultado, não foi culpa sua.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A verdade é que não basta só estudar, você precisa de um <strong className="text-foreground">método validado</strong> que realmente funcione.
              </p>
              
              <p className="text-base md:text-lg text-foreground leading-relaxed font-semibold">
                A Mentoria FULL é um método validado, usado por centenas de aprovados para conquistar suas vagas nas academias militares, com um passo a passo simples e direto ao ponto.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Mesmo que você não tenha experiência com métodos de estudo estruturados, vai conseguir criar resultados extraordinários que realmente levam à aprovação.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Com planejamento pronto, checklists e um passo a passo validado, você nunca mais vai estudar no escuro!
              </p>
            </div>
            
            {/* Right side - Photo with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-3xl blur-2xl" />
              <img src={studyDesk} alt="Setup de estudos premium" className="relative rounded-3xl shadow-premium border border-accent/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Para quem é a <span className="bg-gradient-primary bg-clip-text text-transparent">Mentoria FULL?</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Se você se identifica com algum desses perfis, essa mentoria foi feita para você.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Target,
            title: "Perdido no Caminho",
            description: "Quer um plano claro e estruturado para sua aprovação militar"
          }, {
            icon: Zap,
            title: "Busca Disciplina",
            description: "Precisa de um método pronto e eficaz para estudar corretamente"
          }, {
            icon: Trophy,
            title: "Foco em Militar",
            description: "Está determinado a conquistar sua vaga na AFA, EN, EFOMM ou EEAR"
          }, {
            icon: BookOpen,
            title: "Cansado de Errar",
            description: "Já tentou estudar sozinho mas não viu resultados concretos"
          }].map((item, index) => <div key={index} className="animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <FeatureCard {...item} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Features Section - What You Will Learn */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="container relative z-10 mx-auto px-4">
          {/* Badge centered */}
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
          
          <div className="max-w-5xl mx-auto space-y-4">
            {["Método validado para explodir sua nota e ganhar classificação todos os dias", "Estratégias avançadas que fazem você dominar física, matemática e redação", "Técnicas para criar planos de estudo que realmente funcionam sem precisar depender de cursinho", "Sistema completo para revisão e memorização de longo prazo", "Método prático e direto ao ponto – sem enrolação!"].map((item, index) => <div key={index} className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-3xl p-6 hover:bg-card/70 hover:border-accent/40 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground">{item}</p>
                </div>
              </div>)}
          </div>
          
          <p className="text-xl md:text-2xl text-center mt-16 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-foreground">E o melhor?</span>{" "}
            <span className="text-muted-foreground">
              Nada de ficar perdido! Você recebe planejamento pronto, checklists e um passo a passo validado para seguir e aplicar.
            </span>
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            O Que Dizem Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Alunos</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Depoimentos reais de quem conquistou a aprovação com a Mentoria FULL.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard image={student1} name="Lucas Mendes" achievement="Aprovado AFA 2023" testimonial="A Mentoria FULL mudou completamente minha forma de estudar. O acompanhamento diário e o método estruturado me deram a confiança que faltava. Hoje sou cadete!" />
            <TestimonialCard image={student2} name="Mariana Silva" achievement="Aprovada EN 2023" testimonial="Depois de tentar sozinha por 2 anos, encontrei na mentoria o caminho certo. Os simulados e as revisões foram decisivos para minha aprovação na Escola Naval." />
            <TestimonialCard image={student3} name="Rafael Santos" achievement="Aprovado EFOMM 2024" testimonial="O diferencial foi o acompanhamento 1:1. Meu mentor identificou minhas dificuldades e montou um plano sob medida. Resultado: aprovação de primeira!" />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Resultados Que <span className="bg-gradient-primary bg-clip-text text-transparent">Comprovam</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-premium transition-all duration-300">
                <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  +1.500
                </div>
                <p className="text-xl text-muted-foreground">Alunos Impactados</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-premium transition-all duration-300">
                <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  +300
                </div>
                <p className="text-xl text-muted-foreground">Aprovações Diretas</p>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img src={certificates} alt="Achievement certificates" className="rounded-2xl shadow-premium" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Two Cards */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
            Planos de <span className="text-accent">Investimento</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico - Dark Card */}
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-premium transition-all duration-300">
              {/* Badge */}
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
                {["Planejamento semanal personalizado", "Grupo de estudos exclusivo", "PDFs e materiais básicos", "Simulados mensais", "Aulas gravadas", "Suporte via grupo"].map((item, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground line-through decoration-1">{item}</span>
                  </li>)}
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
            
            {/* Plano Completo - Highlighted Card */}
            <div className="bg-accent/95 border-2 border-accent rounded-3xl p-8 hover:shadow-glow-gold transition-all duration-300 relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MAIS POPULAR
                </div>
              </div>
              
              {/* Badge */}
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
                {["Mentoria 1:1 personalizada", "Acompanhamento diário exclusivo", "PDFs completos + bônus premium", "Simulados semanais + correção detalhada", "Aulas ao vivo e gravadas", "Estratégia AFA, EN, EFOMM, EEAR", "Revisões com professores especializados", "Suporte direto com mentores", "Acesso vitalício a materiais", "Comunidade de aprovados"].map((item, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-background flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-background font-medium">{item}</span>
                  </li>)}
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
          </div>
          
          <p className="text-center text-muted-foreground mt-8 text-sm">
            🔒 Garantia de 7 dias • Pagamento 100% seguro
          </p>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Bônus <span className="bg-gradient-primary bg-clip-text text-transparent">Exclusivos</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Além de tudo, você recebe conteúdos especiais sem custo adicional.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: FileText,
            title: "Oficina de Redação",
            description: "Técnicas avançadas para nota máxima na redação militar"
          }, {
            icon: BookOpen,
            title: "Física do Zero ao Halliday",
            description: "Do básico ao avançado com exercícios resolvidos"
          }, {
            icon: Award,
            title: "Intensivo de Simulados",
            description: "Bateria extra de testes para acelerar resultados"
          }, {
            icon: Zap,
            title: "Acesso Antecipado",
            description: "Receba novos materiais antes de todos"
          }].map((item, index) => <div key={index} className="animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <FeatureCard {...item} />
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Mentoria FULL.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <FAQItem value="item-1" question="Como funciona a mentoria?" answer="A Mentoria FULL oferece acompanhamento completo através de grupos exclusivos, aulas ao vivo e gravadas, material didático premium e suporte direto com mentores especializados. Você terá um plano personalizado de estudos adaptado ao seu ritmo." />
              <FAQItem value="item-2" question="Por quanto tempo terei acesso?" answer="Você terá acesso vitalício a todos os materiais da mentoria, incluindo atualizações futuras. O acompanhamento ativo com mentores depende do plano escolhido, mas o conteúdo fica disponível para sempre." />
              <FAQItem value="item-3" question="Em quanto tempo recebo o plano de estudos?" answer="Após a confirmação do pagamento, você recebe acesso imediato à plataforma. Nas primeiras 48h, nosso time entrará em contato para montar seu plano personalizado baseado no seu perfil e objetivos." />
              <FAQItem value="item-4" question="Tem garantia?" answer="Sim! Oferecemos garantia incondicional de 7 dias. Se você não estiver satisfeito por qualquer motivo, devolvemos 100% do valor investido sem complicações." />
              <FAQItem value="item-5" question="A mentoria serve para iniciantes?" answer="Absolutamente! A Mentoria FULL foi desenvolvida para atender desde iniciantes que estão começando do zero até alunos avançados que querem refinar sua preparação. Nosso método se adapta ao seu nível." />
            </Accordion>
          </div>
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
    </div>;
};
export default Index;