(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/networkData/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layouts/App */ "./resources/js/Layouts/App.vue");
/* harmony import */ var _common_DataViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/DataViewer */ "./resources/js/common/DataViewer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DataViewer: _common_DataViewer__WEBPACK_IMPORTED_MODULE_1__["default"],
    App: _Layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    caseStatuses: Object,
    sourceTypes: Object,
    mapping_sources: Array,
    mapping_data: Array
  },
  data: function data() {
    return {
      formData: {
        age: null,
        status: null,
        gender: null,
        details: '',
        caseMaps: []
      },
      mappingFormData: {
        source: null,
        type: null
      }
    };
  },
  methods: {
    submitData: function submitData() {
      window.System.setActivityMessageText('Submitting data');
      this.$inertia.post(this.$route('app.console.cases.save', this.formData), {
        preserveState: false
      });
    },
    addCaseMap: function addCaseMap() {
      this.formData.caseMaps.push(_.clone(this.mappingFormData));
      this.resetMappingData();
      $('#caseMappingDataModal').modal('hide');
    },
    resetMappingData: function resetMappingData() {
      this.mappingFormData = {
        source: null,
        type: null
      };
    },
    removeMapData: function removeMapData(index) {
      this.formData.caseMaps.splice(index, 1);
    },
    suggestionSelected: function suggestionSelected(event) {
      var suggestion = event.target.value;

      var selected_sourceMap = _.find(this.mapping_data, {
        source: suggestion
      });

      if (selected_sourceMap) {
        this.mappingFormData.type = selected_sourceMap.source_type;
      }
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/DataViewer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/DataViewer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DataViewer",
  props: ['data', 'title', 'textOnEmpty'],
  computed: {
    hasData: function hasData() {
      if (this.data instanceof Array) {
        return this.data.length;
      }

      return !!this.data;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/Create.vue?vue&type=template&id=6016e7dc&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/networkData/Create.vue?vue&type=template&id=6016e7dc&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                          _vm._v("Network Data")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("h3", [
                          _c("span", { staticClass: "bold" }, [
                            _vm._v("COVID-19")
                          ]),
                          _vm._v(" Add Case Mapping")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                            Log new case and map data to network\n                        "
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
                        on: { click: _vm.submitData }
                      },
                      [
                        _c("i", { staticClass: "fa fa-cloud-upload" }),
                        _vm._v(
                          "\n                    Submit Data\n                "
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
        _c("div", { staticClass: "col-lg-8" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h3", { staticClass: "card-title" }, [_vm._v("Case Data")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "form-group-attached" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group form-group-default required" },
                      [
                        _c("label", [_vm._v("Gender:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formData.gender,
                                expression: "formData.gender"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.formData,
                                  "gender",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "Male" } }, [
                              _vm._v("Male")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Female" } }, [
                              _vm._v("Female")
                            ])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c(
                      "div",
                      { staticClass: "form-group form-group-default required" },
                      [
                        _c("label", [_vm._v("Age:")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.age,
                              expression: "formData.age"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "number" },
                          domProps: { value: _vm.formData.age },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.formData, "age", $event.target.value)
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-5" }, [
                    _c(
                      "div",
                      { staticClass: "form-group form-group-default required" },
                      [
                        _c("label", [_vm._v("Status:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formData.status,
                                expression: "formData.status"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.formData,
                                  "status",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.caseStatuses, function(val, prop) {
                            return _c("option", { domProps: { value: val } }, [
                              _vm._v(_vm._s(prop))
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row m-t-20" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Details:")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      { name: "summernote", rawName: "v-summernote" },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.details,
                        expression: "formData.details"
                      }
                    ],
                    domProps: { value: _vm.formData.details },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "details", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4" }, [
          _c("div", { staticClass: "card card-transparent" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h3", { staticClass: "card-title" }, [_vm._v("Case Mapping")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", {}, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-block btn-default",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#caseMappingDataModal"
                    }
                  },
                  [
                    _vm._v(
                      "\n                            Add Case Mapping\n                        "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal fade stick-up disable-scroll",
                  attrs: {
                    id: "caseMappingDataModal",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "modalSlideUpLabel",
                    "aria-hidden": "false"
                  }
                },
                [
                  _c("div", { staticClass: "modal-dialog " }, [
                    _c("div", { staticClass: "modal-content-wrapper" }, [
                      _c("div", { staticClass: "modal-content" }, [
                        _c(
                          "div",
                          { staticClass: "modal-header clearfix text-left" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "close",
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal",
                                  "aria-hidden": "true"
                                }
                              },
                              [_c("i", { staticClass: "pg-close fs-14" })]
                            ),
                            _vm._v(" "),
                            _c("h5", [
                              _vm._v("Case "),
                              _c("span", { staticClass: "semi-bold" }, [
                                _vm._v("Map Data")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-body" }, [
                          _c(
                            "div",
                            { staticClass: "form-group form-group-sm m-b-20" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Source:")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "typeahead",
                                    rawName: "v-typeahead",
                                    value: {
                                      localStore: _vm.mapping_sources
                                    },
                                    expression:
                                      "{\n                                            localStore: mapping_sources\n                                            }"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.mappingFormData.source,
                                    expression: "mappingFormData.source"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.mappingFormData.source },
                                on: {
                                  input: [
                                    function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.mappingFormData,
                                        "source",
                                        $event.target.value
                                      )
                                    },
                                    _vm.suggestionSelected
                                  ]
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group form-group-default form-group-sm m-b-20"
                            },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Source Type:")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.mappingFormData.type,
                                      expression: "mappingFormData.type"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.mappingFormData,
                                        "type",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                _vm._l(_vm.sourceTypes, function(val, prop) {
                                  return _c(
                                    "option",
                                    { domProps: { value: val } },
                                    [_vm._v(_vm._s(prop))]
                                  )
                                }),
                                0
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {}, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-block",
                                attrs: {
                                  disabled:
                                    !_vm.mappingFormData.type ||
                                    !_vm.mappingFormData.source
                                },
                                on: { click: _vm.addCaseMap }
                              },
                              [
                                _vm._v(
                                  "\n                                                Add Data\n                                            "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "DataViewer",
                  {
                    attrs: {
                      "text-on-empty": "No case mapping have been added!",
                      data: _vm.formData.caseMaps
                    }
                  },
                  [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("table", { staticClass: "table table-hover" }, [
                        _c("thead", [
                          _c("th", { staticStyle: { width: "40%" } }, [
                            _vm._v("Source")
                          ]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Type")]),
                          _vm._v(" "),
                          _c("th")
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.formData.caseMaps, function(
                            mapData,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", [_vm._v(_vm._s(mapData.source))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(mapData.type))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-xs btn-danger",
                                    on: {
                                      click: function($event) {
                                        return _vm.removeMapData(index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-remove" })]
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ])
                    ])
                  ]
                )
              ],
              1
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/DataViewer.vue?vue&type=template&id=42517692&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/DataViewer.vue?vue&type=template&id=42517692&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm.hasData
        ? _vm._t("default")
        : _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.title,
                    expression: "title"
                  }
                ],
                staticClass: "card-header"
              },
              [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "p-t-40 p-b-40" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "h6",
                  { staticClass: "text-capitalize text-danger text-center" },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.textOnEmpty || "No record found!") +
                        "\n                "
                    )
                  ]
                )
              ])
            ])
          ])
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "text-center text-muted" }, [
      _c("i", { staticClass: "fa fa-warning text-warning fa-2x" })
    ])
  }
]
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

/***/ "./resources/js/Pages/networkData/Create.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/networkData/Create.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_6016e7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=6016e7dc&scoped=true& */ "./resources/js/Pages/networkData/Create.vue?vue&type=template&id=6016e7dc&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/networkData/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_6016e7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_6016e7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6016e7dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/networkData/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/networkData/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/networkData/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/networkData/Create.vue?vue&type=template&id=6016e7dc&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/networkData/Create.vue?vue&type=template&id=6016e7dc&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6016e7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=6016e7dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/Create.vue?vue&type=template&id=6016e7dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6016e7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6016e7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/common/DataViewer.vue":
/*!********************************************!*\
  !*** ./resources/js/common/DataViewer.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataViewer_vue_vue_type_template_id_42517692_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataViewer.vue?vue&type=template&id=42517692&scoped=true& */ "./resources/js/common/DataViewer.vue?vue&type=template&id=42517692&scoped=true&");
/* harmony import */ var _DataViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataViewer.vue?vue&type=script&lang=js& */ "./resources/js/common/DataViewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataViewer_vue_vue_type_template_id_42517692_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataViewer_vue_vue_type_template_id_42517692_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "42517692",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/common/DataViewer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/common/DataViewer.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/common/DataViewer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/DataViewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/common/DataViewer.vue?vue&type=template&id=42517692&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/common/DataViewer.vue?vue&type=template&id=42517692&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewer_vue_vue_type_template_id_42517692_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewer.vue?vue&type=template&id=42517692&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/DataViewer.vue?vue&type=template&id=42517692&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewer_vue_vue_type_template_id_42517692_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewer_vue_vue_type_template_id_42517692_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);