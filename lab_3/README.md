# 🧁 Лабораторна робота №3 — Стилізація у Vue.js

# Опис основних сторінок
Home.vue

Виводить усі новини з articles.js
Кожна новина — це компонент NewsCard
Є рекламні блоки AdSlot
Підтримка темної та світлої теми

Article.vue
Детальний перегляд новини (заголовок, дата, текст, зображення)
Має банер "Реклама", який відкриває модальне вікно
Модальне вікно реалізовано через:
<Teleport to="body">
<Transition name="fade">
Закривається по кліку на фон або кнопку ✕

# Скріншоти
![article1.png](public%2Fimages%2Farticle1.png)
![article2.png](public%2Fimages%2Farticle2.png)
![advert.png](public%2Fimages%2Fadvert.png)
## ⚙️ Інструкція запуску

### Клонування репозиторію
```bash
git clone 
cd lab_3
npm install
npm run dev

