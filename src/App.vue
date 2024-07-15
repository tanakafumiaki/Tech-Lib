<template>
  <v-app>
    <Header />
    <Sidebar />
    <v-main>
      <v-container>
        <Counter />
      </v-container>
      <MainContent />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from './components/HeaderBase.vue'
import Sidebar from './components/SidebarBase.vue'
import Counter from './components/Counter.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Sidebar,
    Counter
  },
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