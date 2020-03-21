<template>
    <App>
        <template #page-header>
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-lg-8">
                    <div class="card card-transparent">
                        <div class="card-header ">
                            <div class="card-title">Network Data</div>
                        </div>
                        <div class="card-body">
                            <h3><span class="bold">COVID-19</span> Case Map</h3>
                            <p>
                                Case data logs
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="btn-group btn-group-justified">
                        <inertia-link :href="$route('app.console.cases.create')" class="btn btn-primary btn-lg">
                            <i class="fa fa-plus-circle"></i>
                            Add Case Map
                        </inertia-link>

                        <a target="_blank" :href="$route('app.console.cases.networkmap')" class="btn btn-complete btn-lg">
                            <i class="fa fa-map"></i>
                            View Map
                        </a>
                    </div>

                </div>
            </div>
        </template>
    </App>
</template>

<script>
    import App from "../../Layouts/App";
    export default {
        name: "Index",
        components: {App}
    }
</script>

<style scoped>

</style>