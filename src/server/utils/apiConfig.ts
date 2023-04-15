export const apiBaseUrl = () => {
  return useRuntimeConfig().public.apiBase
}

export const apiHeaders = () => {
  return { 'X-API-KEY': useRuntimeConfig().resasApiKey }
}

export type BaseResponse<T> = {
  message: string
  statusCode?: string
  description?: string
  result?: T
}
