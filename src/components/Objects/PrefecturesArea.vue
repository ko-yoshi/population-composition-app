<template>
  <section>
    <template v-if="prefectures">
      <template v-for="i in prefectures.result" :key="i.prefCode">
        <PartsCheckboxBtn :label="i.prefName" />
      </template>
    </template>
  </section>
</template>
<script setup lang="ts">
  const { data: prefectures } = await useFetch('/api/prefectures')
</script>
<style lang="scss" scoped>
  .prefectures div {
    margin: 0.2em;
  }
</style>
