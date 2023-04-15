<template>
  <fieldset class="prefectures">
    <legend>グラフに表示する都道府県を選択してください</legend>
    <template v-if="prefectures">
      <template v-for="i in prefectures.result" :key="i.prefCode">
        <PartsCheckboxBtn
          class="item"
          :label="i.prefName"
          :bg-color="getColorCode(i.prefCode)"
          @change="updatePrefCode(i.prefCode, i.prefName, $event)"
        />
      </template>
    </template>
  </fieldset>
</template>
<script setup lang="ts">
  const { data: prefectures } = await useFetch('/api/prefectures')
  const { updatePrefCode, getColorCode } = usePopulationComposition()
</script>
<style lang="scss" scoped>
  .prefectures {
    @media screen and (max-width: 480px) {
      height: 200px;
      overflow-y: auto;
    }

    .item {
      margin: 0.2em;
    }
  }
</style>
