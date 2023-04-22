import { shallowMount } from '@vue/test-utils'
import { expect, test, vi, describe } from 'vitest'
import App from '~/app.vue'

vi.mock('#app', () => ({}))

describe('App.vue', () => {
  const wrapper = shallowMount(App)

  test('ヘッダー確認', () => {
    const header = wrapper.find('.header')
    expect(header.exists()).toBe(true)
    expect(header.find('h1').text()).toBe('都道府県別人口推移グラフ')
  })

  test('PrefecturesAreaのレンダリング確認', () => {
    expect(wrapper.findComponent({ name: 'PrefecturesArea' }).exists()).toBe(true)
  })

  test('PopulationTypeAreaのレンダリング確認', () => {
    expect(wrapper.findComponent({ name: 'PopulationTypeArea' }).exists()).toBe(true)
  })

  test('LineChartのレンダリング確認', () => {
    expect(wrapper.findComponent({ name: 'LineChart' }).exists()).toBe(true)
  })

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
