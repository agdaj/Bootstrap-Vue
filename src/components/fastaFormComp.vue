<!--
Written by: Jireh Agda    July 31, 2018

Purpose: Vee-Validate Custom Rule Showcase for FASTA content form validation

Change logs:

Notes:

-->

<template>
    <div class="container">
        <b-form id="fastaForm" @submit="onSubmitFasta" @reset="onResetFasta">
            <b-form-group id="fastaFormGroup"
                          label="FASTA Input"
                          label-for="fastaFormInput"
                          horizontal
                          :label-cols="4">
                <b-form-textarea id="fastaFormInput"
                              name="FASTA Input"
                              v-model="fastaInput"
                              v-bind:state="getState('FASTA Input')"
                              v-validate="'required|isFasta'"
                              placeholder="Enter FASTA Data"
                              :rows="15"
                              :max-rows="15">
                </b-form-textarea>
                <span class="formFeedback" v-for="error in errors.collect('FASTA Input')"
                                           v-bind:key="error.id">{{ error }}<br></span>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
import { fastaMixin } from './mixins/fastaMixin.js';

/* Create custom rule and extend Validator */
import { Validator } from 'vee-validate';
import { fastaRule } from './rules/customRules.js'

Validator.extend('isFasta', fastaRule);

export default {
    name: 'fastaFormComp',
    mixins: [fastaMixin],
    methods: {
        getState (fieldName) {
            return this.errors.first(fieldName) ? false : null
        }
    }
}

/*
Example INPUT!
>HELLO
ACTG- ACTG
AAAAAAAAAAAAAAAAAAAAAAAAA
>hello
actg- act

>HELLOĀ
ACTG- ACTGA

AAAAAAAAAAAAAAAAAAAAAAAAA

>hello2
actg- actgAs
*/
</script>

<style lang="scss">
// Customize feedback text colour/size
.formFeedback {
    color: #FF0000;
    font-size: 0.75em;
}
</style>