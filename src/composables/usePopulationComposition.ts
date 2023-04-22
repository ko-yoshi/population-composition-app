import { ChartData } from 'chart.js'

export const usePopulationComposition = () => {
  const {
    state,
    setApiResults,
    setCheckedPrefectures,
    setLineChartData,
    setCheckedPopulationType,
  } = useLineChartStore()

  /**
   * 都道府県チェックボックスクリック時
   * @param prefCode 都道府県コード
   * @param prefName 都道府県名
   * @param val チェックボックスの値
   */
  const updatePrefCode = async (prefCode: number, prefName: string, val: boolean) => {
    // チェックオン時の処理
    if (val) {
      // ストアに人口構成情報があるか確認する
      if (!existApiResult(prefCode)) {
        // なければ人口構成取得API実施
        await apiPopulationComposition(prefCode)
      }
    }

    // チェックオンオフ情報をストアに設定する
    setCheckedPrefectures(prefCode, prefName, val)

    // LineChart用構造データをストアに設定する
    setLineChartData(getLineChartData())
  }

  /**
   * 人口構成タイプボタンクリック時
   * @param code 人口構成タイプコード
   */
  const updatePopulationType = (code: (typeof POPULATION_CODE)[keyof typeof POPULATION_CODE]) => {
    setCheckedPopulationType(code)
    // LineChart用構造データをストアに設定する
    setLineChartData(getLineChartData())
  }

  /**
   * 人口構成取得API実施
   * @param prefCode 都道府県コード
   */
  const apiPopulationComposition = async (prefCode: number) => {
    const { data: res } = await useFetch('/api/population/composition/perYear', {
      params: { cityCode: '-', prefCode },
    })

    // データ存在する場合はストアに設定する
    if (res.value && res.value.result) {
      setApiResults(prefCode, res.value.result.data)
    }
  }

  /**
   * 既に人口構成取得APIを実施している都道府県か確認する
   * @param prefCode 都道府県コード
   */
  const existApiResult = (prefCode: number) => {
    return prefCode in state.value.apiResults
  }

  /**
   * 折れ線グラフ用データ構造を取得する
   */
  const getLineChartData = (): ChartData<'line'> => {
    const labels = getAxisXLabel()
    const datasets = getLineChartDataset()

    return { labels, datasets }
  }

  /**
   * 折れ線グラフ用X軸ラベルを取得する
   */
  const getAxisXLabel = () => {
    const type = state.value.checkedPopulationType
    const results = state.value.apiResults
    const keys = Object.keys(results).map(Number)

    return keys.length ? results[keys[0]][type - 1].data.map((i) => i.year) : []
  }

  /**
   * 折れ線グラフ用の実データを取得する
   */
  const getLineChartDataset = (): ChartData<'line'>['datasets'] => {
    const type = state.value.checkedPopulationType
    const results = state.value.apiResults
    const prefs = state.value.checkedPrefectures
    const prefCodes = Object.keys(prefs).map(Number)
    return prefCodes.map((i) => {
      const color = getColorCode(i)
      return {
        label: prefs[i],
        data: results[i][type - 1].data.map((j) => j.value),
        backgroundColor: color,
        borderColor: color,
      }
    })
  }

  /**
   * カラーコード取得処理 都道県コードと特定キーで計算して決める
   * @param prefCode 都道府県コード
   */
  const getColorCode = (prefCode: number) => {
    const color = ((prefCode * 0x147ad) | 0).toString(16)
    return '#' + ('000000' + color).slice(-6)
  }

  return { updatePrefCode, updatePopulationType, getColorCode }
}
