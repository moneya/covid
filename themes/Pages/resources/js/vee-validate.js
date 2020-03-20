import Vue from 'vue'
import { extend } from 'vee-validate';
import { ValidationProvider } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);

extend('verify-store-name', value => {
    return new Promise((resolve) => {
        window.axios.get('/api/stores/verify-store-name', {
            params: {
                name: value
            }
        }).then((response) => {
            resolve({
                valid: !response.data.exists
            });
        });
    });
});