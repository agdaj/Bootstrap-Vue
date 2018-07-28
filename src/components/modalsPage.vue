<!--
Written by: Jireh Agda    July 26, 2018

Purpose: A showcase component with Bootstrap-Vue modals

Change logs:

Notes:

-->

<template>
    <div id="modals">
        <div id="modals-header" class="row mx-2">
            <div class="col-sm-8" align="left">
                <h2>{{configTitle}}</h2>
            </div>
            <div class="col-sm-4" align="right">
                <b-dropdown id="repet-select" right text="Select .cfg">
                    <b-dropdown-item v-on:click="showTEannot">TEannot</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>

        <div id="annotModals" v-if="isAnnotActive">
            <b-form @submit="onSubmitAnnot" @reset="onResetAnnot">
                <b-btn v-for="(group, gKey) in annotConfig"
                       :key="group.id"
                       class="my-1 mx-1"
                       v-b-modal="getModalBtnName(gKey)">{{ getModalBtnName(gKey) }}</b-btn>

                <b-modal v-for="(group, gKey) in annotConfig"
                         :key="group.id"
                         v-bind:title="gKey"
                         v-bind:id="getModalBtnName(gKey)"
                         :header-bg-variant="'dark'"
                         :header-text-variant="'light'"
                         :footer-bg-variant="'dark'"
                         :footer-text-variant="'light'"
                         size="lg"
                         align="left">
                    <b-form-group v-for="(value,key) in group"
                                          :key="value.id"
                                          v-bind:id="getGroupAnnotID(key)"
                                          horizontal
                                          label-size="sm"
                                          :label-cols="4"
                                          v-bind:label="key"
                                          v-bind:label-for="getInputAnnotID(key)">
                        <b-form-input v-bind:id="getInputAnnotID(key)"
                                      type="text"
                                      size="sm"
                                      v-model="annotConfig[gKey][key]"
                                      v-bind:placeholder="value">
                        </b-form-input>
                    </b-form-group>
                </b-modal>

                <hr>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
import { annotMixin } from './mixins/repetMixins.js';

export default {
    name: 'modalsPage',
    mixins: [annotMixin],
    data () {
        return {
            configName: '',
            isAnnotActive: false
        }
    },
    computed: {
        configTitle: function () {
            return "REPET configurator".concat(this.configName);
        },
    },
    methods: {
        getModalBtnName: function (key) {
            return key.concat(" Modal")
        },
        showTEannot: function (){
            console.log('Showing TEannot Page...');
            this.configName = ' - TEannot.cfg';
            this.isAnnotActive = true;
        }
    }
}
</script>

