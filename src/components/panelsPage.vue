<!--
Written by: Jireh Agda    July 26, 2018

Purpose: A showcase component with Bootstrap-Vue cards as panels

Change logs:

Notes:

-->

<template>
    <div id="panels">
        <b-card-group columns class="my-3 mx-2" align="left">
			<b-card v-for="(group, gKey) in annotConfig"
					:key="group.id"
					v-bind:header="gKey"
					header-bg-variant="dark"
					header-text-variant="light">

			</b-card>
		</b-card-group>
    </div>
</template>

<script>
import { annotMixin } from './mixins/repetMixins.js';

export default {
    name: 'panelsPage',
    mixins: [annotMixin],
    data () {
        return {
        }
    }
}
</script>