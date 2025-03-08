<script setup lang="ts">
import notFound from '@/assets/images/notFound.png'

const { computersData, error, isFetching } = storeToRefs(useComputersStore())
const { execute } = useComputersStore()
</script>

<template>
  <AppInfoBox
    v-if="error"
    :image="notFound"
    title="Ooops!"
    description="We were unable to load computer information. Please try again"
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
  <div v-else-if="isFetching" class="space-y-2 p-4">
    <Skeleton width="20rem" />
    <Skeleton width="24rem" />
    <div class="flex flex-wrap justify-center gap-8 p-6">
      <div v-for="n in 10" :key="n" class="flex w-1/5 items-center gap-2">
        <Skeleton shape="circle" size="3rem" />
        <div class="flex flex-col">
          <Skeleton width="5rem" class="mb-2" />
          <Skeleton width="5rem" class="mb-2" />
        </div>
      </div>
    </div>
  </div>
  <section v-else class="p-2">
    <h2 class="text-3xl">Computer Guide</h2>
    <p class="text-surface-300 text-lg">Please find the list of all accessible computers below</p>
    <div class="flex flex-wrap justify-center gap-8 px-12 py-6">
      <AppComputerCard
        v-for="computer in computersData"
        :key="computer.id"
        :computerId="computer.id"
        :computerName="computer.computerName"
      />
    </div>
  </section>
</template>
