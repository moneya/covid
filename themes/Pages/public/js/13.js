(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/auth/Registration.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/auth/Registration.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "Registration",
  data: function data() {
    return {
      formData: {
        storeName: null,
        email: null,
        password: null,
        confirmPassword: null
      }
    };
  },
  methods: {
    register: function register() {
      window.System.setActivityMessageText('Setting up your account...');
      this.$inertia.post(this.$route('register'), this.formData);
    }
  },
  created: function created() {
    window.$script.ready('app', function () {
      setTimeout(function () {
        window.$.Pages.init();
        window.System.closePageLoader();
      }, 1000);
    });
  },
  mounted: function mounted() {
    this.$root.buildPageNotifications(this.$page.notifications);
  },
  watch: {
    '$page.errors': function $pageErrors(errors) {
      this.$root.buildErrorNotifications(errors);
    },
    '$page.notifications': function $pageNotifications(notifications) {
      this.$root.buildPageNotifications(notifications);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/auth/Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/auth/Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.reg-background-image[data-v-320b38b2] {\n  background: url(https://loremflickr.com/g/320/600/sales) no-repeat;\n  background-size: cover;\n}\ndiv.reg-background-image div.reg-background-cover[data-v-320b38b2] {\n  opacity: 0.4;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/auth/Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/auth/Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/auth/Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/auth/Registration.vue?vue&type=template&id=320b38b2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/auth/Registration.vue?vue&type=template&id=320b38b2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid full-height " }, [
    _c("div", { staticClass: "row full-height" }, [
      _c("div", { staticClass: "col-lg-9 full-height" }, [
        _c(
          "div",
          { staticClass: "lock-container full-height position-relative" },
          [
            _c(
              "div",
              {
                staticClass:
                  "full-height sm-p-t-50 align-items-center d-md-flex"
              },
              [
                _c("div", { staticClass: "row full-width" }, [
                  _c("div", { staticClass: "col-md-8 center-margin" }, [
                    _c(
                      "form",
                      {
                        attrs: { id: "form-lock", role: "form" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.register()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _vm._m(0),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group form-group-default required"
                              },
                              [
                                _c("label", [_vm._v("Name of Store")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formData.storeName,
                                      expression: "formData.storeName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter a name for your store",
                                    required: ""
                                  },
                                  domProps: { value: _vm.formData.storeName },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formData,
                                        "storeName",
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
                              {
                                staticClass:
                                  "form-group form-group-default sm-m-t-30 required"
                              },
                              [
                                _c("label", [_vm._v("Email:")]),
                                _vm._v(" "),
                                _c("div", { staticClass: "controls" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.formData.email,
                                        expression: "formData.email"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "email",
                                      placeholder: "Enter email",
                                      required: ""
                                    },
                                    domProps: { value: _vm.formData.email },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.formData,
                                          "email",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group form-group-default sm-m-t-30 required"
                              },
                              [
                                _c("label", [_vm._v("Password")]),
                                _vm._v(" "),
                                _c("div", { staticClass: "controls" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.formData.password,
                                        expression: "formData.password"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "password",
                                      placeholder: "Enter Password",
                                      required: ""
                                    },
                                    domProps: { value: _vm.formData.password },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.formData,
                                          "password",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group form-group-default sm-m-t-30 required"
                              },
                              [
                                _c("label", [_vm._v("Confirm Password")]),
                                _vm._v(" "),
                                _c("div", { staticClass: "controls" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.formData.confirmPassword,
                                        expression: "formData.confirmPassword"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "password",
                                      placeholder: "Retype Password to confirm",
                                      required: ""
                                    },
                                    domProps: {
                                      value: _vm.formData.confirmPassword
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.formData,
                                          "confirmPassword",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(1)
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row w-100 position-absolute",
                staticStyle: { bottom: "40px" }
              },
              [
                _c("div", { staticClass: "col-md-6 center-margin" }, [
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _vm._v(
                        "\n                            Already have an account?\n                            "
                      ),
                      _c(
                        "inertia-link",
                        {
                          staticClass: "bold text-primary",
                          attrs: { href: _vm.$route("login") }
                        },
                        [_vm._v("Login here!\n                            ")]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(2)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "text-center m-b-40 text-primary" }, [
      _c("i", { staticClass: "fa fa-cart-plus" }),
      _vm._v(" OMP\n                                        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-lg btn-primary btn-block",
          attrs: { type: "submit" }
        },
        [
          _vm._v(
            "\n                                                Create Store\n                                            "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-3 full-height reg-background-image padding-0" },
      [
        _c("div", {
          staticClass: "full-height bg-primary-darker reg-background-cover"
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/auth/Registration.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/auth/Registration.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_320b38b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=320b38b2&scoped=true& */ "./resources/js/Pages/auth/Registration.vue?vue&type=template&id=320b38b2&scoped=true&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/Pages/auth/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registration_vue_vue_type_style_index_0_id_320b38b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss& */ "./resources/js/Pages/auth/Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_320b38b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_320b38b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "320b38b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/auth/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/auth/Registration.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/auth/Registration.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/auth/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/auth/Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/auth/Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_320b38b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/auth/Registration.vue?vue&type=style&index=0&id=320b38b2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_320b38b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_320b38b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_320b38b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_320b38b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_320b38b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/auth/Registration.vue?vue&type=template&id=320b38b2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/auth/Registration.vue?vue&type=template&id=320b38b2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_320b38b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=320b38b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/auth/Registration.vue?vue&type=template&id=320b38b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_320b38b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_320b38b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);