<script setup lang="ts">
import logoWhite from '@/assets/images/logo-white.png'

defineProps<{
  computerId: number
  computerName: string
}>()
</script>

<template>
  <div class="flex w-44 items-center">
    <Avatar :image="logoWhite" class="!bg-vesselBlue mr-2" size="large" shape="circle" />
    <div class="flex w-2/3 flex-col">
      <span>ID: {{ computerId }}</span>
      <span>Name: {{ computerName }}</span>
    </div>
  </div>
</template>
