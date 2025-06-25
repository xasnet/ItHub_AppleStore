# ItHub_AppleStore
[3ИТД.22].[2025_4_семестр].Проектный семинар с фреймворками JavaScript

# Необходимое ПО
- Установить Node.js и npm с официального сайта по ссылке: `https://nodejs.org/`
- Проверить установку Node.js: `node -v`
- Проверь версию npm: `npm -v`
- Установить VSCode: `https://code.visualstudio.com/`

# Создание фронтэнд проекта `apple-store-frontend`
- Установить проект в VSCode: `npm create vue@latest apple-store-frontend`
- Установить: `Router`, `Pinia`, `ESLint`, `Prettier`
- Перейти в папку проекта: `cd apple-store-frontend`
- Добавить зависимости: `npm install`
- Добавить зависимости: `npm install vue-router pinia axios`
- Запустить фронтэнд локально: `npm run dev`
- Фрондэнд запуститься по адресу: `http://localhost:8080`

# Создание бэкэнд проекта `apple-store-backend`
- Бэкенд доступен: `https://github.com/Arsen4ik/apple-store-backend/tree/build`
- Установить бэкэнд: `git clone https://github.com/Arsen4ik/apple-store-backend.git -b build`
- Перейти в папку проекта (запуск в новом терминале): `cd apple-store-backend`
- Добавить зависимости: `npm install`
- Найти PID (ID процесса), который использует порт 1452 (не должно быть процессов с данным портом): `netstat -ano | findstr :1452`
- Заменить в файле `package.json` строку 11 с `"serve": "DATABASE_URL=file:./dev.db node dist/index.js"` на `"serve": "set DATABASE_URL=file:./dev.db && node dist/index.js"`
- Запустить бэкэнд локально: `npm run serve`
- Сервер API запуститься по адресу: `http://localhost:1452`

# Использование
- get all products: `http://localhost:1452/api/products/`
- get some product by id: `http://localhost:1452/api/products/1`
- get some category by id (all phones): `http://localhost:1452/api/category/2`
- get some image example: `http://localhost:1452/image/iphone_se_2022_white.jpg`
- get some subcategories by category id (all subcategories for phones): `http://localhost:1452/api/subcategory?category=2`
- get some products by subcategory id: `http://localhost:1452/api/subcategory/2`