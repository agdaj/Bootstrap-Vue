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
