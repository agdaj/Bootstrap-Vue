<!--
Written by: Jireh Agda    July 26, 2018

Purpose: A showcase component with Bootstrap-Vue modals

Change logs:

Notes:

-->

<template>
    <div id="modals">
		<b-btn class="my-1 mx-1"
			   v-b-modal="'testModal'">Test Modal</b-btn>

		<b-modal title="Test Modal"
				 id="testModal"
				 header-bg-variant="dark"
				 header-text-variant="light"
				 footer-bg-variant="dark"
				 footer-text-variant="light"
				 size="lg"
				 align="left">
            <b-jumbotron>
                <template slot="header">
                    {{ jumbotronHeader }}
                </template>
			    <template slot="lead">
				    {{ jumbotronLead }}
			    </template>
			    <hr class="my-4">
			    <p>
				    It uses utility classes for typography and spacing to space content
				    out within the larger container...
			    </p>
			    <b-btn variant="primary" href="#">Do Something</b-btn>
			    <b-btn variant="success" href="#">Do Something Else</b-btn>
			</b-jumbotron>
		</b-modal>
    </div>
</template>

<script>
export default {
    name: 'modalsPage',
    data () {
        return {
            jumbotronHeader: 'Bootstrap Vue',
            jumbotronLead: 'This is a simple hero unit, a simple jumbotron-style component for \
				calling extra attention to featured content or information.'
        }
    }
}
</script>

