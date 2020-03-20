<template>
    <div class="tab-pane" :class="{'active' : active}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FormWizardTab",
        props: {
            title: {
                type: String,
                required: true
            },
            onComplete: {
                type: Function,
                required: true
            }
        },
        data(){
            return {
                active: false
            }
        },
    }
</script>

<style scoped>

</style>