# lab_2


## Опис
## Взаємодія між компонентами
props / emits
Використано в компонентах форм та дочірніх елементах списків.
 
v-model / defineModel
Застосовано в Input-компоненті для Login та Register.

provide / inject
Через provide передано дані про авторизованого користувача з Layout/Admin,
а inject використано в Sidebar для умовного рендеру UI.

## Слоти
Обгортка Login/Register

## KeepAlive у Dashboard
Використані вкладки (Overview / Activity) з KeepAlive

## Автентифікація (імітація)
Форми:
Login: email, password (мінімальна валідація)
Register: name, email, password, confirmPassword (перевірка збігу)
Інпут-поля винесені в окремий компонент і побудовані через:
props
emits
v-model / defineModel
![Login](lab_2/public/images/login.png)
![Register](lab_2/public/images/register.png)
![Dashboard](lab_2/public/images/dashboard.png)
![Users](lab_2/public/images/users.png)
![Reports](lab_2/public/images/reports.png)
## Запуск проєкту
```bash
cd vue-js
npm install
npm run dev
