<template>
    <div class="col-12">
        <div class="row">
            <div class="form-group col-12">
                <label class="">{{label || 'Files'}}</label>
                <input type="file" class="form-control form-control-file" placeholder=""
                       ref="file-picker-control" multiple
                       :aria-label="label || 'Files'" aria-describedby="button-addon2">
            </div>
        </div>
        <div class="row">
            <div class="form-row d-flex justify-content-lg-start col-12" v-if="files.length">
                <div class="m-b-5 m-r-5" v-for="(file, index) in files">
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" @click="removeFile(index)"
                                class="btn badge btn-outline-warning">{{file.name}}</button>
                        <button type="button" class="btn btn-warning badge" @click="removeFile(index)">
                            <i class="mdi mdi-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FileUploadInput",
        data() {
            return {
                files: []
            }
        },
        props: ['label', 'value', 'maxFiles'],
        methods: {
            removeFile(index){
                this.files.splice(index, 1);
            },
            addFile(file){
                if(this.maxFiles){
                    if(this.files.length === parseInt(this.maxFiles)){
                        window.System.alert('File upload limit exceeded!', 'Only ' + this.maxFiles + ' files allowed.', 'warning', true);
                        return;
                    }
                }
                this.files.push(file);
            }
        },
        watch : {
            'files': function(files, oldVal){
                if(this.maxFiles == 1) {
                    this.$emit('input', files[0]);
                } else {
                    this.$emit('input', files);
                }
            }
        },
        mounted(){
            const vm  = this;

            function readFile(input) {
                if(input.files.length < 1) return;
                for (var i = 0; i < input.files.length; i++) {
                    vm.addFile(input.files[i])
                }
                $(input).val('');
            }

            $(this.$refs['file-picker-control']).on('change', function () {
                readFile(this);
            });
        }
    }
</script>

<style scoped>

</style>