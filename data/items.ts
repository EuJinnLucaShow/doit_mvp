export const items = [
  {
    id: 1,
    title: " 📌 День 1 — Старт проєкту і базова архітектура",
    list1: "✅ Створити проект npx create-next-app@latest (з App Router)",
    list2: "✅ Підключити Material UI",
    list3: "✅ Налаштувати ThemeProvider (світла/темна тема)",
    list4: "✅ Зробити базовий AppBar + Drawer із переходами",
    list5: "✅ Створити порожні сторінки /, /posts, /posts/create, /posts/[id]",
  },
  {
    id: 2,
    title: "📌 День 2 — Redux Toolkit і перший запит (отримання постів)",
    list1: "✅ Налаштувати store (Redux Toolkit: configureStore)",
    list2:
      "✅ Створити slice для postsSlice (initialState, reducers, RTK Query)",
    list3: "✅ Реалізувати запит отримання всіх постів",
    list4:
      "✅ На сторінці /posts показати список постів (Grid з картками Card)",
    list5: "✅ Skeleton-плейсхолдери поки вантажиться",
  },
  {
    id: 3,
    title: "📌 День 3 — Деталі поста і видалення",
    list1:
      "✅ Реалізувати сторінку деталі поста /posts/[id] (асинхронний запит по id)",
    list2: "✅ Відобразити пост в Card з повним текстом",
    list3: "✅ Додати кнопку 'Видалити' пост на детальній сторінці",
    list4: "✅ Додати CircularProgress під час завантаження",
    list5:
      "✅ Deleting a resource will not be really updated on the server but it will be faked as if.",
  },
];
