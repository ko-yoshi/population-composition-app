// import path from 'path'
// import { defineConfig } from 'vitest/config'
// import Vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     coverage: {
//       // 省略
//     },
//   },
//   plugins: [Vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src/'),
//       '~': path.resolve(__dirname, './src/'),
//     },
//   },
// })

// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import * as path from "path";

// export default defineConfig({
//   plugins: [vue()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: ['./test/setup.ts'],
//     deps: {
//       // vitest上のjsdomでcanvasを扱えるようにする
//       inline: ['vitest-canvas-mock'],
//     },
//     threads: false,
//     environmentOptions: {
//       jsdom: {
//         resources: 'usable',
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       "~": path.resolve(__dirname, "src"),
//     },
//   },
// });

// import * as path from 'path'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [vue()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     // setupFiles: ['./test/setup.ts'],
//     deps: {
//       inline: ['vitest-canvas-mock'],
//     },
//     threads: false,
//     environmentOptions: {
//       jsdom: {
//         resources: 'usable',
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '~': path.resolve(__dirname, 'src'),
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// })

/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '~': path.resolve(__dirname, './src/'),
      '#app': path.resolve(__dirname, 'node_modules/nuxt/dist/app'),
      '#components': path.resolve(__dirname, '.nuxt/components'),
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue',
        {
          '#app': ['useFetch', 'useState', 'useRuntimeConfig'],
          '~/composables/usePopulationComposition': ['usePopulationComposition'],
          '~/composables/useLineChartStore': ['useLineChartStore'],
        },
      ],
    }),
    Components({
      dts: false,
      resolvers: [
        (componentName: string) => {
          if (componentName === 'ObjectsLineChart') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Objects/LineChart.vue',
            }
          }
          if (componentName === 'ObjectsPopulationTypeArea') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Objects/PopulationTypeArea.vue',
            }
          }
          if (componentName === 'ObjectsPrefecturesArea') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Objects/PrefecturesArea.vue',
            }
          }
          if (componentName === 'PartsCheckboxBtn') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Parts/CheckboxBtn.vue',
            }
          }
          if (componentName === 'PartsRadioBtn') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Parts/RadioBtn.vue',
            }
          }
          if (componentName === 'LazyObjectsLineChart') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Objects/LineChart.vue',
            }
          }
          if (componentName === 'LazyObjectsPopulationTypeArea') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Objects/PopulationTypeArea.vue',
            }
          }
          if (componentName === 'LazyObjectsPrefecturesArea') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Objects/PrefecturesArea.vue',
            }
          }
          if (componentName === 'LazyPartsCheckboxBtn') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Parts/CheckboxBtn.vue',
            }
          }
          if (componentName === 'LazyPartsRadioBtn') {
            return {
              name: 'default',
              as: componentName,
              from: '@/components/Parts/RadioBtn.vue',
            }
          }
        },
      ],
    }),
  ],
})

// import { resolve } from 'node:path'
// import { defineConfig } from 'vite'
// import { configDefaults } from 'vitest/config'

// export default defineConfig({
//   resolve: {
//     alias: {
//       '#app': resolve('./packages/nuxt/dist/app/index'),
//       '@nuxt/test-utils/experimental': resolve('./packages/test-utils/src/experimental.ts'),
//       '@nuxt/test-utils': resolve('./packages/test-utils/src/index.ts'),
//     },
//   },
//   test: {
//     globalSetup: 'test/setup.ts',
//     deps: { inline: ['@vitejs/plugin-vue'] },
//     // Excluded plugin because it should throw an error when accidentally loaded via Nuxt
//     exclude: [...configDefaults.exclude, '**/this-should-not-load.spec.js'],
//   },
// })

// import { resolve } from 'path'
// import { defineConfig } from 'vite'
// import Vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [Vue()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//   },
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, './src/'),
//       '~': resolve(__dirname, './src/'),
//       '#app': resolve(__dirname, 'node_modules/nuxt/dist/app'),
//     },
//   },
// })
