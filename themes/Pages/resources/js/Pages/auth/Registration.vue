<template>
    <!-- START PAGE-CONTAINER -->
    <div class="container-fluid full-height ">
        <!-- START PAGE CONTENT WRAPPER -->
        <div class="row full-height">
            <div class="col-lg-9 full-height">
                <div class="lock-container full-height position-relative">
                    <div class="full-height sm-p-t-50 align-items-center d-md-flex">
                        <div class="row full-width">
                            <div class="col-md-8 center-margin">
                                <!-- START Lock Screen Form -->
                                <form id="form-lock" role="form" @submit.prevent="register()">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3 class="text-center m-b-40 text-primary">
                                                <i class="fa fa-cart-plus"></i> OMP
                                            </h3>
                                            <!-- START Form Control -->
                                            <div class="form-group form-group-default required">
                                                <label>Name of Store</label>
                                                <input type="text" class="form-control"
                                                       v-model="formData.storeName"
                                                       placeholder="Enter a name for your store"
                                                       required>
                                            </div>
                                            <div class="form-group form-group-default sm-m-t-30 required">
                                                <label>Email:</label>
                                                <div class="controls">
                                                    <input type="email" v-model="formData.email"
                                                           placeholder="Enter email" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="form-group form-group-default sm-m-t-30 required">
                                                <label>Password</label>
                                                <div class="controls">
                                                    <input type="password" v-model="formData.password"
                                                           placeholder="Enter Password" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="form-group form-group-default sm-m-t-30 required">
                                                <label>Confirm Password</label>
                                                <div class="controls">
                                                    <input type="password" v-model="formData.confirmPassword"
                                                           placeholder="Retype Password to confirm" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-lg btn-primary btn-block">
                                                    Create Store
                                                </button>
                                            </div>
                                            <!-- END Form Control -->
                                        </div>
                                    </div>
                                </form>
                                <!-- END Lock Screen Form -->
                            </div>
                        </div>
                    </div>
                    <!-- END PAGE CONTENT WRAPPER -->
                    <div class="row w-100 position-absolute" style="bottom: 40px;">
                        <div class="col-md-6 center-margin">
                            <div class="text-center">
                                Already have an account?
                                <inertia-link :href="$route('login')" class="bold text-primary">Login here!
                                </inertia-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 full-height reg-background-image padding-0">
                <div class="full-height bg-primary-darker reg-background-cover"></div>
            </div>
        </div>
    </div>
    <!-- END PAGE-CONTAINER -->
</template>

<script>
    export default {
        name: "Registration",
        data(){
            return {
                formData: {
                    storeName: null,
                    email: null,
                    password: null,
                    confirmPassword: null
                }
            }
        },
        methods: {
            register(){
                window.System.setActivityMessageText('Setting up your account...');

                this.$inertia.post(this.$route('register'), this.formData);
            }
        },
        created() {
            window.$script.ready('app', function () {
                setTimeout(function () {
                    window.$.Pages.init();
                    window.System.closePageLoader();
                }, 1000);
            });
        },
        mounted(){
            this.$root.buildPageNotifications(this.$page.notifications);
        },
        watch: {
            '$page.errors' : function(errors){
                this.$root.buildErrorNotifications(errors);
            },
            '$page.notifications' : function(notifications){
                this.$root.buildPageNotifications(notifications);
            }
        },
    }
</script>

<style scoped lang="scss">
    div.reg-background-image {
        background: url(https://loremflickr.com/g/320/600/sales) no-repeat;
        background-size: cover;

        div.reg-background-cover {
            opacity: 0.4;
        }
    }
</style>