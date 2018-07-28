<template>
    <div id="createPanel">
        <h1>{{msg}}</h1>
        <b-btn-group>
            <b-btn variant="primary" v-on:click="currentPanel = 'panelsPage'">Panel Page in a Panel</b-btn>
        </b-btn-group>
        <b-btn-group>
            <b-btn variant="info" v-on:click="currentPanel = 'modalsPage'">Modal Page in a Panel</b-btn>
        </b-btn-group>
        <b-btn-group>
            <b-btn variant="warning" v-on:click="currentPanel = 'graphsPage'">Graph Page in a Panel</b-btn>
        </b-btn-group>
        <b-btn-group>
            <b-btn variant="success" v-on:click="currentPanel = 'customComp'">Custom Panel!</b-btn>
        </b-btn-group>

        <hr>

        <b-card class="my-3 mx-2">
            <component
                v-bind:is="currentPanel"
                :showLogo="showMore"
            ></component>
        </b-card>
    </div>
</template>

<script>
import panelsPage from './panelsPage.vue';
import modalsPage from './modalsPage.vue';
import graphsPage from './graphsPage.vue';
import customComp from './customComp.vue';

export default {
    name: 'createPanel',
    data () {
        return {
            msg: 'Create A Panel!',
            currentPanel: '',
            showMore: true
        }
    },
    components: {
        panelsPage,
        modalsPage,
        graphsPage,
        customComp
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
