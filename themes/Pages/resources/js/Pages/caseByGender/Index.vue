<template>
    <App>
        <template #page-header>
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-lg-9">
                    <div class="card card-transparent">
                        <div class="card-header ">
                            <div class="card-title">Cases (By Gender)</div>
                        </div>
                        <div class="card-body">
                            <h3><span class="bold">COVID-19</span> <i class="fa fa-globe"></i> Gender Statistics</h3>
                            <p>
                                Situation report Data sheet for COVID-19 to track / monitor epidemic rate
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <inertia-link :href="$route('app.console.case-by-gender.create')" class="btn btn-primary btn-block btn-lg">
                        <i class="fa fa-plus-circle"></i>
                        Add Case
                    </inertia-link>
                </div>
            </div>
        </template>

        <DataViewer :data="reports" text-on-empty="No report available at this time">
            <div class="card">
                <div class="card-header">
                    <h5>
                        Gender Epidemic Statistics
                        <span class="bold" v-if="reports.length">{{reports[0].attributes.published_at}}</span>
                    </h5>
                </div>
                <div class="table-responsive">
                    <table class="table table-condensed table-hover">
                        <thead>
                        <th>Gender</th>
                        <th>Cases</th>
                        <th>Total</th>
                        </thead>
                        <tbody>
                        <tr v-for="(report, index) in reports" :key="index">
                            <td>
                                {{report.gender}}
                            </td>
                            <td>
                                {{report.caseCount}}
                            </td>
                            <td>
                                {{report.attributes.overall_cases_count}}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DataViewer>
    </App>
</template>

<script>
    import App from "../../Layouts/App";
    import DataViewer from "../../common/DataViewer";
    export default {
        name: "Index",
        components: {DataViewer, App},
        props: {
            reports: Array
        }
    }
</script>

<style scoped>

</style>