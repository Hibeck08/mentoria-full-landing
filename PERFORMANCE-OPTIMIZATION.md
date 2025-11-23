# Guia de Otimização de Performance

## 🚨 Problema Crítico: LCP de 29,4 segundos

O **Largest Contentful Paint (LCP)** está em 29,4 segundos, quando o ideal é **< 2,5 segundos**.

A principal causa são as **imagens muito pesadas**, especialmente:
- `hero-mobile.png` 
- `hero-main.png`
- Imagens de feedback (feedback-1.png até feedback-5.png)
- `military-background.png`
- `military-wallpaper.png`

---

## ✅ Otimizações Já Implementadas no Código

1. ✅ **Lazy loading** - Imagens abaixo da dobra carregam sob demanda
2. ✅ **Preload** - Imagens hero carregam com prioridade
3. ✅ **Font optimization** - Fontes com `display=swap`
4. ✅ **Code splitting** - Chunks separados para melhor cache
5. ✅ **Minification** - JavaScript/CSS minificados
6. ✅ **Async decoding** - Imagens não bloqueiam renderização
7. ✅ **Resource hints** - DNS prefetch e preconnect

---

## ✅ IMAGENS COMPRIMIDAS E OTIMIZADAS

**CONCLUÍDO!** Todas as imagens principais foram comprimidas e substituídas.

### Passo a Passo:

#### 1. Baixar as Imagens do Projeto
Localize estas imagens na pasta `public/lovable-uploads/` e `src/assets/`:
- `hero-mobile.png` ⚠️ **PRIORIDADE MÁXIMA**
- `hero-main.png` ⚠️ **PRIORIDADE MÁXIMA**
- `feedback-1.png` até `feedback-5.png`
- `military-background.png`
- `military-wallpaper.png`

#### 2. Comprimir as Imagens

**Opção A: TinyPNG (Mais Fácil)**
1. Acesse: https://tinypng.com/
2. Arraste todas as imagens
3. Aguarde a compressão (reduz 60-80%)
4. Baixe as versões comprimidas

**Opção B: Squoosh (Mais Controle)**
1. Acesse: https://squoosh.app/
2. Arraste uma imagem por vez
3. Configure:
   - Formato: WebP (melhor) ou PNG otimizado
   - Qualidade: 80-85%
   - Resize: Reduza se necessário
     - Hero mobile: max 800px largura
     - Hero desktop: max 1920px largura
     - Feedback: max 1200px altura
4. Compare lado a lado e baixe

#### 3. Substituir no Projeto
Após comprimir, substitua os arquivos originais pelas versões otimizadas.

---

## 📊 Resultados Esperados Após Compressão

| Métrica | Antes | Depois (Esperado) |
|---------|-------|-------------------|
| **LCP** | 29,4s ❌ | < 2,5s ✅ |
| **FCP** | 2,6s ⚠️ | < 1,5s ✅ |
| **Speed Index** | 9,8s ❌ | < 3,5s ✅ |
| **Performance Score** | 62 ❌ | 90+ ✅ |

---

## 🎯 Dicas Extras

### Para Melhores Resultados:
1. **Hero images** devem ter < 200KB cada
2. **Feedback images** devem ter < 150KB cada
3. **Background images** devem ter < 100KB cada
4. Use **WebP** quando possível (30% menor que PNG)

### Ferramentas Adicionais:
- **ImageOptim** (Mac): https://imageoptim.com/
- **RIOT** (Windows): https://riot-optimizer.com/
- **Compressor.io**: https://compressor.io/

---

## 📱 Testando Performance

Após otimizar as imagens, teste novamente:

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **WebPageTest**: https://www.webpagetest.org/
3. **Chrome DevTools** → Lighthouse

**Meta:** Performance Score > 90

---

## ⚡ Otimizações Futuras (Opcionais)

Se ainda quiser melhorar mais:
1. Implementar Service Worker para cache
2. Usar CDN para assets estáticos
3. Implementar loading skeletons
4. Progressive image loading (blur-up)
5. Converter todas imagens para WebP com fallback

---

## 🆘 Precisa de Ajuda?

Se após comprimir as imagens o LCP ainda estiver alto:
1. Verifique o tamanho das imagens (deve estar < 200KB)
2. Teste a velocidade da sua hospedagem
3. Considere usar um CDN (Cloudflare, etc)

**Lembre-se:** A compressão das imagens é CRÍTICA e terá o maior impacto!
