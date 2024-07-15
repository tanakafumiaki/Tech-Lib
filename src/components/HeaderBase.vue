<template>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>TechLib</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useDrawerStore } from '../stores/drawerStore'
  
  export default defineComponent({
    name: 'Header',
    setup() {
      const drawerStore = useDrawerStore()
  
      const toggleDrawer = () => {
        drawerStore.toggleDrawer()
      }
  
      return {
        toggleDrawer,
      }
    }
  })
  </script>