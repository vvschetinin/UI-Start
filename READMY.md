При работе со сборщиком Vite-6 ожидаемый результат работы кода появляется на 3-4 раз запуска. Как это исправить?

### 2. Запуск с флагом force

Можно заставить Vite игнорировать кеш при каждом запуске:

```sh

# Запуск + игнор кеша Vite
vite --force
npx vite --force
npm run dev -- --force
pnpm dlx vite --force # + Очищение кеша Vite

```
