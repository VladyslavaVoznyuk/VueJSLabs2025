
<script setup>
import { useI18n } from 'vue-i18n'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { t } = useI18n()

const schema = yup.object({
  name: yup.string().required(t('validation.required', { field: t('profile.name') })),
  email: yup.string().email(t('validation.email', { field: t('profile.email') })).required(t('validation.required', { field: t('profile.email') })),
  dateOfBirth: yup
    .date()
    .nullable()
    .transform((value, originalValue) => {
      return originalValue === '' ? null : value
    })
    .typeError(t('validation.dateInvalid', { field: t('profile.dateOfBirth') }))
    .required(t('validation.required', { field: t('profile.dateOfBirth') })),
  address: yup.string().required(t('validation.required', { field: t('profile.address') })),
  phones: yup.array().of(yup.string().required(t('validation.required', { field: t('profile.phone') })))
})

const { handleSubmit, resetForm, setFieldError, values, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    dateOfBirth: '',
    address: '',
    phones: ['']
  }
})

const onSubmit = handleSubmit((vals) => {
  console.log('submit', vals)
})

function onReset() {
  resetForm()
}

function addPhone() {
  values.phones.push('')
}
function removePhone(idx) {
  values.phones.splice(idx, 1)
}

function emulateServerError() {

  setFieldError('email', t('errors.emailTaken') || 'Email already taken')
}
</script>

<template>
  <div class="max-w-xl mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">{{ t('titles.profile') }}</h2>

    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label>{{ t('profile.name') }}</label>
        <input v-model="values.name" type="text" />
        <div class="text-red-600 text-sm">{{ errors.name }}</div>
      </div>

      <div class="mb-3">
        <label>{{ t('profile.email') }}</label>
        <input v-model="values.email" type="email" />
        <div class="text-red-600 text-sm">{{ errors.email }}</div>
      </div>

      <div class="mb-3">
        <label>{{ t('profile.dateOfBirth') }}</label>
        <input v-model="values.dateOfBirth" type="date" />
        <div class="text-red-600 text-sm">{{ errors.dateOfBirth }}</div>
      </div>

      <div class="mb-3">
        <label>{{ t('profile.address') }}</label>
        <input v-model="values.address" type="text" />
        <div class="text-red-600 text-sm">{{ errors.address }}</div>
      </div>

      <div class="mb-3">
        <label>{{ t('profile.phones') }}</label>
        <div v-for="(phone, idx) in values.phones" :key="idx" class="flex gap-2 mb-2">
          <input v-model="values.phones[idx]" type="text" />
          <button type="button" @click="removePhone(idx)">-</button>
        </div>
        <button type="button" @click="addPhone">+ {{ t('profile.addPhone') }}</button>
        <div class="text-red-600 text-sm">{{ errors['phones'] }}</div>
      </div>

      <div class="flex gap-2 mt-4">
        <button type="submit">{{ t('profile.save') }}</button>
        <button type="button" @click="onReset">{{ t('profile.reset') }}</button>
        <button type="button" @click="emulateServerError">{{ t('profile.emulateServerError') }}</button>
      </div>
    </form>

  </div>
</template>
