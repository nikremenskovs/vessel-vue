<script setup lang="ts">
const { openEmail: contactUs } = useEmail('help', () => ({
  fullName: 'Jon Doe'
}))
</script>

<template>
  <section class="space-y-2 p-2">
    <h2 class="text-3xl">Support</h2>
    <p class="text-surface-300 text-lg">
      If you have any questions or need help when using VesselVue, please contact us
    </p>
    <Button
      @click="contactUs"
      icon="fa-solid fa-paper-plane"
      rounded
      raised
      outlined
      label="Contact Us"
    />
  </section>
</template>
