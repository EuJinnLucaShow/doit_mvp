export const items = [
  {
    id: 1,
    title: " 📌 День 1 — Старт проєкту і базова архітектура",
    list: [
      "✅ Створити проект npx create-next-app@latest (з App Router)",
      "✅ Підключити Material UI",
      "✅ Налаштувати ThemeProvider (світла/темна тема)",
      "✅ Зробити базовий AppBar + Drawer із переходами",
      "✅ Створити порожні сторінки /, /posts, /posts/create, /posts/[id]",
    ],
  },
  {
    id: 2,
    title: "📌 День 2 — Redux Toolkit і перший запит (отримання постів)",
    list: [
      "✅ Налаштувати store (Redux Toolkit: configureStore)",

      "✅ Створити slice для postsSlice (initialState, reducers, RTK Query)",
      "✅ Реалізувати запит отримання всіх постів",

      "✅ На сторінці /posts показати список постів (Grid з картками Card)",
      "✅ Skeleton-плейсхолдери поки вантажиться",
    ],
  },
  {
    id: 3,
    title: "📌 День 3 — Деталі поста і видалення",
    list: [
      "✅ Реалізувати сторінку деталі поста /posts/[id] (асинхронний запит по id)",
      "✅ Відобразити пост в Card з повним текстом",
      "✅ Додати кнопку 'Видалити' пост на детальній сторінці",
      "✅ Додати CircularProgress під час завантаження",

      "✅ Deleting a resource will not be really updated on the server but it will be faked as if.",
    ],
  },
  {
    id: 4,
    title: "📌 День 4 — Створення поста + базовий Stepper",
    list: [
      "✅ Реалізувати сторінку створення поста /posts/create",

      "✅ Зробити простий Stepper (3 кроки: Заголовок → Тіло → Попередній перегляд)",
      "✅ Форми з TextField + іконки (TitleIcon, SubjectIcon)",
      "✅ Додати базову валідацію (наприклад, обов'язкові поля)",
      "✅ Snackbar при успішному створенні",
    ],
  },
  {
    id: 5,
    title: "📌 День 5 — Полірування + README",
    list: [
      "✅ Написати мінімальний README.md (інструкція + рекомендації)",
      "✅ Додати фільтр-пошук публікації",
      "✅ Refactor and bugfix",
    ],
  },
];
