import { createFetch } from '@vueuse/core'

export const useCustomFetch = createFetch({
  baseUrl: 'http://localhost:5173/api/vesselvue-gateway',
  options: {
    immediate: true,
    beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer DummyToken`
      }
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})
