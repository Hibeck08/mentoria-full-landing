# 🚀 Guia de Deploy no cPanel - Projeto Otimizado

Este guia explica como fazer o deploy da sua aplicação React **totalmente otimizada** no cPanel.

## ✅ STATUS: PROJETO PRONTO PARA PRODUÇÃO

**Todas as otimizações foram concluídas:**
- ✅ Imagens comprimidas e otimizadas
- ✅ Layout mobile ajustado e harmônico
- ✅ Código minificado e otimizado
- ✅ Cache e compressão configurados
- ✅ SEO implementado

## Pré-requisitos

- Acesso ao cPanel do seu servidor de hospedagem
- Node.js instalado no seu computador local (para fazer o build)
- Acesso FTP ou File Manager do cPanel

## Passo 1: Fazer o Build da Aplicação

No seu computador local, navegue até a pasta do projeto e execute:

```bash
npm install
npm run build
```

Isso irá criar uma pasta `dist` com todos os arquivos otimizados e prontos para produção.

## Passo 2: Preparar os Arquivos

A pasta `dist` conterá:
- `index.html` - arquivo principal
- `assets/` - pasta com CSS, JavaScript e imagens otimizados
- `.htaccess` - configuração do servidor Apache (já incluída automaticamente)
- Outros arquivos estáticos da pasta `public/`

## Passo 3: Upload para o cPanel

### Opção A: Usando File Manager (Recomendado para iniciantes)

1. Acesse o cPanel
2. Clique em "File Manager" (Gerenciador de Arquivos)
3. Navegue até a pasta `public_html` (ou a pasta raiz do seu domínio)
4. **IMPORTANTE**: Limpe todo o conteúdo existente na pasta (faça backup se necessário)
5. Clique em "Upload" e faça upload de TODOS os arquivos da pasta `dist`
6. Certifique-se de que o arquivo `.htaccess` foi enviado (pode estar oculto)

### Opção B: Usando FTP

1. Conecte-se ao seu servidor via FTP usando um cliente como FileZilla
2. Navegue até `public_html` (ou pasta do seu domínio)
3. **IMPORTANTE**: Limpe todo o conteúdo existente (faça backup se necessário)
4. Transfira TODOS os arquivos da pasta `dist` para `public_html`
5. Certifique-se de que o arquivo `.htaccess` foi enviado

## Passo 4: Configurar o Domínio (se necessário)

Se você estiver instalando em um subdomínio ou subpasta:

1. No cPanel, vá em "Domains" (Domínios)
2. Configure seu domínio para apontar para a pasta correta
3. Aguarde a propagação DNS (pode levar até 24 horas)

## Passo 5: Verificar a Instalação

1. Acesse seu domínio no navegador
2. Teste a navegação entre páginas
3. Verifique se as imagens e estilos estão carregando corretamente
4. Teste em diferentes dispositivos (mobile e desktop)

## Estrutura Final no Servidor

Sua pasta `public_html` deve ficar assim:

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [outras imagens e arquivos]
├── lovable-uploads/
│   └── [suas imagens]
├── robots.txt
└── favicon.png
```

## Problemas Comuns e Soluções

### 1. Página em branco ou erro 404
- **Solução**: Verifique se o arquivo `.htaccess` foi enviado corretamente
- Ative a exibição de arquivos ocultos no File Manager
- Verifique as permissões do arquivo (deve ser 644)

### 2. Erro "Not Found" ao navegar
- **Solução**: Problema com o `.htaccess`
- Verifique se o módulo `mod_rewrite` está ativo no seu servidor
- Entre em contato com seu provedor de hospedagem se necessário

### 3. Imagens não aparecem
- **Solução**: Verifique se a pasta `lovable-uploads` foi enviada
- Confirme que as permissões das pastas estão corretas (755)
- Verifique os caminhos das imagens no código

### 4. Estilos não carregam
- **Solução**: Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique se a pasta `assets` foi enviada completamente
- Confirme que não há erros no console do navegador (F12)

### 5. Erro de HTTPS
- **Solução**: Configure um certificado SSL no cPanel
- A maioria dos provedores oferece certificado SSL gratuito (Let's Encrypt)
- Após instalar o SSL, o `.htaccess` redirecionará automaticamente para HTTPS

## Atualizações Futuras

Para atualizar o site no futuro:

1. Faça as alterações necessárias no código
2. Execute `npm run build` novamente
3. Faça backup dos arquivos atuais no servidor
4. Substitua TODOS os arquivos no servidor pelos novos da pasta `dist`
5. Limpe o cache do navegador para ver as alterações

## Otimizações Adicionais

### Habilitar Compressão Gzip
O arquivo `.htaccess` já inclui configurações de compressão, mas você pode verificar se está ativo em: https://checkgzipcompression.com/

### CDN (Opcional)
Para melhor performance global, considere usar um CDN como:
- Cloudflare (gratuito)
- BunnyCDN
- KeyCDN

### Cache do Navegador
O `.htaccess` já configura cache de 1 ano para imagens e 1 mês para CSS/JS.

## Suporte

Se encontrar problemas:
1. Verifique os logs de erro no cPanel (Error Log)
2. Use o console do navegador (F12) para identificar erros
3. Entre em contato com o suporte da sua hospedagem
4. Verifique se o servidor atende aos requisitos mínimos:
   - Apache com mod_rewrite
   - PHP não é necessário (este é um site estático)
   - Suporte a arquivos .htaccess

## Recursos Úteis

- [Documentação oficial do Vite sobre Deploy](https://vitejs.dev/guide/static-deploy.html)
- [Como usar File Manager no cPanel](https://docs.cpanel.net/cpanel/files/file-manager/)
- [Configurar certificado SSL no cPanel](https://docs.cpanel.net/cpanel/security/ssl-tls/)

---

**Nota**: Este site foi construído com React + Vite e é completamente estático após o build, não requerendo Node.js no servidor de produção.
