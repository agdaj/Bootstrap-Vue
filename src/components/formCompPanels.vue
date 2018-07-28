<!--
Written by: Jireh Agda    July 26, 2018

Purpose: Form component showcase using embedded Bootstrap-Vue Input validation

Change logs:

Notes:

-->

<template>
    <div id="annotFormPanels">
        <b-form @submit="onSubmitAnnot" @reset="onResetAnnot">
            <b-card-group columns class="my-3 mx-2" align="left">
                <b-card v-for="(group, gKey) in annotConfig"
                        :key="group.id"
                        v-bind:header="gKey">
                    <b-form-group v-for="(value,key) in group"
                                  :key="value.id"
                                  v-bind:id="getGroupAnnotID(key)"
                                  horizontal
                                  label-size="sm"
                                  :label-cols="6"
                                  v-bind:label="key"
                                  v-bind:label-for="getInputAnnotID(key)">
                        <b-form-input v-if="isNumberInput(key)"
                                      v-bind:id="getInputAnnotID(key)"
                                      type="number"
                                      size="sm"
                                      required
                                      v-model="annotConfig[gKey][key]"
                                      v-bind:placeholder="value">
                        </b-form-input>
                        <b-form-input v-else
                                      v-bind:id="getInputAnnotID(key)"
                                      type="text"
                                      size="sm"
                                      required
                                      v-model="annotConfig[gKey][key]"
                                      v-bind:placeholder="value">
                        </b-form-input>
                    </b-form-group>
                </b-card>
            </b-card-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
import { annotMixin } from './mixins/repetMixins.js';

export default {
    name: 'formCompPanels',
    mixins: [annotMixin]
}
</script>
