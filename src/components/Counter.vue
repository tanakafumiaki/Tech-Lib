<template>
    <div>
      <h1>{{ message }}</h1>
      <v-btn color="primary" @click="incrementCounter">Click me</v-btn>
      <p>Counter: {{ count }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'Counter',
    setup() {
      const message = ref<string>('Welcome to TechLib')
      const count = ref<number>(0)
  
      const incrementCounter = () => {
        count.value++
      }
  
      return {
        message,
        count,
        incrementCounter,
      }
    }
  })
  </script>
  
  <style scoped>
  /* 必要に応じて追加のスタイルをここに記述 */
  </style>