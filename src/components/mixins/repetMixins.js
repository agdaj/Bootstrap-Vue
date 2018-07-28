/**
Written by: Jireh Agda    July 26, 2018

Purpose: Vue Mixin to store REPET pipeline form data and methods

Change logs:

Notes:

**/
export const annotMixin = {
    name: 'annotMixin',
    data () {
        return {
            annotConfig: {
                general: {
                    // [repet_env]
                    repet_version: '2.5',
                    repet_host: '<your_MySQL_host>',
                    repet_user: '<your_MySQL_login',
                    repet_pw: '<your_MySQL_password>',
                    repet_db: '<your_MySQL_db>',
                    repet_port: '3306',
                    repet_job_manager: 'SLURM',

                    // [project]
                    project_name: '<your_project_name>',
                    project_dir: '<absolute_path_to_your_project_directory>'
                },
                step_1: {
                    // [prepare_data]
                    chunk_length: '200000',
                    chunk_overlap: '10000',
                    nb_seq_per_batch: '5',
                    make_random_chunks: 'yes',
                },
                parallel_prop: {
                    // [parallelized_jobs]
                    resources: '',
                    tmpDir: '',
                    copy: 'no',
                    clean: 'yes'
                },
                step_2: {
                    // [align_refTEs_with_genome]
                    BLR_blast: 'wu',
                    BLR_sensitivity: '2',
                    RM_engine: 'wu',
                    RM_sensitivity: 's',
                    CEN_blast: 'wu'
                },
                step_3: {
                    // [filter]
                    force_default_values: 'no',
                    BLR: '100',
                    RM: '100',
                    CEN: '100'
                },
                step_4_and_step_5: {
                    // [SSR_detect]
                    RMSSR_engine: 'wu',
                    TRFmaxPeriod: '15'
                },
                step_6: {
                    // [align_other_banks]
                    bankBLRtx: '<bank_of_TE_nucleotide_sequences_such_as_Repbase>',
                    bankBLRx: '<bank_of_TE_amino-acid_sequences_such_as_Repbase>'
                },
                step_7: {
                    // [annot_processing]
                    min_size: '20',
                    join_max_gap_size: '5000',
                    join_max_mismatch_size: '500',
                    join_id_tolerance: '2',
                    join_TEinsert_cov: '0.95',
                    join_overlap: '15',
                    join_minlength_split: '100'
                },
                step_8: {
                    // [export]
                    sequences: 'chromosomes',
                    add_SSRs: 'no',
                    add_tBx: 'no',
                    add_Bx: 'no',
                    rmv_overlapping_annotations: 'no',
                    keep_gff3_files_without_annotations: 'no',
                    gff3_merge_redundant_features: 'no',
                    gff3_compulsory_match_part: 'no',
                    gff3_with_genomic_sequences: 'no',
                    gff3_with_TE_length: 'no',
                    gff3_with_classif_info: 'no',
                    classif_table_name: '<name_of_TEs_table>',
                    gff3_chado: 'no',
                    drop_tables: 'no'
                }
            },
            numberInputs: [
                'repet_version', 'repet_port', 'chunk_length', 'chunk_overlap'
            ]
        }
    },
    methods: {
        getGroupAnnotID: function (key) {
            return "annot_".concat(key)
        },
        getInputAnnotID: function (key) {
            return "in_annot_".concat(key)
        },
        isNumberInput: function (key) {
            return (this.numberInputs.indexOf(key) > -1)
        },
        onSubmitAnnot (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.annotConfig));
        },
        onSubmitAnnot_general (evt) {
            evt.preventDefault();

            this.$validator.validateAll().then((result) => {
		        if (result) {
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
		        }
                else {
        	        alert('Try Again!');
                }
		    });
        },
        onResetAnnot (evt) {
            evt.preventDefault();

            this.annotConfig = {
                general: {
                    // [repet_env]
                    repet_version: '2.5',
                    repet_host: '<your_MySQL_host>',
                    repet_user: '<your_MySQL_login>',
                    repet_pw: '<your_MySQL_password>',
                    repet_db: '<your_MySQL_db>',
                    repet_port: '3306',
                    repet_job_manager: 'SLURM',

                    // [project]
                    project_name: '<your_project_name>',
                    project_dir: '<absolute_path_to_your_project_directory>'
                },
                step_1: {
                    // [prepare_data]
                    chunk_length: '200000',
                    chunk_overlap: '10000',
                    nb_seq_per_batch: '5',
                    make_random_chunks: 'yes',
                },
                parallel_prop: {
                    // [parallelized_jobs]
                    resources: '',
                    tmpDir: '',
                    copy: 'no',
                    clean: 'yes'
                },
                step_2: {
                    // [align_refTEs_with_genome]
                    BLR_blast: 'wu',
                    BLR_sensitivity: '2',
                    RM_engine: 'wu',
                    RM_sensitivity: 's',
                    CEN_blast: 'wu'
                },
                step_3: {
                    // [filter]
                    force_default_values: 'no',
                    BLR: '100',
                    RM: '100',
                    CEN: '100'
                },
                step_4_and_step_5: {
                    // [SSR_detect]
                    RMSSR_engine: 'wu',
                    TRFmaxPeriod: '15'
                },
                step_6: {
                    // [align_other_banks]
                    bankBLRtx: '<bank_of_TE_nucleotide_sequences_such_as_Repbase>',
                    bankBLRx: '<bank_of_TE_amino-acid_sequences_such_as_Repbase>'
                },
                step_7: {
                    // [annot_processing]
                    min_size: '20',
                    join_max_gap_size: '5000',
                    join_max_mismatch_size: '500',
                    join_id_tolerance: '2',
                    join_TEinsert_cov: '0.95',
                    join_overlap: '15',
                    join_minlength_split: '100'
                },
                step_8: {
                    // [export]
                    sequences: 'chromosomes',
                    add_SSRs: 'no',
                    add_tBx: 'no',
                    add_Bx: 'no',
                    rmv_overlapping_annotations: 'no',
                    keep_gff3_files_without_annotations: 'no',
                    gff3_merge_redundant_features: 'no',
                    gff3_compulsory_match_part: 'no',
                    gff3_with_genomic_sequences: 'no',
                    gff3_with_TE_length: 'no',
                    gff3_with_classif_info: 'no',
                    classif_table_name: '<name_of_TEs_table>',
                    gff3_chado: 'no',
                    drop_tables: 'no'
                }
            };

            /* Trick to reset/clear native browser form validation state */
            this.show = false;
            this.$nextTick(() => { this.show = true });
        },
        onResetAnnot_general (evt) {
            evt.preventDefault();

            this.annotConfig.general = {
                    // [repet_env]
                    repet_version: '',
                    repet_host: '',
                    repet_user: '',
                    repet_pw: '',
                    repet_db: '',
                    repet_port: '',
                    repet_job_manager: '',

                    // [project]
                    project_name: '',
                    project_dir: ''
                }

            /* Trick to reset/clear native browser form validation state */
            this.show = false;
            this.$nextTick(() => { this.show = true });
        }
    }
}
