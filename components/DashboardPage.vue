<template>
  <div class="min-h-screen lg:max-w-4xl text-gray-700 px-6 mx-auto mt-12 mb-48">
    <!-- Requests over time -->
    <line-chart :key="requestsChart.key" :chart="requestsChart" class="mb-12" />

    <!-- Percent of requests with "bad" credentials -->
    <line-chart
      :key="badCredentialsChart.key"
      :chart="badCredentialsChart"
      class="mb-12"
    />

    <!-- Average score over time -->
    <line-chart :key="averageScoreChart.key" :chart="averageScoreChart" />

    <div class="mt-20">
      <div class="font-medium text-2xl mb-6">Download SDK</div>
      <div class="flex flex-row space-x-4">
        <button
          type="button"
          class="bg-primary hover:bg-opacity-95 text-gray-100 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 shadow"
          @click.prevent="onDownloadNodeJS"
        >
          <span class="mr-1"
            ><font-awesome-icon :icon="['fab', 'node-js']"
          /></span>
          Node JS
        </button>

        <button
          type="button"
          class="cursor-not-allowed bg-gray-400 hover:bg-opacity-95 text-gray-100 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 shadow"
          disabled
        >
          <span class="mr-1"><font-awesome-icon :icon="['fab', 'php']" /></span>
          PHP
        </button>

        <button
          type="button"
          class="cursor-not-allowed bg-gray-400 hover:bg-opacity-95 text-gray-100 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 shadow"
          disabled
        >
          <span class="mr-1"
            ><font-awesome-icon :icon="['fab', 'python']"
          /></span>
          Python
        </button>
      </div>
    </div>

    <div class="mt-20">
      <div class="font-medium text-2xl mb-6">Api Key</div>
      <div class="flex flex-row items-center">
        <div
          class="flex-grow bg-gray-50 border border-gray-200 px-3 py-1 rounded"
        >
          {{ apiKey ? apiKey.substr(0, 45) : '' }} ...
        </div>
        <button
          v-clipboard:copy="apiKey"
          v-clipboard:success="onSuccessCopy"
          v-clipboard:error="onFailCopy"
          type="button"
          class="py-1 px-3 rounded ml-1 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 shadow"
          :class="buttonCopyStyles"
        >
          <span class="text-sm mr-1">
            <font-awesome-icon :icon="copy.icon" />
          </span>
          {{ copy.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      apiKey: null,
      copy: {
        success: null,
        text: 'Copy',
        icon: 'clipboard-list',
      },
      isCopySuccess: null,
      requestsChart: {
        key: 'requestsChart',
        data: {
          datasets: [
            {
              data: null,
              backgroundColor: 'rgba(4, 102, 200, 0.5)',
              borderColor: 'rgb(4, 102, 200)',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Number of requests over time',
            fontColor: '#374151',
            fontSize: 18,
            padding: 24,
          },
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'day',
                  displayFormats: {
                    day: 'MMM DD',
                  },
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Number of requests',
                },
                ticks: {
                  beginAtZero: true,
                  max: 200,
                },
              },
            ],
          },
          elements: {
            line: {
              tension: 0,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      },
      badCredentialsChart: {
        key: 'badCredentialsChart',
        data: {
          datasets: [
            {
              data: null,
              backgroundColor: 'rgba(217, 119, 6, 0.5)',
              borderColor: 'rgb(217, 119, 6)',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Percent of requests with "bad" credentials',
            fontColor: '#374151',
            fontSize: 18,
            padding: 24,
          },
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'day',
                  displayFormats: {
                    day: 'MMM DD',
                  },
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Percentage',
                },
                ticks: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            ],
          },
          elements: {
            line: {
              tension: 0,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      },
      averageScoreChart: {
        key: 'averageScoreChart',
        data: {
          datasets: [
            {
              data: null,
              backgroundColor: 'rgba(4, 120, 87, 0.5)',
              borderColor: 'rgb(4, 120, 87)',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Average score over time',
            fontColor: '#374151',
            fontSize: 18,
            padding: 24,
          },
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'day',
                  displayFormats: {
                    day: 'MMM DD',
                  },
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Percentage',
                },
                ticks: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            ],
          },
          elements: {
            line: {
              tension: 0,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      },
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      rawData: [],
    };
  },
  computed: {
    userFullname() {
      return `${this.$auth.user.firstname} ${this.$auth.user.lastname}`;
    },
    buttonCopyStyles() {
      // default
      if (this.copy.success === null) {
        return 'hover:bg-primary text-primary hover:text-white border border-primary';
      }
      // failed
      if (!this.copy.success) {
        return 'hover:bg-red-600 text-red-600 hover:text-white border border-red-600';
      }
      // sucess
      return 'hover:bg-green-600 text-green-600 hover:text-white border border-green-600';
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.apiKey = this.$auth.user.apiKey;
  },
  methods: {
    groupData(rows, date) {
      const beforeTheNextDay = Math.floor(date.setHours(23, 59, 0, 0) / 1000);
      const midnight = Math.floor(date.setHours(0, 0, 0, 0) / 1000);

      const group = rows.filter(
        (row) => row.timestamp >= midnight && row.timestamp <= beforeTheNextDay
      );
      group.hasData = group.length > 0;
      group.dateString = this.formatDate(date);

      return group;
    },
    setRawData(data) {
      const { fromTimestamp: from, toTimestamp: to, rows } = data;

      const numberOfDays = Math.floor((to - from) / 60 / 60 / 24);
      const fromDate = new Date(from * 1000);
      const currentDate = new Date(fromDate);

      for (let i = 0; i <= numberOfDays; i++) {
        if (i === 0) {
          this.rawData.push(this.groupData(rows, currentDate));
          continue;
        }

        this.rawData.push(
          this.groupData(
            rows,
            new Date(currentDate.setDate(currentDate.getDate() + 1))
          )
        );
      }
    },
    populateRequestChart() {
      const result = this.rawData.map((group) => {
        return {
          x: group.dateString,
          y: group.length,
        };
      });

      this.requestsChart.data.datasets[0].data = result;

      const maxValue = Math.max(...result.map((res) => res.y));
      this.requestsChart.options.scales.yAxes[0].ticks.max = Math.floor(
        maxValue + maxValue * 0.2
      );

      // workaround to force update the chart
      this.requestsChart.key = 'requestsChartUpdated';
    },
    populateBadCredentialsChart() {
      const result = this.rawData.map((group) => {
        const ret = {
          x: group.dateString,
          y: 0,
        };

        if (group.hasData) {
          const compromised = group.filter((item) => item.score > 0);
          ret.y = (compromised.length / group.length) * 100;
        }

        return ret;
      });

      this.badCredentialsChart.data.datasets[0].data = result;

      // workaround to force update the chart
      this.badCredentialsChart.key = 'badCredentialsChartUpdated';
    },
    populateAverageScoreChart() {
      const result = this.rawData.map((group) => {
        const ret = {
          x: group.dateString,
          y: 0,
        };

        if (group.hasData) {
          const total = group
            .map((item) => item.score)
            .reduce((acc, value) => acc + value);

          ret.y = Math.floor(total / group.length);
        }

        return ret;
      });

      this.averageScoreChart.data.datasets[0].data = result;

      // workaround to force update the chart
      this.averageScoreChart.key = 'averageScoreChartUpdated';
    },
    async fetchData() {
      let response = null;
      try {
        response = (
          await this.$axios.get('/get-logs', {
            headers: {
              Authorization: this.$auth.strategy.token.get(),
            },
          })
        ).data;
      } catch (error) {
        response = null;
      }

      if (response !== null) {
        this.setRawData(response.data);
        this.populateRequestChart();
        this.populateBadCredentialsChart();
        this.populateAverageScoreChart();
      }
    },
    formatDate(currentDate) {
      const year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let date = currentDate.getDate();

      // add leading zero to month
      month = month < 10 ? `0${month}` : month;

      // add leading zero to date
      date = date < 10 ? `0${date}` : date;

      return `${year}-${month}-${date}`;
    },
    onSuccessCopy() {
      this.copy.success = true;
      this.copy.text = 'Copied!';
      this.copy.icon = 'check-circle';
      this.resetCopyState();
    },
    onFailCopy() {
      this.copy.success = false;
      this.copy.text = 'Failed!';
      this.copy.icon = 'exclamation-circle';
      this.resetCopyState();
    },
    resetCopyState() {
      setTimeout(() => {
        this.copy.success = null;
        this.copy.text = 'Copy';
        this.copy.icon = 'clipboard-list';
      }, 3000);
    },
    onDownloadNodeJS() {
      window.open('/downloads/flatironcyber-js-v1.0.0.zip');
    }
  },
};
</script>

<style>
</style>
