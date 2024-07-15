import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawerStore = defineStore('drawer', () => {
  const drawer = ref(false)
  
  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  return {
    drawer,
    toggleDrawer,
  }
})