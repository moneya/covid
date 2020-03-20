<template>
    <App>
        <template #page-header>
            <div class="bg-dark m-b-30">
                <div class="container">
                    <div class="row p-b-60 p-t-60">

                        <div class="col-md-6 text-white p-b-30">
                            <div class="media">
                                <div class="avatar avatar mr-3">
                                    <InertiaLink href="/backend" class="btn btn-white-translucent">
                                        <i class="mdi mdi-home "></i>
                                    </InertiaLink>
                                </div>
                                <div class="media-body">
                                    <h4>Access Roles</h4>
                                    <p class="opacity-75 m-t-0 p-t-0">
                                        Access Control System
                                    </p>
                                    <p class="opacity-75 m-t-0 p-t-0" v-if="roles.length">
                                        showing {{roles.length}}
                                        Record(s)
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-6 text-white ">

                            <div class="text-md-right">
                                <button type="button"
                                        class="btn btn-outline-light"
                                        @click="newRole()">
                                    <i class="mdi mdi-plus"></i>
                                    Add Role
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade modal-slide-right" id="insuranceTypeModal" tabindex="-1" role="dialog"
                 aria-labelledby="slideRightModalLabel" style="display: none;" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content ">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div class="p-b-10">
                                <div class="avatar avatar-xl my-auto">
                                    <div class="avatar-title bg-primary rounded-circle">
                                        SB
                                    </div>
                                </div>
                                <h3 class="p-t-20 p-b-40">
                                    {{forms.role.id ? 'Edit Role' : 'Add New Role'}}
                                </h3>
                                <form @submit.prevent="submitRole">
                                    <div class="form-group floating-label m-b-20">
                                        <label>Title:</label>
                                        <input type="text" autofocus class="form-control custom-control" v-model="forms.role.name">
                                    </div>

                                    <button type="submit" class="btn btn-success">
                                        Submit
                                    </button>

                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </template>
        <DataViewer :data="roles">
            <div class="card">
                <div class="table-responsive" style="overflow: initial">
                    <!-- Projects table -->
                    <table class="table align-items-center table-flush table-hover">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(role, index) in roles"
                        @click="$inertia.visit($route('backend.scrud.roles.show', {id : role.id}))"
                        >
                            <td>{{index + 1}}</td>
                            <td>{{role.name}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DataViewer>
    </App>
</template>

<script>

    import DataViewer from "../../common/DataViewer";
    import App from "../../Layouts/App";
    export default {
        name: "Index",
        data(){
            return {
                forms : {
                    role: {
                        name: '',
                    }
                }
            }
        },
        components: {
            App,
            DataViewer
        },
        props: ['roles'],
        methods : {
            newRole(){
                this.resetRole();
                $('#roleModal').modal('show');
            },
            editRole(role){
                this.forms.role.title = role.title;
                this.forms.role.id = role.id;

                $('#roleModal').modal('show');
            },
            submitRole(){
                this.$inertia.post(this.$route('backend.scrud.insurance-types.save'), this.forms.role);
                this.resetRole();
                $('#roleModal').modal('hide');
            },
            resetRole(){
                this.forms.role = {
                    title : '',
                };
            }
        },
    }
</script>

<style scoped>
    tr {
        cursor: pointer;
    }
</style>