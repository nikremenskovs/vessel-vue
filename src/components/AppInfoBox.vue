<script setup lang="ts">
import logo from '@/assets/images/logo.png'

withDefaults(
  defineProps<{
    image?: string
    title?: string
    description?: string
  }>(),
  {
    image: logo
  }
)
</script>

<template>
  <section class="flex size-full flex-col items-center justify-center gap-4 p-4 text-center">
    <Image image-class="h-20" :src="image" alt="Something went wrong image" />
    <h2 class="text-2xl">{{ title }}</h2>
    <p class="text-lg">{{ description }}</p>
    <slot name="actions" />
  </section>
</template>
