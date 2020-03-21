<template>
    <!-- START HEADER -->
    <div class="header ">
        <!-- START MOBILE SIDEBAR TOGGLE -->
        <a href="#" class="btn-link toggle-sidebar d-lg-none pg pg-menu" data-toggle="sidebar"></a>
        <!-- END MOBILE SIDEBAR TOGGLE -->
        <div class="">
            <div class="brand inline m-l-10 ">
                <img v-if="$page.myStore"
                        :src="$page.myStore.logo"
                        :data-src="$page.myStore.logo"
                        :data-src-retina="$page.myStore.logo"
                     alt="logo"
                     height="50">

                <img src="/themes/pages/assets/img/logo.png" alt="logo" v-else
                     data-src="/themes/pages/assets/img/logo.png"
                     data-src-retina="/themes/pages/assets/img/logo_2x.png" width="78" height="22">
            </div>
            <!-- START NOTIFICATION LIST -->
            <ul class="d-lg-inline-block d-none notification-list no-margin d-lg-inline-block b-grey b-l no-style p-l-30 p-r-20">
                <li class="p-r-10 inline">
                    <a href="#" class="text-primary" data-toggle="dropdown">
                        <i class="fa fa-plus-circle fa-2x" style="vertical-align: sub;"></i>
                        Quick Add...
                    </a>
                    <div class="dropdown-menu dropdown-menu-right profile-dropdown" >
                        <inertia-link :href="$route('app.console.situation-reports.create')" class="dropdown-item">
                            <i class="fa fa-medkit"></i> Situation Report
                        </inertia-link>
                        <a href="#" class="dropdown-item"><i class="fa fa-medkit"></i> Case (by Nationality)</a>
                        <a href="#" class="dropdown-item"><i class="fa fa-medkit"></i> Case (by Gender)</a>
                        <a href="#" class="dropdown-item"><i class="fa fa-medkit"></i> Testing Labs</a>
                        <inertia-link :href="$route('app.console.cases.create')" class="dropdown-item">
                            <i class="fa fa-link"></i> Network Data</inertia-link>
                    </div>
                </li>
            </ul>
            <!-- END NOTIFICATIONS LIST -->
        </div>
        <div class="d-flex align-items-center">
            <!-- START User Info-->
            <div class="pull-left p-r-10 fs-14 font-heading d-lg-block d-none">
                <span class="semi-bold">Hello</span> <span class="text-master">{{$page.auth.user.displayName}}</span>
            </div>
            <div class="dropdown pull-right d-lg-block d-none">
                <button class="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span class="thumbnail-wrapper d32 circular inline">
                          <img src="/themes/pages/assets/img/profiles/avatar.jpg" alt=""
                               data-src="/themes/pages/assets/img/profiles/avatar.jpg"
                               data-src-retina="/themes/pages/assets/img/profiles/avatar_small2x.jpg" width="32" height="32">
                          </span>
                </button>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
                    <a href="#" class="dropdown-item"><i class="pg-settings_small"></i> Settings</a>
                    <a href="#" class="dropdown-item"><i class="pg-outdent"></i> Feedback</a>
                    <a href="#" class="dropdown-item"><i class="pg-signals"></i> Help</a>
                    <a href="#" class="clearfix bg-master-lighter text-danger dropdown-item" @click="logout">
                        <span class="pull-left">Logout</span>
                        <span class="pull-right"><i class="pg-power"></i></span>
                    </a>
                </div>
            </div>
            <!-- END User Info-->
        </div>
    </div>
    <!-- END HEADER -->
</template>

<script>
    export default {
        name: "AppHeader",
        methods: {
            logout() {
                this.$inertia.post('/app/console/logout', {});
            },
        }
    }
</script>

<style scoped>

</style>