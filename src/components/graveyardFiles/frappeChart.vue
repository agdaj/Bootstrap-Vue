<!--
Written by: Jireh Agda    July 26, 2018

Purpose: General component template/wrapper for any Frappe chart, using vue2-frappe and frappe-charts

Change logs:

Notes:

-->

<template>
  <vue-frappe ref="thisChart"
            id="newChart"
            :labels="[
                '12am-3am', '3am-6am', '6am-9am', '9am-12pm',
                '12pm-3pm', '3pm-6pm', '6pm-9pm', '9pm-12am'
            ]"
            title="My Awesome Chart"
            type="axis-mixed"
            :height="300"
            :colors="['purple', '#ffa3ef', 'light-blue', '#ff0000']"
            v-bind:dataSets="this.someData">
        </vue-frappe>
        <vue-frappe ref="charty"
            id="test"
            :labels="[
                '12am-3am', '3am-6am', '6am-9am', '9am-12pm',
                '12pm-3pm', '3pm-6pm', '6pm-9pm', '9pm-12am'
            ]"
            title="My Awesome Chart"
            type="axis-mixed"
            :height="300"
            :colors="['purple', '#ffa3ef', 'light-blue', '#ff0000']"
            v-bind:dataSets="this.someData">
        </vue-frappe>
        </div>
</template>

<script>
export default {
  name: 'frappeChart',
  props: ['someData'],
  data () {
    return {
        showGraph: false
    }
  },
  methods: {
      addToData: function () {
          this.someData = this.someData.concat({
                    name: "ONE MORE THING", chartType: 'line',
                    values: [60, 60, 60, 60, 60, 60, 60, 60]
                });
      },
      addDataPoint: function (dataset) {
          var frappe = this.$refs.chartest;
          frappe.addDataPoint("LABEL", [5, 5, 5], 0);
      },
      deleteDataPoint: function (dataset) {
          var frappe = this.$refs.chartest;
          frappe.addDataPoint("LABEL", [5, 5, 5], 0);
      },
      updateDataSet: function (dataset) {
          var frappe = this.$refs.chartest;
          frappe.updateDataset({
	labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
		"12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

	datasets: [
		{
			name: "Some Data", chartType: 'bar',
			values: [25, 40, 30, 35, 8, 52, 17, -4]
		},
		{
			name: "Another Set", chartType: 'bar',
			values: [25, 50, -10, 15, 18, 32, 27, 14]
		},
		{
			name: "Yet Another", chartType: 'line',
			values: [15, 20, -3, -15, 58, 12, -17, 37]
		}
	],

	yMarkers: [{ label: "Marker", value: 70,
		options: { labelPos: 'left' }}],
	yRegions: [{ label: "Region", start: -10, end: 50,
		options: { labelPos: 'right' }}]
	});
      },
      refreshData: function () {

          var frappe = this.$refs.chartest;
          frappe.export();
      }
  }
}
</script>
