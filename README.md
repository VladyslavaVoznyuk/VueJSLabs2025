# VueJSLabs2025
# Lab 1 To-Do App 

## Опис
У рамках лабораторної роботи реалізовано **To-Do додаток** з використанням **Vue.js**.  
Функціонал включає:
- додавання, редагування, видалення завдань
- перемикання статусу (`active` ↔ `done`)
- лічильники (`total`, `active`, `completed`)
- фільтрація за title, description, status, createdAt, priority
- пагінація
- збереження даних у **LocalStorage**
- мінімальна валідація (порожні завдання не додаються)

## Використанні можливості:
- ref / reactive — для збереження списку завдань і станів форми
- computed — для підрахунку кількості виконаних / невиконаних завдань
- watch — для збереження списку завдань у LocalStorage.

## Технології
- [Vue.js 3]
- LocalStorage для збереження
- TailwindCSS


## Скріншоти

### Додавання завдання
![Додавання завдання](https://github.com/VladyslavaVoznyuk/VueJSLabs2025/blob/05fcd2634ec5cea63fd9228e0e8c5fd637d34e56/vue-js/public/images/add1.png)
### Зміна статусу
![Зміна](https://github.com/VladyslavaVoznyuk/VueJSLabs2025/blob/05fcd2634ec5cea63fd9228e0e8c5fd637d34e56/vue-js/public/images/change_status.png)
### Видалення завдання
![Видалення](https://github.com/VladyslavaVoznyuk/VueJSLabs2025/blob/05fcd2634ec5cea63fd9228e0e8c5fd637d34e56/vue-js/public/images/delete.png)
### Редагування завдання
![Редагування](https://github.com/VladyslavaVoznyuk/VueJSLabs2025/blob/05fcd2634ec5cea63fd9228e0e8c5fd637d34e56/vue-js/public/images/edit.png)
### Фільтрація завдань
![Фільтрація](https://github.com/VladyslavaVoznyuk/VueJSLabs2025/blob/05fcd2634ec5cea63fd9228e0e8c5fd637d34e56/vue-js/public/images/filters.png)


## Запуск проєкту
```bash
cd vue-js
npm run dev
