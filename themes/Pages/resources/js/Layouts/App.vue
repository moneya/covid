<template>
    <div>
        <SideBar v-if="showSidebar"></SideBar>

        <!-- START PAGE-CONTAINER -->
        <div class="page-container ">
            <AppHeader v-if="showHeader"></AppHeader>
            <!-- START PAGE CONTENT WRAPPER -->
            <div class="page-content-wrapper ">
                <!-- START PAGE CONTENT -->
                <div class="content" :style="{paddingLeft : !showSidebar ? '0' : 'null', paddingTop: !showHeader ? '0' : 'null'}">
                    <!-- START JUMBOTRON -->
                    <div class="jumbotron" data-pages="parallax">
                        <div class=" container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0">
                            <div class="inner">
                                <slot name="page-header">
                                    <!-- START BREADCRUMB -->
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li class="breadcrumb-item active">Blank template</li>
                                    </ol>
                                    <!-- END BREADCRUMB -->
                                </slot>
                            </div>
                        </div>
                    </div>

                    <!-- END JUMBOTRON -->
                    <!-- START CONTAINER FLUID -->
                    <div class=" container-fluid  container-fixed-lg">
                        <!-- BEGIN PlACE PAGE CONTENT HERE -->
                        <slot></slot>
                        <!-- END PLACE PAGE CONTENT HERE -->
                    </div>
                    <!-- END CONTAINER FLUID -->
                </div>
                <!-- END PAGE CONTENT -->
               <Footer v-if="showFooter" :style="{left : !showSidebar ? '0' : 'null'}"></Footer>
            </div>
            <!-- END PAGE CONTENT WRAPPER -->
        </div>
        <!-- END PAGE CONTAINER -->
    </div>
</template>

<script>
    import AppHeader from '../common/AppHeader';
    import SideBar from '../common/SideBar';
    import Footer from "../common/Footer";

    export default {
        name: "App",
        components : {
            Footer,
            AppHeader,
            SideBar
        },
        props: {
            showHeader : {
                default: true
            },
            showFooter: {
                default: true
            },
            showSidebar: {
                default: true
            }
        },
        mounted(){
            $('body').addClass('menu-pin menu-behind');
            window.$script.ready('app', function(){
                setTimeout(function(){
                    window.$.Pages.init();
                    window.System.closePageLoader();
                }, 1000)
            });
            this.$root.buildPageNotifications();
        },
        created(){

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

<style scoped>

</style>