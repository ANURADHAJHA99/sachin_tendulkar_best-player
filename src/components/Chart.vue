<template>
  <div class="chart-container" :style="style">
    <div class="title-container" v-if="titleText">
      <ChartTitle :title="titleText" :subTitle="subTitleText" />
    </div>
    <slot></slot>
    <div class="chart-canvas">
      <canvas ref="chart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';
import ChartTitle from '@/components/ChartTitle.vue';

export default {
  name: 'Chart',
  props: [
    'titleText', 'subTitleText', 'chartType', 'chartData', 'chartOptions', 'parentStyle',
  ],
  components: { ChartTitle },
  data() {
    return {
      chart: null,
      style: this.parentStyle,
    };
  },
  mounted() {
    this.chart = new Chart(this.$refs.chart.getContext('2d'), {
      type: this.chartType,
      data: this.chartData,
      options: this.chartOptions,
    });
  },
  watch: {
    chartData() {
      this.chart.data = this.chartData;
      this.chart.options = this.chartOptions;
      this.chart.update();
    },
    parentStyle(newStyle) {
      this.style = {
        ...this.style,
        ...newStyle,
      };
    },
  },
};
</script>

<style scoped>
  .chart-container {
    width: 20%;
    display: inline-block;
    
   
  }
  .title-container {
    margin-bottom: 40px;
    margin-left: 20px;
  }
  .chart-canvas {
    margin-left: 10px;
  }
</style>
