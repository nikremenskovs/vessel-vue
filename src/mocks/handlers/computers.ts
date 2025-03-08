import { http, HttpResponse } from 'msw'
import { withDelay } from '@/mocks/resolvers/withDelay.ts'
import type { Computer } from '@/types/api.ts'

export const computers = http.get(
  '/api/vesselvue-gateway/computers',
  withDelay(() => {
    const responseBody: Computer[] = [
      {
        id: 1,
        computerName: 'PC 1',
        vesselId: 1
      },
      {
        id: 2,
        computerName: 'Host PC',
        vesselId: 1
      },
      {
        id: 3,
        computerName: 'Host PC',
        vesselId: 4
      },
      {
        id: 4,
        computerName: 'Black Sea PC',
        vesselId: 5
      },
      {
        id: 5,
        computerName: 'Black Sea PC 2',
        vesselId: 5
      },
      {
        id: 6,
        computerName: 'Black Sea PC 3',
        vesselId: 5
      },
      {
        id: 7,
        computerName: 'Personal PC',
        vesselId: 2
      },
      {
        id: 8,
        computerName: 'Captain PC',
        vesselId: 3
      },
      {
        id: 9,
        computerName: 'Unknown',
        vesselId: 1
      },
      {
        id: 10,
        computerName: 'GTMaritime PC',
        vesselId: 10
      }
    ]
    return HttpResponse.json<Computer[]>(responseBody)
  })
)
