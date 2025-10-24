# Lene Cakes - Frontend

Sistema de vendas de bolos artesanais personalizados.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes reutilizáveis
│   ├── constants/        # Constantes globais
│   ├── lib/             # Configurações de bibliotecas
│   ├── types/           # Tipos TypeScript globais
│   └── utils/           # Funções utilitárias
├── domain/               # Domínios de negócio (a serem implementados)
└── pages/                # Páginas da aplicação
    ├── layouts/         # Layouts compartilhados
    ├── Home/           # Página inicial
    ├── Catalog/        # Catálogo de produtos
    ├── Gallery/        # Galeria de fotos
    ├── Contact/        # Informações de contato
    └── NotFound/       # Página 404
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente:
```env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_WHATSAPP_NUMBER=5511999999999
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:5173

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades Implementadas

### Estrutura Base
- ✅ Configuração do projeto (Vite, TypeScript, TailwindCSS)
- ✅ Sistema de roteamento com React Router
- ✅ Layout principal com header e footer
- ✅ Componentes core reutilizáveis
- ✅ Integração com API (REST)
- ✅ Utilitários para WhatsApp
- ✅ Páginas base (Home, Catálogo, Galeria, Contato)

### Próximas Implementações
- [ ] Catálogo de Produtos
- [ ] Personalização de Bolos
- [ ] Cadastro de Clientes
- [ ] Galeria de Fotos
- [ ] Gestão de Catálogo (Admin)
- [ ] Depoimentos de Clientes

## Padrões de Código

- Componentes funcionais com TypeScript
- Hooks personalizados para lógica reutilizável
- TanStack Query para gerenciamento de estado do servidor
- Tailwind CSS para estilização
- Estrutura modular por domínio

## Integração com Backend

O frontend se comunica com o backend através de dois contextos:

- **External API** (`/api/v1/external`): Endpoints públicos
- **Internal API** (`/api/v1/internal`): Endpoints autenticados

Veja `src/core/lib/api.ts` para configuração dos clientes HTTP.

## Contribuição

Este é um projeto privado. Para contribuir, entre em contato com a equipe de desenvolvimento.