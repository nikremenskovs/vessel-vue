<script setup lang="ts">
defineProps<{
  appTitle: string
}>()
</script>

<template>
  <footer
    class="bg-vesselBlue mt-auto min-h-14 w-full space-y-1 p-2 text-center text-xs text-white md:text-sm"
  >
    <p>
      Comprehensive software-only endpoint protection solutions designed specifically for the
      maritime industry
    </p>
    <small>
      {{ new Date().getFullYear() }} — <strong>{{ appTitle }}</strong>
    </small>
  </footer>
</template>
