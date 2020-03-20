'use strict';
window._ = require('lodash');
window.axios = require('axios');

window.System = Object.assign(window.System || {}, {
    httpHooks : [],
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    },
    modelToFormData(model){
        var formData = new FormData();

        for (var property in model) {
            if (model.hasOwnProperty(property)) {
                if(model[property] === true){
                    formData.append(property, '1');
                } else if(model[property] === false){
                    formData.append(property, '0');
                } else {
                    formData.append(property, model[property]);
                }
            }
        }

        return formData;
    },
    paymentGateway : {
        payWithRave({customerEmail, amount, ref, customerPhone, currency = "NGN", meta = [], paymentCallback}){
            const API_publicKey = "FLWPUBK_TEST-811166c54dcab987acc9b6e0367c3592-X";

            if(!customerEmail) {
                window.System.toast('No email provided', 'warning');
                return;
            }

            function RavePay(){
                var autoReloadOnClose = true;

                var x = getpaidSetup({
                    PBFPubKey: API_publicKey,
                    customer_email: customerEmail,
                    amount: amount,
                    customer_phone: customerPhone,
                    currency: currency,
                    txref: ref,
                    meta: meta,
                    onclose: function() {
                        if(autoReloadOnClose){
                            window.System.activityAlert('please wait...');
                            window.location.href = window.location.pathname;
                        }
                    },
                    callback: function(response) {
                        autoReloadOnClose = false;
                        x.close();// use this to close the modal immediately after payment.

                        paymentCallback(response);
                    }
                });
                console.log('rave', x);
            }

            return new RavePay();
        }
    }
});

(function(){
    let loading;
    let activityMessageText = 'Working...';

    window.System = Object.assign(window.System, {
        setActivityMessageText(text = 'Working...'){
            activityMessageText = text;
        }
    });

    window.$script('https://cdn.jsdelivr.net/npm/sweetalert2@9', function(){
        const Toast = window.Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });

        const Alert = window.Swal.mixin({
            allowOutsideClick: false,
            allowEscapeKey: false,
        });

        const ConfirmModal = window.Swal.mixin({
            showConfirmButton: true,
            showCancelButton: true,
        })

        window.System = Object.assign(window.System, {
            alert(title, content, icon, showConfirmButton = false){
                return Alert.fire({
                    title: title,
                    icon: icon,
                    html: content,
                    showConfirmButton: showConfirmButton,
                });
            },
            toast(message, type = 'info'){
                return Toast.fire({
                    icon: type,
                    html: message
                })
            },
            activityAlert(text){
                let loading_anim = '<div class="progress-circle-indeterminate" data-color="primary"></div>';
                return this.alert(loading_anim, '<p class="text-center text-info">' + text + '</p>');
            },

            confirmModal(message, title = 'Are you sure?', type = 'question'){
                return ConfirmModal.fire({
                    icon: type,
                    html: message,
                    title: title,
                })
            },

        });

        loading = window.System.activityAlert('Loading...');

        window.$script.ready('core', function(){

            window.xhook.before(function(request) {
                var notify = window.Swal.fire({
                    title: '<span class="hint-text"><span class="semi-bold text-primary">' + activityMessageText + '</span>, Please wait...</span>',
                    position: 'top',
                    toast: true,
                    showConfirmButton: false,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    },
                    html: '<div class="progress-circle-indeterminate" data-color="primary"></div>'
                });

                request.xhr.onprogress = function(event){
                    if (event.lengthComputable) {
                        var percentComplete = event.loaded / event.total * 100;
                        notify.update({
                            html: '<input class="progress-circle" data-pages-progress="circle" value="' + percentComplete + '" type="hidden" data-color="primary">'
                        });
                    }
                }
                window.System.httpHooks.push({
                    url : request.url,
                    notify : notify
                });
                window.System.setActivityMessageText();
            });

            window.xhook.after(function(request, response){
                // close the notification
                var hookIndex = _.findIndex(window.System.httpHooks, { 'url': request.url });
                var notify = window.System.httpHooks[hookIndex].notify;
                notify.close();
                window.System.httpHooks.splice(hookIndex, 1);
            });

        });
    });

    window.System = Object.assign(window.System, {
        closePageLoader(){
            loading.close();
        }
    });
}());

window.$script([
    window.location.origin + '/themes/pages/vendors/xhook/xhook.min.js',
    window.location.origin + '/themes/pages/vendors/accounting/accounting.min.js',
    window.location.origin + '/themes/pages/assets/plugins/pace/pace.min.js',
    window.location.origin + '/themes/pages/assets/plugins/jquery/jquery-3.2.1.min.js',
    window.location.origin + '/themes/pages/assets/plugins/modernizr.custom.js',
    window.location.origin + '/themes/pages/assets/plugins/jquery-ui/jquery-ui.min.js',
], 'core');

window.$script.ready('core', function(){
    window.$script([
        window.location.origin + '/themes/pages/assets/plugins/popper/umd/popper.min.js',
        window.location.origin + '/themes/pages/assets/plugins/bootstrap/js/bootstrap.min.js',
        window.location.origin + '/themes/pages/assets/plugins/jquery/jquery-easy.js',
        window.location.origin + '/themes/pages/assets/plugins/jquery-unveil/jquery.unveil.min.js',
        window.location.origin + '/themes/pages/assets/plugins/jquery-ios-list/jquery.ioslist.min.js',
        window.location.origin + '/themes/pages/assets/plugins/jquery-actual/jquery.actual.min.js',
        window.location.origin + '/themes/pages/assets/plugins/jquery-scrollbar/jquery.scrollbar.min.js',
        window.location.origin + '/themes/pages/assets/plugins/summernote/js/summernote.min.js',
        window.location.origin + '/themes/pages/assets/plugins/select2/js/select2.full.min.js',
        window.location.origin + '/themes/pages/assets/plugins/classie/classie.js',
        window.location.origin + '/themes/pages/assets/plugins/switchery/js/switchery.min.js',
        window.location.origin + '/themes/pages/assets/plugins/bootstrap-tag/bootstrap-tagsinput.min.js',
    ], 'core2');
});

window.$script.ready(['core', 'core2'], function() {
    window.$script([
        window.location.origin + '/themes/pages/pages/js/pages.js',
        window.location.origin + '/themes/pages/assets/js/scripts.js',
        window.location.origin + '/themes/pages/vendors/flwpbf-inline.js',
        window.location.origin + '/themes/pages/js/app.js',
    ], 'app');
});