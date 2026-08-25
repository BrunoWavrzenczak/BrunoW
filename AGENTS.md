# AGENTS.md - Guia de Contexto para Agentes de IA

Este documento fornece contexto abrangente sobre a arquitetura, estrutura de arquivos, comandos de desenvolvimento, fluxos de deploy e diretrizes de manutenção do site/portfólio pessoal de **Bruno Wavrzenczak**.

---

## 1. Visão Geral do Projeto

- **Proprietário**: Bruno Wavrzenczak (Estatístico & Cientista de Dados)
- **Objetivo**: Portfólio pessoal e acadêmico interativo, destacando formação, publicações científicas, experiências profissionais, projetos de extensão/ciência de dados e participação em eventos.
- **Repositório GitHub**: `https://github.com/BrunoWavrzenczak/BrunoW`
- **URL Online (GitHub Pages)**: `https://BrunoWavrzenczak.github.io/BrunoW/`

---

## 2. Stack Tecnológica

| Camada / Ferramenta | Tecnologia | Detalhes |
|---|---|---|
| **Framework UI** | React 19 (`react`, `react-dom`) | Componentes funcionais e Hooks (`useState`, `useEffect`) |
| **Bundler & Build Tool** | Vite 8 (`@vitejs/plugin-react`) | Base path configurado para `/BrunoW/` |
| **Estilização** | Tailwind CSS 3.4 + PostCSS + Autoprefixer | Classes utilitárias com suporte a tema escuro/claro |
| **Ícones** | `lucide-react` & `react-icons` (FaGithub, FaLinkedin) | Ícones SVG modernos e responsivos |
| **Deploy** | `gh-pages` | Publicação do diretório `dist/` na branch `gh-pages` |
| **Linter** | ESLint 10 (Flat Config) | Regras para React Hooks e Refresh |

---

## 3. Estrutura de Diretórios

```plaintext
meu_site/
├── .github/                 # Workflows / configurações de CI/CD (se aplicável)
├── public/                  # Arquivos estáticos servidos na raiz do build
│   ├── Bruno_Wavrzenczak_cv_pt.pdf   # Currículo em Português
│   ├── Bruno_Wavrzenczak_cv_en.pdf   # Currículo em Inglês
│   ├── favicon.png / favicon.svg     # Ícones da aba do navegador
│   └── icons.svg
├── src/
│   ├── assets/              # Mídias importadas diretamente no código JS/JSX
│   │   ├── eu.jpeg          # Foto de perfil principal
│   │   ├── eventos/         # Fotos e logos de conferências/hackathons
│   │   │   ├── rbras25/
│   │   │   ├── sinape24/
│   │   │   └── transformationday25/
│   │   └── projetos/        # Imagens e capturas dos projetos
│   │       ├── fifa21/
│   │       ├── datascilabs/
│   │       ├── aula_de_R/
│   │       ├── aula_ensino_medio/
│   │       └── poster_competition/
│   ├── App.jsx              # Componente principal (Single Page Application)
│   ├── App.css              # Estilos adicionais e legados
│   ├── index.css            # Diretivas do Tailwind CSS (@tailwind base, etc.)
│   └── main.jsx             # Ponto de entrada do React (createRoot)
├── dist/                    # Saída gerada após `npm run build`
├── eslint.config.js         # Configuração do ESLint
├── index.html               # Documento HTML raiz
├── package.json             # Dependências e scripts do projeto
├── postcss.config.js        # Configuração do PostCSS
├── tailwind.config.js       # Configuração do Tailwind CSS
├── vite.config.js           # Configuração do Vite (base: '/BrunoW/')
├── AGENTS.md                # Este documento de contexto para IAs
└── CLAUDE.md                # Guia de instruções para Claude Code / IAs
```

---

## 4. Scripts e Comandos Essenciais

Todos os comandos devem ser executados a partir da raiz do projeto (`/Users/brunow/Documents/meu_site`):

```bash
# Iniciar o servidor de desenvolvimento local (Vite)
npm run dev

# Gerar o build de produção (gera a pasta /dist)
npm run build

# Executar a verificação de linter (ESLint)
npm run lint

# Visualizar o build de produção localmente
npm run preview

# Fazer o deploy para o GitHub Pages (executa npm run build automaticamente antes)
npm run deploy
```

---

## 5. Arquitetura da Aplicação (`src/App.jsx`)

A aplicação é centralizada no componente `App.jsx`, organizada nas seguintes seções e estados:

### 5.1 Estados Principais
- `activeTab`: Controla a aba ativa exibida (`'home'`, `'academic'`, `'experience'`, `'projects'`, `'gallery'`).
- `lang`: Idioma ativo (`'pt'` ou `'en'`).
- `isDark`: Tema visual ativo (`true` para Dark Mode, `false` para Light Mode).
- `selectedItem`: Armazena o item aberto no modal detalhado (projeto, publicação ou evento). Se `null`, modal fechado.
- `expandedImage`: URL da imagem selecionada para exibição em tela cheia (lightbox).

### 5.2 Estruturas de Dados
1. **Dicionário `t` (`t.pt` e `t.en`)**: Textos de interface, títulos de seções, dados acadêmicos e hobbies.
2. **Objeto `profile`**: Nome, cargo, bio, redes sociais (GitHub, LinkedIn), foto (`avatarUrl`) e link do currículo (`cvUrl`).
3. **Objeto `academic`**:
   - `education`: Formações acadêmicas (Mestrado, Graduação).
   - `publications`: Artigos científicos publicados com título, autores, periódico, DOI e abstract.
   - `roles`: Projetos de pesquisa e extensão (ex: ML na Saúde USP, PET Estatística).
4. **Array `experience`**: Experiências no mercado (IoTag, consultorias, etc.) com descrição e tópicos de realizações.
5. **Array `projects`**: Projetos de software, dashboards e extensão com descrições detalhadas e galeria de fotos.
6. **Array `events`**: Conferências, simpósios e premiações com datas, categoria e fotos.

### 5.3 Modais Reutilizáveis
- **Modal de Detalhes**: Exibe informações aprofundadas, links externos, repositórios GitHub, DOIs e carrossel de imagens quando um card é clicado.
- **Lightbox de Imagem**: Permite zoom e visualização ampla de qualquer imagem clicada dentro dos modais.

---

## 6. Regras e Cuidados para Manutenção por Agentes de IA

Ao ser solicitado a alterar o projeto, o agente DEVE seguir estas diretrizes:

### 6.1 Suporte Bilíngue Obrigatório (PT/EN)
- Qualquer novo texto, experiência, projeto ou evento **deve ser adicionado nas duas línguas** (português e inglês), mantendo coerência terminológica.

### 6.2 Caminhos e GitHub Pages (`base: '/BrunoW/'`)
- O projeto usa `base: '/BrunoW/'` no `vite.config.js`.
- Ao referenciar arquivos da pasta `public/` (como os PDFs do currículo), use `import.meta.env.BASE_URL` ou caminhos relativos consistentes para garantir que funcionem tanto em `localhost` quanto em produção (`/BrunoW/`).

### 6.3 Atualização de Currículos (PDFs)
- Os arquivos do CV ficam em `public/Bruno_Wavrzenczak_cv_pt.pdf` e `public/Bruno_Wavrzenczak_cv_en.pdf`.
- **Atenção**: Se o usuário pedir apenas para atualizar os arquivos do currículo para download, **não altere o layout ou textos do site** a menos que expressamente solicitado.

### 6.4 Importação de Imagens e Assets
- Novas imagens devem ser colocadas em subpastas organizadas de `src/assets/`.
- Importe as imagens no topo do `App.jsx` com `import nomeImg from './assets/...'` e utilize a variável importada nos arrays de dados.

### 6.5 Qualidade de Código e Linter
- O ESLint está configurado com `no-unused-vars`. **Remova imports não utilizados** ao editar `src/App.jsx`.
- Após qualquer modificação, sempre valide com:
  1. `npm run lint` (deve passar sem erros).
  2. `npm run build` (deve compilar com código 0).

---

## 7. Fluxo de Deploy

Para enviar alterações para produção no GitHub Pages:
1. Adicionar e comitar as alterações na branch `main`.
2. Fazer push para o repositório remoto: `git push origin main`.
3. Executar o deploy: `npm run deploy` (o comando faz o build e envia os arquivos de `dist/` para a branch `gh-pages`).
