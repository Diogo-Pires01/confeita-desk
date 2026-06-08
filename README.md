# Confeita Desk

Dashboard para gerenciamento de confeitaria — controle de pedidos, produtos, agenda e carteira financeira.

## Stack

| Camada   | Tecnologias                                              |
| -------- | -------------------------------------------------------- |
| Frontend | React 19, TypeScript, Vite, Tailwind CSS, React Router 7 |
| Backend  | Node.js, Express 5, Prisma 7, Passport (Google OAuth)    |
| Banco    | PostgreSQL                                               |

## Estrutura do Projeto

```
confeita-desk/
├── backend/
│   ├── prisma/           # Schema e migrations
│   └── src/
│       ├── middlewares/  # authGuard (JWT)
│       ├── modules/
│       │   ├── auth/     # Google OAuth + JWT
│       │   ├── order/    # CRUD de pedidos
│       │   ├── product/  # CRUD de produtos
│       │   └── transaction/ # Financeiro
│       └── app.ts
├── frontend/
│   └── src/
│       ├── components/
│       ├── contexts/
│       ├── guards/
│       ├── layouts/
│       ├── pages/        # Dashboard, Orders, Products, Agenda, Wallet, Login
│       ├── services/
│       └── types/
└── README.md
```

## Pré-requisitos

- Node.js 18+
- PostgreSQL
- Credenciais Google OAuth 2.0 (Client ID e Secret)

## Instalação e Execução

### Backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend estará em `http://localhost:5173` e o backend em `http://localhost:3000`.

## API Routes

Todas as rotas (exceto `/auth`) exigem autenticação via JWT (header `Authorization: Bearer <token>`).

| Método | Rota              | Descrição                 |
| ------ | ----------------- | ------------------------- |
| GET    | /auth/google      | Inicia login via Google   |
| GET    | /auth/google/callback | Callback OAuth        |
| GET    | /products         | Listar produtos           |
| POST   | /products         | Criar produto             |
| PUT    | /products/:id     | Atualizar produto         |
| DELETE | /products/:id     | Remover produto           |
| GET    | /orders           | Listar pedidos            |
| POST   | /orders           | Criar pedido              |
| PUT    | /orders/:id       | Atualizar pedido          |
| DELETE | /orders/:id       | Remover pedido            |
| GET    | /transactions     | Listar transações         |
| POST   | /transactions     | Criar transação           |
| DELETE | /transactions/:id | Remover transação         |

## Modelos Principais

- **User** — autenticado via Google OAuth
- **Product** — nome, descrição, preço
- **Order** — cliente, status (`preparo` | `pronto` | `entregue`), data, itens
- **Transaction** — tipo (`entrada` | `saida` | `cancelamento`), valor, data

## Scripts

| Diretório | Comando         | Ação                          |
| --------- | --------------- | ----------------------------- |
| backend   | `npm run dev`   | Servidor em modo watch        |
| backend   | `npm run build` | Build para produção           |
| backend   | `npm start`     | Executa build                 |
| frontend  | `npm run dev`   | Dev server Vite               |
| frontend  | `npm run build` | Build para produção           |
| frontend  | `npm run lint`  | ESLint                        |
