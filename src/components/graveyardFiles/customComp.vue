<template>
    <div id="customComp">
        <b-alert variant="danger"
                 dismissible
                 :show="showDismissibleAlert"
                 @dismissed="showDismissibleAlert=false">
            Dismissible Alert!
        </b-alert>

        <b-alert :show="dismissCountDown"
                 dismissible
                 variant="warning"
                 @dismissed="dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
            <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
            <b-progress variant="warning"
                        :max="dismissSecs"
                        :value="dismissCountDown"
                        height="4px">
            </b-progress>
        </b-alert>

        <b-btn @click="showAlert" variant="info" class="m-1">
            Show alert with count-down timer
        </b-btn>
        <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
            Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
        </b-btn>
        <b-btn @click="toggleLogo" variant="info" class="m-1">
            Toggle Logo ({{ showLogo?'visible':'hidden' }})
        </b-btn>

        <div id="org-logo" v-if="showLogo === true">
            <img src="../assets/logo.png">
        </div>
    </div>
</template>

<script>
export default {
    name: 'customComp',
    data () {
        return {
            dismissSecs: 10,
            dismissCountDown: 0,
            showDismissibleAlert: false,
        }
    },
    props: {
        showLogo: {
            default: false
        }
    },
    methods: {
        countDownChanged (dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert () {
            this.dismissCountDown = this.dismissSecs
        },
        toggleLogo: function () {
            this.showLogo = this.showLogo ? false : true
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
