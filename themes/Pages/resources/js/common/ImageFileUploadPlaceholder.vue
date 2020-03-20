<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{label || 'Upload Image'}}</h3>
        </div>
        <div class="card-body" style="height: 200px">
            <img :src="imgSrc" alt="upload image" class="">
        </div>
        <div class="card-footer">
            <input type="file" class="" ref="image-picker-control" accept="image/jpeg, image/png, image/jpg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageFileUploadPlaceholder",
        data(){
            return {
                imgSrc: '/themes/pages/assets/img/placeholder.svg'
            }
        },
        props: ['label', 'value'],
        mounted() {
            var vm = this;

            if(this.value && (this.value != null)){
                this.imgSrc = this.value;
            }

            function readFile(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        vm.imgSrc = e.target.result;
                        vm.$emit('input', input.files[0]);
                    };

                    reader.readAsDataURL(input.files[0]);
                }
            }

            $(this.$refs['image-picker-control']).on('change', function () {
                readFile(this);
            });
        }
    }
</script>


<style scoped lang="scss">
    div.card {
        div.card-body {
            img {
                object-fit: cover;
                width: 100%;
                max-height: 100%;
            }
        }
    }

</style>