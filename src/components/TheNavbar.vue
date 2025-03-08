<script setup lang="ts">
import logo from '@/assets/images/logo.png'
import { navigableRoutes } from '@/router'

const { toggleDarkMode, themeIcon, themeTooltip } = useThemeToggle()
</script>

<template>
  <Menubar
    class="fixed z-10 w-full"
    :pt="{
      root: '!bg-vesselIndigo !rounded-t-none !border-none h-16',
      start: 'text-2xl',
      end: 'flex space-x-2'
    }"
    breakpoint="none"
  >
    <template #start>
      <div
        @click="$router.push({ name: 'Vessels' })"
        class="flex cursor-pointer items-center justify-center"
      >
        <Image
          :src="logo"
          alt="VesselVue logo - two arrows pointing in opposite directions"
          class="mr-2"
          imageClass="h-8"
        />
        <span class="text-vesselPrimary">Vessel</span>
        <span class="text-vesselYellow">Vue</span>
      </div>
    </template>
    <template #end>
      <router-link
        v-for="route in navigableRoutes"
        :key="route.name"
        :to="{ name: route.name }"
        class="hover:bg-vesselPrimary rounded-full px-4 py-2 transition-all duration-300"
        active-class="bg-vesselPrimary"
      >
        <span class="text-vesselYellow"> {{ route.name }} </span>
      </router-link>
      <Button
        :icon="themeIcon"
        rounded
        outlined
        @click="toggleDarkMode"
        v-tooltip="`${themeTooltip}`"
      />
    </template>
  </Menubar>
</template>
