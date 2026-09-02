import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/FAQItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Home, Volume2, VolumeX, ArrowRight, CheckCircle2, XCircle,
  MessageCircle, Users, Layers, BookOpen, Play, Calendar, Crown,
} from "lucide-react";
import logoSilver from "@/assets/logo-silver.webp";
import heroBw from "@/assets/masterclass-hero-bw.webp";
import wallBw from "@/assets/masterclass-wallpaper-bw.webp";
import bannerMentoria from "@/assets/mentoria-banner.webp";
import bannerQuestoes from "@/assets/questoes-banner.webp";
import bannerMetas from "@/assets/plano-metas-missoes.webp";
import bannerFlashcards from "@/assets/flashcards-wallpaper.webp";

const VSL_ID = "aRHlGzwQ2oU";

const WPP_DUVIDAS =
  "https://wa.me/5521992104885?text=Ol%C3%A1%21%20Quero%20tirar%20umas%20d%C3%BAvidas%20antes%20de%20escolher%20meu%20plano%20na%20Mentoria%20FULL%21";

type Preco = {
  nome: string; mes: string; nota: string; link: string;
  melhor?: boolean; de?: string; promo?: string; economia?: string;
};

const planosStandard: Preco[] = [
  { nome: "Trimestral", mes: "R$ 97,00", nota: "3 meses de acesso", link: "https://pay.kiwify.com.br/F3otYDP" },
  { nome: "Semestral", mes: "R$ 93,90", nota: "6 meses de acesso", link: "https://pay.kiwify.com.br/ctdmAcT" },
  { nome: "Anual", mes: "R$ 87,50", nota: "12 meses de acesso", link: "https://pay.kiwify.com.br/9LgKsvN", melhor: true },
];

const planosStandardPlus: Preco[] = [
  { nome: "Trimestral", mes: "R$ 112,90", nota: "3 meses de acesso", link: "https://pay.kiwify.com.br/vJtM1hN" },
  { nome: "Semestral", mes: "R$ 106,00", nota: "6 meses de acesso", link: "https://pay.kiwify.com.br/MYxkoYR" },
  { nome: "Anual", mes: "R$ 98,98", nota: "12 meses de acesso", link: "https://pay.kiwify.com.br/dOPN2bl", melhor: true },
];

const planosUltra: Preco[] = [
  { nome: "Trimestral", mes: "R$ 129,90", nota: "3 meses de acesso", link: "https://pay.kiwify.com.br/4ZJ8Z86" },
  { nome: "Semestral", mes: "R$ 124,90", nota: "6 meses de acesso", link: "https://pay.kiwify.com.br/zJh6ROb" },
  {
    nome: "Anual",
    mes: "R$ 90,68",
    de: "R$ 120,90",
    nota: "12 meses de acesso",
    link: "https://pay.kiwify.com.br/Ph1n0Af?coupon=ANUALFULL",
    melhor: true,
    promo: "SUPER DESCONTO",
    economia: "25% OFF · cupom ANUALFULL já aplicado",
  },
];

type PlanMode = "standard" | "standardplus" | "ultra";

const detalhes: Record<PlanMode, {
  tag: string; titulo: string; subtitulo: string; para: string;
  grupos: { titulo: string; icon: React.ElementType; itens: string[] }[];
  naoInclui: string[]; precos: Preco[];
}> = {
  standard: {
    tag: "PLANO STANDARD",
    titulo: "Mentoria FULL | Standard",
    subtitulo: "Pra quem já tem preparatório e quer método, rotina e acompanhamento pra virar aprovação.",
    para: "Serve pra QUALQUER concurso · inclusive CN e EPCAr",
    grupos: [
      { titulo: "Acompanhamento 1:1", icon: Users, itens: [
        "Direcionamento individual comigo, semana a semana",
        "Plano de metas personalizado pro seu concurso",
        "Ajuste de rotina de estudos (matérias, horários, pesos)",
        "Suporte direto no WhatsApp",
      ] },
      { titulo: "Plataforma completa", icon: Layers, itens: [
        "Banco FULL Questões (+10.000 questões resolvidas)",
        "+2.000 flashcards Anki de todas as matérias",
        "Nivelamento automático por assunto",
        "Livro do Método Hibeck em PDF",
      ] },
      { titulo: "Comunidade & rotina", icon: Calendar, itens: [
        "Encontros ao vivo semanais de estudo em grupo",
        "Comunidade fechada de alunos",
        "Cronograma de revisões inteligente",
      ] },
    ],
    naoInclui: ["Aulas AO VIVO de matérias", "Aulas GRAVADAS de matérias"],
    precos: planosStandard,
  },
  standardplus: {
    tag: "STANDARD +",
    titulo: "Mentoria FULL | Standard +",
    subtitulo: "Tudo do Standard mais o acervo completo de aulas gravadas pra estudar no seu ritmo.",
    para: "Serve pra QUALQUER concurso · inclusive CN e EPCAr",
    grupos: [
      { titulo: "Tudo do Standard", icon: Users, itens: [
        "Acompanhamento e direcionamento 1:1",
        "Banco FULL Questões + flashcards Anki",
        "Plano de metas e organização de rotina",
        "Encontros ao vivo de estudo",
      ] },
      { titulo: "Aulas GRAVADAS de todas as matérias", icon: BookOpen, itens: [
        "Videoaulas completas do zero ao avançado",
        "Resolução comentada de questões-chave",
        "Assiste quando e quantas vezes quiser",
      ] },
    ],
    naoInclui: ["Aulas AO VIVO de matérias"],
    precos: planosStandardPlus,
  },
  ultra: {
    tag: "PLANO ULTRA",
    titulo: "Mentoria FULL | Ultra",
    subtitulo: "O pacote fechado: mentoria, método, aulas ao vivo e gravadas de todas as matérias.",
    para: "EXCLUSIVO para AFA · EN · EFOMM",
    grupos: [
      { titulo: "Aulas AO VIVO comigo e minha equipe", icon: Play, itens: [
        "Matemática, Física, Português e Inglês toda semana",
        "Gravadas e disponíveis pra rever quando quiser",
      ] },
      { titulo: "Aulas GRAVADAS de todas as matérias", icon: BookOpen, itens: [
        "Videoaulas completas do zero ao avançado",
        "Acervo completo do Método Hibeck",
      ] },
      { titulo: "Mentoria 1:1 aprofundada", icon: Users, itens: [
        "Acompanhamento individual com foco em performance",
        "Análise de simulados e correção de rota",
        "Suporte direto no WhatsApp",
      ] },
      { titulo: "Plataforma & comunidade", icon: Layers, itens: [
        "Banco FULL Questões + 2.000 flashcards Anki",
        "Encontros ao vivo semanais",
        "Comunidade fechada de alunos",
      ] },
    ],
    naoInclui: [],
    precos: planosUltra,
  },
};

const cards: { mode: PlanMode; tag: string; title: string; desc: string; bullets: string[] }[] = [
  {
    mode: "standard",
    tag: "PLANO STANDARD",
    title: "Já tenho preparatório",
    desc: "Falta direção, rotina e acompanhamento, não mais conteúdo.",
    bullets: ["Acompanhamento 1:1", "Banco FULL Questões + flashcards", "Plano de metas semanal"],
  },
  {
    mode: "standardplus",
    tag: "STANDARD +",
    title: "Quero também as gravadas",
    desc: "Tudo do Standard mais o acervo de aulas gravadas de todas as matérias.",
    bullets: ["Tudo do Standard", "Aulas gravadas completas", "Resoluções comentadas"],
  },
  {
    mode: "ultra",
    tag: "PLANO ULTRA",
    title: "Quero TUDO incluso",
    desc: "O pacote fechado com aulas ao vivo semanais e mentoria aprofundada.",
    bullets: ["Aulas AO VIVO semanais", "Mentoria 1:1 aprofundada", "SUPER DESCONTO no anual"],
  },
];

const depoimentos = [
  "/lovable-uploads/feedback-1.jpg",
  "/lovable-uploads/feedback-2.jpg",
  "/lovable-uploads/feedback-3.jpg",
  "/lovable-uploads/feedback-4.jpg",
  "/lovable-uploads/feedback-5.jpg",
  "/lovable-uploads/feedback-6.jpg",
  "/lovable-uploads/feedback-7.jpg",
  "/lovable-uploads/feedback-8.jpg",
  "/lovable-uploads/feedback-9.jpg",
];

const Masterclass = () => {
  const [muted, setMuted] = React.useState(true);
  const [openPlan, setOpenPlan] = React.useState<PlanMode | null>(null);
  const detalhe = detalhes[openPlan ?? "standard"];

  const src = `https://www.youtube-nocookie.com/embed/${VSL_ID}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${VSL_ID}&controls=1&rel=0&playsinline=1&modestbranding=1`;

  const scrollToPlans = () =>
    document.getElementById("planos-vsl")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      {/* MENU */}
      <Link
        to="/"
        className="fixed top-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/70 backdrop-blur px-4 py-2 text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Home className="w-3.5 h-3.5" /> Menu
      </Link>

      {/* HERO + VSL */}
      <section className="relative overflow-hidden pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary/25 via-background to-background" />

        {/* banner espelhado no topo */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] md:h-[560px] flex">
          <img
            src={heroBw}
            alt=""
            aria-hidden
            className="h-full w-1/2 object-cover object-right grayscale opacity-40"
          />
          <img
            src={heroBw}
            alt=""
            aria-hidden
            className="h-full w-1/2 object-cover object-right grayscale opacity-40 scale-x-[-1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.22),transparent_65%)]" />
        </div>

        <div className="container mx-auto px-5">
          <img src={logoSilver} alt="FULL" className="h-10 md:h-12 w-auto mx-auto mb-6 opacity-90" />

          <h1 className="max-w-4xl mx-auto text-center text-2xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
            <span className="bg-accent/90 text-accent-foreground px-2 rounded-md box-decoration-clone">
              Um método único e comprovado
            </span>{" "}
            que já levou alunos ao topo da AFA, EN e EFOMM
          </h1>
          <p className="max-w-2xl mx-auto text-center text-sm md:text-base text-muted-foreground mt-4">
            Assista ao vídeo abaixo e entenda como a Mentoria FULL transforma rotina bagunçada em
            aprovação nas Forças Armadas.
          </p>


          {/* VSL 9:16 com wallpaper P&B atrás */}
          <div className="relative mt-8 md:mt-10 -mx-5 md:mx-0">
            {/* wallpaper com efeitos */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {/* imagem P&B clareada: as partes escuras caem no fundo, as claras ganham o duotone roxo */}
              <img
                src={wallBw}
                alt=""
                aria-hidden
                className="h-full w-full object-cover grayscale brightness-150 contrast-125 animate-ken-burns opacity-70 mix-blend-screen will-change-transform"
              />
              {/* duotone roxo sobre os tons claros */}
              <div className="absolute inset-0 bg-[hsl(268_85%_55%)] mix-blend-color opacity-80" />
              {/* vinheta suave só no topo e na base */}
              <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
              {/* glow central atrás do vídeo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_50%_50%,hsl(var(--accent)/0.30),transparent_70%)]" />
            </div>

            <div className="relative z-10 flex justify-center px-5 py-6 md:py-10">
              <div className="relative w-full max-w-[330px] sm:max-w-[380px] md:max-w-[420px]">
                <div className="absolute -inset-4 bg-accent/30 blur-3xl rounded-[2rem] -z-10" />
                <div className="relative rounded-[1.75rem] border-2 border-accent/40 bg-card/80 backdrop-blur-sm p-2 shadow-premium">
                  <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[1.25rem] bg-black">
                    <iframe
                      key={muted ? "muted" : "unmuted"}
                      src={src}
                      title="Masterclass FULL"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  className="mt-3 mx-auto flex items-center gap-2 rounded-full border border-accent/40 bg-card/80 backdrop-blur px-4 py-2 text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  {muted ? "Clique para ativar o som" : "Som ativado"}
                </button>
              </div>
            </div>

            {/* CTA logo abaixo do vídeo */}
            <div className="px-5 pb-6 md:pb-10 text-center">
              <Button variant="gold" size="lg" onClick={scrollToPlans} className="rounded-full px-8 font-black shadow-glow-beige">
                <span className="inline-flex items-center justify-center gap-2">
                  QUERO MINHA VAGA NA MENTORIA <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              <p className="mt-3 text-[11px] text-muted-foreground">Vagas limitadas · garantia incondicional de 7 dias</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPOSTA + CTA */}
      <section className="py-14 md:py-20 border-t border-border/40">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <div className="flex justify-center gap-1.5 mb-6">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2 w-8 rounded-full bg-accent/70 -skew-x-12" />
            ))}
          </div>
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-black leading-tight">
              <span className="bg-accent/90 text-accent-foreground px-2 rounded-md box-decoration-clone">
                Condensamos anos de preparação
              </span>{" "}
              em um sistema rápido e prático
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-4">
              Método validado, banco de questões, flashcards, plano de metas e acompanhamento direto.
              Tudo em um lugar só, pra você parar de adivinhar o que estudar.
            </p>
            <Button variant="gold" size="lg" onClick={scrollToPlans} className="mt-8 rounded-full px-8 font-black">
              <span className="inline-flex items-center justify-center gap-2">
                QUERO FAZER PARTE DA MENTORIA <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFÍCIOS 01 */}
      <section className="py-14 md:py-20 border-y border-border/40">
        <div className="container mx-auto px-5 grid md:grid-cols-[1.08fr_.92fr] gap-8 md:gap-14 items-center">
          <ScrollReveal variant="left">
            <div className="overflow-hidden rounded-2xl border border-accent/25 bg-card shadow-premium">
              <img src={bannerMentoria} alt="Visão geral da Mentoria FULL" loading="lazy" className="w-full aspect-[16/7] object-cover" />
            </div>
            <div className="mt-3 overflow-hidden rounded-xl border border-accent/20 bg-card">
              <img src={bannerMetas} alt="Plano de metas e missões da Mentoria FULL" loading="lazy" className="w-full aspect-[16/4] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right">
            <span className="text-[10px] font-black tracking-[0.2em] text-accent">DIREÇÃO TODOS OS DIAS</span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black leading-tight">Sua preparação deixa de depender da sorte</h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Você recebe um caminho claro para estudar, revisar e medir sua evolução, com acompanhamento para corrigir a rota antes de perder tempo.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                "Plano de metas ajustado ao seu momento",
                "Rotina organizada por prioridades reais",
                "Acompanhamento próximo para manter constância",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFÍCIOS 02 */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-5 grid md:grid-cols-[.92fr_1.08fr] gap-8 md:gap-14 items-center">
          <ScrollReveal variant="left" className="md:order-2">
            <div className="overflow-hidden rounded-2xl border border-accent/25 bg-card shadow-premium">
              <img src={bannerQuestoes} alt="Banco FULL Questões da Mentoria FULL" loading="lazy" className="w-full aspect-[16/9] object-cover" />
            </div>
            <div className="mt-3 overflow-hidden rounded-xl border border-accent/20 bg-card">
              <img src={bannerFlashcards} alt="Flashcards de revisão da Mentoria FULL" loading="lazy" className="w-full aspect-[16/6] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" className="md:order-1">
            <span className="text-[10px] font-black tracking-[0.2em] text-accent">TREINO QUE GERA RESULTADO</span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black leading-tight">Conteúdo certo, no momento certo</h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              A plataforma concentra as ferramentas que transformam teoria em desempenho: questões, revisões e materiais para você avançar com confiança.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                "Banco de questões com resolução e nivelamento",
                "Flashcards Anki para revisões inteligentes",
                "Aulas e encontros para acelerar sua evolução",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-14 md:py-20 border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <h2 className="text-xl md:text-3xl font-black max-w-lg leading-tight">
              A mentoria não mudou só a nota, mudou a rotina e a cabeça de quem entrou
            </h2>
            <ArrowRight className="hidden md:block w-10 h-10 text-accent" />
          </div>

          <div className="relative -mx-5 overflow-hidden">
            <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...depoimentos, ...depoimentos].map((img, index) => (
                <div key={`${img}-${index}`} className="mx-2.5 w-[280px] shrink-0 md:w-[360px]">
                  <div className="overflow-hidden rounded-2xl border border-accent/25 bg-card shadow-premium">
                    <img src={img} alt="Feedback de aluno da Mentoria FULL" loading="lazy" className="w-full h-auto object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center md:justify-end">
            <Button variant="gold" size="lg" onClick={scrollToPlans} className="rounded-full px-8 font-black">
              <span className="inline-flex items-center justify-center gap-2">
                QUERO MUDAR MINHA PREPARAÇÃO <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos-vsl" className="py-14 md:py-20 scroll-mt-8">
        <div className="container mx-auto px-5">
          <h2 className="text-center text-2xl md:text-4xl font-black mb-3">Escolha o seu plano</h2>
          <p className="text-center text-sm text-muted-foreground mb-10">
            Clique no plano pra ver todos os benefícios e os valores.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {cards.map((c) => (
              <button
                key={c.mode}
                type="button"
                onClick={() => setOpenPlan(c.mode)}
                className="text-left rounded-2xl p-5 md:p-7 border-2 bg-card/70 backdrop-blur-sm border-accent/25 hover:border-accent hover:shadow-glow-beige hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full bg-accent/15 text-accent">
                  {c.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-black mt-3 mb-1.5">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                <ul className="space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-xs md:text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-black text-accent">
                  VER PLANOS E VALORES <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 border-t border-border/40">
        <div className="container mx-auto px-5 grid md:grid-cols-[320px_1fr] gap-8 max-w-5xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">Perguntas frequentes</h2>
            <p className="text-sm text-muted-foreground">
              Respostas claras pras dúvidas mais comuns sobre a Mentoria FULL.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <FAQItem value="q1" question="O que torna a Mentoria FULL diferente de um cursinho?" answer="Cursinho entrega conteúdo. A mentoria entrega direção: plano de metas individual, acompanhamento semanal, banco de questões com nivelamento e flashcards. Você para de adivinhar o que estudar." />
            <FAQItem value="q2" question="Em quanto tempo vejo resultado?" answer="A partir do 2º/3º mês, quando a rotina engrena e o volume de questões começa a aparecer na nota. Por isso o plano mínimo é trimestral." />
            <FAQItem value="q3" question="Preciso já estar estudando pra entrar?" answer="Não. O plano Ultra é o pacote fechado com aulas ao vivo e gravadas pra quem começa do zero. O Standard é ideal pra quem já tem preparatório." />
            <FAQItem value="q4" question="Serve pra qual concurso?" answer="Standard e Standard + servem pra qualquer concurso, inclusive CN e EPCAr. O Ultra é exclusivo para AFA, EN e EFOMM." />
            <FAQItem value="q5" question="Como funciona o acesso depois da compra?" answer="Acesso imediato à plataforma após a confirmação do pagamento, com garantia de 7 dias." />
            <FAQItem value="q6" question="E se eu não puder participar dos encontros ao vivo?" answer="Todos os encontros e aulas ficam gravados na plataforma pra você assistir quando quiser." />
          </Accordion>
        </div>
      </section>

      <footer className="py-8 border-t border-border/40">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <img src={logoSilver} alt="FULL" className="h-8 w-auto opacity-70" />
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} FULL · Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* DIALOG DE PLANOS */}
      <Dialog open={openPlan !== null} onOpenChange={(o) => !o && setOpenPlan(null)}>
        <DialogContent className="w-[calc(100%-1.5rem)] sm:max-w-3xl max-h-[85vh] overflow-y-auto p-0 border-accent/30">
          <div className="p-5 md:p-7">
            <span className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full bg-accent/15 text-accent">
              {detalhe.tag}
            </span>
            <h3 className="text-xl md:text-2xl font-black mt-3">{detalhe.titulo}</h3>
            <p className="text-sm text-muted-foreground mt-1">{detalhe.subtitulo}</p>
            <p className="text-xs font-bold text-accent mt-2 flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5" /> {detalhe.para}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              {detalhe.grupos.map((g) => (
                <div key={g.titulo} className="rounded-xl border border-border bg-card/60 p-4">
                  <p className="flex items-center gap-2 text-sm font-bold mb-2">
                    <g.icon className="w-4 h-4 text-accent" /> {g.titulo}
                  </p>
                  <ul className="space-y-1.5">
                    {g.itens.map((i) => (
                      <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {detalhe.naoInclui.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {detalhe.naoInclui.map((n) => (
                  <li key={n} className="flex gap-2 text-xs text-muted-foreground/70">
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" /> Não inclui: {n}
                  </li>
                ))}
              </ul>
            )}

            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              {detalhe.precos.map((p) => (
                <div
                  key={p.nome}
                  className={`rounded-xl border p-4 flex flex-col ${p.melhor ? "border-accent bg-accent/5" : "border-border bg-card/60"}`}
                >
                  {p.promo && (
                    <span className="mb-2 text-[9px] font-black tracking-wider px-2 py-1 rounded-full bg-accent text-accent-foreground self-start">
                      {p.promo}
                    </span>
                  )}
                  <p className="text-xs font-bold text-muted-foreground">{p.nome}</p>
                  {p.de && (
                    <p className="text-[11px] text-muted-foreground/60 line-through">{p.de}/mês</p>
                  )}
                  <p className="text-xl font-black text-accent leading-tight">{p.mes}<span className="text-xs font-semibold text-muted-foreground">/mês</span></p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{p.nota}</p>
                  {p.economia && (
                    <p className="text-[10px] text-accent font-semibold mt-1">{p.economia}</p>
                  )}
                  <Button asChild variant="gold" className="mt-3 w-full rounded-full text-xs font-black h-9">
                    <a href={p.link} target="_blank" rel="noopener noreferrer">ASSINAR</a>
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-center">
              <a
                href={WPP_DUVIDAS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:underline"
              >
                <MessageCircle className="w-4 h-4" /> Tenho dúvidas, falar no WhatsApp
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Masterclass;
