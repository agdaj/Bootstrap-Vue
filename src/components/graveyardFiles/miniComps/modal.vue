<template>
    <div id="panels">
        <div class="row mx-2">
            <div class="col-sm-8" align="left">
                <h2>{{configTitle}}</h2>
            </div>
            <div class="col-sm-4" align="right">
                <b-dropdown id="repet-select" right text="Select .cfg">
                    <b-dropdown-item v-on:click="showTEdenovo">TEdenovo</b-dropdown-item>
                    <b-dropdown-item v-on:click="showTEannot">TEannot</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
        <div id="denovoPanels" v-if="isDenovoActive">
            <b-card-group deck class="my-3 mx-2">
                <b-card header="repet_env and project"
                        align="left">
                    <p>HELLO!</p>
                </b-card>
                <b-card header="Panel 2"
                        align="left">
                    <p>Hi!</p>
                </b-card>
            </b-card-group>
            <b-card-group deck class="mb-3 mx-2">
                <b-card header="Panel 3"
                        align="left">
                    <p>HELLO!</p>
                </b-card>
                <b-card header="Panel 4"
                        align="left">
                    <p>Hi!</p>
                </b-card>
                <b-card header="Panel 5"
                        align="left">
                    <p>Hi!</p>
                </b-card>
            </b-card-group>
        </div>
        <div id="annotPanels" v-if="isAnnotActive">
            <b-card-group deck class="my-3 mx-2">
                <b-card header="repet_env and project"
                        align="left">
                    <p>HELLO!</p>
                </b-card>
                <b-card header="Step 1"
                        align="left">
                    <p>Hi!</p>
                </b-card>
            </b-card-group>
            <b-card-group deck class="mb-3 mx-2">
                <b-card header="Panel 3"
                        align="left">
                    <p>HELLO!</p>
                </b-card>
                <b-card header="Panel 4"
                        align="left">
                    <p>Hi!</p>
                </b-card>
                <b-card header="Panel 5"
                        align="left">
                    <p>Hi!</p>
                </b-card>
            </b-card-group>
        </div>
        <div class="row mx-2">
            <div class="col-sm-8" align="left"></div>
            <div class="col-sm-4" align="right">
                <b-btn variant="danger" v-on:click="resetPage">Reset Page</b-btn>
                <b-btn variant="success" v-on:click="submitPage">Submit Page</b-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            denovoOrAnnot: '',
            isDenovoActive: false,
            isAnnotActive: false
        }
    },
    computed: {
        configTitle: function () {
            return "REPET configurator".concat(this.denovoOrAnnot);
        }
    },
    methods: {
        showTEdenovo: function (){
            console.log('Showing TEdenovo Page...');
            this.denovoOrAnnot = ' - TEdenovo.cfg';
            this.isDenovoActive = true;
            this.isAnnotActive = false;
        },
        showTEannot: function (){
            console.log('Showing TEannot Page...');
            this.denovoOrAnnot = ' - TEannot.cfg';
            this.isDenovoActive = false;
            this.isAnnotActive = true;
        },
        resetPage: function (){
            console.log('Resetting Page...');
        },
        submitPage: function (){
            console.log('Submitting Page...');
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

<!--
Written by: Jireh Agda    July 26, 2018

Purpose: A showcase component with vue-graph Graphs (Multiple Tests)
         https://github.com/juijs/vue-graph

Change logs:

Notes:

-->

<template>
    <div id="graphs-jui" v-if="false">
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

        <graph-pie v-if="isDonutActive"
            :width="500"
            :height="500"
            :padding-top="75"
            :padding-right="75"
            :padding-bottom="75"
            :padding-left="75"
            :values="donutData.values"
            :names="donutData.names"
            :active-index="[ 0, 2 ]"
            :active-event="'click'"
            :show-text-type="'outside'"
            :data-format="dataFormat"
            :shape="'donut'"
            :show-total-value="true">
            <note :text="'Donut Chart'"></note>
            <legends :names="donutData.names"></legends>
            <tooltip :names="donutData.names"></tooltip>
        </graph-pie>

        <graph-stackbar v-if="isStackBarActive"
            :width="600"
            :height="400"
            :labels="[ '1Q', '2Q', '3Q', '4Q' ]"
            :full-mode="false"
            :show-text="true"
            :names="stackBarData.names"
            :values="stackBarData.values">
            <note :text="'StackBar Chart'"></note>
            <legends :names="stackBarData.names"></legends>
            <tooltip :names="stackBarData.names" :position="'right'"></tooltip>
        </graph-stackbar>
    </div>

    <div id="graph-chartist" v-else-if="false">
        <p>WHY?</p>
        <vue-chartist :data="data" :options="options" type="Line"></vue-chartist>
    </div>

    <div id="graphs" v-else>
        <!-- import font awesome for legend icons -->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

        <!--
          Both the :data and :config properties are deeply reactive so any changes
          to these will cause the chart to update.
         -->
        <hr><hr><hr><hr><hr>
        <chart-pie :data='chartData' :config='chartConfig'></chart-pie>
    </div>
</template>

<script>
import VueChartist from 'v-chartist';
import { ChartPie } from 'vue-d2b';

export default {
    name: 'graphsPage',
    components: {
        'vue-chartist': VueChartist
    },
    data () {
        return {
            graphType: '',
            isStackBarActive: false,
            isDonutActive: false,
            stackBarData: {
                names: [ 'MS', 'Apple', 'Google' ],
                values: [
                    [ 10, 5, 5, 5 ],
                    [ 40, 10, 10, 10 ],
                    [ 30, 30, 30, 30 ]
                ]
            },
            donutData: {
                values: [ 10, 5, 5, 5 ],
                names: [ 'Apple', 'Google', 'MS', 'Facebook' ]
            },
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                    [12, 9, 7, 8, 5],
                    [2, 1, 3.5, 7, 3],
                    [1, 3, 4, 5, 6]
                ]
            },
            options: {
                fullWidth: true,
                chartPadding: {
                    right: 40
                }
            },
            // Describe the pie-chart data for more information on this checkout
            // the d2bjs.org docs.
            chartData: [
                {label: 'arc 1', value: 23},
                {label: 'arc 2', value: 31},
                {label: 'arc 3', value: 80},
                {label: 'arc 4', value: 8}
            ],

            // The chart config property is a callback function that is executed
            // any time the chart undergoes an update. The function receives the
            // d2b chart generator as an argument and can be configured as described
            // as described by the d2bjs.org docs.
            chartConfig (chart) {
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
        dataFormat: function(a, b) {
            if(b) return b + "%";
            return a;
        },
        showStack: function (){
            console.log('Showing Stack Bar Graph...');
            this.graphType = ' Stack Bar Graph';
            this.isStackBarActive = true;
            this.isDonutActive = false;
        },
        showDonut: function (){
            console.log('Showing Donut Graph...');
            this.graphType = ' Donut Graph';
            this.isStackBarActive = false;
            this.isDonutActive = true;
        }
    },
    components: {
        ChartPie
    }
}
</script>

<style scoped>
.chart{
    width: 100%;
    height: 500px;
  }
</style>
