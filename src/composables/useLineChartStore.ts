import { PopulationCompositions } from '~/server/api/population/composition/perYear.get'

type LineChartState = {
  apiResults: {
    [key: number]: PopulationCompositions[]
  }
  checkedPrefectures: {
    [key: number]: string
  }
}

export const useLineChartStore = () => {
  const state = useState<LineChartState>('linecahrt_state', () => ({
    apiResults: {},
    checkedPrefectures: {},
  }))
  return {
    state: readonly(state),
    setApiResults: setApiResults(state),
    setCheckedPrefectures: setCheckedPrefectures(state),
  }
}

const setApiResults = (state: Ref<LineChartState>) => {
  return (key: number, val: PopulationCompositions[]) => (state.value.apiResults[key] = val)
}

const setCheckedPrefectures = (state: Ref<LineChartState>) => {
  return (key: number, val: string, isTrue: boolean) => {
    if (isTrue) state.value.checkedPrefectures[key] = val
    else delete state.value.checkedPrefectures[key]
  }
}
