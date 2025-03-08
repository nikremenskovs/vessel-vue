import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Tooltip from 'primevue/tooltip'

import App from './App.vue'
import router from './router'
import { definePreset, palette } from '@primeuix/themes'

const app = createApp(App)

let styles = getComputedStyle(document.documentElement)

const vesselPreset = definePreset(Aura, {
  primitive: {
    vesselPrimary: palette(styles.getPropertyValue('--color-vesselPrimary')),
    vesselIndigo: palette(styles.getPropertyValue('--color-vesselIndigo')),
    vesselGray: palette(styles.getPropertyValue('--color-vesselGray')),
    vesselYellow: palette(styles.getPropertyValue('--color-vesselYellow')),
    vesselBlue: palette(styles.getPropertyValue('--color-vesselBlue'))
  },
  semantic: {
    primary: palette('{vesselPrimary}'),
    colorScheme: {
      light: {
        primary: {
          color: '{vesselPrimary.500}',
          contrastColor: '{vesselYellow.500}',
          hoverColor: '{vesselPrimary.600}',
          activeColor: '{vesselPrimary.700}'
        },
        text: {
          color: '{vesselBlue.500}',
          hoverColor: '{vesselIndigo.500}',
          mutedColor: '{vesselGray.200}',
          hoverMutedColor: '{vesselGray.300}'
        },
        surface: palette('#595b63')
      },
      dark: {
        primary: {
          color: '{vesselIndigo.400}',
          contrastColor: '{surface.200}',
          hoverColor: '{vesselIndigo.300}',
          activeColor: '{vesselIndigo.200}'
        },
        text: {
          color: '{vesselGray.200}',
          hoverColor: '{vesselGray.300}',
          mutedColor: '{vesselGray.800}',
          hoverMutedColor: '{vesselGray.700}'
        },
        surface: palette('#283155')
      }
    }
  }
})
app.use(PrimeVue, {
  theme: {
    preset: vesselPreset,
    options: {
      darkModeSelector: '.my-app-dark'
    }
  }
})
app.use(createPinia())
app.use(router)

app.directive('tooltip', Tooltip)

async function prepareApp() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('./mocks/browser')
    await worker.start({
      onUnhandledRequest: (req, print) => {
        const ignoredPaths = ['/src/', '/node_modules/', '.vue', 'fonts', 'fontawesome']

        if (ignoredPaths.some((path) => req.url.includes(path))) return

        print.warning()
      }
    })
  }
}

prepareApp().then(() => {
  app.mount('#app')
})
