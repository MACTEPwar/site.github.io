(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.less":
/*!********************************************!*\
  !*** ./src/app/about/about.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.less */ "./src/app/about/about.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"asdf mx-auto d-lg-flex d-flex flex-lg-nowrap\">\n    <a class=\"navbar-brand margin-navigate-element\" routerLink=\"\">\n      <img src=\"../assets/brand.png\" alt=\"brand\">\n    </a>\n    <button class=\"navbar-toggler margin-navigate-element\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample11\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse margin-navigate-element text-center\" id=\"navbarsExample11\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item pading-navigate-element active\">\n          <a class=\"nav-link\" routerLink=\"projects\">НАШИ ПРОЕКТЫ</a>\n        </li>\n        <li class=\"nav-item pading-navigate-element\">\n          <a class=\"nav-link\" routerLink=\"services\">УСЛУГИ</a>\n        </li>\n        <li class=\"nav-item pading-navigate-element\">\n          <a class=\"nav-link\" routerLink=\"about\">О НАС</a>\n        </li>\n        <li class=\"nav-item pading-navigate-element\">\n          <a class=\"nav-link\" routerLink=\"contacts\">КОНТАКТЫ</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"margin-navigate-element pading-navigate-element col-auto\">\n      <div>8 800 700 000</div>\n      <div class=\"phone-min\">+39 (098) 999-88-88</div>\n    </div>\n    <div class=\"col-auto margin-navigate-element pading-navigate-element col-auto\">\n      <button class=\"btn btn-navbar\">ОСТАВИТЬ ЗАЯВКУ</button>\n    </div>\n  </div>\n</nav>\n<!-- <nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n  <div class=\"container justify-content-center align-items-center\">\n    <div class=\"row\">\n      <div class=\"col\" style=\"background-color:red;\"><img style=\"width:2rem;\" src=\"../assets/brand.png\" alt=\"brand\">\n      </div>\n      <div class=\"col-auto\" style=\"background-color:blue\">\n        <ul class=\"navbar-nav\">\n          <li><a class=\"nav-link\" routerLink=\"projects\">НАШИ ПРОЕКТЫ</a></li>\n          <li><a class=\"nav-link\" routerLink=\"services\">УСЛУГИ</a></li>\n          <li><a class=\"nav-link\" routerLink=\"about\">О НАС</a></li>\n          <li><a class=\"nav-link\" routerLink=\"contacts\">КОНТАКТЫ</a></li>\n        </ul>\n      </div>\n      <div class=\"col-auto\" style=\"background-color:gray\">\n        <div>8 800 700 000</div>\n        <div class=\"phone-min\">+39 (098) 999-88-88</div>\n      </div>\n      <div class=\"col-auto\" style=\"background-color:green\">\n        <button class=\"btn btn-navbar\">ОСТАВИТЬ ЗАЯВКУ</button></div>\n    </div>\n  </div>\n</nav> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand img {\n  width: 2rem;\n}\n.pading-navigate-element {\n  padding-left: 0.1rem;\n  padding-right: 0.1rem;\n}\n.margin-navigate-element {\n  margin-right: 6%;\n  margin-left: 6%;\n}\ndiv.phone-min {\n  font-size: 0.8rem;\n}\n.btn-navbar {\n  background-color: #630bc7;\n  color: white;\n  border-radius: 1.2rem;\n}\nnav div.asdf {\n  width: 80%;\n}\n@media (max-width: 1600px) {\n  .margin-navigate-element {\n    margin-right: 6%;\n    margin-left: 6%;\n  }\n  .pading-navigate-element {\n    padding-left: 0.1rem;\n    padding-right: 0.1rem;\n  }\n}\n@media (max-width: 1500px) {\n  .pading-navigate-element {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  nav div.asdf {\n    width: 90%;\n  }\n}\n@media (max-width: 1300px) {\n  .margin-navigate-element {\n    margin-right: 4%;\n    margin-left: 4%;\n  }\n  .pading-navigate-element {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n@media (max-width: 1100px) {\n  .margin-navigate-element {\n    margin-right: 2rem;\n    margin-left: 2rem;\n  }\n  .pading-navigate-element {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n@media (max-width: 991px) {\n  .margin-navigate-element {\n    margin-right: 6%;\n    margin-left: 6%;\n  }\n}\n@media (max-width: 660px) {\n  .margin-navigate-element {\n    margin-right: 4%;\n    margin-left: 4%;\n  }\n  nav div.asdf {\n    width: 100%;\n  }\n}\n@media (max-width: 486px) {\n  .margin-navigate-element {\n    margin-right: 1%;\n    margin-left: 1%;\n  }\n  nav div.asdf {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTovUHVibGljIHNpdGVzL2xlbmRpbmd0ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNDSjtBRENBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQTtFQUNJLGlCQUFBO0FDQ0o7QURDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0o7QURFQTtFQUNJLFVBQUE7QUNBSjtBREdBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGVBQUE7RUNETjtFREdFO0lBQ0ksb0JBQUE7SUFDQSxxQkFBQTtFQ0ROO0FBQ0Y7QURHQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VDRE47RURHRTtJQUNJLFVBQUE7RUNETjtBQUNGO0FESUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtFQ0ZOO0VESUU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUNGTjtBQUNGO0FESUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7RUNGTjtFRElFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VDRk47QUFDRjtBREtBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGVBQUE7RUNITjtBQUNGO0FETUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtFQ0pOO0VETUU7SUFDSSxXQUFBO0VDSk47QUFDRjtBRE9BO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGVBQUE7RUNMTjtFRE9FO0lBQ0ksV0FBQTtFQ0xOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLm5hdmJhci1icmFuZCBpbWcge1xuICAgIHdpZHRoOiAycmVtO1xufVxuLnBhZGluZy1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjFyZW07XG59XG4ubWFyZ2luLW5hdmlnYXRlLWVsZW1lbnQge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xufVxuZGl2LnBob25lLW1pbiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uYnRuLW5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAxMSwgMTk5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xufVxuXG5uYXYgZGl2LmFzZGYge1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjE2MDBweCl7XG4gICAgLm1hcmdpbi1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYlO1xuICAgIH1cbiAgICAucGFkaW5nLW5hdmlnYXRlLWVsZW1lbnQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC4xcmVtO1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjE1MDBweCl7XG4gICAgLnBhZGluZy1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBuYXYgZGl2LmFzZGYge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MTMwMHB4KXtcbiAgICAubWFyZ2luLW5hdmlnYXRlLWVsZW1lbnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgfVxuICAgIC5wYWRpbmctbmF2aWdhdGUtZWxlbWVudCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDoxMTAwcHgpe1xuICAgIC5tYXJnaW4tbmF2aWdhdGUtZWxlbWVudCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgfVxuICAgIC5wYWRpbmctbmF2aWdhdGUtZWxlbWVudCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KXtcbiAgICAubWFyZ2luLW5hdmlnYXRlLWVsZW1lbnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo2NjBweCl7XG4gICAgLm1hcmdpbi1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgIH1cbiAgICBuYXYgZGl2LmFzZGYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjQ4NnB4KXtcbiAgICAubWFyZ2luLW5hdmlnYXRlLWVsZW1lbnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgfVxuICAgIG5hdiBkaXYuYXNkZiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuIiwiYS5uYXZiYXItYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDJyZW07XG59XG4ucGFkaW5nLW5hdmlnYXRlLWVsZW1lbnQge1xuICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4xcmVtO1xufVxuLm1hcmdpbi1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiA2JTtcbiAgbWFyZ2luLWxlZnQ6IDYlO1xufVxuZGl2LnBob25lLW1pbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmJ0bi1uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjMwYmM3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcbn1cbm5hdiBkaXYuYXNkZiB7XG4gIHdpZHRoOiA4MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5tYXJnaW4tbmF2aWdhdGUtZWxlbWVudCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2JTtcbiAgICBtYXJnaW4tbGVmdDogNiU7XG4gIH1cbiAgLnBhZGluZy1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLnBhZGluZy1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICBuYXYgZGl2LmFzZGYge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLm1hcmdpbi1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgfVxuICAucGFkaW5nLW5hdmlnYXRlLWVsZW1lbnQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5tYXJnaW4tbmF2aWdhdGUtZWxlbWVudCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICB9XG4gIC5wYWRpbmctbmF2aWdhdGUtZWxlbWVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWFyZ2luLW5hdmlnYXRlLWVsZW1lbnQge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgLm1hcmdpbi1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgfVxuICBuYXYgZGl2LmFzZGYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDg2cHgpIHtcbiAgLm1hcmdpbi1uYXZpZ2F0ZS1lbGVtZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgfVxuICBuYXYgZGl2LmFzZGYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lendingtest';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");













var appRoutes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"] },
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contacts works!\n</p>\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.less":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.less */ "./src/app/contacts/contacts.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mystyle\">\n  <div class=\"mystyle3\">\n    <div class=\"container-fluid mystyle2\">\n      <div class=\"row\">\n        <div class=\"col-xl-9\">\n          <div class=\"row header-row-text\">SEO - ЭФФЕКТИВНОЕ ПРОДВИЖЕНИЕ САЙТОВ</div>\n          <div class=\"row myrow\">\n            <div>\n              <div class=\"col\">\n                75%<br>Lorem ipsum dolor sit amet.\n              </div>\n              <div class=\"col\">\n                75%<br>Lorem ipsum dolor sit amet.\n              </div>\n            </div>\n            <div>\n              <div class=\"col\">\n                75%<br>Lorem ipsum dolor sit amet.\n              </div>\n              <div class=\"col\">\n                75%<br>Lorem ipsum dolor sit amet.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3\">\n          <div class=\"bg-form\">\n            <form class=\"text-center form-custom\">\n              <h6 class=\"form-group\">ЗАКАЗАТЬ ПРОДВИЖЕНИЕ</h6>\n              <div class=\"form-group\"><input class=\"form-control-custom\" type=\"text\" name=\"\" id=\"\"></div>\n              <div class=\"form-group\"><input class=\"form-control-custom\" type=\"text\" name=\"\" id=\"\"></div>\n              <div class=\"form-group\"><input class=\"form-control-custom\" type=\"text\" name=\"\" id=\"\"></div>\n              <div class=\"form-group\"><input class=\"form-control-custom\" type=\"text\" name=\"\" id=\"\"></div>\n              <div class=\"form-group\"><input class=\"btn btn-submit-form\" type=\"submit\" name=\"\" id=\"\" value=\"Заказать\">\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid container2\">\n  <div class=\"row d-block block-2\">\n    <h4 class=\"text-center\">ЧЕМ ЕЩЕ МОЖЕМ ПОМОЧЬ?</h4>\n  </div>\n  <div class=\"row block-3\">\n    <div class=\"col col-custum-block\">\n      <div class=\"head-block-secondarry\"><strong>ТАРГЕРИНГОВАЯ РЕКЛАМА</strong></div>\n      <div class=\"body-block-secondarry\">Lorem ipsum dolor sit amet consectetur.</div>\n    </div>\n    <div class=\"col col-custum-block\">\n      <div class=\"head-block-secondarry\"><strong>УПРАВЛЕНИЕ РЕПУТАЦИЕЙ</strong></div>\n      <div class=\"body-block-secondarry\">Lorem ipsum dolor sit amet consectetur.</div>\n    </div>\n    <div class=\"col col-custum-block\">\n      <div class=\"head-block-secondarry\"><strong>КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ БИЗНЕСА</strong></div>\n      <div class=\"body-block-secondarry\">Lorem ipsum dolor sit amet consectetur.</div>\n    </div>\n    <div class=\"col col-custum-block\">\n      <div class=\"head-block-secondarry\"><strong>РРС</strong></div>\n      <div class=\"body-block-secondarry\">Lorem ipsum dolor sit amet consectetur.</div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid container2\">\n  <div class=\"row d-block block-2\">\n    <h4 class=\"text-center\">ПОЧЕМУ SEO НУЖНО ВАШЕМУ БИЗНЕСУ?</h4>\n  </div>\n  <!-- (div.row>(div.col>div.row>(div.col>img[src=\"../../assets/search.png\" alt=\"\" width=\"15px\" height=\"15px\"])+((div.col>(div.row>lorem5)+(div.row>lorem15)))*1)*2)*3 -->\n  <div class=\"blocks-3\">\n    <div class=\"row\">\n      <div class=\"col block-3-custom\">\n        <div class=\"row\">\n          <div class=\"col-xl-1 align-middle col-bloack-3-img\"><img src=\"../../assets/search.png\" alt=\"\" width=\"15px\"\n              height=\"15px\"></div>\n          <div class=\"col\">\n            <div class=\"row row-block-3-head\">Lorem ipsum dolor sit amet.</div>\n            <div class=\"row row-block-3-body\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate\n              nostrum\n              dolores esse minima iste laboriosam.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col block-3-custom\">\n        <div class=\"row\">\n          <div class=\"col-xl-1 align-middle col-bloack-3-img\"><img src=\"../../assets/search.png\" alt=\"\" width=\"15px\"\n              height=\"15px\"></div>\n          <div class=\"col\">\n            <div class=\"row row-block-3-head\">Qui repellat ab ratione maxime?</div>\n            <div class=\"row row-block-3-body\">Sed, soluta. Praesentium, iste, ducimus ad, atque fugit iusto ipsum eius\n              asperiores ut temporibus molestias!</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col block-3-custom\">\n        <div class=\"row\">\n          <div class=\"col-xl-1 align-middle col-bloack-3-img\"><img src=\"../../assets/search.png\" alt=\"\" width=\"15px\"\n              height=\"15px\"></div>\n          <div class=\"col\">\n            <div class=\"row row-block-3-head\">Quaerat error corporis deserunt possimus!</div>\n            <div class=\"row row-block-3-body\">Quaerat molestias reprehenderit illum animi saepe dolorum est fugiat,\n              nobis\n              perspiciatis. Culpa autem dolorum error.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col block-3-custom\">\n        <div class=\"row\">\n          <div class=\"col-xl-1 align-middle col-bloack-3-img\"><img src=\"../../assets/search.png\" alt=\"\" width=\"15px\"\n              height=\"15px\"></div>\n          <div class=\"col\">\n            <div class=\"row row-block-3-head\">Consequuntur error labore excepturi pariatur!</div>\n            <div class=\"row row-block-3-body\">Quisquam iste deserunt libero est et. Accusamus quia porro rem ex\n              distinctio\n              error veritatis sequi!</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col block-3-custom\">\n        <div class=\"row\">\n          <div class=\"col-xl-1 align-middle col-bloack-3-img\"><img src=\"../../assets/search.png\" alt=\"\" width=\"15px\"\n              height=\"15px\"></div>\n          <div class=\"col\">\n            <div class=\"row row-block-3-head\">Quae nobis sapiente quod quibusdam?</div>\n            <div class=\"row row-block-3-body\">Illo reiciendis magnam iusto consectetur doloremque. Ullam, nostrum omnis.\n              Alias placeat magnam praesentium nulla quidem!</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col block-3-custom\">\n        <div class=\"row\">\n          <div class=\"col-xl-1 align-middle col-bloack-3-img\"><img src=\"../../assets/search.png\" alt=\"\" width=\"15px\"\n              height=\"15px\"></div>\n          <div class=\"col\">\n            <div class=\"row row-block-3-head\">Possimus rerum pariatur omnis ullam.</div>\n            <div class=\"row row-block-3-body\">Similique doloribus possimus omnis, tempora voluptatibus reprehenderit\n              nihil\n              dolore tenetur? Mollitia quae dolorum rerum harum!</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid container2\">\n  <div class=\"row d-block block-2\">\n    <h4 class=\"text-center\">МЫ РАБОТАЕМ НА РЕЗУЛЬТАТ</h4>\n  </div>\n  <div class=\"row row-block-4\">\n    <div class=\"col-xl-6 col-block-4-left\">\n      <ul class=\"list-group-flush\">\n        <li class=\"\">Lorem ipsum dolor sit amet consectetur.</li>\n        <li class=\"\">Asperiores iste tenetur repellat beatae veniam!</li>\n        <li class=\"\">Rem culpa neque tenetur dignissimos tempore!</li>\n        <li class=\"\">Dignissimos deserunt eum vero recusandae molestias.</li>\n        <li class=\"\">Saepe eos voluptatibus ea similique id?</li>\n        <li class=\"\">Doloribus voluptatem dolorem beatae ipsa at.</li>\n      </ul>\n    </div>\n    <div class=\"col-xl-6 col-block-4-right\"><img class=\"img-fluid\" src=\"../../assets/chart.svg\" alt=\"\"></div>\n  </div>\n</div>\n<div class=\"container-fluid container4\">\n  <div class=\"bg-image-block-6\">\n    <div class=\"row bg-shadow-block-6\">\n      <div class=\"col col-block-6 text-right\">\n        <div class=\"row item-block-6-header d-block\">\n          <h3>ЗАКАЖИТЕ ОБРАТНЫЙ ЗВОНОК</h3>\n        </div>\n        <div class=\"row item-block-6-body d-block\">\n          <h5>и получите скидку 10% на продвижение Вашего сайта</h5>\n        </div>\n      </div>\n      <div class=\"col bg-shadow-block-6 col-block-6 text-center\">\n        <div class=\"row item-block-6-header d-block\">\n          <h3>ИНТЕРЕСУЕТ?</h3>\n        </div>\n        <div class=\"row item-block-6-body d-block\"><button class=\"btn btn-custom\">Заказать звонок</button></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid container5\">\n  <div class=\"row d-block block-7\">\n    <h4 class=\"text-center\">КАК НАЧАТЬ СОТРУДНИЧЕСТВО?</h4>\n  </div>\n  <table class=\"table-steps text-center\">\n    <tr>\n      <td>Lorem, ipsum.</td>\n      <td></td>\n      <td>Lorem, ipsum.</td>\n      <td></td>\n      <td>Lorem, ipsum.</td>\n    </tr>\n    <tr>\n      <td colspan=\"5\"><img class=\"img-cont-5\" src=\"../../assets/steps.jpg\" alt=\"\"></td>\n    </tr>\n    <tr>\n      <td></td>\n      <td>Lorem, ipsum.</td>\n      <td></td>\n      <td>Lorem, ipsum.</td>\n      <td></td>\n    </tr>\n  </table>\n</div>\n<section id=\"price\" class=\"m-5\">\n  <div class=\"container\">\n    <div class=\"row price-head text-center h4 d-block\">СТОИМОСТЬ ПРОДВИЖЕНИЯ</div>\n    <div class=\"row m-5\">\n      <div class=\"col price-min px-5 py-3 mx-3\">\n        <div class=\"row border-bottom h4\">Минимальный</div>\n        <div class=\"row py-2\">от 1000</div>\n        <div class=\"row py-2\">Lorem:</div>\n        <div class=\"row\">\n          <ul class=\"px-4\">\n            <li>Lorem</li>\n            <li>Lorem</li>\n            <li>Lorem</li>\n            <li>Lorem</li>\n          </ul>\n        </div>\n        <div class=\"row py-2 text-center d-block\">\n          <button class=\"btn btn-price-submit btn-block\">Заказать</button>\n        </div>\n      </div>\n      <div class=\"col price-middle px-5 py-3 mx-3\">\n        <div class=\"row border-bottom h4\">Комплексный</div>\n        <div class=\"row py-2\">от 1500</div>\n        <div class=\"row py-2\">Lorem:</div>\n        <div class=\"row\">\n          <ul class=\"px-4\">\n            <li>Lorem</li>\n            <li>Lorem</li>\n            <li>Lorem</li>\n            <li>Lorem</li>\n          </ul>\n        </div>\n        <div class=\"row py-2 text-center d-block\">\n          <button class=\"btn btn-price-submit btn-block bg-white\">Заказать</button>\n        </div>\n      </div>\n      <div class=\"col price-max px-5 py-3 mx-3\">\n        <div class=\"row border-bottom h4\">Супер</div>\n        <div class=\"row py-2\">от 2000</div>\n        <div class=\"row py-2\">Lorem:</div>\n        <div class=\"row\">\n          <ul class=\"px-4\">\n            <li>Lorem</li>\n            <li>Lorem</li>\n            <li>Lorem</li>\n            <li>Lorem</li>\n          </ul>\n        </div>\n        <div class=\"row py-2 text-center d-block\">\n          <button class=\"btn btn-price-submit btn-block\">Заказать</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"footter\">\n  <div class=\"container-fluid\">\n    <div class=\"row bg-footter\">\n      <div class=\"row footter-shadow\">\n        <div class=\"container my-5\">\n          <div class=\"row\">\n            <div class=\"col text-white\">\n              <div class=\"row h3 py-3\">ОБСУДИТЬ ПРОЕКТ С НАШЕЙ КОМАНДОЙ</div>\n              <div class=\"row\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia ipsam hic\n                vitae\n                rem placeat laboriosam minus sed quas recusandae.</div>\n              <div class=\"row py-3\">\n                <div class=\"bottom-ico\">\n                  <fa name=\"phone\" size=\"2x\" inverse=\"false\"></fa>\n                </div>\n                <div class=\"align-middle pt-1 pl-2 h5\">+38 (066) 333 33 33</div>\n              </div>\n              <div class=\"row py-3\">\n                <div class=\"bottom-ico\">\n                  <fa name=\"phone\" size=\"2x\" inverse=\"false\"></fa>\n                </div>\n                <div class=\"align-middle pt-1 pl-2 h5\">mail@gmail.com</div>\n              </div>\n              <div class=\"row py-3\">\n                <div class=\"bottom-ico\">\n                  <fa name=\"phone\" size=\"2x\" inverse=\"false\"></fa>\n                </div>\n                <div class=\"align-middle pt-1 pl-2 h5\">skype</div>\n              </div>\n              <div class=\"row py-3\">\n                <div class=\"bottom-ico\">\n                  <fa name=\"phone\" size=\"2x\" inverse=\"false\"></fa>\n                </div>\n                <div class=\"align-middle pt-1 pl-2 h5\">@telega</div>\n              </div>\n            </div>\n            <div class=\"col text-white\">\n              <div class=\"h3 text-center\">ЗАКАЗАТЬ ПРОДВИЖЕНИЕ</div>\n              <form>\n                <div class=\"form-group row py-1\">\n                  <div class=\"col\"><input class=\"form-control input-item\" type=\"text\"></div>\n                </div>\n                <div class=\"form-group row py-1\">\n                  <div class=\"col\"><input class=\"form-control input-item\" type=\"text\"></div>\n                  <div class=\"col\"><input class=\"form-control input-item\" type=\"text\"></div>\n                </div>\n                <div class=\"form-group row py-1\">\n                  <div class=\"col\"><input class=\"form-control input-item\" type=\"text\"></div>\n                  <div class=\"col\"><input class=\"form-control input-item\" type=\"text\"></div>\n                </div>\n                <div class=\"form-group row py-1\">\n                  <div class=\"col\">\n                    <textarea class=\"form-control input-item\" rows=\"2\"></textarea>\n                  </div>\n                </div>\n                <div class=\"form-group row py-1\">\n                  <div class=\"col\">\n                    <button class=\"btn btn-block btn-footter\">Заказать</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/main/main.component.less":
/*!******************************************!*\
  !*** ./src/app/main/main.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-background-top {\n  position: relative;\n  z-index: 5;\n  min-height: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #000;\n  font-size: 400%;\n  font-family: Arial;\n  text-transform: capitalize;\n}\n.image-background-top .bg {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0) url('main.jpg') no-repeat;\n  background-size: cover;\n  opacity: 0.4;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n}\n.text {\n  font-size: 1rem;\n  color: white;\n  z-index: -2;\n}\n.fill {\n  min-height: 100%;\n  height: 100%;\n  min-width: 100%;\n  width: 100%;\n  padding: 0;\n}\n.mystyle {\n  background: rgba(255, 255, 255, 0) url('main.jpg') no-repeat;\n  /* Firefox 3.6+ */\n  /* Safari 3.1+ и Chrome 4.0+ */\n  /* Opera 9.6+ */\n  background-size: 100%;\n  /* Современные браузеры */\n  padding: 0;\n  background-color: red;\n  color: white;\n}\n.mystyle2 {\n  padding: 3% 8% 3% 8%;\n}\n.mystyle3 {\n  background-color: rgba(0, 0, 0, 0.493);\n  margin: 0;\n}\n.myrow {\n  position: absolute;\n  bottom: 0px;\n  font-size: larger;\n}\n.header-row-text {\n  font-size: -webkit-xxx-large;\n}\n.btn-submit-form {\n  background-color: #630bc7;\n  color: white;\n  border-radius: 1.2rem;\n  width: 80%;\n}\n.bg-form {\n  background-color: rgba(0, 0, 0, 0.644);\n  border-radius: 1rem;\n}\n.form-custom {\n  margin: 10%;\n  padding: 10% 5% 8% 5%;\n}\n.form-control-custom {\n  width: 100%;\n  border-radius: 2rem;\n  min-height: 2.5rem;\n  padding: 3%;\n  background-color: transparent;\n  color: white;\n}\n.container2 {\n  padding: 0 5% 0 5%;\n}\n.body-block-secondarry {\n  font-size: smaller;\n  margin: 0.5rem 0 0.5rem 0;\n}\n.col-custum-block {\n  background-color: #1d1d1d;\n  color: white;\n  padding: 1rem;\n}\n.block-2 {\n  margin: 1.5rem;\n}\n.block-3 {\n  margin: 2.5rem;\n}\n.block-3-custom {\n  margin: 1% 7% 1% 7%;\n}\n.blocks-3 {\n  margin: 0 3% 0 3%;\n}\n.row-block-3-head {\n  font-size: larger;\n}\n.row-block-3-body {\n  font-size: small;\n  color: #868686;\n  padding-top: 0.5rem;\n}\n.container3 {\n  margin: 2%;\n}\n.col-block-4-left ul li {\n  padding-top: 2.5rem;\n  padding-left: 20%;\n  display: block;\n  font-size: larger;\n}\n.bg-image-block-6 {\n  background: url('desctop.jpg') no-repeat;\n  /* Firefox 3.6+ */\n  /* Safari 3.1+ и Chrome 4.0+ */\n  /* Opera 9.6+ */\n  background-size: 100%;\n  /* Современные браузеры */\n}\n.container4 {\n  padding: 0;\n  color: white;\n  margin: 40px 0 20px 0;\n}\n.bg-shadow-block-6 {\n  background-color: rgba(0, 0, 0, 0.75);\n  margin: 0;\n}\n.col-block-6 {\n  padding: 5%;\n}\n.btn-custom {\n  background-color: #630bc7;\n  color: white;\n  border-radius: 1.2rem;\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.table-steps {\n  width: 100%;\n}\n.img-cont-5 {\n  min-width: 100%;\n}\n.block-7 {\n  margin: 4rem 1.5rem 4rem 1.5rem;\n}\n.price-min,\n.price-max {\n  border-color: #630bc7;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 12px;\n}\n.price-middle {\n  border-color: #91229b;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 12px;\n  color: white;\n  background-color: #91229b;\n}\n.price-middle button {\n  color: #91229b;\n}\n.btn-price-submit {\n  background-color: #91229b;\n  color: white;\n  border-radius: 40px;\n}\n.bg-footter {\n  background: url('footer.jpg') no-repeat;\n  /* Firefox 3.6+ */\n  /* Safari 3.1+ и Chrome 4.0+ */\n  /* Opera 9.6+ */\n  background-size: 100%;\n  /* Современные браузеры */\n}\n.footter-shadow {\n  background-color: rgba(0, 0, 0, 0.767);\n  min-width: 100%;\n  margin: 0;\n}\n.input-item {\n  border-radius: 90px;\n  background-color: transparent;\n  border-width: 1.5px;\n}\n.bottom-ico {\n  width: 2.3rem;\n  height: 2.3rem;\n  border-radius: 90px;\n  padding: 4px;\n}\n.btn-footter {\n  background-color: #630bc7;\n  color: white;\n  border-radius: 90px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9FOi9QdWJsaWMgc2l0ZXMvbGVuZGluZ3Rlc3Qvc3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDQ0o7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRElBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRko7QURLQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0hKO0FETUE7RUFDSSw0REFBQTtFQ0hGLGlCQUFpQjtFQUVqQiw4QkFBOEI7RUFFOUIsZUFBZTtFREdiLHFCQUFBO0VDREYseUJBQXlCO0VERXZCLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNBSjtBREdBO0VBQ0ksb0JBQUE7QUNESjtBRElBO0VBQ0ksc0NBQUE7RUFDQSxTQUFBO0FDRko7QURLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDSEo7QURNQTtFQUNJLDRCQUFBO0FDSko7QURPQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0xKO0FEUUE7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ1BKO0FEVUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNSSjtBRFdBO0VBQ0csa0JBQUE7QUNUSDtBRFlBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ1ZKO0FEYUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDWEo7QURjQTtFQUNJLGNBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtBQ2JKO0FEZ0JBO0VBQ0ksbUJBQUE7QUNkSjtBRGlCQTtFQUNJLGlCQUFBO0FDZko7QURrQkE7RUFDSSxpQkFBQTtBQ2hCSjtBRG1CQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDakJKO0FEb0JBO0VBQ0ksVUFBQTtBQ2xCSjtBRHFCQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNuQko7QURzQkE7RUFDSSx3Q0FBQTtFQ25CRixpQkFBaUI7RUFFakIsOEJBQThCO0VBRTlCLGVBQWU7RURtQmIscUJBQUE7RUNqQkYseUJBQXlCO0FBQzNCO0FEbUJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHFDQUFBO0VBQ0EsU0FBQTtBQ2xCSjtBRHFCQTtFQUNJLFdBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNwQko7QUR1QkE7RUFDSSxXQUFBO0FDckJKO0FEd0JBO0VBQ0ksZUFBQTtBQ3RCSjtBRHlCQTtFQUNJLCtCQUFBO0FDdkJKO0FEMEJBOztFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDdkJKO0FENEJBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUMxQko7QUQ4QkE7RUFDSSxjQUFBO0FDNUJKO0FEK0JBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUM3Qko7QURnQ0E7RUFDSSx1Q0FBQTtFQzdCRixpQkFBaUI7RUFFakIsOEJBQThCO0VBRTlCLGVBQWU7RUQ2QmIscUJBQUE7RUMzQkYseUJBQXlCO0FBQzNCO0FENkJBO0VBQ0ksc0NBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQzNCSjtBRDhCQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQzVCSjtBRCtCQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDN0JKO0FEZ0NBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUM5QkoiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtYmFja2dyb3VuZC10b3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiA0MDAlO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuICBcbi5pbWFnZS1iYWNrZ3JvdW5kLXRvcCAuYmd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIHVybCgnLi4vLi4vYXNzZXRzL21haW4uanBnJykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyAvLzc0MXB4XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBcbn1cblxuLnRleHR7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAtMjtcbn1cblxuLmZpbGwgeyBcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzowO1xufVxuXG4ubXlzdHlsZXtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIHVybCgnLi4vLi4vYXNzZXRzL21haW4uanBnJykgbm8tcmVwZWF0O1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlOyAvKiBGaXJlZm94IDMuNisgKi9cbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTsgLyogU2FmYXJpIDMuMSsg0LggQ2hyb21lIDQuMCsgKi9cbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7IC8qIE9wZXJhIDkuNisgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7IC8qINCh0L7QstGA0LXQvNC10L3QvdGL0LUg0LHRgNCw0YPQt9C10YDRiyAqL1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5teXN0eWxlMiB7XG4gICAgcGFkZGluZzogMyUgOCUgMyUgOCU7XG59XG5cbi5teXN0eWxlMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ5Myk7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubXlyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLmhlYWRlci1yb3ctdGV4dCB7XG4gICAgZm9udC1zaXplOiAtd2Via2l0LXh4eC1sYXJnZTtcbn1cblxuLmJ0bi1zdWJtaXQtZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAxMSwgMTk5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xuICAgIHdpZHRoOiA4MCVcbn1cblxuLmJnLWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NDQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5mb3JtLWN1c3RvbSB7XG4gICAgbWFyZ2luOiAxMCU7XG4gICAgcGFkZGluZzogMTAlIDUlIDglIDUlO1xufVxuXG4uZm9ybS1jb250cm9sLWN1c3RvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBtaW4taGVpZ2h0OiAyLjVyZW07XG4gICAgcGFkZGluZzogMyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyMiB7XG4gICBwYWRkaW5nOiAwIDUlIDAgNSU7XG59XG5cbi5ib2R5LWJsb2NrLXNlY29uZGFycnkge1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwO1xufVxuXG4uY29sLWN1c3R1bS1ibG9jayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAyOSwgMjkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uYmxvY2stMiB7XG4gICAgbWFyZ2luOiAxLjVyZW07XG59XG5cbi5ibG9jay0zIHtcbiAgICBtYXJnaW46IDIuNXJlbTtcbn1cblxuLmJsb2NrLTMtY3VzdG9tIHtcbiAgICBtYXJnaW46IDElIDclIDElIDclO1xufVxuXG4uYmxvY2tzLTN7XG4gICAgbWFyZ2luOiAwIDMlIDAgMyU7XG59XG5cbi5yb3ctYmxvY2stMy1oZWFkIHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLnJvdy1ibG9jay0zLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6ICM4Njg2ODY7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cblxuLmNvbnRhaW5lcjMge1xuICAgIG1hcmdpbjogMiU7XG59XG5cbi5jb2wtYmxvY2stNC1sZWZ0IHVsIGxpIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uYmctaW1hZ2UtYmxvY2stNiB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2Rlc2N0b3AuanBnXCIpIG5vLXJlcGVhdDtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJTsgLyogRmlyZWZveCAzLjYrICovXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7IC8qIFNhZmFyaSAzLjErINC4IENocm9tZSA0LjArICovXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAxMDAlOyAvKiBPcGVyYSA5LjYrICovXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlOyAvKiDQodC+0LLRgNC10LzQtdC90L3Ri9C1INCx0YDQsNGD0LfQtdGA0YsgKi9cbn1cblxuLmNvbnRhaW5lcjQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xufVxuXG4uYmctc2hhZG93LWJsb2NrLTYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29sLWJsb2NrLTYge1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4uYnRuLWN1c3RvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAxMSwgMTk5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xufVxuXG4udGFibGUtc3RlcHMge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLWNvbnQtNSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4uYmxvY2stNyB7XG4gICAgbWFyZ2luOiA0cmVtIDEuNXJlbSA0cmVtIDEuNXJlbTtcbn1cblxuLnByaWNlLW1pbiwgLnByaWNlLW1heCB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTksIDExLCAxOTkpO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAvL21hcmdpbjogMXJlbTtcbiAgICAvL3BhZGRpbmc6IDByZW0gMnJlbSAwcmVtIDJyZW07XG59XG5cbi5wcmljZS1taWRkbGUge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDE0NSwgMzQsIDE1NSk7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMTQ1LCAzNCwgMTU1KTtcbiAgICBcbn1cblxuLnByaWNlLW1pZGRsZSBidXR0b257XG4gICAgY29sb3I6IHJnYigxNDUsIDM0LCAxNTUpO1xufVxuXG4uYnRuLXByaWNlLXN1Ym1pdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NSwgMzQsIDE1NSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5iZy1mb290dGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9vdGVyLmpwZ1wiKSBuby1yZXBlYXQ7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7IC8qIEZpcmVmb3ggMy42KyAqL1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlOyAvKiBTYWZhcmkgMy4xKyDQuCBDaHJvbWUgNC4wKyAqL1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTsgLyogT3BlcmEgOS42KyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTsgLyog0KHQvtCy0YDQtdC80LXQvdC90YvQtSDQsdGA0LDRg9C30LXRgNGLICovXG59XG5cbi5mb290dGVyLXNoYWRvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc2Nyk7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmlucHV0LWl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbn1cblxuLmJvdHRvbS1pY28ge1xuICAgIHdpZHRoOjIuM3JlbTtcbiAgICBoZWlnaHQ6IDIuM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOjkwcHg7XG4gICAgcGFkZGluZzogNHB4O1xufVxuXG4uYnRuLWZvb3R0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMTEsIDE5OSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XG59IiwiLmltYWdlLWJhY2tncm91bmQtdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDQwMCU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uaW1hZ2UtYmFja2dyb3VuZC10b3AgLmJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIHVybCgnLi4vLi4vYXNzZXRzL21haW4uanBnJykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAwLjQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAtMjtcbn1cbi5maWxsIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuLm15c3R5bGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIHVybCgnLi4vLi4vYXNzZXRzL21haW4uanBnJykgbm8tcmVwZWF0O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLyogRmlyZWZveCAzLjYrICovXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAvKiBTYWZhcmkgMy4xKyDQuCBDaHJvbWUgNC4wKyAqL1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC8qIE9wZXJhIDkuNisgKi9cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAvKiDQodC+0LLRgNC10LzQtdC90L3Ri9C1INCx0YDQsNGD0LfQtdGA0YsgKi9cbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubXlzdHlsZTIge1xuICBwYWRkaW5nOiAzJSA4JSAzJSA4JTtcbn1cbi5teXN0eWxlMyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40OTMpO1xuICBtYXJnaW46IDA7XG59XG4ubXlyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cbi5oZWFkZXItcm93LXRleHQge1xuICBmb250LXNpemU6IC13ZWJraXQteHh4LWxhcmdlO1xufVxuLmJ0bi1zdWJtaXQtZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzBiYzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xuICB3aWR0aDogODAlO1xufVxuLmJnLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjQ0KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5mb3JtLWN1c3RvbSB7XG4gIG1hcmdpbjogMTAlO1xuICBwYWRkaW5nOiAxMCUgNSUgOCUgNSU7XG59XG4uZm9ybS1jb250cm9sLWN1c3RvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBtaW4taGVpZ2h0OiAyLjVyZW07XG4gIHBhZGRpbmc6IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lcjIge1xuICBwYWRkaW5nOiAwIDUlIDAgNSU7XG59XG4uYm9keS1ibG9jay1zZWNvbmRhcnJ5IHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwO1xufVxuLmNvbC1jdXN0dW0tYmxvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uYmxvY2stMiB7XG4gIG1hcmdpbjogMS41cmVtO1xufVxuLmJsb2NrLTMge1xuICBtYXJnaW46IDIuNXJlbTtcbn1cbi5ibG9jay0zLWN1c3RvbSB7XG4gIG1hcmdpbjogMSUgNyUgMSUgNyU7XG59XG4uYmxvY2tzLTMge1xuICBtYXJnaW46IDAgMyUgMCAzJTtcbn1cbi5yb3ctYmxvY2stMy1oZWFkIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG4ucm93LWJsb2NrLTMtYm9keSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjODY4Njg2O1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuLmNvbnRhaW5lcjMge1xuICBtYXJnaW46IDIlO1xufVxuLmNvbC1ibG9jay00LWxlZnQgdWwgbGkge1xuICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuLmJnLWltYWdlLWJsb2NrLTYge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvZGVzY3RvcC5qcGdcIikgbm8tcmVwZWF0O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLyogRmlyZWZveCAzLjYrICovXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAvKiBTYWZhcmkgMy4xKyDQuCBDaHJvbWUgNC4wKyAqL1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC8qIE9wZXJhIDkuNisgKi9cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAvKiDQodC+0LLRgNC10LzQtdC90L3Ri9C1INCx0YDQsNGD0LfQtdGA0YsgKi9cbn1cbi5jb250YWluZXI0IHtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDQwcHggMCAyMHB4IDA7XG59XG4uYmctc2hhZG93LWJsb2NrLTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBtYXJnaW46IDA7XG59XG4uY29sLWJsb2NrLTYge1xuICBwYWRkaW5nOiA1JTtcbn1cbi5idG4tY3VzdG9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzMGJjNztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcbn1cbi50YWJsZS1zdGVwcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZy1jb250LTUge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uYmxvY2stNyB7XG4gIG1hcmdpbjogNHJlbSAxLjVyZW0gNHJlbSAxLjVyZW07XG59XG4ucHJpY2UtbWluLFxuLnByaWNlLW1heCB7XG4gIGJvcmRlci1jb2xvcjogIzYzMGJjNztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ucHJpY2UtbWlkZGxlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTEyMjliO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTEyMjliO1xufVxuLnByaWNlLW1pZGRsZSBidXR0b24ge1xuICBjb2xvcjogIzkxMjI5Yjtcbn1cbi5idG4tcHJpY2Utc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxMjI5YjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuLmJnLWZvb3R0ZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9vdGVyLmpwZ1wiKSBuby1yZXBlYXQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAvKiBGaXJlZm94IDMuNisgKi9cbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC8qIFNhZmFyaSAzLjErINC4IENocm9tZSA0LjArICovXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLyogT3BlcmEgOS42KyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC8qINCh0L7QstGA0LXQvNC10L3QvdGL0LUg0LHRgNCw0YPQt9C10YDRiyAqL1xufVxuLmZvb3R0ZXItc2hhZG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc2Nyk7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuLmlucHV0LWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbn1cbi5ib3R0b20taWNvIHtcbiAgd2lkdGg6IDIuM3JlbTtcbiAgaGVpZ2h0OiAyLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi5idG4tZm9vdHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzBiYzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.less */ "./src/app/main/main.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.less":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.less */ "./src/app/not-found/not-found.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.less":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.less */ "./src/app/projects/projects.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "./src/app/services/services.component.less":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.less */ "./src/app/services/services.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Public sites\lendingtest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map