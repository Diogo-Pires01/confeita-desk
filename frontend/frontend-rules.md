# Frontend Rules

## Stack
- React + TypeScript
- Tailwind CSS
- Lucide React (ícones)
- React Router DOM

## Responsividade
- Mobile first: estilos base são para mobile, usar `md:` para desktop
- Nunca permitir overflow horizontal que quebre o layout
- Breakpoint principal: `md` (768px)

## Layout Dashboard
- Desktop: sidebar lateral com toggle (abrir/fechar)
- Mobile: bottom bar fixa com ícones (sem texto)
- Header: logo no mobile, barra de busca apenas no desktop
- Main content: `pb-20` no mobile para não sobrepor a bottom bar

## Componentes
- Cards de resumo: `grid-cols-2` mobile, `grid-cols-4` desktop
- Grids de cards (pedidos, produtos): `grid-cols-1` mobile, `grid-cols-3` desktop
- Filtros: `overflow-x-auto` para scroll horizontal no mobile
- Listas horizontais (agenda semanal): `flex` com scroll no mobile, `grid` no desktop

## UI/UX
- Cores via tokens Tailwind customizados (`dash-surface`, `dash-border`, `dash-text-main`, `dash-text-muted`, `dash-text-soft`, `dash-hover`, `dash-card`, `dash-bg`)
- Páginas públicas usam tokens: `bg`, `text-main`, `text-soft`, `border`, `bg-card`, `bg-hover`, `primary`, `accent`
- Bordas arredondadas: `rounded-xl` para cards, `rounded-2xl` para containers maiores, `rounded-full` para botões pill
- Ícones com cor via classe no próprio ícone quando necessário diferenciar ações
- Botões de ação: estilo outline neutro (`border border-dash-border`) com ícones coloridos para diferenciação
- Glow effects com `blur-[100px]+` e cores com opacidade baixa para backgrounds de páginas públicas

## Tipografia
- Títulos de página: `text-xl md:text-2xl font-semibold`
- Labels de cards: `text-sm text-dash-text-muted`
- Valores de cards: `text-2xl font-semibold`

## Páginas Públicas (Landing, Login)
- Landing: texto centralizado no mobile, alinhado à esquerda no desktop
- Imagens decorativas (mockups): `hidden md:block`
- Login: margem lateral no mobile (`mx-4 md:mx-0`) para não colar nas bordas

## Dados
- Mocks em `src/mocks/` com interfaces tipadas exportadas
- Cada domínio tem seu arquivo de mock (`dashboard.ts`, `wallet.ts`, `products.ts`)

## Estrutura de Pastas
```
src/
├── components/       # Componentes reutilizáveis e por domínio
│   ├── dashboard/
│   ├── orders/
│   ├── products/
│   └── agenda/
├── layouts/          # Layouts (DashboardLayout)
├── mocks/            # Dados mockados
├── pages/            # Páginas organizadas por domínio
│   ├── auth/
│   ├── public/
│   ├── dashboard/
│   ├── orders/
│   ├── agenda/
│   ├── products/
│   └── wallet/
├── hooks/            # Custom hooks
└── types/            # Interfaces e tipos
```
