<script setup lang="ts">
import notFound from '@/assets/images/notFound.png'

const router = useRouter()
</script>

<template>
  <AppInfoBox
    :image="notFound"
    title="Not found"
    description="It looks like the page you're looking for doesn't exist. Please go back to the home page"
  >
    <template #actions>
      <Button
        @click="router.push({ name: 'Vessels' })"
        icon="fa-solid fa-house"
        rounded
        raised
        outlined
        label="To Home"
      />
    </template>
  </AppInfoBox>
</template>
