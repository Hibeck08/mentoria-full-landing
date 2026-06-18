## Objetivo
Repaginar `/adelphi` para o mesmo padrão visual e de fluxo das landings `/mentoria` e `/questoes`, com paleta totalmente azul-marinho e uma faixa "FULL ADELPHI" separando o bloco do VSL + benefícios do restante da página.

## Nova paleta (theme-adelphi)
Criar um novo escopo `.theme-adelphi` em `src/index.css`, espelhando a estrutura do `.theme-mentoria` (que já é navy/cyan), mas puxado pra **azul-marinho profundo** com **dourado-quente** removido. Acento principal: azul royal/cyan claro. Sem dourado em lugar nenhum.

- `--background`: azul-marinho quase preto (ex. `218 60% 5%`)
- `--card`, `--secondary`, `--muted`: variações navy
- `--primary`: azul royal médio (ex. `215 80% 38%`)
- `--accent`: cyan-claro vibrante (ex. `200 95% 62%`)
- `--gradient-primary`: navy → royal → cyan
- `--gradient-hero-text`: branco → cyan-claro
- Sombras e glows em azul (sem amber/beige/gold)

Subescopo `.theme-adelphi .theme-purple` mantendo dark-purple no bloco de plataforma, como nas outras landings.

A variante `.theme-adelphi .seam-marquee` (faixa) já existe — manter no tom navy atual.

## Nova estrutura da página
Espelhar a ordem do `/questoes`, adaptando o copy pra Português+Inglês:

```
1. HERO (mantém)
   ↳ aplica a paleta navy nova
   ↳ banner mobile/tablet usa adelphi-hero-mobile.png (já feito)

2. SEÇÃO "3 ERROS QUE TRAVAM" (nova)
   ↳ adaptação para Português/Inglês:
     01. "Deixa Português e Inglês pra depois"
     02. "Estuda gramática solta sem ver cair em prova"
     03. "Lê textos em inglês decorando, sem método"
   ↳ fecha com "E quando alguém junta direção, constância e treino no lugar certo? A aprovação vem. Isso é FULL ADELPHI."

3. ━━━ FAIXA "FULL ADELPHI" ━━━ (SeamMarquee)

4. VSL (nova, igual /questoes)
   ↳ "Conheça o FULL Adelphi por dentro"
   ↳ placeholder YouTube (mesmo embed estrutural; ID do vídeo deixo configurável – por ora reaproveito o do /questoes; usuário pode trocar depois)
   ↳ envolto em .theme-purple

5. DENTRO DA PLATAFORMA (nova, igual /questoes)
   ↳ banners reais do FULL Adelphi (reaproveita adelphiBanner2 + bryanPhoto/fontes/teixeira como cards visuais)
   ↳ stats: +20.000 questões, +2.000 flashcards, 2 idiomas, aulas ao vivo semanais
   ↳ envolto em .theme-purple

6. BENEFÍCIOS FULL (mantém grade de 6 cards já existente, reescopada na nova paleta)

7. ━━━ FAIXA "FULL ADELPHI" ━━━ (SeamMarquee)
   (esta é a 2ª faixa: fecha o bloco "VSL + Plataforma + Benefícios" e separa do restante)

8. 3 PILARES (novo, igual /questoes)
   ↳ "Aulas ao vivo · Banco FULL · Flashcards Anki"

9. CICLO (mantém ConnectedBenefits já presente)

10. QUEM SOMOS (mantém os 3 professores)

11. DEPOIMENTOS / FEEDBACK (mantém)

12. PLANOS (mantém; aplicar mesma reordenação mobile/tablet: anual primeiro, intensivo último)

13. CONTATO/CTA WhatsApp (mantém)

14. FAQ (mantém)
```

## Como a faixa "FULL ADELPHI" separa o bloco
Pelo pedido do usuário, a faixa **delimita** o conjunto **VSL + plataforma + benefícios FULL** do resto da página. Logo entram **duas** instâncias de `<SeamMarquee text="FULL ADELPHI" />`:
- Uma **antes** do VSL (abrindo o bloco)
- Outra **depois** dos benefícios (fechando o bloco), antes dos 3 PILARES

Vou remover as 2 SeamMarquees atuais (estavam em posições antigas) e colocar nesses dois pontos.

## Arquivos afetados
- `src/index.css` — adiciona escopo `.theme-adelphi` (e `.theme-adelphi .theme-purple`)
- `src/pages/FullAdelphi.tsx` — reescrita estrutural seguindo o esqueleto acima; mantém imports, dados (`equipe`, `planos`), `FloatingWhatsApp`, hero, contato, FAQ
- nada novo em `src/components/*` — reaproveita `SeamMarquee`, `ScrollReveal`, `ConnectedBenefits`, `FAQItem`, `Button`

## Notas técnicas
- VSL: por enquanto reaproveito o YouTube ID `qoa3CiyRrNU` (mesmo do /questoes) como placeholder; o usuário troca depois passando o link real.
- Botões `variant="gold"` continuarão usando os tokens do escopo, então virarão azul/cyan automaticamente — não preciso trocar variant nos botões.
- Mantenho todos os links de Kiwify, fotos, e textos da equipe.
- Mobile-first: a reordenação de planos (anual → semestral → intensivo) entra com `order-` igual /questoes.
