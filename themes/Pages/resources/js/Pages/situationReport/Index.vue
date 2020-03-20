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
                            <h3><span class="bold">COVID-19</span> - Situation Report</h3>
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

        <DataViewer>

        </DataViewer>
    </App>
</template>

<script>
    import App from "../../Layouts/App";
    import DataViewer from "../../common/DataViewer";
    export default {
        name: "Index",
        components: {DataViewer, App}
    }
</script>

<style scoped>

</style>