# 🦸🏻💥Action Verse — Lista de Produtos com Carrinho 🛒

## 📃 Descrição do Projeto
O **Action Verse** é um mini e-commerce de lista de produtos com carrinho de compras funcional.
Criado como projeto pessoal, ele aplica boas práticas de arquitetura front-end, com dados de produto isolados, renderização separada da lógica do carrinho e uma camada de orquestração de eventos. O estilo segue uma abordagem modular (reset, variáveis, base, componentes e layout), o que facilita manutenção e escalabilidade.
O foco está em DOM com ES Modules, feedbacks claros ao usuário e uma experiência fluida em diferentes telas — tudo isso sem frameworks ou processos de build.

---

## 💡 O que esse projeto demonstra
- 🖥️ **Manipulação de DOM** avançada — sem uso de frameworks.  
- 🧩 **Arquitetura modular** — separação entre dados, lógica e interface.  
- 🎨 **CSS organizado** — reset, variáveis, base, componentes e layout.  
- 📱 **UX responsiva e acessível** — experiência fluida em diferentes dispositivos.  

---

## ⚙️ Funcionalidades
- 🛒**Listagem de produtos**: renderização dinâmica a partir de `src/js/data.js`.
- 🛒**Adicionar ao carrinho**: botão com estados (ativo/inativo) e controle de quantidade inline.
- 🛒**Incremento/Decremento**: limita de 1 a 10 por item, com atualização do subtotal do item.
- 🛒**Remover item**: diretamente no carrinho via ícone de remoção.
- 🛒**Contador de itens**: exibe a quantidade de itens distintos no carrinho.
- 🛒**Total do pedido**: cálculo em tempo real com formatação brasileira (BRL).
- 🛒**Confirmação do pedido**: modal com resumo de itens e valores; permite iniciar um novo pedido.
- 🛒**Acessibilidade de interação**: fechar modal com tecla `Esc` ou clique fora do conteúdo.
- 🛒**Rolagem suave ao carrinho**: ícone direcional leva o usuário até a área do carrinho.
- 🛒**Responsividade**: layout adaptado para diferentes larguras (breakpoints em `src/css/responsive.css`).

---

## 🛠️ Tecnologias Utilizadas
- 🔹**HTML5**: estrutura semântica e importação de módulos.
- 🔹**CSS3**: arquitetura modular: reset, variáveis, base, componentes, layout e responsividade.
- 🔹**JavaScript (ES Modules)**: Manipulação de DOM e estado do carrinho..

⚡Sem dependências externas (sem bundlers, sem framework).

---

## 🖼️ Recursos Visuais
- ✒️**Fontes**: estrutura semântica e importação de módulos.
- 🖌️**Ícones**: SVGs customizados.
- 🧩**Imagens**: catálogo de produtos e elementos da UI.

---

## 📁 Estrutura de Pastas e Arquivos
```
action-verse/
├── index.html                      # Página principal (carrega CSS e módulos JS)
├── src/
│   ├── css/
│   │   ├── base.css               # Estilos base globais
│   │   ├── index.css              # Import central e organização de CSS
│   │   ├── reset.css              # Reset de estilos
│   │   ├── responsive.css         # Media queries e ajustes responsivos
│   │   ├── variables.css          # Variáveis (cores, fontes, espaçamentos)
│   │   ├── components/
│   │   │   ├── cart.css           # Estilos do carrinho
│   │   │   ├── header.css         # Estilos do cabeçalho / título
│   │   │   ├── modal.css          # Estilos do modal de confirmação
│   │   │   └── product-card.css   # Cartões de produtos
│   │   └── layout/
│   │       ├── containers.css     # Containers e espaçamentos
│   │       └── grid.css           # Grid e colunas
│   ├── fonts/                     # Fontes locais (Red Hat Text)
│   ├── images/                    # Ícones e imagens (produtos e UI)
│   └── js/
│       ├── index.js               # Bootstrap da app, listeners globais e scroll ao carrinho
│       ├── display.js             # Renderização de produtos e estado inicial do carrinho
│       ├── data.js                # Catálogo (dados) e factory do contador
│       ├── icon.js                # Fábrica/instâncias de ícones (cart, +, −)
│       ├── cart.js                # Estado do carrinho e utilitários de cálculo/atualização
│       ├── cart-ui.js             # Render da lista do carrinho, total e botão de confirmação
│       ├── button-handlers.js     # Lógica dos botões (add/remove/quantidade) e sincronização de UI
│       └── order-modal.js         # Geração e comportamento do modal de pedido confirmado
└── README.md                      # Este arquivo
```

**Notas**:
- O fluxo principal utiliza `index.html` → `src/js/display.js` (render inicial) + `src/js/index.js` (inicialização e listeners) que, por sua vez, consome `button-handlers.js`, `cart-ui.js`, `cart.js`, `order-modal.js`, `icon.js` e `data.js`.

---

## 🏗️ Arquitetura e Fluxo
- 🧩**Estado**: `src/js/cart.js` mantém `cartState` com `items` (índices dos produtos) e `counters` (quantidades por índice).
- 🧩**UI Produtos**: `src/js/display.js` gera os cards a partir de `dessertsContent` e prepara o carrinho vazio.
- 🧩**Interações**: `src/js/button-handlers.js` sincroniza botões dos cards com o carrinho, atualiza quantidades e re-renderiza a UI.
- 🧩**Carrinho**: `src/js/cart-ui.js` reconstrói a lista do carrinho e o rodapé (total + confirmar) a cada mudança.
- 🧩**Modal de Pedido**: `src/js/order-modal.js` constrói o resumo da compra e permite iniciar um novo pedido (limpa estado e UI).
- 🧩**Aprimoramentos de UX**: `src/js/index.js` adiciona acessos rápidos (Esc/overlay) e rolagem suave para a área do carrinho.

---

## 🖥️ Instalação e Configuração
Como é um projeto que não há dependências a instalar. Você pode executar de três maneiras:

- Método 1 — Abrir direto no navegador 🌐
  1. Baixe/clonE o repositório.
  2. Dê duplo clique em `index.html` para abrir no navegador.

- Método 2 — Extensão Live Server (VS Code) ⚡
  1. Abra a pasta do projeto no VS Code.
  2. Instale/ative a extensão "Live Server".
  3. Clique em "Go Live" e acesse a URL local fornecida.

- Método 3 — Servidor local simples (Node opcional) 🔧
  - Usando Python (3.x):
    ```bash
    python -m http.server 5500
    ```
    Acesse: http://localhost:5500

  - Usando Node (http-server):
    ```bash
    npx http-server -p 5500
    ```
    Acesse: http://localhost:5500

> Dica: Em ambientes Windows, abrir diretamente o `index.html` já funciona. O servidor local ajuda com caminhos relativos e cache.

---

## ▶️ Uso
1. **Explorar produtos**: veja nome, universo e preço.
2. **Adicionar ao carrinho**: clique em "Adicionar ao Carrinho" no card do produto.
3. **Ajustar quantidade**: use os botões `+` e `−` no próprio botão do card (limite 1–10).
4. **Ver carrinho**: role a página ou clique no ícone direcional para ir ao carrinho.
5. **Remover item**: clique no ícone de remoção ao lado do item no carrinho.
6. **Confirmar pedido**: clique em "Confirmar pedido" para abrir o modal com o resumo.
7. **Fechar o modal**: tecla `Esc` ou clique fora do conteúdo.
8. **Novo pedido**: no modal, clique em "Iniciar novo pedido" para limpar o carrinho e recomeçar.

---

## 🧪 Exemplos (Fluxo de Interação)
```text
[Home]
├─ Lista de produtos renderizada (dados de src/js/data.js)
│  └─ Clique em "Adicionar ao Carrinho" → Estado do botão vira [ + 1 − ]
│      ├─ + → incrementa quantidade do item
│      └─ − → decrementa quantidade (1 → remove do carrinho)
└─ Carrinho
   ├─ Mostra itens, quantidades (x), valor unitário e subtotal
   ├─ Ícone de remoção ao lado de cada item
   └─ Rodapé com Total e botão "Confirmar pedido"

[Modal de Pedido]
├─ Lista dos itens comprados com miniatura
├─ Total do pedido
└─ Botões: Fechar (X) e "Iniciar novo pedido"

 ```
---

## 🍴 Como fazer um Fork 🍴

Siga estes passos para criar seu fork e contribuir com alterações:

1. 🔗 Acesse o repositório no GitHub e clique em **"Fork"** para criar uma cópia na sua conta.  
2. 💻 Clone o seu fork localmente:  
   ```
   git clone https://github.com/<seu-usuario>/<nome-do-repositorio>.git
   cd <nome-do-repositorio>
   ```  
3. 🔄 Opcional: adicione o repositório original como remoto `upstream` para manter seu fork atualizado:  
   ```
   git remote add upstream https://github.com/<autor-original>/<nome-do-repositorio>.git
   git fetch upstream
   ```  
4. 🌿 Crie uma branch para sua mudança:  
   ```
   git checkout -b feature/sua-mudanca
   ```  
5. 📝 Faça commits com mensagens claras (ex.: `feat: adiciona badge no atalho do carrinho`).  
6. 📤 Envie sua branch para o seu fork e abra um Pull Request:  
   ```
   git push -u origin feature/sua-mudanca
   ```  
7. ✍️ No GitHub, descreva o que foi alterado e o porquê. Vincule a issues se houver.

>🔔 Seguindo esse fluxo, você garante contribuições organizadas e fáceis de revisar!

---

## 🗺️ Roadmap (Ideias Futuras)
- 🎯Persistência do carrinho em `localStorage`.
- 🎯Exibir um badge/indicador no atalho flutuante do carrinho com a contagem de itens.
- 🎯Adicionar um botão "Voltar ao topo" no final da página.
- 🎯Filtro/busca por universo.
- 🎯Lazy-loading de imagens e thumbnails dedicados.
- 🎯Testes (ex.: Vitest ou Jest para lógica do carrinho).

---

## 🧑🏻‍💻Contato
Para mais informações, entre em contato através do [meu Linkedin](https://www.linkedin.com/in/andre-chaibe/) ou envie uma mensagem para o email andrechaibedev@gmail.com.

---
