<script setup lang="ts">
import type { Vessel } from '@/types/api.ts'
let styles = getComputedStyle(document.documentElement)

const { vesselsData } = storeToRefs(useVesselsStore())

const productTypes = [
  {
    key: 'mailProductState',
    label: 'Mail',
    colors: [
      styles.getPropertyValue('--color-vesselPrimary'),
      styles.getPropertyValue('--color-vesselGray')
    ]
  },
  {
    key: 'cyberProductState',
    label: 'Cyber',
    colors: [
      styles.getPropertyValue('--color-vesselYellow'),
      styles.getPropertyValue('--color-vesselGray')
    ]
  }
]

const productBreakdowns = computed(() => {
  return productTypes.map(({ key, label, colors }) => {
    const liveCount =
      vesselsData.value?.filter((v) => v[key as keyof Vessel] === 'Live').length || 0
    const disabledCount = (vesselsData.value?.length || 0) - liveCount

    return {
      name: label,
      chartData: {
        labels: ['Live', 'Disabled'],
        datasets: [
          {
            data: [liveCount, disabledCount],
            backgroundColor: colors
          }
        ]
      }
    }
  })
})

const chartOptions = computed(() => ({
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}))
</script>

<template>
  <section class="space-y-2 p-2">
    <h2 class="text-3xl">Product Breakdown</h2>
    <p class="text-surface-300 text-lg">
      Number of vessels that have "Live" vs. "Disabled" states for Mail and Cyber products.
    </p>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div
        v-for="product in productBreakdowns"
        :key="product.name"
        class="rounded-xl border bg-white p-4 shadow dark:bg-gray-800"
      >
        <h2 class="mb-2 text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
          {{ product.name }} Product Status
        </h2>
        <Chart
          type="doughnut"
          :data="product.chartData"
          :options="chartOptions"
          class="mx-auto w-[20rem]"
        />
      </div>
    </div>
  </section>
</template>
