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