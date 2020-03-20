(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/situationReport/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/situationReport/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layouts/App */ "./resources/js/Layouts/App.vue");
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
  name: "Create",
  components: {
    App: _Layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    states: Array
  },
  data: function data() {
    return {
      rows: [],
      datePublished: null
    };
  },
  methods: {
    addRow: function addRow() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.rows.push({
        key: parseInt(Math.random() * 100000 + '')
      });
    },
    removeRow: function removeRow(index) {
      this.rows.splice(index, 1);
    },
    uploadDataSheet: function uploadDataSheet() {
      var records = this.aggregateData();
      window.System.setActivityMessageText('Uploading data sheet');
      this.$inertia.post(this.$route('app.console.situation-reports.save', {
        date: this.datePublished,
        records: records
      }));
    },
    aggregateData: function aggregateData() {
      window.System.activityAlert('Aggregating data...');
      var records = [];
      var vm = this;
      this.rows.forEach(function (row) {
        var rowData = vm.collateRowData(row);
        records.push(rowData);
      });
      return records;
    },
    collateRowData: function collateRowData(row) {
      var tableRow = $('tr[data-key=' + row.key + ']')[0];
      var vm = this;
      var cells = $(tableRow).children();
      var rowData = {};

      for (var index in cells) {
        if (isNaN(index)) {
          console.log('cell index', index);
          continue;
        }

        var cell = cells[index];
        var inputField = $(cell).children().first();

        if (inputField !== undefined) {
          var value = inputField.val();

          if (value) {
            rowData[$(inputField).attr('name')] = value;
          }
        }
      }

      return rowData;
    },
    validateInput: function validateInput(e) {
      var inputCell = e.target;

      if ($(inputCell).val() === '') {
        $(inputCell).val(0);
      }
    }
  },
  mounted: function mounted() {
    this.addRow();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/situationReport/Create.vue?vue&type=template&id=9983a57c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/situationReport/Create.vue?vue&type=template&id=9983a57c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
              _c(
                "div",
                {
                  staticClass:
                    "row d-flex justify-content-between align-items-center"
                },
                [
                  _c("div", { staticClass: "col-lg-9" }, [
                    _c("div", { staticClass: "card card-transparent" }, [
                      _c("div", { staticClass: "card-header " }, [
                        _c("div", { staticClass: "card-title" }, [
                          _vm._v("Situation Report")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("h3", [
                          _c("span", { staticClass: "bold" }, [
                            _vm._v("COVID-19")
                          ]),
                          _vm._v(" - Upload Situation Report")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                            Data input sheet for COVID-19 to track / monitor epidemic rate\n                        "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-block btn-lg",
                        on: { click: _vm.uploadDataSheet }
                      },
                      [
                        _c("i", { staticClass: "fa fa-cloud-upload" }),
                        _vm._v(
                          "\n                    Upload Data Sheet\n                "
                        )
                      ]
                    )
                  ])
                ]
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h3", { staticClass: "card-title" }, [_vm._v("Data Sheet")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-controls" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.datePublished,
                      expression: "datePublished"
                    },
                    { name: "datepicker", rawName: "v-datepicker" }
                  ],
                  staticClass: "form-control-sm form-control",
                  attrs: { type: "text", placeholder: "Date Published:" },
                  domProps: { value: _vm.datePublished },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.datePublished = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                { staticClass: "table table-condensed table-hover" },
                [
                  _c("thead", [
                    _c("th", { staticStyle: { width: "20%" } }, [
                      _vm._v("State")
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v("People Screened"),
                      _c("br"),
                      _vm._v("Previously")
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v("People Screened"),
                      _c("br"),
                      _vm._v("in Last 24Hrs")
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v("Cases"),
                      _c("br"),
                      _vm._v("lab Confirmed")
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v("Cases"),
                      _c("br"),
                      _vm._v("on admission")
                    ]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Discharge")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Deaths")]),
                    _vm._v(" "),
                    _c("th", { staticStyle: { width: "5%" } })
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.rows, function(row, index) {
                      return _c(
                        "tr",
                        { key: row.key, attrs: { "data-key": row.key } },
                        [
                          _c("td", [
                            _c(
                              "select",
                              {
                                staticClass: "form-control form-control-sm",
                                attrs: { name: "state" }
                              },
                              _vm._l(_vm.states, function(state) {
                                return _c(
                                  "option",
                                  { domProps: { value: state.id } },
                                  [_vm._v(_vm._s(state.state_name))]
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                name: "prev_screened",
                                min: "0",
                                value: "0"
                              },
                              on: {
                                blur: function($event) {
                                  return _vm.validateInput($event)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                min: "0",
                                name: "screened_last_24hr",
                                value: "0"
                              },
                              on: {
                                blur: function($event) {
                                  return _vm.validateInput($event)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                min: "0",
                                value: "0",
                                name: "confirmed"
                              },
                              on: {
                                blur: function($event) {
                                  return _vm.validateInput($event)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                min: "0",
                                value: "0",
                                name: "on_admission"
                              },
                              on: {
                                blur: function($event) {
                                  return _vm.validateInput($event)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                min: "0",
                                value: "0",
                                name: "discharge"
                              },
                              on: {
                                blur: function($event) {
                                  return _vm.validateInput($event)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                min: "0",
                                value: "0",
                                name: "deaths"
                              },
                              on: {
                                blur: function($event) {
                                  return _vm.validateInput($event)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "padding-0 text-right " }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.rows.length > 1,
                                    expression: "rows.length > 1"
                                  }
                                ],
                                staticClass: "btn btn-xs btn-danger m-r-5",
                                on: {
                                  click: function($event) {
                                    return _vm.removeRow(index)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-remove" })]
                            )
                          ])
                        ]
                      )
                    }),
                    0
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-xs btn-complete",
                  on: { click: _vm.addRow }
                },
                [
                  _c("i", { staticClass: "fa fa-plus-circle" }),
                  _vm._v(" Add Row\n                    ")
                ]
              )
            ])
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

/***/ "./resources/js/Pages/situationReport/Create.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/situationReport/Create.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_9983a57c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=9983a57c&scoped=true& */ "./resources/js/Pages/situationReport/Create.vue?vue&type=template&id=9983a57c&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/situationReport/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_9983a57c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_9983a57c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9983a57c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/situationReport/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/situationReport/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/situationReport/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/situationReport/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/situationReport/Create.vue?vue&type=template&id=9983a57c&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/situationReport/Create.vue?vue&type=template&id=9983a57c&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_9983a57c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=9983a57c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/situationReport/Create.vue?vue&type=template&id=9983a57c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_9983a57c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_9983a57c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);