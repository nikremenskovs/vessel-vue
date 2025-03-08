<script setup lang="ts">
import notFound from '@/assets/images/notFound.png'
import AppComputerCard from '@/components/AppComputerCard.vue'

const props = defineProps<{
  vesselId: number
  vesselName: string
}>()

const { isFetching, error } = storeToRefs(useComputersStore())
const { execute, getComputersByVessel } = useComputersStore()

const targetComputers = computed(() => getComputersByVessel(props.vesselId))

const { openEmail: contactManager } = useEmail('contactManager', () => ({
  fullName: 'John Doe',
  managerName: 'Dr Manager',
  managerEmail: 'manager@vesselvue.com'
}))
</script>

<template>
  <AppInfoBox
    v-if="error"
    :image="notFound"
    title="Ooops!"
    :description="`We were unable to load computer information for ${vesselName}. Please try again`"
  >
    <template #actions>
      <Button
        @click="() => execute()"
        icon="fa-solid fa-rotate-right"
        rounded
        outlined
        raised
        label="Try again"
      />
    </template>
  </AppInfoBox>
  <div v-else-if="isFetching" class="p-4">
    <Skeleton width="10rem" class="mb-2" />
    <div class="flex items-center gap-2">
      <Skeleton shape="circle" size="4rem" />
      <div class="flex flex-col">
        <Skeleton width="5rem" class="mb-2" />
        <Skeleton width="5rem" class="mb-2" />
      </div>
    </div>
  </div>
  <section v-else-if="targetComputers?.length" class="p-4">
    <h5>Computers available on {{ vesselName }}</h5>
    <div class="flex flex-wrap justify-start gap-8 p-6">
      <AppComputerCard
        v-for="computer in targetComputers"
        :key="computer.id"
        :computerId="computer.id"
        :computerName="computer.computerName"
      />
    </div>
  </section>
  <AppInfoBox
    v-else
    title="There are no computers!"
    description="Consider this a business improvement opportunity and speak to your manager about how to arrange for a computer for this vessel"
  >
    <template #actions>
      <Button
        @click="contactManager"
        icon="fa-solid fa-paper-plane"
        rounded
        raised
        outlined
        label="Contact Manager"
      />
    </template>
  </AppInfoBox>
</template>
