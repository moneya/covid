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
                            <h3><span class="bold">COVID-19</span> Situation Report</h3>
                            <p>
                                Situation report Data sheet for COVID-19 to track / monitor epidemic rate
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <inertia-link :href="$route('app.console.situation-reports.create')" class="btn btn-primary btn-block btn-lg">
                        <i class="fa fa-plus-circle"></i>
                        Add Case
                    </inertia-link>
                </div>
            </div>
        </template>

        <DataViewer :data="reports" text-on-empty="No report available at this time">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Latest Situation Report</h3>
                </div>
                <div class="table-responsive">
                    <table class="table table-condensed table-hover">
                        <thead>
                        <th>State</th>
                        <th>People Screened<br>Previously</th>
                        <th>People Screened<br>in Last 24Hrs</th>
                        <th>Cases<br>lab Confirmed</th>
                        <th>Cases<br>on admission</th>
                        <th>Discharge</th>
                        <th>Deaths</th>
                        </thead>
                        <tbody>
                        <tr v-for="(report, index) in reports" :key="index">
                            <td>
                                {{report.state.name}}
                            </td>
                            <td>
                                {{report.screened.previously}}
                            </td>
                            <td>
                                {{report.screened.last24}}
                            </td>
                            <td>
                                {{report.confirmedCount}}
                            </td>
                            <td>
                                {{report.asymptomaticCount}}
                            </td>
                            <td>
                                {{report.dischargedCount}}
                            </td>
                            <td>
                                {{report.deathCount}}
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