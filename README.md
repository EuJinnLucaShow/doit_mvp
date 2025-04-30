# DOiT MVP — Frontend

Цей проєкт є базовою реалізацією блогу на Next.js з використанням Material UI.

## 🔧 Як запустити локально

1. Клонувати репозиторій:

```bash
git clone https://github.com/EuJinnLucaShow/doit_mvp.git
cd doit_mvp
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Структура проєкту

```
.
├── public/           # Статичні ресурси (іконки, зображення)
├── app/              # App Router сторінки
│ ├── layout.tsx      # Глобальний layout
│ ├── page.tsx        # Головна сторінка
│ └── posts/          # Сторінки постів
│     ├── page.tsx    # /posts
│     ├── create/     # /posts/create
│     └── [id]/       # /posts/[id]
├── components/       # Спільні UI-компоненти (AppBar, Drawer, ModeSwitch тощо)
├── theme/            # Тема Material UI (світла / темна)
└── types/            # Загальні TypeScript типи
├── .gitignore
├── next.config.js
├── tsconfig.json
├── README.md
└── package.json
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

```
