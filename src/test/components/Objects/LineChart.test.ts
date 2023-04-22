import { shallowMount } from '@vue/test-utils'
import { expect, test, describe, vi } from 'vitest'
import LineChart from '~/components/Objects/LineChart.vue'

vi.mock('#app', () => ({}))
vi.mock('~/composables/useLineChartStore', () => ({
  useLineChartStore: vi.fn(() => ({
    state: {
      value: { apiResults: [{ 0: { label: '総人口', data: [{ year: 1980, value: 12345 }] } }] },
    },
    getLineChartData: vi.fn(() => ({
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [
        {
          label: 'データセット1',
          data: [10, 20, 30, 40, 50, 60],
        },
      ],
    })),
    getLineChartOptions: vi.fn(),
  })),
}))

describe('LineChart.vue', () => {
  const wrapper = shallowMount(LineChart)

  test('LineChartがレンダリングされる', () => {
    expect(wrapper.findComponent(LineChart).exists()).toBe(true)
  })

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
