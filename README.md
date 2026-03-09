# Order API

API desenvolvida em **Node.js utilizando NestJS** para gerenciamento de pedidos.

O projeto implementa um CRUD completo de pedidos com persistência em **PostgreSQL**, documentação via **Swagger** e autenticação **JWT** para proteger os endpoints.

---

# Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Swagger (OpenAPI)
- JWT Authentication
- Class Validator

---

# Instalação

Clone o repositório:

git clone https://github.com/Davi-Rio/order-api-nodejs.git

Instale as dependências:

npm install

---

# Executar o projeto

Inicie a aplicação com:

npm run start ou npm run start:dev

A API será iniciada em:

http://localhost:3000

---

# Documentação da API

A documentação da API está disponível via Swagger:

http://localhost:3000/docs

---

# Testando a autenticação JWT

Os endpoints de pedidos estão protegidos por autenticação JWT.

Para utilizá-los é necessário gerar um token primeiro.

### 1 - Gerar token

Endpoint:

POST /auth/login

Body da requisição:

{
  "username": "admin",
  "password": "123456"
}

---

### 2 - Autorizar no Swagger

Após gerar o token:

1. Abra o Swagger

http://localhost:3000/docs

2. Clique no botão **Authorize** no canto superior direito

3. Insira o token no formato:

Bearer SEU_TOKEN_JWT

4. Clique em **Authorize**

Agora os endpoints protegidos estarão liberados.

---

# Endpoints disponíveis

### Criar pedido

POST /order

---

### Listar todos os pedidos

GET /order/list

---

### Buscar pedido pelo número

GET /order/{orderId}

---

### Atualizar pedido

PUT /order/{orderId}

---

### Deletar pedido

DELETE /order/{orderId}

---

# Autor

Davi Pereira Rio
