(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([1],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__example_directive_mouse_events_mousewheel_directive__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__example_directive_mouse_events_mousewheel_component__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Example Imports
//----------------------------
 // Directive Example using HostListener

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* NgModule */])({
        imports: [
            // Imports Metadata tells the angular list of other modules used by this module.
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */]
        ],
        declarations: [
            // Declaration Metadata lists the components, directives , services etc that are part of this module.
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__example_directive_mouse_events_mousewheel_directive__["a" /* MouseWheelDirective */], __WEBPACK_IMPORTED_MODULE_4__example_directive_mouse_events_mousewheel_component__["a" /* MouseWheelDirectiveExampleComponent */]
        ],
        bootstrap: [
            // Bootstrap Metadata identifies the root component of the module. 
            // When Angular loads the appModule it looks for bootstrap Metadata and loads all the components listed here.
            // We want our module to AppComponent , hence we have listed it here
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);



/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'my-app',
        template: "\n        <div>Hello Angular 4</div>\n\n        <mousewheel-directive-example-component></mousewheel-directive-example-component>\n    ",
        styleUrls: []
    })
], AppComponent);



/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(138);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseWheelDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseWheelDirective = (function () {
    function MouseWheelDirective() {
        this.mouseWheelUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_48" /* EventEmitter */]();
        this.mouseWheelDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_48" /* EventEmitter */]();
    }
    // Listening to the host - that is, the DOM element the directive is attached to - is among the primary ways directives
    // extend the component or element's behavior. Previously, we saw its common use case.    
    MouseWheelDirective.prototype.onMouseWheelChrome = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelFirefox = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelIE = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.mouseWheelFunc = function (event) {
        console.log("Mousewheel Directive called...");
        var event = window.event || event; // old IE browser support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE browser
        event.returnValue = false;
        // for Chrome and firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    };
    return MouseWheelDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelDown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* HostListener */])('mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelChrome", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* HostListener */])('DOMMouseScroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelFirefox", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* HostListener */])('onmousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelIE", null);
MouseWheelDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Directive */])({
        selector: '[mouseWheel]'
    })
], MouseWheelDirective);



/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseWheelDirectiveExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseWheelDirectiveExampleComponent = (function () {
    function MouseWheelDirectiveExampleComponent() {
    }
    MouseWheelDirectiveExampleComponent.prototype.mouseWheelUpFunc = function () {
        this.mouseWheelDirection = "Scrolling Upward Direction";
    };
    MouseWheelDirectiveExampleComponent.prototype.mouseWheelDownFunc = function () {
        this.mouseWheelDirection = "Scrolling Downward Direction";
    };
    return MouseWheelDirectiveExampleComponent;
}());
MouseWheelDirectiveExampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'mousewheel-directive-example-component',
        template: "\n        <h2>Mouse wheel scroll on below div</h2>\n        <h4 style=\"color:green\">{{mouseWheelDirection}}</h4>\n        <div mouseWheel (mouseWheelUp)=\"mouseWheelUpFunc(event)\" (mouseWheelDown)=\"mouseWheelDownFunc(event)\" style=\"height: 150px;width:150px;border:1px solid red;\">Scroll in this area</div>\n    "
    }),
    __metadata("design:paramtypes", [])
], MouseWheelDirectiveExampleComponent);



/***/ })

},[147]);
});
//# sourceMappingURL=app.js.map