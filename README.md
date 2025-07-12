# Champions Leagues API

API REST em TypeScript para gerenciamento de jogadores (players), construída com foco em organização, boas práticas e separação de responsabilidades.

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 📁 Estrutura do projeto

```
champions-leagues/
├── src/
│   ├── controllers/           # Lógica dos controladores (entrada das requisições)
│   ├── exceptions/            # Tratamento de erros personalizados
│   ├── models/                # Definição dos modelos de dados
│   ├── repositories/          # Acesso a dados e regras de persistência
│   ├── services/              # Regras de negócio
│   ├── utils/                 # Funções utilitárias
│   ├── routes.ts              # Definição de rotas da API
│   └── index.ts               # Ponto de entrada da aplicação
├── .env                       # Variáveis de ambiente
├── .gitignore
├── package.json
├── tsconfig.json
└── yarn.lock
```

## ⚙️ Configuração e uso

### Pré-requisitos

- Node.js instalado
- Yarn instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Swellington-Soares/champions-leagues.git

# Acesse a pasta
cd champions-leagues

# Instale as dependências
yarn install
```

### Variáveis de ambiente

Crie um arquivo `.env` com as configurações necessárias. Exemplo:

```
PORT=3000
```

### Execução em modo desenvolvimento

```bash
yarn dev
```

### Build do projeto

```bash
yarn build
```

## 📌 Funcionalidades

- Cadastro de jogadores
- Atualização de dados
- Listagem de jogadores
- Busca por ID
- Tratamento customizado de erros (ex: jogador não encontrado)

## 🧪 Testes

*(Se aplicável, incluir seção sobre testes futuramente)*

## 📄 Licença

Este projeto está sob a licença MIT.
