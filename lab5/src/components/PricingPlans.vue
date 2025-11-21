<script setup>
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Для фрилансерів і самостійної роботи',
    basePrice: 100,
    priceText: '100 грн/міс',
    features: [
      'До 50 задач',
      '1 проект',
      'Email сповіщення',
      'Базова підтримка'
    ]
  },
  {
    id: 'team',
    name: 'Team',
    description: 'Для малих команд',
    basePrice: 300,
    priceText: 'від 300 грн/міс',
    features: [
      'До 300 задач',
      'До 5 проектів',
      'Файли та коментарі',
      'Пріоритетна підтримка'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Для великих команд та компаній',
    basePrice: 700,
    priceText: 'від 700 грн/міс',
    features: [
      'Необмежені задачі',
      'Необмежені проекти',
      'Розширена аналітика',
      'API інтеграція'
    ]
  }
]

const selectedPlanId = ref(null)
const users = ref(1)

const selectedPlan = computed(() =>
  plans.find(p => p.id === selectedPlanId.value) || null
)

const total = computed(() => {
  if (!selectedPlan.value) return 0
  return users.value * selectedPlan.value.basePrice
})

const formattedTotal = computed(() =>
  total.value.toLocaleString('uk-UA')
)

function selectPlan(plan) {
  selectedPlanId.value = plan.id
}
</script>

<template>
  <section class="p-6">
    <h2 class="text-2xl mb-4 font-bold text-center">Тарифи</h2>

    <div class="grid sm:grid-cols-3 gap-6">
      <Card
        v-for="plan in plans"
        :key="plan.id"
        class="flex flex-column justify-between"
      >
        <template #header>
          <h3 class="text-xl font-bold text-center">{{ plan.name }}</h3>
        </template>

        <template #content>
          <p class="mb-2 text-sm text-700">{{ plan.description }}</p>

          <p class="text-xl font-bold mt-3">{{ plan.priceText }}</p>

          <ul class="list-disc ml-4 mt-2">
            <li
              v-for="(feat, index) in plan.features"
              :key="index"
            >
              {{ feat }}
            </li>
          </ul>
        </template>

        <template #footer>
          <div class="mt-4">
            <Button
              label="Обрати план"
              class="w-full"
              @click="selectPlan(plan)"
            />
          </div>
        </template>
      </Card>
    </div>

    <div class="mt-8 text-center">
      <h3 class="text-xl font-bold mb-2">Розрахунок вартості</h3>

      <div class="flex justify-center gap-4 items-center mb-3">
        <span>Вибраний план:</span>

        <Dropdown
          :options="plans"
          optionLabel="name"
          optionValue="id"
          v-model="selectedPlanId"
          placeholder="Оберіть план"
          style="min-width: 220px"
        />
      </div>

      <div class="flex justify-center gap-4 items-center">
        <span>Кількість користувачів:</span>

        <InputNumber
          v-model="users"
          :min="1"
        />
      </div>

      <p class="mt-3 text-lg">
        Орієнтовна вартість:
        <b>{{ formattedTotal }} грн/міс</b>
      </p>
    </div>
  </section>
</template>