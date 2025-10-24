<script setup>
import { defineProps } from 'vue'
const props = defineProps({ items: { type: Array, default: () => [] } })
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Value</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in items" :key="item.id">
        <slot name="row" :item="item">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.value }}</td>
            <td>-</td>
          </tr>
        </slot>
      </template>
    </tbody>
  </table>
</template>
