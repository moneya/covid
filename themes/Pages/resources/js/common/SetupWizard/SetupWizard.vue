<template>
    <FormWizard :on-finish="finished">
        <FormWizardTab title="My Store" :on-complete="saveStore">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="form-group form-group-default required">
                            <label>Name of Store</label>
                            <input type="text" v-model="formData.store.name" class="form-control"
                                   placeholder="Enter a name for your store"
                                   required>
                            <span class="hint-text text-info d-block" v-if="formData.store.name.length">
                        Store URL: {{formData.store.name | slugify}}.omp.com
                    </span>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group form-group-default required">
                                    <label>Email</label>
                                    <input type="email" v-model="formData.store.email" class="form-control" required>
                                    <span class="hint-text small-text">An official email address</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group form-group-default required">
                                    <label>Phone</label>
                                    <input type="text" v-model="formData.store.phone" class="form-control" required>
                                    <span class="hint-text small-text">An official contact phone number</span>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="form-group form-group-default required">
                                    <label>Address</label>
                                    <textarea v-model="formData.store.address" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4">
                        <ImageFileUploadPlaceholder label="Logo" v-model="formData.store.logo"></ImageFileUploadPlaceholder>
                    </div>
                </div>
            </div>
        </FormWizardTab>

        <FormWizardTab title="Account Details" :on-complete="()=>{window.alert('completed step');}">
            <div class="row column-seperation">
                <div class="col-md-6">
                    <h3>
                        <span class="semi-bold">Sometimes</span> Small things in life means
                        the most
                    </h3>
                </div>
            </div>
        </FormWizardTab>
    </FormWizard>
</template>

<script>
    import FormWizard from "../FormWizard/FormWizard";
    import FormWizardTab from "../FormWizard/FormWizardTab";
    import ImageFileUploadPlaceholder from "../ImageFileUploadPlaceholder";
    import Vue from 'vue';

    export default {
        name: "SetupWizard",
        components: {ImageFileUploadPlaceholder, FormWizardTab, FormWizard},
        data(){
            return {
                formData: {
                    store: {
                        logo: '',
                        name: '',
                        slug: '',
                        email: '',
                        phone: '',
                        address: '',
                    },
                    accountDetails: {
                        accountNumber: ''
                    }
                }
            }
        },
        methods: {
            saveStore(){
                const vm = this;

                window.System.setActivityMessageText('Setting up your Store....');

                var formData = window.System.modelToFormData(this.formData.store);

                return window.axios.post(window.location.href, formData)
                    .then((response)=>{
                        vm.$root.buildPageNotifications(response.data.notifications);
                    console.log('save store', response.data);

                    return true;
                }).catch((error)=>{
                    console.log('errors', error.response);
                    const errors = error.response.data.errors;
                        vm.$root.buildErrorNotifications(errors);
                    });
            },
            saveAccountDetails(){
                return true;
            },
            finished(){
                this.$emit('finished', true);
            }
        },
        watch: {
            'formData.store.name': function(storeName, oldValue){
                var slugifyFilter = Vue.filter('slugify');

                this.formData.store.slug = slugifyFilter(storeName);
            }
        },
    }
</script>

<style scoped>

</style>