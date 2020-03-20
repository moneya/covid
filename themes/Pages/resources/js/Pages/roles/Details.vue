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
                                    <h4><small class="text-sm text-muted">role:</small> {{role.name}}</h4>
                                    <p class="opacity-75 m-t-0 p-t-0">
                                        Access Control
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-6 text-white text-md-right">
                            <button class="btn btn-outline-light"
                                    data-toggle="modal" data-target="#permissionPickerModal">
                                <i class="mdi mdi-plus"></i>
                                Add Permission
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </template>

        <DataViewer :data="role.permissions" title="Permissions">
            <div class="card">
                <div class="table-responsive" style="overflow: initial">
                    <!-- Projects table -->
                    <table class="table align-items-center table-flush table-hover">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Permission</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(permission, index) in role.permissions">
                            <td>{{index + 1}}</td>
                            <td>{{permission.label}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-body">
                    <button class="btn btn-sm btn-outline-primary"
                    @click="updatePermission()"
                    >Update permissions</button>
                </div>

            </div>
        </DataViewer>

        <PermissionSelector :permissions="permissions" v-model="role.permissions"></PermissionSelector>
    </App>
</template>

<script>
    import App from "../../Layouts/App";
    import DataViewer from "../../common/DataViewer";
    import PermissionSelector from "../../common/PermissionSelector";
    export default {
        name: "Details",
        components: {PermissionSelector, DataViewer, App},
        props: ['role', 'permissions'],
        data(){
            return {
                totalOriginalPermissionsInRole: null
            }
        },
        methods: {
            updatePermission(){
                var role_id = this.role.id;
                var permission_ids = [];

                this.role.permissions.forEach((perm)=>{
                    permission_ids.push(perm.id);
                });

                this.$inertia.post(this.$route('backend.scrud.roles.updatepermission'), {
                    roleId: role_id,
                    permissionIds: permission_ids
                })
            }
        },
    }
</script>

<style scoped>

</style>