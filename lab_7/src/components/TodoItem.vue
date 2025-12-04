<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'delete'])

function onToggle() {
  emit('toggle', props.task.id)
}

function onDelete() {
  emit('delete', props.task.id)
}
</script>

<template>
  <li>
    <input
      type="checkbox"
      :checked="props.task.status === 'done'"
      @change="onToggle"
    />
    <span>{{ props.task.title }}</span>
    <button @click="onDelete">❌</button>
  </li>
</template>
