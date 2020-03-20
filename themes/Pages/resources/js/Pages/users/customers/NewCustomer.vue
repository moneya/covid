<template>
    <App>
        <template #page-header>
            <div class="bg-dark m-b-30">
                <div class="container">
                    <div class="row p-b-60 p-t-60">

                        <div class="col-md-6 text-white p-b-30">
                            <div class="media">
                                <div class="avatar savatar mr-3">
                                    <InertiaLink :href="$route('backend.scrud.users.customers')"
                                                 class="btn btn-white-translucent">
                                        <i class="mdi mdi-arrow-left"></i>
                                    </InertiaLink>
                                </div>
                                <div class="media-body">
                                    <h4>New Customer</h4>
                                    <p class="opacity-75">
                                        Create a new customer
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-6 text-white ">

                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div class="row">
            <div class="col-lg-12">
                <!--widget card begin-->
                <div class="card m-b-30 bg-light">
                    <div class="card-header">
                        <h5 class="m-b-0">
                            Account Information
                        </h5>
                        <p class="m-b-0 opacity-50">
                            Customer's authentication data
                        </p>
                    </div>
                    <div class="card-body ">
                        <div class="form-row">
                            <div class="form-group floating-label col-md-6">
                                <label>Display Name</label>
                                <input type="text"
                                       v-model="forms.customer.display_name"
                                       placeholder="Display Name"
                                       class="form-control ">
                            </div>
                            <div class="form-group floating-label col-md-6">
                                <label>Email</label>
                                <input type="email"
                                       v-model="forms.customer.email"
                                       class="form-control"
                                       placeholder="Email">
                            </div>

                        </div>
                    </div>
                </div>

                <div class="card m-b-30 bg-light">
                    <div class="card-header">
                        <h5 class="m-b-0">
                            Bio Data
                        </h5>
                        <p class="m-b-0 opacity-50">
                            Customer - KYC
                        </p>
                    </div>
                    <div class="card-body ">
                        <div class="form-row">
                            <div class="form-group floating-label col-md-6">
                                <label>First Name</label>
                                <input type="text" placeholder="First Name"
                                       v-model="forms.customer.bioData.first_name"
                                       class="form-control">
                            </div>
                            <div class="form-group floating-label col-md-6">
                                <label>Last Name</label>
                                <input type="text" class="form-control"
                                       v-model="forms.customer.bioData.last_name"
                                       placeholder="Last Name">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group floating-label col-md-4">
                                <label>Date of Birth</label>
                                <input type="text"
                                       placeholder="Date of birth"
                                       v-model="forms.customer.bioData.date_of_birth"
                                       v-datepicker
                                       class="form-control">
                            </div>
                            <div class="form-group floating-label col-md-4">
                                <label>Phone</label>
                                <input type="text" class="form-control"
                                       v-model="forms.customer.bioData.phone"
                                       placeholder="Phone">
                            </div>
                            <div class="form-group floating-label col-md-4">
                                <label>Mobile</label>
                                <input type="text" class="form-control"
                                       v-model="forms.customer.bioData.mobile"
                                       placeholder="Mobile">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="m-b-45">
                    <button type="button" @click="submitCustomerForm" class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </App>
</template>

<script>
    import App from "../../../Layouts/App";
    export default {
        name: "NewCustomer",
        components: {App},
        data(){
            return {
                forms : {
                    customer : {
                        display_name : '',
                        email : '',
                        bioData : {
                            first_name : '',
                            last_name : '',
                            date_of_birth : '',
                            phone : '',
                            mobile : '',
                        }
                    }
                }
            }
        },
        methods : {
            submitCustomerForm(){
                this.$inertia.post(this.$route('backend.scrud.users.customers'), this.forms.customer);
            }
        }
    }
</script>
