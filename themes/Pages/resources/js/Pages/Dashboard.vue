<template>
    <App>
        <template #page-header>
            <div class="row">
                <div class="col-12">
                    <div class="card card-transparent">
                        <div class="card-header ">
                            <div class="card-title">Dashboard</div>
                        </div>
                        <div class="card-body">
                            <h3>Sometimes small things matter the most in life!</h3>
                            <p>Views are pre-made view ports which comes in handy for HTML5 mobile hybrid apps, These elements help in the navigation of your app with a touch of some cool pre-built animations, see the demo below
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </template>

    </App>
</template>

<script>
    import App from '../Layouts/App';

    export default {
        name: "Dashboard",
        components: {
            App,
        },
    }
</script>

<style scoped>

</style>