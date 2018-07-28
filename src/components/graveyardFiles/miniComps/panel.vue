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
    name: 'panel',
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

<template>
    <div id="graphs">
        <button v-on:click="switchToBar">Bar Graph Test</button>
        <button v-on:click="switchToPie">Pie Graph Test</button>

        <div id="barGraph" v-if="isBarActive">
            <GChart
                type="ColumnChart"
                :data="chartData"
                :options="chartOptions"
            />
            <button v-on:click="addData('Column')">Add Data</button>
        </div>
        <div id="pieGraph" v-if="isPieActive">
            <GChart
                type="ColumnChart"
                :data="chartData"
                :options="chartOptions"
            />
        </div>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
    name: 'graphs',
    components: {
        GChart
    },
    data: function () {
        return {
            chartData: [
                ['Year', 'Sales', 'Expenses', 'Profit'],
                ['2014', 1000, 400, 200],
            ],
            chartOptions: {
                title: 'Company Performance',
                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            },
            isBarActive: false,
            isPieActive: false
        }
    },
    methods: {
        switchToBar: function () {
            console.log('Clicked: Bar Graph Test');
            this.isBarActive = true;
            this.isPieActive = false;
        },
        switchToPie: function () {
            console.log('Clicked: Pie Graph Test');
            this.isBarActive = false;
            this.isPieActive = true;
        },
        addData: function (chartType) {
            console.log(`Adding Data to ${chartType}`)

            switch (chartType) {
                case 'Column':
                    this.chartData = this.chartData.concat(
                        [['2015', 1170, 460, 250]])
                     console.log(this.chartData);
                    break;
                case 'Pie':
                    console.log('2')
                case 'HELP':
                    console.log('3')
                default:
                    console.log('4')
            }
        }
    }
}
</script>

<style lang="scss">
#graphs {
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

<template>
  <div id='graphs'>
    <button v-on:click="switchToBar">Bar Graph Test</button>
    <button v-on:click="switchToPie">Pie Graph Test</button>

    <div id="barGraph" class="container" v-if="isBarActive">
      <GChart
        :settings="{packages: ['bar']}"
        :data="chartData"
        :options="chartOptions"
        :createChart="(el, google) => new google.charts.Bar(el)"
        @ready="onChartReady"
      />
    </div>
    <div id="pieGraph" class="container" v-if="isPieActive">
      <GChart
        :settings="{packages: ['pie']}"
        :data="chartData"
        :options="chartOptions"
        :createChart="(el, google) => new google.charts.Pie(el)"
        @ready="onChartReady"
      />
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'graphsPage',
  components: {
    GChart
  },
  data () {
    return {
      chartsLib: null,
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      isBarActive: false,
      isPieActive: false
    }
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
      })
    }
  },
  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    },
    switchToBar () {
      console.log('Clicked: Bar Graph Test');
      this.isBarActive = true;
      this.isPieActive = false;
    },
    switchToPie () {
      console.log('Clicked: Pie Graph Test');
      this.isBarActive = false;
      this.isPieActive = true;
    }
  }
}
</script>

        onSubmitAnnot_step_1 (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.annotConfig.step_1));
        },
        onSubmitAnnot_parallel_prop (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.annotConfig.parallel_prop));
        },
        onSubmitAnnot_step_2 (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.annotConfig.step_2));
        },
        onSubmitAnnot_step_3 (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.annotConfig.step_3));
        },
        onSubmitAnnot_step_4_and_step_5 (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.annotConfig.step_4_and_step_5));
        },
        onSubmitAnnot_step_6 (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.annotConfig.step_6));
        },
        onSubmitAnnot_step_7 (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.annotConfig.step_7));
        },
        onSubmitAnnot_step_8 (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.annotConfig.step_8));
        },

                <!--
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">1</label>
                </div>

                <b-form-group label="Inline radios (default)">
                    <b-form-radio-group v-model="selected"
                          :options="options"
                          name="radioInline">
                    </b-form-radio-group>
                </b-form-group>

                {{ selected }}
                -->

<!--
Written by: Jireh Agda    July 26, 2018

Purpose: A showcase component with vue-graph Graphs (JUI backbone)
         https://github.com/juijs/vue-graph

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
</template>

<script>
export default {
    name: 'graphsPage',
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
    }
}
</script>
