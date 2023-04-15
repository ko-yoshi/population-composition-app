<template>
  <fieldset class="populations">
    <legend>グラフに表示する人口構成タイプを選択してください</legend>
    <template v-for="i in POPULATION_TYPE" :key="i.code">
      <PartsRadioBtn
        class="item"
        :label="i.name"
        name="radio"
        :checked="state.checkedPopulationType === i.code"
        @change="updatePopulationType(i.code)"
      />
    </template>
  </fieldset>
</template>
<script setup lang="ts">
  const { state } = useLineChartStore()
  const { updatePopulationType } = usePopulationComposition()
</script>
<style lang="scss" scoped>
  .populations {
    display: flex;
    width: fit-content;

    .item:not(:first-of-type) {
      margin-left: 0.5em;
    }
  }
</style>
