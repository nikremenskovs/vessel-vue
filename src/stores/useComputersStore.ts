import type { Computer } from '@/types/api.ts'

export const useComputersStore = defineStore('ComputersStore', () => {
  const {
    data: computersData,
    isFetching,
    error,
    execute
  } = useCustomFetch('/computers').json<Computer[]>()

  const getComputersByVessel = (vesselId: number) => {
    return computersData.value?.filter((computer) => computer.vesselId === vesselId)
  }

  return { computersData, isFetching, error, execute, getComputersByVessel }
})
