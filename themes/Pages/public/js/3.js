(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/roles/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_DataViewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/DataViewer */ "./resources/js/common/DataViewer.vue");
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Layouts/App */ "./resources/js/Layouts/App.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Index",
  data: function data() {
    return {
      forms: {
        role: {
          name: ''
        }
      }
    };
  },
  components: {
    App: _Layouts_App__WEBPACK_IMPORTED_MODULE_1__["default"],
    DataViewer: _common_DataViewer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['roles'],
  methods: {
    newRole: function newRole() {
      this.resetRole();
      $('#roleModal').modal('show');
    },
    editRole: function editRole(role) {
      this.forms.role.title = role.title;
      this.forms.role.id = role.id;
      $('#roleModal').modal('show');
    },
    submitRole: function submitRole() {
      this.$inertia.post(this.$route('backend.scrud.insurance-types.save'), this.forms.role);
      this.resetRole();
      $('#roleModal').modal('hide');
    },
    resetRole: function resetRole() {
      this.forms.role = {
        title: ''
      };
    }
  }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/roles/Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntr[data-v-24b77be7] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/roles/Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Index.vue?vue&type=template&id=24b77be7&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/roles/Index.vue?vue&type=template&id=24b77be7&scoped=true& ***!
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
                          { staticClass: "avatar avatar mr-3" },
                          [
                            _c(
                              "InertiaLink",
                              {
                                staticClass: "btn btn-white-translucent",
                                attrs: { href: "/backend" }
                              },
                              [_c("i", { staticClass: "mdi mdi-home " })]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "media-body" }, [
                          _c("h4", [_vm._v("Access Roles")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "opacity-75 m-t-0 p-t-0" }, [
                            _vm._v(
                              "\n                                    Access Control System\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _vm.roles.length
                            ? _c(
                                "p",
                                { staticClass: "opacity-75 m-t-0 p-t-0" },
                                [
                                  _vm._v(
                                    "\n                                    showing " +
                                      _vm._s(_vm.roles.length) +
                                      "\n                                    Record(s)\n                                "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 text-white " }, [
                      _c("div", { staticClass: "text-md-right" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-light",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.newRole()
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "mdi mdi-plus" }),
                            _vm._v(
                              "\n                                Add Role\n                            "
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal fade modal-slide-right",
                  staticStyle: { display: "none" },
                  attrs: {
                    id: "insuranceTypeModal",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "slideRightModalLabel",
                    "aria-hidden": "true"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog",
                      attrs: { role: "document" }
                    },
                    [
                      _c("div", { staticClass: "modal-content " }, [
                        _c("div", { staticClass: "modal-body" }, [
                          _c(
                            "button",
                            {
                              staticClass: "close",
                              attrs: {
                                type: "button",
                                "data-dismiss": "modal",
                                "aria-label": "Close"
                              }
                            },
                            [
                              _c("span", { attrs: { "aria-hidden": "true" } }, [
                                _vm._v("×")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "p-b-10" }, [
                            _c(
                              "div",
                              { staticClass: "avatar avatar-xl my-auto" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "avatar-title bg-primary rounded-circle"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    SB\n                                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("h3", { staticClass: "p-t-20 p-b-40" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.forms.role.id
                                      ? "Edit Role"
                                      : "Add New Role"
                                  ) +
                                  "\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "form",
                              {
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.submitRole($event)
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form-group floating-label m-b-20"
                                  },
                                  [
                                    _c("label", [_vm._v("Title:")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.forms.role.name,
                                          expression: "forms.role.name"
                                        }
                                      ],
                                      staticClass:
                                        "form-control custom-control",
                                      attrs: { type: "text", autofocus: "" },
                                      domProps: { value: _vm.forms.role.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.forms.role,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-success",
                                    attrs: { type: "submit" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Submit\n                                "
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
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
      _c("DataViewer", { attrs: { data: _vm.roles } }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            {
              staticClass: "table-responsive",
              staticStyle: { overflow: "initial" }
            },
            [
              _c(
                "table",
                {
                  staticClass:
                    "table align-items-center table-flush table-hover"
                },
                [
                  _c("thead", { staticClass: "thead-light" }, [
                    _c("tr", [
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.roles, function(role, index) {
                      return _c(
                        "tr",
                        {
                          on: {
                            click: function($event) {
                              _vm.$inertia.visit(
                                _vm.$route("backend.scrud.roles.show", {
                                  id: role.id
                                })
                              )
                            }
                          }
                        },
                        [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(role.name))])
                        ]
                      )
                    }),
                    0
                  )
                ]
              )
            ]
          )
        ])
      ])
    ],
    1
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

/***/ "./resources/js/Pages/roles/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/roles/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_24b77be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=24b77be7&scoped=true& */ "./resources/js/Pages/roles/Index.vue?vue&type=template&id=24b77be7&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/roles/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_24b77be7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css& */ "./resources/js/Pages/roles/Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_24b77be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_24b77be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24b77be7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/roles/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/roles/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/roles/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/roles/Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/roles/Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_24b77be7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Index.vue?vue&type=style&index=0&id=24b77be7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_24b77be7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_24b77be7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_24b77be7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_24b77be7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_24b77be7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/roles/Index.vue?vue&type=template&id=24b77be7&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/roles/Index.vue?vue&type=template&id=24b77be7&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_24b77be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=24b77be7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Index.vue?vue&type=template&id=24b77be7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_24b77be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_24b77be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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