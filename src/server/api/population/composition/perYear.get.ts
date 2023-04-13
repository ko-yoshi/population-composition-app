import { apiBaseUrl, apiHeaders, BaseResponse } from '~/server/utils/apiConfig'

const path = '/population/composition/perYear'

type PopulationCompositionResult = {
  boundaryYear: number
  data: PopulationCompositions[]
}

export type PopulationCompositions = {
  label: string
  data: PopulationComposition[]
}

type PopulationComposition = {
  year: number
  value: number
}

export default defineEventHandler(async (e) => {
  const params = getQuery(e)
  const data: BaseResponse<PopulationCompositionResult> = await $fetch(path, {
    baseURL: apiBaseUrl(),
    headers: apiHeaders(),
    params,
  })
  return data
})
