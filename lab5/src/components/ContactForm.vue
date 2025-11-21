<script setup>
import { reactive } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  agree: false,
})

const errors = reactive({
  name: null,
  email: null,
  message: null,
  agree: null,
})

const validate = () => {
  errors.name = !form.name ? 'Введіть імʼя' : null
  errors.email = !form.email ? 'Введіть email' : null
  errors.message = !form.message ? 'Введіть повідомлення' : null
  errors.agree = !form.agree ? 'Потрібно підтвердити згоду' : null

  return !(errors.name || errors.email || errors.message || errors.agree)
}

const onSubmit = () => {
  if (!validate()) return

  // Приклад логіки відправки даних на сервер тут

  toast.add({
    severity: 'success',
    summary: 'Успіх',
    detail: 'Заявку надіслано!',
    life: 3000
  })

  // Очищення форми
  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
  form.agree = false
}
</script>

<template>
  <div class="contact-form">
    <h2 class="mb-4 text-center">Напишіть нам</h2>

    <Card>
      <template #content>
        <form @submit.prevent="onSubmit" class="p-fluid">

          <div class="field mb-3">
            <label for="name">Імʼя *</label>
            <InputText
              id="name"
              v-model="form.name"
              :class="{ 'p-invalid': errors.name }"
              placeholder="Ваше імʼя"
            />
            <small v-if="errors.name" class="p-error">{{ errors.name }}</small>
          </div>

          <div class="field mb-3">
            <label for="email">Email *</label>
            <InputText
              id="email"
              v-model="form.email"
              :class="{ 'p-invalid': errors.email }"
              placeholder="example@gmail.com"
            />
            <small v-if="errors.email" class="p-error">{{ errors.email }}</small>
          </div>

          <div class="field mb-3">
            <label for="phone">Телефон</label>
            <InputMask
              id="phone"
              mask="+38 (999) 999-99-99"
              placeholder="+38 (0XX) XXX-XX-XX"
              v-model="form.phone"
            />
          </div>

          <div class="field mb-3">
            <label for="message">Повідомлення *</label>
            <Textarea
              id="message"
              v-model="form.message"
              :class="{ 'p-invalid': errors.message }"
              rows="4"
              autoResize
              placeholder="Ваше повідомлення"
            />
            <small v-if="errors.message" class="p-error">{{ errors.message }}</small>
          </div>

          <div class="field mb-3">
            <Checkbox
              inputId="agree"
              v-model="form.agree"
              :class="{ 'p-invalid': errors.agree }"
            />
            <label for="agree" class="ml-2">
              Погоджуюсь з політикою конфіденційності *
            </label>
            <br />
            <small v-if="errors.agree" class="p-error">{{ errors.agree }}</small>
          </div>

          <Button label="Надіслати" type="submit" class="w-full" />
        </form>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: 0 auto;
}

/* ВИПРАВЛЕННЯ СТИЛІВ ДЛЯ ТЕМНОГО ТЛА
  Використовуємо :deep() для стилізації елементів PrimeVue всередині scoped-стилів
*/

/* Робимо фон Card світлішим або контрастнішим, щоб він не зливався з тлом сторінки */
:deep(.p-card) {
  background-color: var(--p-card-background, #2a2a2a); /* Використовуємо змінну, якщо вона є, або задаємо вручну */
  color: var(--p-card-color, #ffffff); /* Забезпечуємо білий текст */
  border: 1px solid var(--p-card-border-color, #444);
}

/* Забезпечуємо контраст для полів вводу */
:deep(.p-inputtext),
:deep(.p-inputmask),
:deep(.p-textarea) {
  color: #fff; /* Білий текст у полі */
  background-color: var(--p-inputtext-background, #333); /* Темніший, але контрастний фон для поля */
  border-color: var(--p-inputtext-border-color, #555);
}

/* Забезпечуємо контраст для плейсхолдерів (може потребувати додаткових стилів залежно від браузера) */
:deep(input::placeholder),
:deep(textarea::placeholder) {
  color: #aaa;
}

:deep(.p-card-content) {

  min-height: 100px;
}
</style>