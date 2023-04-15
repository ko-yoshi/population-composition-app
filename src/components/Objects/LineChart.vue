<template>
  <template v-if="chartData">
    <Line class="contents" :options="options" :data="chartData" />
  </template>
</template>

<script lang="ts">
  import { Line } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)
</script>
<script lang="ts" setup>
  const { getLineChartData, getLineChartOptions } = useLineChartStore()

  const chartData = computed(() => {
    return getLineChartData()
  })

  const options = computed(() => {
    return getLineChartOptions()
  })
</script>
<style lang="scss" scoped>
  .contents {
    height: 55vh;

    @media screen and (max-width: 480px) {
      height: 50vh;
    }
  }
</style>
