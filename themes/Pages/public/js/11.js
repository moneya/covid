(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@inertiajs/inertia-vue/src/app.js":
/*!********************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-vue/src/app.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./node_modules/@inertiajs/inertia-vue/src/link.js");
/* harmony import */ var _remember__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remember */ "./node_modules/@inertiajs/inertia-vue/src/remember.js");




let app = {}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Inertia',
  props: {
    initialPage: {
      type: Object,
      required: true,
    },
    resolveComponent: {
      type: Function,
      required: true,
    },
    transformProps: {
      type: Function,
      default: props => props,
    },
  },
  data() {
    return {
      component: null,
      props: {},
      key: null,
    }
  },
  created() {
    app = this
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].init({
      initialPage: this.initialPage,
      resolveComponent: this.resolveComponent,
      updatePage: (component, props, { preserveState }) => {
        this.component = component
        this.props = this.transformProps(props)
        this.key = preserveState ? this.key : Date.now()
      },
    })
  },
  render(h) {
    if (this.component) {
      if (this.component.layout) {
        const child = h(this.component, {
          key: this.key,
          props: this.props,
        })

        if (typeof this.component.layout === 'function') {
          return this.component.layout(h, child)
        } else {
          return h(this.component.layout, [child])
        }
      } else {
        return h(this.component, {
          key: this.key,
          props: this.props,
        })
      }
    }
  },
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$inertia', { get: () => _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"] })
    Object.defineProperty(Vue.prototype, '$page', { get: () => app.props })
    Vue.mixin(_remember__WEBPACK_IMPORTED_MODULE_2__["default"])
    Vue.component('InertiaLink', _link__WEBPACK_IMPORTED_MODULE_1__["default"])
  },
});


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-vue/src/link.js":
/*!*********************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-vue/src/link.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  functional: true,
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    href: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      default: 'get',
    },
    replace: {
      type: Boolean,
      default: false,
    },
    preserveScroll: {
      type: Boolean,
      default: false,
    },
    preserveState: {
      type: Boolean,
      default: false,
    },
  },
  render(h, { props, data, children }) {
    return h('a', {
      ...data,
      attrs: {
        ...data.attrs,
        href: props.href,
      },
      on: {
        ...(data.on || {}),
        click: event => {
          if (data.on && data.on.click) {
            data.on.click(event)
          }

          if (Object(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["shouldIntercept"])(event)) {
            event.preventDefault()

            _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].visit(props.href, {
              data: props.data,
              method: props.method,
              replace: props.replace,
              preserveScroll: props.preserveScroll,
              preserveState: props.preserveState,
            })
          }
        },
      },
    }, children)
  },
});


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-vue/src/remember.js":
/*!*************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-vue/src/remember.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    if (!this.$options.remember) {
      return
    }

    if (Array.isArray(this.$options.remember)) {
      this.$options.remember = { data: this.$options.remember }
    }

    if (typeof this.$options.remember === 'string') {
      this.$options.remember = { data: [this.$options.remember] }
    }

    if (typeof this.$options.remember.data === 'string') {
      this.$options.remember = { data: [this.$options.remember.data] }
    }

    const stateKey = this.$options.remember.key instanceof Function
      ? this.$options.remember.key()
      : this.$options.remember.key

    const restored = _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].restore(stateKey)

    this.$options.remember.data.forEach(key => {
      if (restored !== undefined && restored[key] !== undefined) {
        this[key] = restored[key]
      }

      this.$watch(key, () => {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].remember(
          this.$options.remember.data.reduce((data, key) => ({ ...data, [key]: this[key] }), {}),
          stateKey
        )
      }, { immediate: true, deep: true })
    })
  },
});


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Layouts/App */ "./resources/js/Layouts/App.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NewCustomer",
  components: {
    App: _Layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      forms: {
        customer: {
          display_name: '',
          email: '',
          bioData: {
            first_name: '',
            last_name: '',
            date_of_birth: '',
            phone: '',
            mobile: ''
          }
        }
      }
    };
  },
  methods: {
    submitCustomerForm: function submitCustomerForm() {
      this.$inertia.post(this.$route('backend.scrud.users.customers'), this.forms.customer);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=template&id=2c5ace84&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=template&id=2c5ace84& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "App",
    {
      scopedSlots: _vm._u([
        {
          key: "page-header",
          fn: function() {
            return [
              _c("div", { staticClass: "bg-dark m-b-30" }, [
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "row p-b-60 p-t-60" }, [
                    _c("div", { staticClass: "col-md-6 text-white p-b-30" }, [
                      _c("div", { staticClass: "media" }, [
                        _c(
                          "div",
                          { staticClass: "avatar savatar mr-3" },
                          [
                            _c(
                              "InertiaLink",
                              {
                                staticClass: "btn btn-white-translucent",
                                attrs: {
                                  href: _vm.$route(
                                    "backend.scrud.users.customers"
                                  )
                                }
                              },
                              [_c("i", { staticClass: "mdi mdi-arrow-left" })]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "media-body" }, [
                          _c("h4", [_vm._v("New Customer")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "opacity-75" }, [
                            _vm._v(
                              "\n                                    Create a new customer\n                                "
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 text-white " })
                  ])
                ])
              ])
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card m-b-30 bg-light" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h5", { staticClass: "m-b-0" }, [
                _vm._v(
                  "\n                        Account Information\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "m-b-0 opacity-50" }, [
                _vm._v(
                  "\n                        Customer's authentication data\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body " }, [
              _c("div", { staticClass: "form-row" }, [
                _c(
                  "div",
                  { staticClass: "form-group floating-label col-md-6" },
                  [
                    _c("label", [_vm._v("Display Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forms.customer.display_name,
                          expression: "forms.customer.display_name"
                        }
                      ],
                      staticClass: "form-control ",
                      attrs: { type: "text", placeholder: "Display Name" },
                      domProps: { value: _vm.forms.customer.display_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.forms.customer,
                            "display_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group floating-label col-md-6" },
                  [
                    _c("label", [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forms.customer.email,
                          expression: "forms.customer.email"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "email", placeholder: "Email" },
                      domProps: { value: _vm.forms.customer.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.forms.customer,
                            "email",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card m-b-30 bg-light" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h5", { staticClass: "m-b-0" }, [
                _vm._v(
                  "\n                        Bio Data\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "m-b-0 opacity-50" }, [
                _vm._v(
                  "\n                        Customer - KYC\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body " }, [
              _c("div", { staticClass: "form-row" }, [
                _c(
                  "div",
                  { staticClass: "form-group floating-label col-md-6" },
                  [
                    _c("label", [_vm._v("First Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forms.customer.bioData.first_name,
                          expression: "forms.customer.bioData.first_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "First Name" },
                      domProps: {
                        value: _vm.forms.customer.bioData.first_name
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.forms.customer.bioData,
                            "first_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group floating-label col-md-6" },
                  [
                    _c("label", [_vm._v("Last Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forms.customer.bioData.last_name,
                          expression: "forms.customer.bioData.last_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Last Name" },
                      domProps: { value: _vm.forms.customer.bioData.last_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.forms.customer.bioData,
                            "last_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c(
                  "div",
                  { staticClass: "form-group floating-label col-md-4" },
                  [
                    _c("label", [_vm._v("Date of Birth")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forms.customer.bioData.date_of_birth,
                          expression: "forms.customer.bioData.date_of_birth"
                        },
                        { name: "datepicker", rawName: "v-datepicker" }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Date of birth" },
                      domProps: {
                        value: _vm.forms.customer.bioData.date_of_birth
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.forms.customer.bioData,
                            "date_of_birth",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group floating-label col-md-4" },
                  [
                    _c("label", [_vm._v("Phone")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forms.customer.bioData.phone,
                          expression: "forms.customer.bioData.phone"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Phone" },
                      domProps: { value: _vm.forms.customer.bioData.phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.forms.customer.bioData,
                            "phone",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group floating-label col-md-4" },
                  [
                    _c("label", [_vm._v("Mobile")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forms.customer.bioData.mobile,
                          expression: "forms.customer.bioData.mobile"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Mobile" },
                      domProps: { value: _vm.forms.customer.bioData.mobile },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.forms.customer.bioData,
                            "mobile",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "m-b-45" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "button" },
                on: { click: _vm.submitCustomerForm }
              },
              [_vm._v("\n                    Submit\n                ")]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/users/customers/NewCustomer.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/users/customers/NewCustomer.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewCustomer_vue_vue_type_template_id_2c5ace84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewCustomer.vue?vue&type=template&id=2c5ace84& */ "./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=template&id=2c5ace84&");
/* harmony import */ var _NewCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewCustomer.vue?vue&type=script&lang=js& */ "./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewCustomer_vue_vue_type_template_id_2c5ace84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewCustomer_vue_vue_type_template_id_2c5ace84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/users/customers/NewCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=template&id=2c5ace84&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=template&id=2c5ace84& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCustomer_vue_vue_type_template_id_2c5ace84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewCustomer.vue?vue&type=template&id=2c5ace84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/users/customers/NewCustomer.vue?vue&type=template&id=2c5ace84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCustomer_vue_vue_type_template_id_2c5ace84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCustomer_vue_vue_type_template_id_2c5ace84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);