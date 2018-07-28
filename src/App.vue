<!--
Written by: Jireh Agda    July 26, 2018

Purpose:

Change logs:

Notes:

-->

<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <b-btn-group class="my-1 mx-1">
            <b-btn variant="primary" v-on:click="currentPage = 'panelsPage'">Panel Showcase</b-btn>
        </b-btn-group>
        <b-btn-group class="my-1 mx-1">
            <b-btn variant="info" v-on:click="currentPage = 'modalsPage'">Modal Showcase</b-btn>
        </b-btn-group>
        <b-btn-group class="my-1 mx-1">
            <b-btn variant="warning" v-on:click="currentPage = 'graphsPage'">Graph Showcase</b-btn>
        </b-btn-group>
        <b-btn-group class="my-1 mx-1">
            <b-btn variant="success" v-on:click="currentPage = 'formCompPanels'">Form Showcase (Single Form)</b-btn>
            <b-btn variant="success" v-on:click="currentPage = 'formCompModals'">Form Showcase (Multiple Forms)</b-btn>
        </b-btn-group>

        <hr>

        <component
            v-bind:is="currentPage"
        ></component>
    </div>
</template>

<script>
import panelsPage from './components/panelsPage.vue';
import modalsPage from './components/modalsPage.vue';
import graphsPage from './components/graphsPage.vue';
import formCompPanels from './components/formCompPanels.vue';
import formCompModals from './components/formCompModals.vue';

export default {
    name: 'app',
    data () {
        return {
            msg: 'Vue.js Investigation Site!',
            currentPage: ''
        }
    },
    components: {
        panelsPage,
        modalsPage,
        graphsPage,
        formCompPanels,
        formCompModals
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
