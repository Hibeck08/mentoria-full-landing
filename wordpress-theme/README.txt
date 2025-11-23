# TEMA WORDPRESS - MENTORIA FULL

## INSTRUÇÕES DE INSTALAÇÃO

### 1. PREPARAÇÃO DOS ARQUIVOS

1. Crie uma pasta chamada `mentoria-full` no seu computador
2. Copie todo o conteúdo dos arquivos .txt para arquivos PHP reais:
   - style.css.txt → style.css
   - functions.php.txt → functions.php
   - header.php.txt → header.php
   - footer.php.txt → footer.php
   - index.php.txt → index.php
   - page-home.php.txt → page-home.php

3. Crie uma pasta chamada `assets` dentro de `mentoria-full`
4. Adicione todas as imagens do seu site atual na pasta `assets`:
   - mentoria-logo.png
   - hero-main.png
   - hero-photo.jpg
   - bryan-photo.jpg
   - military-wallpaper.png
   - study-setup.png (ou nome da imagem do setup de estudos)

5. Crie uma pasta chamada `js` dentro de `mentoria-full`
6. Crie um arquivo `main.js` vazio dentro da pasta `js`

### 2. ESTRUTURA FINAL DA PASTA

```
mentoria-full/
├── style.css
├── functions.php
├── header.php
├── footer.php
├── index.php
├── page-home.php
├── README.txt
├── assets/
│   ├── mentoria-logo.png
│   ├── hero-main.png
│   ├── hero-photo.jpg
│   ├── bryan-photo.jpg
│   ├── military-wallpaper.png
│   └── study-setup.png
└── js/
    └── main.js
```

### 3. INSTALAÇÃO NO WORDPRESS

1. Comprima a pasta `mentoria-full` em um arquivo ZIP
2. Acesse o WordPress Admin (seu-site.com/wp-admin)
3. Vá em Aparência > Temas
4. Clique em "Adicionar novo" > "Enviar tema"
5. Escolha o arquivo ZIP e clique em "Instalar agora"
6. Após a instalação, clique em "Ativar"

### 4. CONFIGURAÇÃO INICIAL

#### 4.1. Criar Página Inicial

1. Vá em Páginas > Adicionar nova
2. Título: "Início" (ou "Home")
3. No lado direito, em "Atributos da página", selecione o template "Página Inicial (Landing Page)"
4. Publique a página

#### 4.2. Definir Página Inicial

1. Vá em Configurações > Leitura
2. Em "Sua página inicial exibe", selecione "Uma página estática"
3. Em "Página inicial", selecione a página "Início" que você criou
4. Salve as alterações

### 5. ADICIONAR CONTEÚDO

#### 5.1. Adicionar Depoimentos

1. Vá em Depoimentos > Adicionar novo
2. Título: Nome do aluno
3. Conteúdo: Texto do depoimento
4. Preencha os campos personalizados:
   - Nome do Aluno
   - Conquista (ex: "Aprovado na AFA")
   - Avaliação (1-5 estrelas)
5. Adicione uma imagem destacada (foto do aluno)
6. Publique

#### 5.2. Adicionar Planos

1. Vá em Planos > Adicionar novo
2. Título: Nome do plano (ex: "Plano Mensal")
3. Conteúdo: Descrição breve do plano
4. Preencha os campos personalizados:
   - Preço: 97,00
   - Preço Original (riscado): 197,00
   - Link de Pagamento: URL do Hotmart/PagSeguro
   - Recursos: Digite um recurso por linha
   - Marcar como "Mais Popular" (se aplicável)
5. Publique

### 6. PERSONALIZAÇÕES ADICIONAIS

#### 6.1. Alterar Cores

Edite o arquivo `style.css` e modifique as variáveis CSS em `:root`:

```css
:root {
    --background: #0f0a17;
    --foreground: #fafafa;
    --primary: #7c3aed;
    --accent: #e4c384;
    /* ... */
}
```

#### 6.2. Adicionar Link do WhatsApp

No arquivo `footer.php`, encontre a linha:

```php
<a href="https://wa.me/5511999999999" target="_blank">
```

Substitua `5511999999999` pelo seu número com DDI + DDD + número (sem espaços, hífens ou parênteses).

#### 6.3. Adicionar Instagram

No arquivo `page-home.php`, encontre:

```php
<a href="https://instagram.com/hibeck_" target="_blank">
```

Substitua `hibeck_` pelo seu @ do Instagram.

### 7. PLUGINS RECOMENDADOS

Para melhor funcionamento, instale estes plugins:

1. **Advanced Custom Fields (ACF)** - Para gerenciar campos personalizados de forma mais visual
2. **Contact Form 7** - Para formulários de contato
3. **Yoast SEO** - Para otimização de SEO
4. **WP Rocket** - Para cache e performance
5. **Wordfence Security** - Para segurança

### 8. INTEGRAÇÃO COM PLATAFORMAS DE PAGAMENTO

#### Hotmart

No campo "Link de Pagamento" do plano, adicione o link de checkout do Hotmart.

#### PagSeguro/Mercado Pago

1. Crie um botão de pagamento na plataforma
2. Copie o link gerado
3. Cole no campo "Link de Pagamento" do plano

### 9. OTIMIZAÇÕES DE PERFORMANCE

1. **Comprimir imagens**: Use TinyPNG ou plugins como Smush
2. **Ativar cache**: Use WP Rocket ou W3 Total Cache
3. **CDN**: Configure Cloudflare (gratuito)
4. **Lazy loading**: Ative carregamento tardio de imagens

### 10. SUPORTE E DÚVIDAS

Para suporte adicional:
- Documentação WordPress: https://wordpress.org/support/
- Fóruns WordPress Brasil: https://br.wordpress.org/support/

### 11. CHECKLIST FINAL

Antes de publicar, verifique:

- [ ] Todas as imagens foram adicionadas
- [ ] Links do WhatsApp e Instagram estão corretos
- [ ] Planos de preço foram criados
- [ ] Depoimentos foram adicionados
- [ ] Página inicial está configurada
- [ ] SEO básico foi configurado (título, descrição)
- [ ] Site está responsivo (teste em mobile)
- [ ] Links de pagamento estão funcionando
- [ ] Formulários de contato estão funcionando

### 12. DICAS DE SEO

No Yoast SEO, configure:

**Título SEO**: Mentoria FULL - Aprovação em Concursos Militares AFA, EFOMM, EEAR

**Meta Descrição**: Método completo de estudos para concursos militares. Aprovado na AFA, EFOMM e EEAR. Planejamento, metas e passo a passo para sua aprovação.

**Palavras-chave foco**: 
- mentoria concursos militares
- como passar na AFA
- preparação EFOMM
- estudo para concursos militares

---

## IMPORTANTE

Este tema é básico e funcional. Para recursos mais avançados como:
- Área de membros
- Vídeos protegidos
- Sistema de pagamento integrado
- Dashboard do aluno

Considere usar plugins como:
- MemberPress
- LearnDash
- Tutor LMS

---

Boa sorte com seu site WordPress! 🚀
