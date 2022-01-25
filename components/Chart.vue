<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'chart',
  mixins: [Bar],
  props: {
      chart: {
          type: Object,
          required: true,
          default: () => {},
      }
  },
  mounted() {
    this.renderChart(this.chart.data, this.chart.options);
  },
};
</script>

<style>
</style>
