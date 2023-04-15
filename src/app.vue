<template>
  <main class="main">
    <section class="header">
      <h1>都道府県別人口推移グラフ</h1>
    </section>
    <section>
      <ObjectsPrefecturesArea />
    </section>
    <section class="population-type-area">
      <ObjectsPopulationTypeArea />
    </section>
    <section class="line-chart-area">
      <ObjectsLineChart />
    </section>
  </main>
</template>
<script setup></script>
<style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 1.5em;

    .population-type-area,
    .line-chart-area {
      margin-top: 1em;
    }
  }
</style>
