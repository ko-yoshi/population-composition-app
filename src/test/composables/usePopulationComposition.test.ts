import { expect, test, vi, describe } from 'vitest'
import { usePopulationComposition } from '~/composables/usePopulationComposition'

vi.mock('#app', () => ({
  useFetch: vi.fn(() => ({
    data: {},
  })),
}))
vi.mock('~/composables/useLineChartStore', () => ({
  useLineChartStore: vi.fn(() => ({
    state: {
      value: { apiResults: [{ 0: { label: '総人口', data: [{ year: 1980, value: 12345 }] } }] },
    },
  })),
}))
vi.mock('~/composables/usePopulationComposition', async () => {
  const actual = (await vi.importActual('~/composables/usePopulationComposition')) as any
  return {
    ...actual,
    setCheckedPrefectures: vi.fn(() => ({})),
  }
})

describe('usePopulationComposition', () => {
  test('func getColorCode', () => {
    const code = usePopulationComposition().getColorCode(1)
    expect(code.length).toBe(7)
    expect(code).toEqual('#0147ad')
  })
})
