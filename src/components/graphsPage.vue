<!--
Written by: Jireh Agda    July 27, 2018

Purpose: A showcase component with vue-d2b Graphs (D2B)
         https://github.com/d2bjs/vue-d2b

Change logs:

Notes:

-->

<template>
    <div id="graphs">
        <div id="graphs-header" class="row mx-2">
            <div class="col-sm-8" align="left">
                <h2>{{showTitle}}</h2>
            </div>
            <div class="col-sm-4" align="right">
                <b-dropdown id="graph-select" right text="Select Graph">
                    <b-dropdown-item v-on:click="showStack">Stack Bar Graph</b-dropdown-item>
                    <b-dropdown-item v-on:click="showDonut">Donut Graph</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>

        <div class='chart' v-if="isStackBarActive">
            <!-- import font awesome for legend icons -->
            <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>
            <chart-axis :data='chartData' :config='chartConfig'></chart-axis>

            <b-btn class="my-1 mx-1" v-on:click="addData('Bar')">Add Data</b-btn>
            <b-btn class="my-1 mx-1" v-on:click="removeData('Bar')">Remove Data</b-btn>
            <b-btn class="my-1 mx-1" v-on:click="randomData('Bar')">Random Data</b-btn>
        </div>
        <div class='chart' v-if="isDonutActive">
            <!-- import font awesome for legend icons -->
            <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>
            <chart-pie :data='pieData' :config='pieConfig'></chart-pie>

            <b-btn class="my-1 mx-1" v-on:click="addData('Pie')">Add Data</b-btn>
            <b-btn class="my-1 mx-1" v-on:click="removeData('Pie')">Remove Data</b-btn>
            <b-btn class="my-1 mx-1" v-on:click="randomData('Pie')">Random Data</b-btn>
        </div>
    </div>
</template>

<script>
import { svgBar } from 'd2b'
import { ChartAxis } from 'vue-d2b'
import { ChartPie } from 'vue-d2b'

export default {
    data () {
        return {
            graphType: '',
            isStackBarActive: false,
            isDonutActive: false,
            chartData: {
                sets: [
                {
                  generators: [svgBar().stackBy(true)],
                  graphs: [
                    {
                      label: 'area 1',
                      values: [
                        {x: 'A', y: 25},
                        {x: 'B', y: 38},
                        {x: 'C', y: 24},
                        {x: 'D', y: 60},
                        {x: 'E', y: 22}
                      ]
                    },
                    {
                      label: 'area 2',
                      values: [
                        {x: 'A', y: 15},
                        {x: 'B', y: 8},
                        {x: 'C', y: 54},
                        {x: 'D', y: 22},
                        {x: 'F', y: 20}
                      ]
                    }
                  ]
                }
              ]
            },
            chartConfig (chart) {
            },
            pieData: [
                {label: 'arc 1', value: 23},
                {label: 'arc 2', value: 31},
                {label: 'arc 3', value: 80},
                {label: 'arc 4', value: 8}
            ],
            pieConfig (chart) {
                chart.donutRatio(0.5)
            }
        }
    },
    computed: {
        showTitle: function () {
            return 'Showing...'.concat(this.graphType);
        }
    },
    methods: {
        showStack: function () {
            console.log('Showing Stack Bar Graph...');
            this.graphType = ' Stack Bar Graph';
            this.isStackBarActive = true;
            this.isDonutActive = false;
        },
        showDonut: function () {
            console.log('Showing Donut Graph...');
            this.graphType = ' Donut Graph';
            this.isStackBarActive = false;
            this.isDonutActive = true;
        },
        addData: function (chart) {
            if (chart === 'Bar') {
                let num = this.chartData.sets[0].graphs.length + 1;
                this.chartData.sets[0].graphs.push({label: `area ${num}`, values: [
                        {x: 'A', y: Math.random() * (100 - 1) + 1},
                        {x: 'B', y: Math.random() * (100 - 1) + 1},
                        {x: 'C', y: Math.random() * (100 - 1) + 1},
                        {x: 'D', y: Math.random() * (100 - 1) + 1},
                        {x: 'E', y: Math.random() * (100 - 1) + 1},
                        {x: 'F', y: Math.random() * (100 - 1) + 1}
                      ]});
            }
            else if (chart === 'Pie') {
                let num = this.pieData.length + 1;
                this.pieData.push({label: `arc ${num}`, value: Math.random() * (100 - 1) + 1});
            }
        },
        removeData: function (chart) {
            if (chart === 'Bar') {
                this.chartData.sets[0].graphs.pop();
            }
            else if (chart === 'Pie') {
                this.pieData.pop();
            }
        },
        randomData: function (chart) {
            if (chart === 'Bar') {
                this.chartData.sets[0].graphs = [
                    {
                      label: 'area 1',
                      values: [
                        {x: 'A', y: Math.random() * (100 - 1) + 1},
                        {x: 'B', y: Math.random() * (100 - 1) + 1},
                        {x: 'C', y: Math.random() * (100 - 1) + 1},
                        {x: 'D', y: Math.random() * (100 - 1) + 1},
                        {x: 'E', y: Math.random() * (100 - 1) + 1}
                      ]
                    },
                    {
                      label: 'area 2',
                      values: [
                        {x: 'A', y: Math.random() * (100 - 1) + 1},
                        {x: 'B', y: Math.random() * (100 - 1) + 1},
                        {x: 'C', y: Math.random() * (100 - 1) + 1},
                        {x: 'D', y: Math.random() * (100 - 1) + 1},
                        {x: 'F', y: Math.random() * (100 - 1) + 1}
                      ]
                    }
                  ];
            }
            else if (chart === 'Pie') {
                this.pieData = [
                    {label: 'arc 1', value: Math.random() * (100 - 1) + 1},
                    {label: 'arc 2', value: Math.random() * (100 - 1) + 1},
                    {label: 'arc 3', value: Math.random() * (100 - 1) + 1},
                    {label: 'arc 4', value: Math.random() * (100 - 1) + 1}
                ]
            }
        }
    },
    components: {
        ChartPie,
        ChartAxis
    }
}
</script>

<style scoped>
  .chart{
    width: 100%;
    height: 500px;
  }
</style>