<template>
    <div class="panel">
        <ul class="nav nav-tabs nav-tabs-linetriangle">
            <li :class="{'active text-primary' : tabComponent.$data.active}"
                v-for="(tabComponent, index) in children">
                <a @click="clickToTabComponent(index)"
                   :class="{'text-primary' : tabComponent.$data.active}"
                   href="javascript:void(0);">
                    <i class="fa" :class="{'fa-circle' : tabComponent.$data.active, 'fa-circle-o' : !tabComponent.$data.active}"></i>
                    {{tabComponent.title}}
                </a>
            </li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>

        <div class="panel-footer m-t-20">
            <button class="btn btn-sm btn-white" v-show="selectedIndex > 0" @click="previousTab">Previous</button>
            <button class="btn btn-sm btn-primary" @click="nextTab">
                {{selectedIndex < children.length - 1 ? 'Next' : 'Finish'}}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FormWizard",
        data(){
            return {
                children: [],
                selectedIndex: 0,
                activatedTabComponent: null
            }
        },
        props: {
            allowTabSelection: {
                default: false,
                type: Boolean
            },
            onFinish: {
                type: Function,
                required: false
            }
        },
        methods: {
            activateTab(tabComponent){
                this.children.forEach((tabComp)=>{
                    tabComp.$data.active = false;
                });
                tabComponent.$data.active = true;
                this.activatedTabComponent = tabComponent;
            },
            clickToTabComponent(index){
                if(this.allowTabSelection)
                this.selectIndex(index);
            },
            nextTab(){
                const newIndex = this.selectedIndex + 1;
                const totalChildren = this.children.length;

                if(newIndex <= totalChildren -1){
                    const prevTabComponent = this.$children[this.selectedIndex];
                    const response = prevTabComponent.onComplete();

                    // activate new tab only after the current tab's onComplete function returns true
                    if(response instanceof Promise){
                        response.then((result)=>{
                            if(result)this.selectIndex(newIndex);
                        })
                    } else if(response){
                        this.selectIndex(newIndex);
                    }
                }

                if(newIndex === totalChildren) this.finish();
            },
            previousTab(){
                const newIndex = this.selectedIndex - 1;

                if(newIndex >= 0){
                    this.selectIndex(newIndex);
                }
            },
            selectIndex(index){
                this.selectedIndex = index;
            },
            finish(){
                this.onFinish();
            }
        },
        mounted(){
            this.children = this.$children;
            this.activateTab(this.$children[0]);
        },
        watch: {
            selectedIndex(index){
                const tabComponent = this.$children[index];

                this.activateTab(tabComponent)
            }
        }
    }
</script>

<style scoped>

</style>