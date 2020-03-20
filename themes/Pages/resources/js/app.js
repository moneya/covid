import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'

require('./vee-validate')
require('./directives')
require('./filters')

Vue.use(InertiaApp);

const app = document.getElementById('app');

Vue.prototype.$route = (...args) => route(...args).url();

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: function(name){
                return import(`./Pages/${name}`).then(module => module.default);
            },
        }
    }),

    mounted(){

    },
    methods : {
        buildErrorNotifications(errors){
            if(!_.keys(errors).length) return;

            var error_message = '<ul class="list-group list-group-flush text-left">';

            for (var property in errors) {
                var errors_on_prop = _.flatten(errors[property]);
                _.each(errors_on_prop, (err)=>{
                    error_message += '<li class="list-group-item py-1">';
                    error_message += err;
                    error_message += '</li>';
                });
            }

            error_message += '</ul>';

            window.System.toast(error_message, 'error');
        },
        buildPageNotifications(notifications){
            if(notifications === undefined) notifications = this.$page.notifications;

            notifications.forEach((notification)=> {

                window.System.toast(notification.message, notification.level)

            });
        },
    }
}).$mount(app);