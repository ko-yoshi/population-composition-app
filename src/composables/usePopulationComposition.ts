export const usePopulationComposition = () => {
  const { state, setApiResults, setCheckedPrefectures } = useLineChartStore()

  // 後続処理振り分け
  const updatePrefCode = (prefCode: number, prefName: string, val: boolean) => {
    // チェックオン時の処理
    if (val) {
      // ストアに人口構成情報があるか確認する
      if (!existApiResult(prefCode)) {
        // なければ人口構成取得API実施
        apiPopulationComposition(prefCode)
      }
    }

    // チェックオンオフ情報をストアに設定する
    setCheckedPrefectures(prefCode, prefName, val)
  }

  // 人口構成取得API実施
  const apiPopulationComposition = async (prefCode: number) => {
    const { data: res } = await useFetch('/api/population/composition/perYear', {
      params: { cityCode: '-', prefCode },
    })

    // データ存在する場合はストアに設定する
    if (res.value && res.value.result) {
      setApiResults(prefCode, res.value.result.data)
    }
  }

  // 既に人口構成取得APIを実施している都道府県か確認する
  const existApiResult = (prefCode: number) => {
    return prefCode in state.value.apiResults
  }

  return { updatePrefCode }
}
