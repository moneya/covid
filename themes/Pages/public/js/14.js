(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/CaseMap.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/networkData/CaseMap.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layouts/App */ "./resources/js/Layouts/App.vue");
/* harmony import */ var vis_network_dist_vis_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis-network/dist/vis-network */ "./node_modules/vis-network/dist/vis-network.js");
/* harmony import */ var vis_network_dist_vis_network__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vis_network_dist_vis_network__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CaseMap",
  components: {
    App: _Layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    network: Object
  },
  mounted: function mounted() {
    var nodes = new vis_network_dist_vis_network__WEBPACK_IMPORTED_MODULE_1___default.a.DataSet(this.network.nodes); // create an array with edges

    var edges = new vis_network_dist_vis_network__WEBPACK_IMPORTED_MODULE_1___default.a.DataSet(this.network.edges); // create a network

    var container = document.getElementById('map');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
      physics: {
        stabilization: false,
        barnesHut: {
          springLength: 200
        }
      },
      // layout:{
      //     hierarchical: true
      // },
      edges: {
        arrows: 'to, middle',
        color: 'red',
        font: '12px arial #ff0000',
        scaling: {
          label: true
        },
        shadow: true,
        smooth: true
      },
      nodes: {
        shape: 'hexagon'
      }
    };
    var network = new vis_network_dist_vis_network__WEBPACK_IMPORTED_MODULE_1___default.a.Network(container, data, options);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/networkData/CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#map[data-v-12c3475c] {\n  height: 600px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/networkData/CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/CaseMap.vue?vue&type=template&id=12c3475c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/networkData/CaseMap.vue?vue&type=template&id=12c3475c&scoped=true& ***!
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
    "App",
    {
      attrs: { "show-sidebar": false, "show-header": false },
      scopedSlots: _vm._u([
        {
          key: "page-header",
          fn: function() {
            return [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "card card-transparent" }, [
                    _c("div", { staticClass: "card-header " }, [
                      _c("div", { staticClass: "card-title" }, [
                        _vm._v("Network Graph")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("h3", [
                        _c("span", { staticClass: "bold" }, [
                          _vm._v("COVID-19")
                        ]),
                        _vm._v(" Case Map")
                      ])
                    ])
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
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card card-body card-transparent" }, [
            _c("div", { attrs: { id: "map" } })
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/networkData/CaseMap.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/networkData/CaseMap.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaseMap_vue_vue_type_template_id_12c3475c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaseMap.vue?vue&type=template&id=12c3475c&scoped=true& */ "./resources/js/Pages/networkData/CaseMap.vue?vue&type=template&id=12c3475c&scoped=true&");
/* harmony import */ var _CaseMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseMap.vue?vue&type=script&lang=js& */ "./resources/js/Pages/networkData/CaseMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CaseMap_vue_vue_type_style_index_0_id_12c3475c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss& */ "./resources/js/Pages/networkData/CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CaseMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CaseMap_vue_vue_type_template_id_12c3475c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CaseMap_vue_vue_type_template_id_12c3475c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12c3475c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/networkData/CaseMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/networkData/CaseMap.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/networkData/CaseMap.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CaseMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/CaseMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/networkData/CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Pages/networkData/CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_style_index_0_id_12c3475c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/CaseMap.vue?vue&type=style&index=0&id=12c3475c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_style_index_0_id_12c3475c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_style_index_0_id_12c3475c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_style_index_0_id_12c3475c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_style_index_0_id_12c3475c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_style_index_0_id_12c3475c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/networkData/CaseMap.vue?vue&type=template&id=12c3475c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/networkData/CaseMap.vue?vue&type=template&id=12c3475c&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_template_id_12c3475c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CaseMap.vue?vue&type=template&id=12c3475c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/networkData/CaseMap.vue?vue&type=template&id=12c3475c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_template_id_12c3475c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseMap_vue_vue_type_template_id_12c3475c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);