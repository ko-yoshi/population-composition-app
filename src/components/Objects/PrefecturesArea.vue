<template>
  <section>
    <template v-if="prefectures">
      <template v-for="i in prefectures.result" :key="i.prefCode">
        <PartsCheckboxBtn
          :label="i.prefName"
          @change="updatePrefCode(i.prefCode, i.prefName, $event)"
        />
      </template>
    </template>
  </section>
</template>
<script setup lang="ts">
  const { data: prefectures } = await useFetch('/api/prefectures')
  const { updatePrefCode } = usePopulationComposition()
</script>
<style lang="scss" scoped>
  .prefectures div {
    margin: 0.2em;
  }
</style>
