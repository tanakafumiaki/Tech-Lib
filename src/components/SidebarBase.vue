<template>
    <v-navigation-drawer app v-model="drawerStore.drawer" fixed>
      <v-list dense>
        <!-- <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://via.placeholder.com/150"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>John Doe</v-list-item-title>
            <v-list-item-subtitle>johndoe@example.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider> -->
        <v-list-item-group active-class="primary--text">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useDrawerStore } from '../stores/drawerStore'
  import { useDisplay } from 'vuetify'
  
  export default defineComponent({
    name: 'Sidebar',
    setup() {
      const drawerStore = useDrawerStore()
      const items = ref([
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        // { title: 'Profile', icon: 'mdi-account' },
        // { title: 'Settings', icon: 'mdi-settings' },
        // { title: 'Logout', icon: 'mdi-logout' }
      ])
      const display = useDisplay()
  
      return {
        drawerStore,
        items,
        display,
      }
    }
  })
  </script>