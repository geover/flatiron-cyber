<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    chart: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  mounted() {
    this.renderChart(this.chart.data, this.chart.options);
  },
};
</script>

<style>
</style>
