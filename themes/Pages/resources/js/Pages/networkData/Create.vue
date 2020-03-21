<template>
    <App>
        <template #page-header>
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-lg-9">
                    <div class="card card-transparent">
                        <div class="card-header ">
                            <div class="card-title">Network Data</div>
                        </div>
                        <div class="card-body">
                            <h3><span class="bold">COVID-19</span> Add Case Mapping</h3>
                            <p>
                                Log new case and map data to network
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <button class="btn btn-primary btn-block btn-lg"
                            @click="submitData">
                        <i class="fa fa-cloud-upload"></i>
                        Submit Data
                    </button>
                </div>
            </div>
        </template>

        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Case Data</h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group-attached">
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group form-group-default required">
                                        <label>Gender:</label>
                                        <select v-model="formData.gender" class="form-control form-control-sm">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group form-group-default required">
                                        <label>Age:</label>
                                        <input type="number" v-model="formData.age" class="form-control form-control-sm">
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="form-group form-group-default required">
                                        <label>Status:</label>
                                        <select v-model="formData.status" class="form-control form-control-sm">
                                            <option v-for="(val, prop) in caseStatuses" :value="val">{{prop}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row m-t-20">
                            <div class="col-12">
                                <label for="">Details:</label>
                                <textarea v-summernote v-model="formData.details"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card card-transparent">
                    <div class="card-header">
                        <h3 class="card-title">Case Mapping</h3>
                    </div>
                    <div class="card-body">
                        <div class="">
                            <button class="btn btn-sm btn-block btn-default"
                                    data-toggle="modal" data-target="#caseMappingDataModal">
                                Add Case Mapping
                            </button>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade stick-up disable-scroll" id="caseMappingDataModal" tabindex="-1" role="dialog" aria-labelledby="modalSlideUpLabel" aria-hidden="false">
                            <div class="modal-dialog ">
                                <div class="modal-content-wrapper">
                                    <div class="modal-content">
                                        <div class="modal-header clearfix text-left">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                                <i class="pg-close fs-14"></i>
                                            </button>
                                            <h5>Case <span class="semi-bold">Map Data</span></h5>
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-group form-group-sm m-b-20">
                                                <label for="">Source:</label>
                                                <input type="text" v-typeahead="{
                                                localStore: mapping_sources
                                                }" v-model="mappingFormData.source"
                                                       @input="suggestionSelected"
                                                       class="form-control">
                                            </div>

                                            <div class="form-group form-group-default form-group-sm m-b-20">
                                                <label for="">Source Type:</label>
                                                <select v-model="mappingFormData.type" class="form-control">
                                                    <option v-for="(val, prop) in sourceTypes" :value="val">{{prop}}</option>
                                                </select>
                                            </div>

                                            <div class="">
                                                <button class="btn btn-primary btn-block"
                                                        :disabled="!mappingFormData.type || !mappingFormData.source"
                                                        @click="addCaseMap">
                                                    Add Data
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                        </div>
                        <!-- /.modal-dialog -->
                    </div>

                    <div class="card-body">
                        <DataViewer text-on-empty="No case mapping have been added!" :data="formData.caseMaps">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                    <th style="width: 40%;">Source</th>
                                    <th>Type</th>
                                    <th></th>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(mapData, index) in formData.caseMaps" :key="index">
                                        <td>{{mapData.source}}</td>
                                        <td>{{mapData.type}}</td>
                                        <td>
                                            <button class="btn btn-xs btn-danger" @click="removeMapData(index)">
                                                <i class="fa fa-remove"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </DataViewer>
                    </div>
                </div>
            </div>
        </div>

    </App>
</template>

<script>
    import App from "../../Layouts/App";
    import DataViewer from "../../common/DataViewer";
    export default {
        name: "Create",
        components: {DataViewer, App},
        props: {
            caseStatuses: Object,
            sourceTypes: Object,
            mapping_sources: Array,
            mapping_data: Array,
        },
        data(){
            return {
                formData: {
                    age: null,
                    status: null,
                    gender: null,
                    details: '',
                    caseMaps: []
                },
                mappingFormData: {
                    source: null,
                    type: null
                }
            }
        },
        methods: {
            submitData(){
                window.System.setActivityMessageText('Submitting data');

                this.$inertia.post(this.$route('app.console.cases.save', this.formData), {
                    preserveState: false
                });
            },
            addCaseMap(){
                this.formData.caseMaps.push(_.clone(this.mappingFormData));
                this.resetMappingData();
                $('#caseMappingDataModal').modal('hide');
            },
            resetMappingData(){
                this.mappingFormData = {
                    source: null,
                    type: null
                };
            },
            removeMapData(index){
                this.formData.caseMaps.splice(index, 1);
            },
            suggestionSelected(event){
                const suggestion = event.target.value;

                const selected_sourceMap = _.find(this.mapping_data, {source: suggestion});

                if (selected_sourceMap) {
                    this.mappingFormData.type = selected_sourceMap.source_type;
                }
            }

        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>