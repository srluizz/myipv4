# My IPv4 - Consulta de IP Público

Esta aplicação web foi desenvolvida para consultar e exibir o endereço IPv4 público do usuário de forma eficiente. O projeto demonstra a implementação de requisições assíncronas, manipulação de APIs de terceiros e a configuração de um fluxo de trabalho profissional utilizando Node.js e Tailwind CSS.

## Funcionalidades Principais

- **Consumo Assíncrono de Dados:** Implementação da Fetch API utilizando a sintaxe async/await, incluindo tratamento de exceções com blocos try/catch.
- **Pipeline de Estilização:** Utilização do Tailwind CSS v3.4 via CLI (Command Line Interface), garantindo um arquivo de estilos final otimizado para produção.
- **Servidor Backend:** Uso do framework Express para o gerenciamento e o fornecimento de arquivos estáticos.
- **Automação de Desenvolvimento:** Integração com a biblioteca Concurrently para execução simultânea do servidor e do compilador de CSS em um único terminal.
- **Interface Responsiva:** Design minimalista com foco em usabilidade e performance.

## Tecnologias Utilizadas

- **Ambiente de Execução:** Node.js.
- **Servidor Web:** Express.
- **Linguagens:** JavaScript (ES6+), HTML5, CSS3.
- **Framework de Estilização:** Tailwind CSS v3.4 (com PostCSS e Autoprefixer).
- **Provedor de Dados:** API externa ipify.org.

## Estrutura do Diretório

- `index.js`: Arquivo principal do servidor Express.
- `/public`: Diretório de distribuição contendo index.html, main.js e o arquivo styles.css gerado pelo compilador.
- `/src`: Arquivo de entrada para definições de estilo (input.css).
- `tailwind.config.js`: Arquivo de configuração do motor de renderização do Tailwind.

## Como Executar o Projeto

Siga os passos abaixo para configurar e rodar a aplicação em seu ambiente local:

# 1. Clonar o repositório
$git clone https://github.com/srluizz/myipv4.git$ cd myipv4

# 2. Instalar as dependências do Node.js
$ npm install

# 3. Iniciar o servidor e o Tailwind (Modo Desenvolvimento)
$ npm run dev

# 4. Acessar a aplicação
Abra o navegador em: http://localhost:3000

## Licença

Este projeto utiliza a licença MIT.
