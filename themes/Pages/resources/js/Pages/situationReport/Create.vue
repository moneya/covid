<template>
    <App>
        <template #page-header>
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-lg-9">
                    <div class="card card-transparent">
                        <div class="card-header ">
                            <div class="card-title">Situation Report</div>
                        </div>
                        <div class="card-body">
                            <h3><span class="bold">COVID-19</span> Upload Situation Report</h3>
                            <p>
                                Data input sheet for COVID-19 to track / monitor epidemic rate
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <button class="btn btn-primary btn-block btn-lg"
                    @click="uploadDataSheet">
                        <i class="fa fa-cloud-upload"></i>
                        Upload Data Sheet
                    </button>
                </div>
            </div>
        </template>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Data Sheet</h3>
                        <div class="card-controls">
                            <input type="text" class="form-control-sm form-control"
                                   placeholder="Date Published:"
                                   v-model="datePublished"
                                   v-datepicker>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-condensed table-hover">
                            <thead>
                            <th style="width: 20%;">State</th>
                            <th>People Screened<br>Previously</th>
                            <th>People Screened<br>in Last 24Hrs</th>
                            <th>Cases<br>lab Confirmed</th>
                            <th>Cases<br>on admission</th>
                            <th>Discharge</th>
                            <th>Deaths</th>
                            <th style="width: 5%;"></th>
                            </thead>
                            <tbody>
                            <tr v-for="(row, index) in rows" :data-key="row.key" :key="row.key">
                                <td>
                                    <select class="form-control form-control-sm" name="state">
                                        <option v-for="state in states" :value="state.id">{{state.state_name}}</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" @blur="validateInput($event)" name="prev_screened" min="0" value="0" class="form-control form-control-sm">
                                </td>
                                <td>
                                    <input type="number" min="0" name="screened_last_24hr"
                                           @blur="validateInput($event)"
                                           value="0" class="form-control form-control-sm">
                                </td>
                                <td>
                                    <input type="number" min="0" value="0"
                                           @blur="validateInput($event)"
                                           name="confirmed" class="form-control form-control-sm">
                                </td>
                                <td>
                                    <input type="number" min="0" value="0"
                                           @blur="validateInput($event)"
                                           name="on_admission" class="form-control form-control-sm">
                                </td>
                                <td>
                                    <input type="number" min="0" value="0"
                                           @blur="validateInput($event)"
                                           name="discharge" class="form-control form-control-sm">
                                </td>
                                <td>
                                    <input type="number" min="0" value="0"
                                           @blur="validateInput($event)"
                                           name="deaths" class="form-control form-control-sm">
                                </td>
                                <td class="padding-0 text-right ">
                                    <button class="btn btn-xs btn-danger m-r-5"
                                            @click="removeRow(index)"
                                            v-show="rows.length > 1">
                                        <i class="fa fa-remove"></i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-xs btn-complete" @click="addRow">
                            <i class="fa fa-plus-circle"></i> Add Row
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </App>
</template>

<script>
    import App from "../../Layouts/App";
    export default {
        name: "Create",
        components: {App},
        props: {
            states: Array
        },
        data(){
            return {
                rows: [],
                datePublished: null
            }
        },
        methods: {
            addRow(count = 1){
                this.rows.push({
                   key: parseInt(Math.random() * 100000 + '')
                });
            },
            removeRow(index){
                this.rows.splice(index, 1);
            },
            uploadDataSheet(){
                const records = this.aggregateData();
                window.System.setActivityMessageText('Uploading data sheet');
                this.$inertia.post(this.$route('app.console.situation-reports.save', {
                    date: this.datePublished,
                    records: records
                }));
            },
            aggregateData(){
                window.System.activityAlert('Aggregating data...')

                var records = [];
                const vm = this;

                this.rows.forEach(function(row){
                    const rowData = vm.collateRowData(row);
                    records.push(rowData);
                });

                return records;
            },
            collateRowData(row){
                const tableRow = $('tr[data-key=' + row.key + ']')[0];
                const vm = this;
                const cells = $(tableRow).children();
                var rowData = {};

                for (var index in cells){
                    if(isNaN(index)) {
                        console.log('cell index', index);
                        continue;
                    }

                    const cell = cells[index];

                    const inputField = $(cell).children().first();

                    if(inputField !== undefined){
                        const value = inputField.val();

                        if(value){
                            rowData[$(inputField).attr('name')] = value;
                        }
                    }
                }

                return rowData;
            },
            validateInput(e){
                const inputCell = e.target;

                if($(inputCell).val() === ''){
                    $(inputCell).val(0);
                }
            }
        },
        mounted(){
            this.addRow();
        }
    }
</script>

<style scoped>

</style>