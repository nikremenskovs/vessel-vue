<script setup lang="ts">
import notFound from '@/assets/images/notFound.png'
import AppInfoBox from '@/components/AppInfoBox.vue'

const { isFetching, error } = storeToRefs(useVesselsStore())
const { execute } = useVesselsStore()
</script>

<template>
  <AppInfoBox
    v-if="error"
    :image="notFound"
    title="Ooops!"
    description="Something went wrong. We were unable to fetch the required data. Please try again"
  >
    <template #actions>
      <Button
        @click="() => execute()"
        icon="fa-solid fa-rotate-right"
        rounded
        outlined
        raised
        label="Try Again"
      />
    </template>
  </AppInfoBox>
  <VesselsSkeleton v-else-if="isFetching" />
  <VesselsTable v-else />
</template>
