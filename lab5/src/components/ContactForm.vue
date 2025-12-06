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


  toast.add({
    severity: 'success',
    summary: 'Успіх',
    detail: 'Заявку надіслано!',
    life: 3000
  })

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
  text-align: left;
}

.contact-form h2 {
  text-align: left;
  margin-bottom: 24px;
  font-size: 1.8rem;
  color: #1f2937;
}

.contact-form .p-card {
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.08);
}

.contact-form label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #374151;
}

.contact-form .p-inputtext,
.contact-form .p-inputmask,
.contact-form .p-inputtextarea {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  padding: 10px 14px;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.contact-form .p-inputtext:focus,
.contact-form .p-inputmask:focus,
.contact-form .p-inputtextarea:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
}

.contact-form .p-button {
  background-color: #6366f1;
  border-radius: 12px;
  font-weight: 600;
  width: 100%;
  margin-top: 12px;
}

.contact-form .p-button:hover {
  background-color: #4f46e5;
}
</style>
