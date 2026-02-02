# API REST com Node.js e TypeScript

Este projeto consiste em uma API RESTful desenvolvida com **Node.js** e **Express**, utilizando **TypeScript** para tipagem estática e **Zod** para validação de dados.

O objetivo da aplicação é fornecer uma estrutura sólida para o gerenciamento de produtos, demonstrando práticas modernas de desenvolvimento backend, organização de código (Controllers, Routes, Middlewares) e tratamento de erros.

## 🚀 Tecnologias

As principais tecnologias e bibliotecas utilizadas neste projeto são:

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
- **[Express](https://expressjs.com/)**: Framework web rápido e minimalista.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Zod](https://zod.dev/)**: Biblioteca para validação e declaração de esquemas (schemas).

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente do `< Node.js >`.
* Você tem um gerenciador de pacotes como `< npm >` ou `< yarn >`.

## 📦 Instalação

Para instalar as dependências do projeto, siga os passos abaixo:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repo.git

# Entre na pasta do projeto
cd api-rest

# Instale as dependências
npm install
# ou
yarn install
```

## ▶️ Como rodar

Para iniciar o servidor em ambiente de desenvolvimento:

```bash
npm run dev
```

O servidor iniciará (geralmente na porta 3333 ou conforme configurado no seu `.env`).

## 📍 Endpoints da API

Abaixo estão listadas as principais rotas disponíveis na aplicação para o recurso de **Produtos**.

### Produtos (`/products`)

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/` | Lista produtos (suporta paginação). |
| `POST` | `/` | Cria um novo produto. |

#### Detalhes das Requisições

**1. Listar Produtos**
*   **Query Params:**
    *   `page`: Número da página.
    *   `limit`: Limite de itens por página.

**2. Criar Produto**
*   **Corpo da Requisição (JSON):**
    ```json
    {
      "name": "Notebook Gamer", // Obrigatório, min 6 caracteres
      "price": 4500.00          // Obrigatório, deve ser positivo
    }
    ```

## 📝 Licença

Este projeto está sob a licença MIT.
