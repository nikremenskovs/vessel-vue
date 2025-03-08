<script setup lang="ts">
import logo from '@/assets/images/logo.png'
import TheFooter from '@/components/TheFooter.vue'

const appTitle = 'VesselVue'
const route = useRoute()
const dynamicTitle = computed(() => {
  return `${String(route.name)} | ${appTitle}`
})
useTitle(dynamicTitle)

useFavicon(logo)

useScriptTag('https://kit.fontawesome.com/9dbd025fc7.js')
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TheNavbar />
    <main class="container mx-auto mt-16 px-2">
      <routerView />
    </main>
    <TheFooter :appTitle />
  </div>
</template>
