import { ChartData, ChartOptions } from 'chart.js'
import { PopulationCompositions } from '~/server/api/population/composition/perYear.get'

type LineChartState = {
  apiResults: {
    [key: number]: PopulationCompositions[]
  }
  checkedPrefectures: {
    [key: number]: string
  }
  checkedPopulationType: (typeof POPULATION_CODE)[keyof typeof POPULATION_CODE]
  lineChartData: ChartData<'line'>
  lineChartOptions: ChartOptions<'line'>
}

export const useLineChartStore = () => {
  const state = useState<LineChartState>('linechart_state', () => ({
    apiResults: {},
    checkedPrefectures: {},
    checkedPopulationType: 1,
    lineChartData: { labels: [], datasets: [] },
    lineChartOptions: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: '年',
          },
        },
        y: {
          title: {
            display: true,
            text: '人口（千人）',
          },
          suggestedMin: 0,
          suggestedMax: 10,
          ticks: {
            callback: function (label) {
              if (+label > 1000) {
                return (+label / 1000).toString() + 'k'
              }
              return label.toString() + 'k'
            },
          },
        },
      },
      maintainAspectRatio: false,
    },
  }))
  return {
    state: readonly(state),
    setApiResults: setApiResults(state),
    setCheckedPrefectures: setCheckedPrefectures(state),
    getCheckedPrefectures: getCheckedPrefectures(state),
    setCheckedPopulationType: setCheckedPopulationType(state),
    setLineChartData: setLineChartData(state),
    getLineChartData: getLineChartData(state),
    getLineChartOptions: getLineChartOptions(state),
  }
}

// 人口構成取得APIのリザルト用 Setter
const setApiResults = (state: Ref<LineChartState>) => {
  return (key: number, val: PopulationCompositions[]) => (state.value.apiResults[key] = val)
}

// 都道府県選択用 Getter/Setter
const setCheckedPrefectures = (state: Ref<LineChartState>) => {
  return (key: number, val: string, isTrue: boolean) => {
    if (isTrue) state.value.checkedPrefectures[key] = val
    else delete state.value.checkedPrefectures[key]
  }
}
const getCheckedPrefectures = (state: Ref<LineChartState>) => {
  return () => state.value.checkedPrefectures
}

// 人口構成タイプ選択用 Setter
const setCheckedPopulationType = (state: Ref<LineChartState>) => {
  return (val: (typeof POPULATION_CODE)[keyof typeof POPULATION_CODE]) =>
    (state.value.checkedPopulationType = val)
}

// LineChart用構造データ Getter/Setter
const setLineChartData = (state: Ref<LineChartState>) => {
  return (val: ChartData<'line'>) => (state.value.lineChartData = val)
}
const getLineChartData = (state: Ref<LineChartState>) => {
  return () => state.value.lineChartData
}

// LineChart用オプションデータ Getter
const getLineChartOptions = (state: Ref<LineChartState>) => {
  return () => state.value.lineChartOptions
}
