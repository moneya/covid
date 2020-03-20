import Vue from 'vue'

Vue.directive('tagsinput', {
    // When the bound element is inserted into the DOM...
    bind: function (el, binding, vnode) {
        setTimeout(function () {
            $(el).tagsinput();
        }, 500);

        $(el).change(function(e){
            // console.log('tags input', e.target.value);
            vnode.elm.dispatchEvent(new CustomEvent('input'));
        });
    },
});

Vue.directive('datepicker', {
    // When the bound element is inserted into the DOM...
    bind: function (el, binding, vnode) {

        window.$script.ready('app', function(){
            $(el).datepicker({
                format: 'yyyy-mm-dd'
            }).on('changeDate', (e)=>{
                vnode.elm.dispatchEvent(new CustomEvent('input'));
            });
        });
    },
});

Vue.directive('summernote', {
    // When the bound element is inserted into the DOM...
    bind: function (el, binding, vnode) {
        setTimeout(()=>{
            $(el).summernote({
                height: 300,
                onChange: function(contents, $editable) {
                    $(vnode.elm).val(contents);
                    vnode.elm.dispatchEvent(new CustomEvent('input'));
                }
            });
        }, 500);
    },
});


Vue.directive('payWithRave', {
    bind: function (el, binding, vnode) {
        window.$script.ready('app', function(){
            // const API_publicKey = "FLWPUBK_TEST-811166c54dcab987acc9b6e0367c3592-X";
            //
            // function payWithRave() {
            //
            //     var autoReloadOnClose = true;
            //
            //     var x = getpaidSetup({
            //         PBFPubKey: API_publicKey,
            //         customer_email: binding.value.customerEmail,
            //         amount: binding.value.amount,
            //         customer_phone: binding.value.customerPhone,
            //         currency: binding.value.currency || "NGN",
            //         txref: binding.value.ref,
            //         meta: binding.value.meta,
            //         onclose: function() {
            //             if(autoReloadOnClose){
            //                 window.System.activityAlert('please wait...');
            //                 window.location.href = window.location.pathname;
            //             }
            //         },
            //         callback: function(response) {
            //             autoReloadOnClose = false;
            //             x.close();// use this to close the modal immediately after payment.
            //
            //             binding.value.callback(response);
            //
            //         }
            //     });
            //     console.log('rave', x);
            // }

            $(el).click(function () {
                window.System.paymentGateway.payWithRave({
                    customerEmail: binding.value.customerEmail,
                    currency: binding.value.currency || "NGN",
                    meta: binding.value.meta,
                    amount: binding.value.amount,
                    customerPhone: binding.value.customerPhone,
                    ref: binding.value.ref,
                    paymentCallback: binding.value.callback
                });
                // new payWithRave();
            })
        });
    }
});