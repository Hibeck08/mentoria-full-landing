import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";
import { 
  Target, 
  BookOpen, 
  Users, 
  Trophy, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Video,
  Zap,
  Award,
  Instagram
} from "lucide-react";

import mentoriaLogo from "@/assets/mentoria-logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import studyDesk from "@/assets/study-desk.png";
import student1 from "@/assets/student-1.png";
import student2 from "@/assets/student-2.png";
import student3 from "@/assets/student-3.png";
import certificates from "@/assets/certificates.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-30 animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-30 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left side - Copy */}
            <div className="animate-fade-in-up space-y-8">
              <img 
                src={mentoriaLogo} 
                alt="Mentoria FULL Logo" 
                className="w-24 h-24 drop-shadow-2xl"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  ENTENDA A FORMA DE ESTUDOS QUE ME LEVOU A SER CLASSIFICADO NA AFA, EPCAR, EEAR e EFOMM!
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Se você se vê perdido, sem direção ou pensando em desistir dos concursos militares constantemente, relaxa que isso é normal, basta que tenha um bom método para ter resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <Button variant="gold" size="lg" className="text-lg px-12 py-7 h-auto shadow-glow-gold">
                  QUERO ENTRAR AGORA
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-12 py-7 h-auto">
                  VER DETALHES
                </Button>
              </div>
            </div>
            
            {/* Right side - Photo with gradient effect */}
            <div className="animate-fade-in-up relative" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-2xl"></div>
                <img 
                  src={heroPhoto} 
                  alt="Mentor aprovado em múltiplas academias militares" 
                  className="relative rounded-3xl shadow-premium w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                O Que é a <span className="bg-gradient-primary bg-clip-text text-transparent">Mentoria FULL</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A Mentoria FULL é um programa premium de acompanhamento individual e em grupo, 
                  projetado para transformar sua preparação militar em resultados concretos.
                </p>
                <ul className="space-y-3">
                  {[
                    "Acompanhamento 1:1 e em grupo exclusivo",
                    "Método FULL focado em explosão de resultados",
                    "Aulas direcionadas para AFA, EN, EFOMM e EEAR",
                    "Checklists semanais e metas diárias",
                    "Revisões de alto nível com professores especializados",
                    "Acesso completo a PDFs, simulados, resumos e listas"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <img 
                src={studyDesk} 
                alt="Modern study setup" 
                className="rounded-2xl shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Para Quem é a <span className="bg-gradient-primary bg-clip-text text-transparent">Mentoria FULL</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Se você se identifica com algum desses perfis, essa mentoria foi feita para você.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Perdido no Caminho",
                description: "Quer um plano claro e estruturado para sua aprovação militar"
              },
              {
                icon: Zap,
                title: "Busca Disciplina",
                description: "Precisa de um método pronto e eficaz para estudar corretamente"
              },
              {
                icon: Trophy,
                title: "Foco em Militar",
                description: "Está determinado a conquistar sua vaga na AFA, EN, EFOMM ou EEAR"
              },
              {
                icon: BookOpen,
                title: "Cansado de Errar",
                description: "Já tentou estudar sozinho mas não viu resultados concretos"
              }
            ].map((item, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-10 -translate-x-1/2" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            O Que Você Vai <span className="bg-gradient-primary bg-clip-text text-transparent">Receber</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Todo o arsenal necessário para sua aprovação está aqui.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Planejamento Personalizado",
                description: "Cronograma semanal adaptado ao seu ritmo e necessidades"
              },
              {
                icon: Users,
                title: "Grupos Exclusivos",
                description: "Acompanhamento em grupo e individual com mentores especializados"
              },
              {
                icon: FileText,
                title: "PDFs Profissionais",
                description: "Materiais de estudo completos e organizados por disciplina"
              },
              {
                icon: Award,
                title: "Simulados Semanais",
                description: "Testes reais que simulam as provas das academias militares"
              },
              {
                icon: Video,
                title: "Aulas Exclusivas",
                description: "Conteúdo gravado e ao vivo focado nas suas dificuldades"
              },
              {
                icon: Zap,
                title: "Estratégias Avançadas",
                description: "Métodos comprovados para física, redação e disciplinas base"
              }
            ].map((item, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...item} />
              </div>
            ))}
          </div>
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
            <TestimonialCard 
              image={student1}
              name="Lucas Mendes"
              achievement="Aprovado AFA 2023"
              testimonial="A Mentoria FULL mudou completamente minha forma de estudar. O acompanhamento diário e o método estruturado me deram a confiança que faltava. Hoje sou cadete!"
            />
            <TestimonialCard 
              image={student2}
              name="Mariana Silva"
              achievement="Aprovada EN 2023"
              testimonial="Depois de tentar sozinha por 2 anos, encontrei na mentoria o caminho certo. Os simulados e as revisões foram decisivos para minha aprovação na Escola Naval."
            />
            <TestimonialCard 
              image={student3}
              name="Rafael Santos"
              achievement="Aprovado EFOMM 2024"
              testimonial="O diferencial foi o acompanhamento 1:1. Meu mentor identificou minhas dificuldades e montou um plano sob medida. Resultado: aprovação de primeira!"
            />
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
              <img 
                src={certificates} 
                alt="Achievement certificates" 
                className="rounded-2xl shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Planos de <span className="bg-gradient-primary bg-clip-text text-transparent">Investimento</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Invista na sua aprovação com segurança total.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <PricingCard 
              featured
              title="MENTORIA FULL"
              price="Consulte"
              features={[
                { text: "Mentoria completa com acompanhamento diário" },
                { text: "Acesso ao grupo exclusivo de alunos" },
                { text: "PDFs completos de todas as disciplinas" },
                { text: "Simulados semanais com correção detalhada" },
                { text: "Aulas gravadas e ao vivo exclusivas" },
                { text: "Estratégia personalizada para AFA, EN, EFOMM e EEAR" },
                { text: "Revisões de alto nível com professores" },
                { text: "Suporte direto com mentores especializados" },
                { text: "Acesso vitalício a materiais atualizados" },
                { text: "Comunidade de aprovados para networking" }
              ]}
            />
          </div>
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
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...item} />
              </div>
            ))}
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src={mentoriaLogo} 
                alt="Mentoria FULL" 
                className="w-16 h-16 mb-4"
              />
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
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
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
