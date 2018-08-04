/**
Written by: Jireh Agda    July 31, 2018

Purpose: Vue Mixin to store FASTA form data and methods

Change logs:

Notes:

**/
export const fastaMixin = {
    name: 'fastaMixin',
    data () {
        return {
            fastaInput: '',
            fastaSet: []
        }
    },
    methods: {
        onSubmitFasta (evt) {
            evt.preventDefault();

            this.$validator.validateAll().then((result) => {
		        if (result) {
		            alert('Success!');
		            /*
		            var jsonConfig = JSON.stringify(this.annotConfig.general);

		            var xhttp = new XMLHttpRequest();
		            xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            alert(this.responseText);
                            console.log(jsonConfig);
                        }
                    };

                    xhttp.open("POST", "testArea/test.txt", true);
                    xhttp.setRequestHeader("Content-type", "test/JSON");
                    xhttp.send(jsonConfig);
                    */
		        }
                else {
        	        alert('Try Again!');
                }
		    });
        },
        onResetFasta (evt) {
            evt.preventDefault();

            this.fastaInput = '';

            /* Trick to reset/clear native browser form validation state */
            this.show = false;
            this.$nextTick(() => { this.show = true });
        }
    }
}
