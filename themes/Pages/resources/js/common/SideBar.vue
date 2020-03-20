<template>
    <!-- BEGIN SIDEBPANEL-->
    <nav class="page-sidebar" data-pages="sidebar">
        <!-- BEGIN SIDEBAR MENU HEADER-->
        <div class="sidebar-header">
            <img src="/themes/pages/assets/img/logo_white.png" alt="logo" class="brand"
                 data-src="/themes/pages/assets/img/logo_white.png"
                 data-src-retina="/themes/pages/assets/img/logo_white_2x.png" width="78" height="22">
            <div class="sidebar-header-controls">
                <button type="button" class="btn btn-xs sidebar-slide-toggle btn-link m-l-20" data-pages-toggle="#appMenu"><i class="fa fa-angle-down fs-16"></i>
                </button>
                <button type="button" class="btn btn-link d-lg-inline-block d-xlg-inline-block d-md-inline-block d-sm-none d-none" data-toggle-pin="sidebar"><i class="fa fs-12"></i>
                </button>
            </div>
        </div>
        <!-- END SIDEBAR MENU HEADER-->
        <!-- START SIDEBAR MENU -->
        <div class="sidebar-menu">
            <!-- BEGIN SIDEBAR MENU ITEMS-->
            <ul class="menu-items">
                <li class="m-t-30">
                    <inertia-link href="/app/console">
                        <span class="title">Dashboard</span>
                    </inertia-link>
                    <span class="icon-thumbnail"><i class="pg-home"></i></span>
                </li>

                <li class="">
                    <inertia-link :href="$route('app.console.situation-reports.index')">
                        <span class="title">Situation Reports</span>
                    </inertia-link>
                    <span class="icon-thumbnail"><i class="fa fa-medkit"></i></span>
                </li>
            </ul>
            <div class="clearfix"></div>
        </div>
        <!-- END SIDEBAR MENU -->
    </nav>
    <!-- END SIDEBAR -->
    <!-- END SIDEBPANEL-->
</template>

<script>
    import Inertia from "@inertiajs/inertia-vue/src/app";
    export default {
        name: "SideBar",
        components: {Inertia}
    }
</script>

<style scoped>

</style>