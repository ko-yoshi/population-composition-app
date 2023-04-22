import { mount } from '@vue/test-utils'
import { expect, test, describe, vi, beforeEach, afterEach } from 'vitest'
import PartsRadioBtn from '~/components/Parts/RadioBtn.vue'
import PopulationTypeArea from '~/components/Objects/PopulationTypeArea.vue'
import { POPULATION_TYPE } from '~/utils/constants'

vi.mock('~/composables/usePopulationComposition', () => ({
  usePopulationComposition: vi.fn(() => ({
    updatePopulationType: vi.fn(),
  })),
}))
vi.mock('~/composables/useLineChartStore', () => ({
  useLineChartStore: vi.fn(() => ({
    state: {
      value: { prefectures: [{ prefCode: 1, prefName: '北海道' }], checkedPopulationType: 1 },
    },
  })),
}))

describe('PopulationTypeArea', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(PopulationTypeArea, {
      data() {
        return {
          POPULATION_TYPE,
        }
      },
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
    wrapper.unmount()
  })

  test('人口構成オプションが表示されることを確認する', () => {
    const types = [
      { code: 1, name: '総人口' },
      { code: 2, name: '年少人口' },
      { code: 3, name: '生産年齢人口' },
      { code: 4, name: '老年人口' },
    ]

    const items = wrapper.findAllComponents(PartsRadioBtn)
    expect(items).toHaveLength(4)

    types.forEach((type, index) => {
      expect(items[index].props('label')).toBe(type.name)
      expect(items[index].props('name')).toBe('radio')
    })
  })

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
