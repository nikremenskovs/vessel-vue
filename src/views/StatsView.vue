<script setup lang="ts">
import notFound from '@/assets/images/notFound.png'

const { error, isFetching, isFinished } = storeToRefs(useVesselsStore())
const { execute } = useVesselsStore()
</script>

<template>
  <AppInfoBox
    v-if="error"
    :image="notFound"
    title="Ooops!"
    description="We were unable to load stats information. Please try again"
  >
    <template #actions>
      <Button
        @click="() => execute()"
        icon="fa-solid fa-rotate-right"
        rounded
        raised
        outlined
        label="Try again"
      />
    </template>
  </AppInfoBox>
  <div v-else-if="isFetching" class="p-4">
    <Skeleton width="10rem" class="mb-6" />
    <Skeleton width="5rem" class="mb-2" />
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Skeleton size="20rem" />
      <Skeleton size="20rem" />
    </div>
  </div>
  <div v-else-if="isFinished && !error" class="space-y-4">
    <StatsProducts />
    <StatsAssets />
  </div>
</template>
