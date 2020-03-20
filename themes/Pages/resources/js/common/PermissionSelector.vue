<template>
    <div class="modal fade" id="permissionPickerModal" tabindex="-1" role="dialog" >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body p-0 bg-gray-300">
                    <button type="button" class="close bg-danger" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <div class="form-group floating-label">
                        <label>Enter keywords to search permissions...</label>
                        <input type="text" class="form-control border-none"
                               v-model="search"
                               placeholder="Enter keywords to search permissions...">
                    </div>
                    <DataViewer :data="filteredPermissions">
                        <div class="card bg-transparent">
                            <div class="card-header">
                                <h3 class="card-title">Permissions</h3>
                                <p class="card-subtitle" v-show="selectedPermissions.length">
                                    ({{selectedPermissions.length}} selected)
                                </p>

                                <div class="card-controls">
                                    <button class="btn btn-sm btn-outline-dark" @click="selectAll()">
                                        <i class="mdi mdi-checkbox-marked-circle"></i>
                                        Select All
                                    </button>
                                    <button class="btn btn-sm btn-outline-danger" @click="deSelectAll()">
                                        <i class="mdi mdi-cancel"></i>
                                        Deselect All
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush permissions">
                                    <li class="list-group-item permission"
                                        :key="index"
                                        :class="{'bg-light text-success selected' : isSelectedPermission(permission),
                                        'bg-transparent': !isSelectedPermission(permission)}"
                                        @click="toggleSelection(permission)"
                                        v-for="(permission, index) in filteredPermissions">
                                        {{permission.label}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </DataViewer>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import DataViewer from "./DataViewer";
    export default {
        name: "PermissionSelector",
        components: {DataViewer},
        props: ['permissions', 'value'],
        data(){
            return {
                selectedPermissions: [],
                search: null,
                filteredPermissions: []
            }
        },
        methods: {
            toggleSelection(permission){

                var index = _.findIndex(this.selectedPermissions, {id : permission.id});
                if(index >= 0){
                    this.selectedPermissions.splice(index, 1);
                } else {
                    this.selectedPermissions.push(permission);

                }
            },
            isSelectedPermission(permission){
                return _.findIndex(this.selectedPermissions, {id : permission.id}) >= 0;
            },
            selectAll(){
                this.permissions.forEach((permission)=>{
                    if(!this.isSelectedPermission(permission))
                    this.toggleSelection(permission);
                });
            },
            deSelectAll(){
                this.permissions.forEach((permission)=>{
                    if(this.isSelectedPermission(permission))
                        this.toggleSelection(permission);
                });
            },
            filter(search){
                var filtered = this.permissions;

                if(search.length)
                filtered = _.filter(this.filteredPermissions, function (p) {
                    return p.label.toLowerCase().includes(search.toLowerCase());
                });

                this.filteredPermissions = filtered;
            }
        },
        mounted(){
            this.selectedPermissions = this.value;
            this.filteredPermissions = this.permissions;
        },
        watch: {
            selectedPermissions(permissions, oldVal){
                this.$emit('input', permissions);
            },
            search: _.debounce(function(key, oldVal){
                this.filter(key);
            }, 500)
        }
    }
</script>

<style scoped lang="scss">

    ul.permissions {
        li.permission {
            &:hover {
                background-color: white !important;
                cursor: pointer;
            }
        }
    }

</style>