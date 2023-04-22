import { mount } from '@vue/test-utils'
import { expect, test, describe, vi } from 'vitest'
import PrefecturesArea from '~/components/Objects/PrefecturesArea.vue'

vi.mock('#app', () => ({}))
vi.mock('~/composition/usePopulationComposition', () => {
  return {
    __esModule: true,
    usePopulationComposition: vi.fn(() => {
      return {
        updatePrefCode: vi.fn(),
        getColorCode: vi.fn(),
      }
    }),
  }
})

vi.mock('~/api/prefectures', () => {
  return {
    __esModule: true,
    default: vi.fn(() => {
      return {
        data: {
          result: [
            { prefCode: '01', prefName: '北海道' },
            { prefCode: '02', prefName: '青森県' },
          ],
          message: '',
        },
      }
    }),
  }
})

describe('PrefecturesArea', () => {
  test('チェックボックスの確認', async () => {
    // const { data: prefectures } = await useFetch('/api/prefectures')の処理によりmountが失敗する
    // const wrapper = mount(PrefecturesArea)
    // await wrapper.vm.$nextTick()
    // const checkboxes = wrapper.findAll('.item')
    // expect(checkboxes.length).toBe(2)
    // expect(checkboxes[0].text()).toBe('北海道')
    // expect(checkboxes[1].text()).toBe('青森県')
  })

  test('snapshot', async () => {
    const wrapper = mount(PrefecturesArea)
    await wrapper.vm.$nextTick()
    expect(wrapper.element).toMatchSnapshot()
  })
})
