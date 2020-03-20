<template>

    <div class="container-fluid full-height ">
        <!-- START PAGE CONTENT WRAPPER -->
        <div class="row full-height">
            <div class="col-lg-9 full-height">
                <div class="lock-container full-height position-relative">
                    <!-- START PAGE CONTENT WRAPPER -->
                    <div class="full-height sm-p-t-50 align-items-center d-md-flex">
                        <div class="row full-width">
                            <div class="col-md-6">
                                <!-- START Lock Screen User Info -->
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="">
                                        <h4 class="text-black-50 no-margin">Monitoring System for</h4>
                                        <h1 class="text-primary no-margin">COVID<span class="bold">-19</span></h1>
                                        <h5 class="text-success">Corona Virus Data Collation System</h5>
                                    </div>
                                </div>
                                <!-- END Lock Screen User Info -->
                            </div>
                            <div class="col-md-6">
                                <!-- START Lock Screen Form -->
                                <form id="form-lock" role="form" @submit.prevent="login()">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <!-- START Form Control -->
                                            <div class="form-group form-group-default sm-m-t-30">
                                                <label>Email:</label>
                                                <div class="controls">
                                                    <input type="text"
                                                           v-model="form.email"
                                                           placeholder="Enter email" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="form-group form-group-default sm-m-t-30">
                                                <label>Password</label>
                                                <div class="controls">
                                                    <input type="password"
                                                           v-model="form.password"
                                                           placeholder="Enter Password" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-lg btn-primary btn-block">Sign In</button>
                                            </div>
                                            <!-- END Form Control -->
                                        </div>
                                    </div>
                                </form>
                                <!-- END Lock Screen Form -->
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
        name: "Login",
        data() {
            return {
                form: {
                    email: null,
                    password: null,
                },
            }
        },
        created(){
            window.$script.ready('app', function(){
                setTimeout(function(){
                    window.$.Pages.init();
                    window.System.closePageLoader();
                }, 1000)
            });
        },
        beforeDestroy(){
            // $('body').removeClass('jumbo-page')
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
        methods: {
            login(){
                window.System.setActivityMessageText('Signing in!');
                this.$inertia.post(this.$route('login'), this.form)
            }
        }
    }
</script>

<style scoped lang="scss">
    div.reg-background-image {
        background: url(https://loremflickr.com/g/320/600/health) no-repeat;
        background-size: cover;

        div.reg-background-cover {
            opacity: 0.4;
        }
    }
</style>