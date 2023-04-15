export const POPULATION_CODE = {
  TOTAL: 1,
  YOUNGER: 2,
  WORK: 3,
  ELDERLY: 4,
} as const

export const POPULATION_TYPE = {
  TOTAL: { code: POPULATION_CODE.TOTAL, name: '総人口' },
  YOUNGER: { code: POPULATION_CODE.YOUNGER, name: '年少人口' },
  WORK: { code: POPULATION_CODE.WORK, name: '生産年齢人口' },
  ELDERLY: { code: POPULATION_CODE.ELDERLY, name: '老年人口' },
} as const
