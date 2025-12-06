<script setup>
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'

const plans = [
  { id: 'basic', name: 'Basic', description: 'Для фрилансерів і самостійної роботи', basePrice: 100, priceText: '100 грн/міс', features: ['До 50 задач','1 проект','Email сповіщення','Базова підтримка'] },
  { id: 'team', name: 'Team', description: 'Для малих команд', basePrice: 300, priceText: 'від 300 грн/міс', features: ['До 300 задач','До 5 проектів','Файли та коментарі','Пріоритетна підтримка'] },
  { id: 'pro', name: 'Pro', description: 'Для великих команд та компаній', basePrice: 700, priceText: 'від 700 грн/міс', features: ['Необмежені задачі','Необмежені проекти','Розширена аналітика','API інтеграція'] },
]

const selectedPlanId = ref(null)
const users = ref(1)

const selectedPlan = computed(() => plans.find(p => p.id === selectedPlanId.value) || null)
const total = computed(() => selectedPlan.value ? users.value * selectedPlan.value.basePrice : 0)
const formattedTotal = computed(() => total.value.toLocaleString('uk-UA'))

function selectPlan(plan) {
  selectedPlanId.value = plan.id
}
</script>

<template>
  <section id="pricing">
    <h2>Тарифи</h2>
    <div class="grid sm:grid-cols-3 gap-6">
      <Card v-for="plan in plans" :key="plan.id">
        <template #header><h3>{{ plan.name }}</h3></template>
        <template #content>
          <p class="desc">{{ plan.description }}</p>
          <p class="price">{{ plan.priceText }}</p>
          <ul>
            <li v-for="feat in plan.features" :key="feat">{{ feat }}</li>
          </ul>
        </template>
        <template #footer>
          <Button label="Обрати план" class="w-full" @click="selectPlan(plan)"/>
        </template>
      </Card>
    </div>

    <div class="calculation">
      <h3>Розрахунок вартості</h3>
      <div class="calc-controls">
        <span>Вибраний план:</span>
        <Dropdown :options="plans" optionLabel="name" optionValue="id" v-model="selectedPlanId" placeholder="Оберіть план"/>
      </div>
      <div class="calc-controls">
        <span>Кількість користувачів:</span>
        <InputNumber v-model="users" :min="1"/>
      </div>
      <p class="total">Орiєнтовна вартість: <b>{{ formattedTotal }} грн/міс</b></p>
    </div>
  </section>
</template>

<style scoped>

</style>
