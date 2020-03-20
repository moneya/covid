<template>
    <form @submit.prevent="addTag">
        <div class="form-group">
            <label for="" class="">{{label || 'Tags'}}</label>
            <div class="input-group mb-3 input-group-sm">
                <input type="text" class="form-control" placeholder=""
                       v-model="data"
                       :aria-label="label || 'Tags'" aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-dark" type="submit"
                            :disabled="!data"
                            id="button-addon2">
                        <i class="mdi mdi-plus"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="m-t-5 form-row d-flex justify-content-lg-start" v-if="tags.length">
            <div class="m-b-5 m-r-5" v-for="(tag, index) in tags">
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="button" class="btn badge btn-info">{{tag}}</button>
                    <button type="button" class="btn btn-danger badge" @click="removeTag(index)">
                        <i class="mdi mdi-trash-can"></i>
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "TagsInput",
        data() {
            return {
                tags: [],
                data: null
            }
        },
        props: ['label', 'value'],
        methods: {
            addTag() {
                if(!this.data) return;
                this.tags.push(this.data);
                this.data = null;
            },
            removeTag(index){
                this.tags.splice(index, 1);
            }
        },
        watch : {
            'tags': function(tags, oldVal){
                this.$emit('input', tags);
            }
        },
        created(){
            if(this.value) this.tags = this.value;
        }
    }
</script>

<style scoped>

</style>