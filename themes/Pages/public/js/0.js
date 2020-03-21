(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/AppHeader */ "./resources/js/common/AppHeader.vue");
/* harmony import */ var _common_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/SideBar */ "./resources/js/common/SideBar.vue");
/* harmony import */ var _common_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Footer */ "./resources/js/common/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "App",
  components: {
    Footer: _common_Footer__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppHeader: _common_AppHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    SideBar: _common_SideBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    showHeader: {
      "default": true
    },
    showFooter: {
      "default": true
    },
    showSidebar: {
      "default": true
    }
  },
  mounted: function mounted() {
    $('body').addClass('menu-pin menu-behind');
    window.$script.ready('app', function () {
      setTimeout(function () {
        window.$.Pages.init();
        window.System.closePageLoader();
      }, 1000);
    });
    this.$root.buildPageNotifications();
  },
  created: function created() {},
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/AppHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/AppHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppHeader",
  methods: {
    logout: function logout() {
      this.$inertia.post('/app/console/logout', {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Footer"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/SideBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/SideBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_vue_src_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue/src/app */ "./node_modules/@inertiajs/inertia-vue/src/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SideBar",
  components: {
    Inertia: _inertiajs_inertia_vue_src_app__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _vm.showSidebar ? _c("SideBar") : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "page-container " },
        [
          _vm.showHeader ? _c("AppHeader") : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "page-content-wrapper " },
            [
              _c(
                "div",
                {
                  staticClass: "content",
                  style: {
                    paddingLeft: !_vm.showSidebar ? "0" : "null",
                    paddingTop: !_vm.showHeader ? "0" : "null"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "jumbotron",
                      attrs: { "data-pages": "parallax" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            " container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "inner" },
                            [_vm._t("page-header", [_vm._m(0)])],
                            2
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: " container-fluid  container-fixed-lg" },
                    [_vm._t("default")],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _vm.showFooter
                ? _c("Footer", {
                    style: { left: !_vm.showSidebar ? "0" : "null" }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", { staticClass: "breadcrumb-item" }, [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Pages")])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "breadcrumb-item active" }, [
        _vm._v("Blank template")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/AppHeader.vue?vue&type=template&id=0cd65048&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/AppHeader.vue?vue&type=template&id=0cd65048&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "header " }, [
    _c("a", {
      staticClass: "btn-link toggle-sidebar d-lg-none pg pg-menu",
      attrs: { href: "#", "data-toggle": "sidebar" }
    }),
    _vm._v(" "),
    _c("div", {}, [
      _c("div", { staticClass: "brand inline m-l-10 " }, [
        _vm.$page.myStore
          ? _c("img", {
              attrs: {
                src: _vm.$page.myStore.logo,
                "data-src": _vm.$page.myStore.logo,
                "data-src-retina": _vm.$page.myStore.logo,
                alt: "logo",
                height: "50"
              }
            })
          : _c("img", {
              attrs: {
                src: "/themes/pages/assets/img/logo.png",
                alt: "logo",
                "data-src": "/themes/pages/assets/img/logo.png",
                "data-src-retina": "/themes/pages/assets/img/logo_2x.png",
                width: "78",
                height: "22"
              }
            })
      ]),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass:
            "d-lg-inline-block d-none notification-list no-margin d-lg-inline-block b-grey b-l no-style p-l-30 p-r-20"
        },
        [
          _c("li", { staticClass: "p-r-10 inline" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dropdown-menu dropdown-menu-right profile-dropdown"
              },
              [
                _c(
                  "inertia-link",
                  {
                    staticClass: "dropdown-item",
                    attrs: {
                      href: _vm.$route("app.console.situation-reports.create")
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-medkit" }),
                    _vm._v(" Situation Report\n                    ")
                  ]
                ),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "inertia-link",
                  {
                    staticClass: "dropdown-item",
                    attrs: { href: _vm.$route("app.console.cases.create") }
                  },
                  [
                    _c("i", { staticClass: "fa fa-link" }),
                    _vm._v(" Network Data")
                  ]
                )
              ],
              1
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex align-items-center" }, [
      _c(
        "div",
        {
          staticClass: "pull-left p-r-10 fs-14 font-heading d-lg-block d-none"
        },
        [
          _c("span", { staticClass: "semi-bold" }, [_vm._v("Hello")]),
          _vm._v(" "),
          _c("span", { staticClass: "text-master" }, [
            _vm._v(_vm._s(_vm.$page.auth.user.displayName))
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown pull-right d-lg-block d-none" }, [
        _vm._m(4),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu dropdown-menu-right profile-dropdown",
            attrs: { role: "menu" }
          },
          [
            _vm._m(5),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "clearfix bg-master-lighter text-danger dropdown-item",
                attrs: { href: "#" },
                on: { click: _vm.logout }
              },
              [
                _c("span", { staticClass: "pull-left" }, [_vm._v("Logout")]),
                _vm._v(" "),
                _vm._m(8)
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "text-primary",
        attrs: { href: "#", "data-toggle": "dropdown" }
      },
      [
        _c("i", {
          staticClass: "fa fa-plus-circle fa-2x",
          staticStyle: { "vertical-align": "sub" }
        }),
        _vm._v("\n                    Quick Add...\n                ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fa fa-medkit" }),
      _vm._v(" Case (by Nationality)")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fa fa-medkit" }),
      _vm._v(" Case (by Gender)")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fa fa-medkit" }),
      _vm._v(" Testing Labs")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "profile-dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("span", { staticClass: "thumbnail-wrapper d32 circular inline" }, [
          _c("img", {
            attrs: {
              src: "/themes/pages/assets/img/profiles/avatar.jpg",
              alt: "",
              "data-src": "/themes/pages/assets/img/profiles/avatar.jpg",
              "data-src-retina":
                "/themes/pages/assets/img/profiles/avatar_small2x.jpg",
              width: "32",
              height: "32"
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "pg-settings_small" }),
      _vm._v(" Settings")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "pg-outdent" }),
      _vm._v(" Feedback")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "pg-signals" }),
      _vm._v(" Help")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "pull-right" }, [
      _c("i", { staticClass: "pg-power" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/Footer.vue?vue&type=template&id=4cdfcd51&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/Footer.vue?vue&type=template&id=4cdfcd51&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: " container-fluid  container-fixed-lg footer" },
      [
        _c("div", { staticClass: "copyright sm-text-center" }, [
          _c("p", { staticClass: "small no-margin pull-left sm-pull-reset" }, [
            _c("span", { staticClass: "hint-text" }, [
              _vm._v("Copyright © 2017 ")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "font-montserrat" }, [_vm._v("REVOX")]),
            _vm._v(".\n            "),
            _c("span", { staticClass: "hint-text" }, [
              _vm._v("All rights reserved. ")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "sm-block" }, [
              _c("a", { staticClass: "m-l-10 m-r-10", attrs: { href: "#" } }, [
                _vm._v("Terms of use")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "muted" }, [_vm._v("|")]),
              _vm._v(" "),
              _c("a", { staticClass: "m-l-10", attrs: { href: "#" } }, [
                _vm._v("Privacy Policy")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "small no-margin pull-right sm-pull-reset" }, [
            _vm._v("\n            Hand-crafted "),
            _c("span", { staticClass: "hint-text" }, [
              _vm._v("& made with Love")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/SideBar.vue?vue&type=template&id=5afcf0f6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/SideBar.vue?vue&type=template&id=5afcf0f6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "nav",
    { staticClass: "page-sidebar", attrs: { "data-pages": "sidebar" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-menu" }, [
        _c("ul", { staticClass: "menu-items" }, [
          _c(
            "li",
            { staticClass: "m-t-30" },
            [
              _c("inertia-link", { attrs: { href: "/app/console" } }, [
                _c("span", { staticClass: "title" }, [_vm._v("Dashboard")])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            {},
            [
              _c(
                "inertia-link",
                {
                  attrs: {
                    href: _vm.$route("app.console.situation-reports.index")
                  }
                },
                [
                  _c("span", { staticClass: "title" }, [
                    _vm._v("Situation Reports")
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(2)
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            {},
            [
              _c(
                "inertia-link",
                { attrs: { href: _vm.$route("app.console.cases.index") } },
                [_c("span", { staticClass: "title" }, [_vm._v("Case Mapping")])]
              ),
              _vm._v(" "),
              _vm._m(3)
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clearfix" })
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sidebar-header" }, [
      _c("img", {
        staticClass: "brand",
        attrs: {
          src: "/themes/pages/assets/img/logo_white.png",
          alt: "logo",
          "data-src": "/themes/pages/assets/img/logo_white.png",
          "data-src-retina": "/themes/pages/assets/img/logo_white_2x.png",
          width: "78",
          height: "22"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-header-controls" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-xs sidebar-slide-toggle btn-link m-l-20",
            attrs: { type: "button", "data-pages-toggle": "#appMenu" }
          },
          [_c("i", { staticClass: "fa fa-angle-down fs-16" })]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-link d-lg-inline-block d-xlg-inline-block d-md-inline-block d-sm-none d-none",
            attrs: { type: "button", "data-toggle-pin": "sidebar" }
          },
          [_c("i", { staticClass: "fa fs-12" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon-thumbnail" }, [
      _c("i", { staticClass: "pg-home" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon-thumbnail" }, [
      _c("i", { staticClass: "fa fa-medkit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon-thumbnail" }, [
      _c("i", { staticClass: "fa fa-map" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Layouts/App.vue":
/*!**************************************!*\
  !*** ./resources/js/Layouts/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7c4eb8cd&scoped=true& */ "./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c4eb8cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Layouts/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7c4eb8cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/common/AppHeader.vue":
/*!*******************************************!*\
  !*** ./resources/js/common/AppHeader.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppHeader_vue_vue_type_template_id_0cd65048_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=template&id=0cd65048&scoped=true& */ "./resources/js/common/AppHeader.vue?vue&type=template&id=0cd65048&scoped=true&");
/* harmony import */ var _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=script&lang=js& */ "./resources/js/common/AppHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppHeader_vue_vue_type_template_id_0cd65048_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppHeader_vue_vue_type_template_id_0cd65048_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0cd65048",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/common/AppHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/common/AppHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/common/AppHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/AppHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/common/AppHeader.vue?vue&type=template&id=0cd65048&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/common/AppHeader.vue?vue&type=template&id=0cd65048&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0cd65048_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=template&id=0cd65048&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/AppHeader.vue?vue&type=template&id=0cd65048&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0cd65048_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0cd65048_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/common/Footer.vue":
/*!****************************************!*\
  !*** ./resources/js/common/Footer.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_4cdfcd51_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=4cdfcd51&scoped=true& */ "./resources/js/common/Footer.vue?vue&type=template&id=4cdfcd51&scoped=true&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/common/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_4cdfcd51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_4cdfcd51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cdfcd51",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/common/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/common/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/common/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/common/Footer.vue?vue&type=template&id=4cdfcd51&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/common/Footer.vue?vue&type=template&id=4cdfcd51&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_4cdfcd51_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=4cdfcd51&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/Footer.vue?vue&type=template&id=4cdfcd51&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_4cdfcd51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_4cdfcd51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/common/SideBar.vue":
/*!*****************************************!*\
  !*** ./resources/js/common/SideBar.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue_vue_type_template_id_5afcf0f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=5afcf0f6&scoped=true& */ "./resources/js/common/SideBar.vue?vue&type=template&id=5afcf0f6&scoped=true&");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=js& */ "./resources/js/common/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBar_vue_vue_type_template_id_5afcf0f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideBar_vue_vue_type_template_id_5afcf0f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5afcf0f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/common/SideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/common/SideBar.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/common/SideBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/common/SideBar.vue?vue&type=template&id=5afcf0f6&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/common/SideBar.vue?vue&type=template&id=5afcf0f6&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_5afcf0f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=template&id=5afcf0f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/SideBar.vue?vue&type=template&id=5afcf0f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_5afcf0f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_5afcf0f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);