<template>
  <div class="ad" role="button" @click="openAd">
    <slot>
      <img src="/ads/ad-placeholder.png" alt="ad" />
    </slot>
  </div>
</template>


<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['open'])
function openAd() { emit('open') }
</script>


<style scoped>
.ad { padding: 12px; border: 1px dashed var(--muted); border-radius:8px; text-align:center; }
.ad img{ max-width:220px }
</style>