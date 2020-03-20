(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Details.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/roles/Details.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layouts/App */ "./resources/js/Layouts/App.vue");
/* harmony import */ var _common_DataViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/DataViewer */ "./resources/js/common/DataViewer.vue");
/* harmony import */ var _common_PermissionSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/PermissionSelector */ "./resources/js/common/PermissionSelector.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Details",
  components: {
    PermissionSelector: _common_PermissionSelector__WEBPACK_IMPORTED_MODULE_2__["default"],
    DataViewer: _common_DataViewer__WEBPACK_IMPORTED_MODULE_1__["default"],
    App: _Layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['role', 'permissions'],
  data: function data() {
    return {
      totalOriginalPermissionsInRole: null
    };
  },
  methods: {
    updatePermission: function updatePermission() {
      var role_id = this.role.id;
      var permission_ids = [];
      this.role.permissions.forEach(function (perm) {
        permission_ids.push(perm.id);
      });
      this.$inertia.post(this.$route('backend.scrud.roles.updatepermission'), {
        roleId: role_id,
        permissionIds: permission_ids
      });
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/PermissionSelector.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/PermissionSelector.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataViewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataViewer */ "./resources/js/common/DataViewer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PermissionSelector",
  components: {
    DataViewer: _DataViewer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['permissions', 'value'],
  data: function data() {
    return {
      selectedPermissions: [],
      search: null,
      filteredPermissions: []
    };
  },
  methods: {
    toggleSelection: function toggleSelection(permission) {
      var index = _.findIndex(this.selectedPermissions, {
        id: permission.id
      });

      if (index >= 0) {
        this.selectedPermissions.splice(index, 1);
      } else {
        this.selectedPermissions.push(permission);
      }
    },
    isSelectedPermission: function isSelectedPermission(permission) {
      return _.findIndex(this.selectedPermissions, {
        id: permission.id
      }) >= 0;
    },
    selectAll: function selectAll() {
      var _this = this;

      this.permissions.forEach(function (permission) {
        if (!_this.isSelectedPermission(permission)) _this.toggleSelection(permission);
      });
    },
    deSelectAll: function deSelectAll() {
      var _this2 = this;

      this.permissions.forEach(function (permission) {
        if (_this2.isSelectedPermission(permission)) _this2.toggleSelection(permission);
      });
    },
    filter: function filter(search) {
      var filtered = this.permissions;
      if (search.length) filtered = _.filter(this.filteredPermissions, function (p) {
        return p.label.toLowerCase().includes(search.toLowerCase());
      });
      this.filteredPermissions = filtered;
    }
  },
  mounted: function mounted() {
    this.selectedPermissions = this.value;
    this.filteredPermissions = this.permissions;
  },
  watch: {
    selectedPermissions: function selectedPermissions(permissions, oldVal) {
      this.$emit('input', permissions);
    },
    search: _.debounce(function (key, oldVal) {
      this.filter(key);
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/common/PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.permissions li.permission[data-v-c3edaff8]:hover {\n  background-color: white !important;\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/common/PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/common/PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Details.vue?vue&type=template&id=4a82a217&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/roles/Details.vue?vue&type=template&id=4a82a217&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                          _c("h4", [
                            _c("small", { staticClass: "text-sm text-muted" }, [
                              _vm._v("role:")
                            ]),
                            _vm._v(" " + _vm._s(_vm.role.name))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "opacity-75 m-t-0 p-t-0" }, [
                            _vm._v(
                              "\n                                    Access Control\n                                "
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6 text-white text-md-right" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-light",
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#permissionPickerModal"
                            }
                          },
                          [
                            _c("i", { staticClass: "mdi mdi-plus" }),
                            _vm._v(
                              "\n                            Add Permission\n                        "
                            )
                          ]
                        )
                      ]
                    )
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
      _c(
        "DataViewer",
        { attrs: { data: _vm.role.permissions, title: "Permissions" } },
        [
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
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Permission")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.role.permissions, function(permission, index) {
                        return _c("tr", [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(permission.label))])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-outline-primary",
                  on: {
                    click: function($event) {
                      return _vm.updatePermission()
                    }
                  }
                },
                [_vm._v("Update permissions")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("PermissionSelector", {
        attrs: { permissions: _vm.permissions },
        model: {
          value: _vm.role.permissions,
          callback: function($$v) {
            _vm.$set(_vm.role, "permissions", $$v)
          },
          expression: "role.permissions"
        }
      })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/PermissionSelector.vue?vue&type=template&id=c3edaff8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/PermissionSelector.vue?vue&type=template&id=c3edaff8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal fade",
      attrs: { id: "permissionPickerModal", tabindex: "-1", role: "dialog" }
    },
    [
      _c("div", { staticClass: "modal-dialog modal-lg" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c(
            "div",
            { staticClass: "modal-body p-0 bg-gray-300" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "form-group floating-label" }, [
                _c("label", [
                  _vm._v("Enter keywords to search permissions...")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass: "form-control border-none",
                  attrs: {
                    type: "text",
                    placeholder: "Enter keywords to search permissions..."
                  },
                  domProps: { value: _vm.search },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("DataViewer", { attrs: { data: _vm.filteredPermissions } }, [
                _c("div", { staticClass: "card bg-transparent" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h3", { staticClass: "card-title" }, [
                      _vm._v("Permissions")
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.selectedPermissions.length,
                            expression: "selectedPermissions.length"
                          }
                        ],
                        staticClass: "card-subtitle"
                      },
                      [
                        _vm._v(
                          "\n                                (" +
                            _vm._s(_vm.selectedPermissions.length) +
                            " selected)\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-controls" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-outline-dark",
                          on: {
                            click: function($event) {
                              return _vm.selectAll()
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "mdi mdi-checkbox-marked-circle"
                          }),
                          _vm._v(
                            "\n                                    Select All\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-outline-danger",
                          on: {
                            click: function($event) {
                              return _vm.deSelectAll()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "mdi mdi-cancel" }),
                          _vm._v(
                            "\n                                    Deselect All\n                                "
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "ul",
                      {
                        staticClass: "list-group list-group-flush permissions"
                      },
                      _vm._l(_vm.filteredPermissions, function(
                        permission,
                        index
                      ) {
                        return _c(
                          "li",
                          {
                            key: index,
                            staticClass: "list-group-item permission",
                            class: {
                              "bg-light text-success selected": _vm.isSelectedPermission(
                                permission
                              ),
                              "bg-transparent": !_vm.isSelectedPermission(
                                permission
                              )
                            },
                            on: {
                              click: function($event) {
                                return _vm.toggleSelection(permission)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(permission.label) +
                                "\n                                "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
                ])
              ])
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close bg-danger",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/roles/Details.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/roles/Details.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_4a82a217_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=4a82a217&scoped=true& */ "./resources/js/Pages/roles/Details.vue?vue&type=template&id=4a82a217&scoped=true&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/Pages/roles/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_4a82a217_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_4a82a217_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a82a217",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/roles/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/roles/Details.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/roles/Details.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/roles/Details.vue?vue&type=template&id=4a82a217&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/roles/Details.vue?vue&type=template&id=4a82a217&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_4a82a217_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=4a82a217&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/roles/Details.vue?vue&type=template&id=4a82a217&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_4a82a217_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_4a82a217_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/common/PermissionSelector.vue":
/*!****************************************************!*\
  !*** ./resources/js/common/PermissionSelector.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermissionSelector_vue_vue_type_template_id_c3edaff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionSelector.vue?vue&type=template&id=c3edaff8&scoped=true& */ "./resources/js/common/PermissionSelector.vue?vue&type=template&id=c3edaff8&scoped=true&");
/* harmony import */ var _PermissionSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionSelector.vue?vue&type=script&lang=js& */ "./resources/js/common/PermissionSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PermissionSelector_vue_vue_type_style_index_0_id_c3edaff8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss& */ "./resources/js/common/PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PermissionSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionSelector_vue_vue_type_template_id_c3edaff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PermissionSelector_vue_vue_type_template_id_c3edaff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c3edaff8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/common/PermissionSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/common/PermissionSelector.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/common/PermissionSelector.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/PermissionSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/common/PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/common/PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_style_index_0_id_c3edaff8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/common/PermissionSelector.vue?vue&type=style&index=0&id=c3edaff8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_style_index_0_id_c3edaff8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_style_index_0_id_c3edaff8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_style_index_0_id_c3edaff8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_style_index_0_id_c3edaff8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_style_index_0_id_c3edaff8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/common/PermissionSelector.vue?vue&type=template&id=c3edaff8&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/common/PermissionSelector.vue?vue&type=template&id=c3edaff8&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_template_id_c3edaff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionSelector.vue?vue&type=template&id=c3edaff8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/PermissionSelector.vue?vue&type=template&id=c3edaff8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_template_id_c3edaff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSelector_vue_vue_type_template_id_c3edaff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);