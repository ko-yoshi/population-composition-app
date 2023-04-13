import { apiBaseUrl, apiHeaders, BaseResponse } from '~/server/utils/apiConfig'

const path = '/prefectures'

type PrefecturesResult = {
  prefCode: number
  prefName: string
}

export default defineEventHandler(async () => {
  const data: BaseResponse<PrefecturesResult[]> = await $fetch(path, {
    baseURL: apiBaseUrl(),
    headers: apiHeaders(),
  })
  return data
})
