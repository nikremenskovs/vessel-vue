<script setup lang="ts">
const { vesselsData, averageAssets } = storeToRefs(useVesselsStore())
let styles = getComputedStyle(document.documentElement)

const assetDistribution = computed(() => {
  const vesselLabels = vesselsData.value?.map((v) => v.vesselName)
  const assetCounts = vesselsData.value?.map((v) => v.assetCount)
  const averageValue = averageAssets.value

  return {
    labels: vesselLabels,
    datasets: [
      {
        label: 'Assets',
        data: assetCounts,
        backgroundColor: styles.getPropertyValue('--color-vesselPrimary')
      },
      {
        label: 'Average Assets',
        data: Array(vesselLabels?.length).fill(averageValue),
        borderColor: styles.getPropertyValue('--color-vesselYellow'),
        borderWidth: 5,
        borderDash: [15, 10],
        type: 'line',
        pointRadius: 0
      }
    ]
  }
})

const barChartOptions = computed(() => ({
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: { raw: number }) => `Assets: ${tooltipItem.raw}`
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: styles.getPropertyValue('--color-vesselGray')
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: styles.getPropertyValue('--color-vesselGray')
      }
    }
  }
}))
</script>

<template>
  <section class="space-y-2 p-2">
    <h2 class="text-3xl">Assets Distribution</h2>
    <p class="text-surface-300 text-lg">
      Number of assets each vessel has against average (dashed line)
    </p>
    <Chart type="bar" :data="assetDistribution" :options="barChartOptions" class="max-h-96" />
  </section>
</template>
