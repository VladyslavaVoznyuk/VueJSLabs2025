<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="show" :class="$style.overlay">
        <div :class="$style.modal">
          <button class="close" @click="$emit('close')">✕</button>
          <div class="content"><slot /></div>
        </div>
      </div>
    </transition>
  </teleport>
</template>


<script setup>
const props = defineProps({ show: Boolean })
</script>