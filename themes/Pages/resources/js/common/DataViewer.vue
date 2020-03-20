<template>
    <div>
        <slot v-if="hasData"></slot>
        <div class="card" v-else>
            <div class="card-header" v-show="title">
                <h3 class="card-title">{{title}}</h3>
            </div>
            <div class="card-body">
                <div class="p-t-40 p-b-40">
                    <h1 class="text-center text-muted">
                        <i class="fa fa-warning text-warning fa-2x"></i>
                    </h1>
                    <h6 class="text-capitalize text-danger text-center">
                        {{textOnEmpty || 'No record found!'}}
                    </h6>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataViewer",
        props: ['data', 'title', 'textOnEmpty'],
        computed:{
            hasData(){
                if(this.data instanceof Array){
                    return this.data.length;
                }
                return !!this.data;
            }
        }
    }
</script>

<style scoped>

</style>