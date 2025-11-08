
<script setup>
import { useI18n } from 'vue-i18n'
import { useForm, useFieldArray } from 'vee-validate'
import * as yup from 'yup'


const { t } = useI18n()


const schema = yup.object({
  name: yup.string().required(t('validation.required')),
  email: yup.string().email(t('validation.email')).required(t('validation.required')),
  dateOfBirth: yup.date().nullable(),
  address: yup.string().required(t('validation.required')),
  phones: yup.array().of(yup.string().required(t('validation.required'))).min(1, t('validation.required_array'))
})


const { handleSubmit, errors, values, resetForm, setFieldError } = useForm({
  validationSchema: schema,
  initialValues: { name: '', email: '', dateOfBirth: '', address: '', phones: [''] }
})


const { push, remove } = useFieldArray('phones')


function addPhone() { push('') }
function removePhone(i) { remove(i) }


const onSubmit = handleSubmit((vals) => {

  if (vals.email && vals.email.endsWith('@example.com')) {
    setFieldError('email', 'Сервер: цей email заборонений')
    return
  }

  localStorage.setItem('profile', JSON.stringify(vals))
  alert(t('buttons.save'))
})


function onReset() { resetForm() }
</script>

<template>
  <div>
    <label>{{ $t('profile.email') }}</label>
    <input v-model="values.email" />
    <div v-if="errors.email">{{ errors.email }}</div>
  </div>


  <div>
    <label>{{ $t('profile.dateOfBirth') }}</label>
    <input type="date" v-model="values.dateOfBirth" />
    <div v-if="errors.dateOfBirth">{{ errors.dateOfBirth }}</div>
  </div>


  <div>
    <label>{{ $t('profile.address') }}</label>
    <input v-model="values.address" />
    <div v-if="errors.address">{{ errors.address }}</div>
  </div>


  <div>
    <label>{{ $t('profile.phones') }}</label>
    <div v-for="(p, idx) in values.phones" :key="idx">
      <input v-model="values.phones[idx]" />
      <button type="button" @click="removePhone(idx)">-</button>
    </div>
    <button type="button" @click="addPhone">+</button>
    <div v-if="errors.phones">{{ errors.phones }}</div>
  </div>


  <div style="margin-top:12px">
    <button type="submit">{{ $t('buttons.save') }}</button>
    <button type="button" @click="onReset">Reset</button>
  </div>

</template>

