# Pokedex - Projeto DIO
<img src="../Pokedex/project-img.png" alt="imagem do site Pokedex">

Bem-vindo ao projeto **Pokedex**, desenvolvido durante o curso na Digital Innovation One (DIO). Este projeto tem como objetivo aprofundar os conhecimentos práticos de JavaScript, além de integrar HTML e CSS para a criação de uma interface web interativa. Utilizamos a API de Pokémon para gerar uma lista dinâmica de Pokémon, cujas informações são manipuladas e exibidas com JavaScript.

## Visão Geral

O projeto Pokedex é uma aplicação web que permite visualizar uma lista de Pokémon, com informações detalhadas sobre cada um, obtidas através da API de Pokémon. Esta aplicação foi desenvolvida utilizando as seguintes tecnologias:

- **HTML**: Estruturação do conteúdo da aplicação.
- **CSS**: Estilização e layout da aplicação.
- **JavaScript (JS)**: Manipulação do DOM e integração com a API de Pokémon.

## Funcionalidades

- **Lista Dinâmica de Pokémon**: A aplicação faz requisições à API de Pokémon e gera uma lista de Pokémon no HTML.


## Tecnologias Utilizadas

### HTML

O HTML foi utilizado para estruturar a aplicação, criando os elementos básicos necessários para exibir a lista de Pokémon e suas informações detalhadas.

### CSS

O CSS foi empregado para estilizar a aplicação, tornando-a visualmente atraente e fácil de usar. Foram utilizados conceitos de design responsivo para garantir que a aplicação funcione bem em diferentes dispositivos e tamanhos de tela.

### JavaScript

O JavaScript foi a principal linguagem utilizada para manipulação do DOM e integração com a API de Pokémon. Foram abordados diversos conceitos avançados de JavaScript, incluindo:

- **Requisições HTTP**: Utilização de `fetch` para fazer requisições à API de Pokémon.
- **Manipulação do DOM**: Adição, remoção e modificação de elementos HTML dinamicamente.
- **Event Listeners**: Adição de ouvintes de eventos para interatividade, como cliques nos itens da lista de Pokémon.

## Como Executar o Projeto

1. **Clone o repositório**: Clone este repositório para sua máquina local usando `git clone`.

2. **Abra o projeto**: Navegue até o diretório do projeto e abra o arquivo `index.html` em seu navegador preferido.

3. **Explore a Pokedex**: A aplicação irá carregar a lista de Pokémon automaticamente ao ser aberta. Clique em load more para carregar mais pokemons na página.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

- `index.html`: Arquivo principal contendo a estrutura HTML da aplicação.
- `global.css`: Arquivo CSS com as informações de estilo globais do site, geralmente informações que não vão ser alteradas.
- `pokedex.css`: Arquivo de estilo CSS para as configurações da página e até mesmo a responsividade(se adaptar a diversos dispositivos).
- `pokemons-colors.css`: Arquivo CSS que define as cores usadas no backgraound de cada pokemon.
- `main.js`: Arquivo JavaScript contendo a lógica de manipulação do DOM e integração com a API de Pokémon.
- `pokemon-model.js`:Arquivo JavaScript contendo o modelo para manipular objetos em outro arquivo JS.
- `poke-api.js`:Arquivo JavaScript contendo as informações da API utilizada e as promise utilizadas para gerar as informações das listas dinamicas no HTML e assim ser possivel sua modelagem através do main-js 

## Licença

Este projeto é licenciado sob a Licença MIT. Para mais informações, consulte o arquivo `LICENSE`.

---

