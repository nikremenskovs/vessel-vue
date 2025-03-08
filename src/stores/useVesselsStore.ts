import type { Vessel } from '@/types/api.ts'
import { FilterMatchMode } from '@primevue/core/api'
import { ref } from 'vue'

export const useVesselsStore = defineStore('VesselsStore', () => {
  const {
    data: vesselsData,
    isFetching,
    error,
    isFinished,
    execute
  } = useCustomFetch('/vessels').json<Vessel[]>()

  const filters = ref({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } })

  const clearGlobalFilter = () => (filters.value.global.value = null)

  const averageAssets = computed(() => {
    if (!vesselsData.value?.length) return 0

    const totalAssets = vesselsData.value.reduce((sum, vessel) => sum + vessel.assetCount, 0)
    return Math.round(totalAssets / vesselsData.value.length)
  })

  const summaryChips = computed(() => {
    return [
      {
        name: 'Total',
        icon: 'fa-solid fa-globe',
        count: vesselsData.value?.length,
        tooltip: 'Total number of vessels'
      },
      {
        name: 'Assets',
        icon: 'fa-solid fa-gauge',
        count: averageAssets.value,
        tooltip: 'Average asset count per vessel'
      },
      {
        name: 'Mail',
        icon: 'fa-solid fa-envelope',
        count: vesselsData.value?.filter((v) => v.mailProductState === 'Live').length,
        tooltip: 'Number of vessels with live MAIL product'
      },
      {
        name: 'Cyber',
        icon: 'fa-solid fa-robot',
        count: vesselsData.value?.filter((v) => v.cyberProductState === 'Live').length,
        tooltip: 'Number of vessels with live CYBER product'
      }
    ]
  })

  const expandedRows = ref([])

  return {
    vesselsData,
    isFetching,
    isFinished,
    error,
    filters,
    summaryChips,
    expandedRows,
    averageAssets,
    execute,
    clearGlobalFilter
  }
})
