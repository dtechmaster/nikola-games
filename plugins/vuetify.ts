// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// import { VDataTable, VDataTableVirtual } from 'vuetify/labs/VDataTable'
// import { VBottomSheet } from 'vuetify/labs/VBottomSheet'
// import { VDataIterator } from 'vuetify/labs/VDataIterator'
// import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
// import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetifyOptions = {
  // components: {
  //   ...components,
  //   VDataTable,
  //   VDataTableVirtual,
  //   VSkeletonLoader,
  //   VBottomSheet,
  //   VDataIterator,
  //   VInfiniteScroll,
  // },
  directives,
  // theme: {
  //   defaultTheme: 'light',
  //   themes: {
  //     dark: {
  //       dark: true,
  //       colors: {
  //         primary: '#122A88',
  //         secondary: '#e60013',
  //       }
  //     },
  //     light: {
  //       dark: false,
  //       colors: {
  //         'hover-background': '#ececec',
  //         'disabled-background': '#eaeaea',
  //         background: '#FFFFFF',
  //         surface: '#FFFFFF',
  //         'surface-variant': '#999999',
  //         'on-surface-variant': '#EEEEEE',
  //         primary: '#122A88',
  //         'primary-darken-1': '#3700B3',
  //         secondary: '#e60013',
  //         'secondary-darken-1': '#018786',
  //         error: '#e60013',
  //         info: '#2196F3',
  //         success: '#4CAF50',
  //         warning: '#fdd000',
  //         borders: '#656565',
  //         labels: '#929292',
  //       }
  //     }
  //   }
  // },
  aliases: {
    Button: components.VBtn,
    Row: components.VRow
  },
  defaults: {
    Button: {
      color: 'primary',
      variant: 'flat',
      class: 'mx-1',
    },
    Row: {
      noGutters: true,
      justify: 'center',
      align: 'center',
      class: 'pa-1 ma-0',
    }
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify(vuetifyOptions)
  app.vueApp.use(vuetify)
})

type Aliases = typeof vuetifyOptions.aliases;

declare module 'vue' {
  export interface GlobalComponents extends Aliases { }
}