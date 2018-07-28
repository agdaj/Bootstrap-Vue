<template>
    <div id="createPanel">
        <h1>{{msg}}</h1>
        <b-btn-group>
            <b-btn variant="primary" v-b-modal="'generalModal'"
                                     v-on:click="currentModal = 'panelsPage'">Panel Page in a Modal</b-btn>
        </b-btn-group>
        <b-btn-group>
            <b-btn variant="warning" v-b-modal="'generalModal'"
                                     v-on:click="currentModal = 'graphsPage'">Graph Page in a Modal</b-btn>
        </b-btn-group>
        <b-btn-group>
            <b-btn variant="success" v-b-modal="'generalModal'"
                                     v-on:click="currentModal = 'customComp'">Custom Modal!</b-btn>
        </b-btn-group>

        <hr>

        <b-modal id="generalModal">
            <component
                v-bind:is="currentModal"
                :showLogo="showMore"
            ></component>
        </b-modal>
    </div>
</template>

<script>
import panelsPage from './panelsPage.vue';
import modalsPage from './modalsPage.vue';
import graphsPage from './graphsPage.vue';
import customComp from './customComp.vue';

export default {
    name: 'createModal',
    data () {
        return {
            msg: 'Create A Modal!',
            currentModal: '',
            showMore: false
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
