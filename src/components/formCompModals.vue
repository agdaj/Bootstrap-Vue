<!--
Written by: Jireh Agda    July 26, 2018

Purpose: Form component showcase using vee-validate mechanisms for validation

Change logs:

Notes:

-->

<template>
    <div id="annotFormModals">
        <b-btn-group>
            <b-btn v-for="(group, gKey) in annotConfig"
                   :key="group.id"
                   v-b-modal="getModalBtnName(gKey)">{{ gKey }}</b-btn>
        </b-btn-group>

        <b-form @submit="onSubmitAnnot_general" @reset="onResetAnnot_general">
            <b-modal title="general Form"
                     id="general Modal"
                     :header-bg-variant="'dark'"
                     :header-text-variant="'light'"
                     :footer-bg-variant="'dark'"
                     :footer-text-variant="'light'"
                     align="left">
                <b-form-group v-for="(value,key) in annotConfig.general"
                              :key="value.id"
                              v-bind:id="getGroupAnnotID(key)"
                              horizontal
                              label-size="sm"
                              :label-cols="4"
                              v-bind:label="key"
                              v-bind:label-for="getInputAnnotID(key)">
                    <b-form-input v-if="isNumberInput(key)"
                                  v-bind:id="getInputAnnotID(key)"
                                  size="sm"
                                  v-bind:state="getState(key)"
                                  v-bind:name="key"
                                  v-validate="'required|numeric'"
                                  v-model="annotConfig['general'][key]"
                                  v-bind:placeholder="value">
                    </b-form-input>
                    <b-form-input v-else-if="key === 'repet_pw'"
                                  v-bind:id="getInputAnnotID(key)"
                                  size="sm"
                                  type="password"
                                  v-bind:state="getState(key)"
                                  v-bind:name="key"
                                  v-validate="'required'"
                                  v-model="annotConfig['general'][key]"
                                  v-bind:placeholder="value">
                    </b-form-input>
                    <b-form-input v-else
                                  v-bind:id="getInputAnnotID(key)"
                                  size="sm"
                                  v-bind:state="getState(key)"
                                  v-bind:name="key"
                                  v-validate="'required|alpha'"
                                  v-model="annotConfig['general'][key]"
                                  v-bind:placeholder="value">
                    </b-form-input>
                    <span class="formFeedback">{{ errors.first( key ) }}</span>
                </b-form-group>

                <template slot="modal-footer">
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </template>
            </b-modal>
        </b-form>
    </div>
</template>

<script>
import { annotMixin } from './mixins/repetMixins.js';

export default {
    name: 'formCompModals',
    mixins: [annotMixin],
    data () {
        return {
        }
    },
    methods: {
        getModalBtnName: function (key) {
            return key.concat(" Modal")
        },
        getState: function (key) {
            return this.errors.first(key) ? false : null
        }
    }
}
</script>

<style lang="scss">
// Customize feedback text colour/size
.formFeedback {
    color: #FF0000;
    font-size: 0.75em;
}
</style>