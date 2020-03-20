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
                                    <h4>Customers</h4>
                                    <p class="opacity-75">
                                        showing {{customers.length}}
                                        Record(s)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 text-white ">

                            <div class="text-md-right">
                                <inertia-link :href="$route('backend.scrud.users.newcustomerpage')"
                                              class="btn btn-outline-light">
                                    <i class="mdi mdi-plus"></i>
                                    Add Customer
                                </inertia-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <DataViewer :data="customers.data">
            <div class="card">
                <div class="table-responsive" style="overflow: initial">
                    <!-- Projects table -->
                    <table class="table align-items-center table-flush table-hover">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(customer, index) in customers.data">
                            <td>{{index + 1}}</td>
                            <td>{{customer.displayName}}</td>
                            <td></td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Actions
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <inertia-link class="dropdown-item" method="post"
                                                      :data="{ id: customer.id }"
                                                      :href="$route('backend.scrud.users.delete')">
                                            Delete
                                        </inertia-link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DataViewer>
    </App>
</template>

<script>
    import App from '../../../Layouts/App';
    import DataViewer from "../../../common/DataViewer";

    export default {
        name: "Index",
        data(){
            return {
                forms : {
                    customer: {
                        id: null,
                        name: '',
                        published: false
                    }
                }
            }
        },
        components: {
            DataViewer,
            App,
        },
        props: ['customers'],
        methods : {

        }
    }
</script>

