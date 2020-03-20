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
                                    <h4>Users</h4>
                                    <p class="opacity-75">
                                        showing {{users.length}}
                                        Record(s)
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-6 text-white ">

                            <div class="text-md-right">
                                <button type="button"
                                        class="btn btn-outline-light"
                                        @click="newUser()">
                                    <i class="mdi mdi-plus"></i>
                                    Add User
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade modal-slide-right" id="userModal" tabindex="-1" role="dialog" aria-labelledby="slideRightModalLabel" style="display: none;" aria-hidden="true">
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
                                    {{forms.user.id ? 'Edit User' : 'Add New User'}}
                                </h3>
                                <form @submit.prevent="submitUser">
                                    <div class="form-group">
                                        <label>Name of user:</label>
                                        <input type="text" class="form-control" v-model="forms.user.name">
                                    </div>
                                    <div class="form-group m-b-10">
                                        <label class="cstm-switch">
                                            <input type="checkbox" v-model="forms.user.published"
                                                   class="cstm-switch-input">
                                            <span class="cstm-switch-indicator bg-success "></span>
                                            <span class="cstm-switch-description">Publish</span>
                                        </label>

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
        <DataViewer :data="users.data">
            <div class="card">
                <div class="table-responsive" style="overflow: initial">
                    <!-- Projects table -->
                    <table class="table align-items-center table-flush table-hover">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">Email</th>
                            <th scope="col">Roles</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user, index) in users.data" @click="editUser(user)">
                            <td>{{index + 1}}</td>
                            <td>{{user.displayName}}</td>
                            <td>{{user.email}}</td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DataViewer>
    </App>
</template>

<script>
    import App from '../../Layouts/App';
    import DataViewer from "../../common/DataViewer";

    export default {
        name: "Index",
        data(){
            return {
                forms : {
                    user: {
                        id: null,
                        displayName: '',
                        email: '',
                    }
                }
            }
        },
        components: {
            DataViewer,
            App,
        },
        props: ['users'],
        methods : {
            newUser(){
                this.resetUser();
                $('#userModal').modal('show');
            },
            editUser(cat){
                this.forms.user.name = cat.name;
                this.forms.user.id = cat.id;
                this.forms.user.published = cat.published;

                $('#userModal').modal('show');
            },
            submitUser(){
                this.$inertia.post($route('backend.scrud.users.save'), this.forms.user);
                this.resetUser();
                $('#userModal').modal('hide');
            },
            resetUser(){
                this.forms.user = {
                    id : null,
                    displayName: '',
                    email: '',
                };
            }
        }
    }
</script>

<style>
    tr {
        cursor: pointer;
    }
</style>