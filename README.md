# Андрей Слюта — портфолио для GitHub Pages

Статическая версия сайта: главная, контакты, каталог, 13 страниц кейсов, RU/EN, анимации, фотографии и скачивание резюме. Сервер и платный хостинг не нужны. Текущий сайт в ChatGPT не изменён.

## Самый простой способ публикации

1. Создайте публичный репозиторий на GitHub, например `portfolio`, с основной веткой `main`.
2. Распакуйте архив. Загрузите **содержимое** папки `github-pages` в корень репозитория. Обязательно включите скрытую папку `.github` — в ней находится автоматическая публикация. Не загружайте архив как один файл.
3. В репозитории откройте **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Откройте **Actions → Publish portfolio to GitHub Pages → Run workflow**, выберите `main` и запустите. Если публикация уже запустилась после загрузки, дождитесь её завершения.
5. Адрес появится в **Settings → Pages** и в результате workflow: `https://USERNAME.github.io/portfolio/`.

Имя репозитория может быть любым: workflow автоматически определяет подпапку и подставляет её в ссылки, изображения и файлы. Для репозитория `USERNAME.github.io` сайт будет опубликован в корне. При изменении исходников в `main` сайт пересобирается автоматически.

Для загрузки через Git (если установлен):

```sh
cd github-pages
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Замените `USERNAME` и `REPOSITORY` своими значениями. Не добавляйте `node_modules` или `.next`.

## Локальный запуск и сборка

Нужен Node.js 22.

```sh
npm ci
npm run dev
```

Статическая сборка для корневого адреса:

```sh
npm run build
```

Для подпапки (Linux/macOS):

```sh
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/portfolio"
npm run build
```

В архиве уже есть готовая сборка `out/` для корневого адреса (свой домен или `USERNAME.github.io`). Для адреса с именем репозитория используйте автоматическую сборку через Actions, которая подставит правильный путь. При ручной сборке результат также создаётся в `out/`. Не открывайте HTML двойным кликом: для проверки используйте локальный HTTP-сервер. Например, для сборки без подпапки: `python -m http.server 8000 --directory out`.

Скрипт сборки подставляет базовый путь в изображения, srcSet, фоновые фото и резюме, а затем возвращает исходникам прежние адреса. При смене базового пути нужна новая сборка.

## Где редактировать

- `app/page.tsx` — главная и порядок блоков.
- `components/about-content.tsx` — «Обо мне».
- `lib/projects.ts`, `lib/case-profiles.ts` — проекты и описание кейсов.
- `components/floating-title.tsx` — заглавная надпись и её анимация.
- `app/globals.css` — оформление и адаптивность.
- `public/images/` — фото и макеты.
- `public/files/andrey-sliuta-resume.doc` — резюме.
- `.github/workflows/pages.yml` — публикация.

Язык сохраняется в браузере. `/about/` перенаправляет к блоку «Обо мне» на главной. Шрифты Inter подключаются из Google Fonts; при недоступности сервиса используются системные шрифты.

## Документация

- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://nextjs.org/docs/app/guides/static-exports
