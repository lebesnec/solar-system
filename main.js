(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/solar-system/solar-system/src/main.ts */"zUnb");


/***/ }),

/***/ "2aZT":
/*!**************************************!*\
  !*** ./src/app/scene/scene.model.ts ***!
  \**************************************/
/*! exports provided: CELESTIAL_BODY_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CELESTIAL_BODY_TYPE", function() { return CELESTIAL_BODY_TYPE; });
var CELESTIAL_BODY_TYPE;
(function (CELESTIAL_BODY_TYPE) {
    CELESTIAL_BODY_TYPE["STAR"] = "star";
    CELESTIAL_BODY_TYPE["PLANET"] = "planet";
    CELESTIAL_BODY_TYPE["SATELLITE"] = "satellite";
    CELESTIAL_BODY_TYPE["DWARF_PLANET"] = "dwarf_planet";
})(CELESTIAL_BODY_TYPE || (CELESTIAL_BODY_TYPE = {}));


/***/ }),

/***/ "4UYq":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ShellComponent {
    constructor() { }
}
ShellComponent.ɵfac = function ShellComponent_Factory(t) { return new (t || ShellComponent)(); };
ShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShellComponent, selectors: [["app-shell"]], decls: 4, vars: 0, consts: [[1, "content"]], template: function ShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Solar system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  background: rgba(255, 255, 255, 0.3);\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgLjMpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shell',
                templateUrl: './shell.component.html',
                styleUrls: ['./shell.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "E1tv":
/*!******************************************!*\
  !*** ./src/app/scene/data/Earth.data.ts ***!
  \******************************************/
/*! exports provided: MOON, EARTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOON", function() { return MOON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EARTH", function() { return EARTH; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");

const MOON = {
    id: 'moon',
    position: {
        x: 0,
        y: 0
    },
    speed: 1.022,
    mass: 7.342e22,
    radius: 1737.4,
    semiMajorAxis: 384399,
    eccentricity: 0.0549,
    trueAnomaly: 0,
    meanAnomaly: 135.27,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const EARTH = {
    id: 'earth',
    position: {
        x: 0,
        y: 0
    },
    speed: 29.78,
    mass: 5.97237e24,
    radius: 6371,
    semiMajorAxis: 149598023,
    eccentricity: 0.0167086,
    trueAnomaly: 0,
    meanAnomaly: 358.617,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].PLANET,
    satellites: [MOON],
    orbitBody: null
};
EARTH.satellites.forEach(satellite => satellite.orbitBody = EARTH);


/***/ }),

/***/ "PEKV":
/*!******************************************!*\
  !*** ./src/app/scene/scene.component.ts ***!
  \******************************************/
/*! exports provided: SceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneComponent", function() { return SceneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "/TIM");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-shape */ "8d86");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-zoom */ "2TRZ");
/* harmony import */ var _scene_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene.service */ "rFvz");
/* harmony import */ var _data_SolarSystem_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/SolarSystem.data */ "kj77");








const NB_POINTS_ORBIT = 90;
var ZoomLevel;
(function (ZoomLevel) {
    ZoomLevel["SOLAR_SYSTEM"] = "zoom-level-solar-system";
    ZoomLevel["PLANET"] = "zoom-level-planet";
})(ZoomLevel || (ZoomLevel = {}));
const SCALE_PLANET = 0.0007;
const TOOLTIP_DISTANCE = { x: 20, y: 20 };
const TOOLTIP_TRANSITION_MS = 50;
const TOOLTIP_PATH_MARGIN = 5;
class SceneComponent {
    constructor(sceneService) {
        this.sceneService = sceneService;
        this.width = window.innerWidth; // px
        this.height = window.innerHeight; // px
        this.center = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2 // px
        };
    }
    ngAfterViewInit() {
        this.svgSelection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])('svg');
        this.groupZoomableSelection = this.svgSelection.append('g');
        this.groupStaticSelection = this.svgSelection.append('g');
        this.initCelestialBodies();
        this.initOrbits();
        this.initZoom();
    }
    initZoom() {
        const d3Zoom = Object(d3_zoom__WEBPACK_IMPORTED_MODULE_3__["zoom"])()
            .on('zoom', (e) => {
            this.scale = e.transform.k;
            this.zoomLevel = (this.scale >= SCALE_PLANET) ? ZoomLevel.PLANET : ZoomLevel.SOLAR_SYSTEM;
            // tslint:disable-next-line:forin
            for (const level in ZoomLevel) {
                this.svgSelection.classed(ZoomLevel[level], this.zoomLevel === ZoomLevel[level]);
            }
            this.groupZoomableSelection.attr('transform', e.transform);
            this.initTooltips();
        });
        this.svgSelection.call(d3Zoom);
        const defaultZoom = d3_zoom__WEBPACK_IMPORTED_MODULE_3__["zoomIdentity"]
            .translate(this.center.x, this.center.y)
            .scale(Math.min(this.width, this.height) / (_scene_service__WEBPACK_IMPORTED_MODULE_4__["SOLAR_SYSTEM_SIZE"] / _scene_service__WEBPACK_IMPORTED_MODULE_4__["KM_TO_PX"]));
        this.svgSelection.call(d3Zoom.transform, defaultZoom);
    }
    initCelestialBodies() {
        this.groupZoomableSelection.selectAll('.celestial-body')
            .data(_data_SolarSystem_data__WEBPACK_IMPORTED_MODULE_5__["SOLAR_SYSTEM"], (d) => d.id)
            .join(enter => enter.append('circle')
            .attr('id', (body) => body.id)
            .attr('class', (body) => 'celestial-body ' + body.type + ' ' + body.id)
            .attr('r', (body) => body.radius / _scene_service__WEBPACK_IMPORTED_MODULE_4__["KM_TO_PX"])
            .attr('cx', (body) => body.position.x)
            .attr('cy', (body) => body.position.y));
    }
    initOrbits() {
        const orbitsData = _data_SolarSystem_data__WEBPACK_IMPORTED_MODULE_5__["SOLAR_SYSTEM"]
            .filter((body) => body.id !== 'sun')
            .map((body) => {
            return {
                body,
                path: this.sceneService.getOrbit(body, NB_POINTS_ORBIT)
            };
        });
        const lineFn = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])().curve(d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveCardinalClosed"]).x(p => p.x).y(p => p.y);
        this.groupZoomableSelection.selectAll('.orbit')
            .data(orbitsData, (d) => d.body.id)
            .join(enter => enter.append('path')
            .attr('class', (orbit) => 'orbit ' + orbit.body.type + ' ' + orbit.body.id)
            .attr('d', (orbit) => lineFn(orbit.path)));
    }
    initTooltips() {
        const tooltipsData = _data_SolarSystem_data__WEBPACK_IMPORTED_MODULE_5__["SOLAR_SYSTEM"].map((body) => {
            return {
                body,
                boundingBox: Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])('#' + body.id).node().getBoundingClientRect() // TODO store node
            };
        });
        const tooltipPath = this.groupStaticSelection.append('path')
            .attr('class', 'tooltip-path')
            .style('opacity', 0);
        this.groupStaticSelection.selectAll('.tooltip')
            .data(tooltipsData, (d) => d.body.id)
            .join(enter => enter.append('text')
            .attr('id', (d) => 'tooltiptext_' + d.body.id)
            .attr('class', (d) => 'tooltip ' + d.body.type + ' ' + d.body.id)
            .text((d) => d.body.id)
            .attr('x', (d) => d.boundingBox.right + TOOLTIP_DISTANCE.x)
            .attr('y', (d) => d.boundingBox.bottom + TOOLTIP_DISTANCE.y)
            .on('mouseover', (event, d) => {
            const textBoundingBox = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])('#' + 'tooltiptext_' + d.body.id).node().getBoundingClientRect();
            tooltipPath.attr('d', `M ${d.boundingBox.x + (d.boundingBox.width / 2)} ${d.boundingBox.y + (d.boundingBox.height / 2)}
                                                                     L ${d.boundingBox.right + TOOLTIP_DISTANCE.x - TOOLTIP_PATH_MARGIN} ${d.boundingBox.bottom + TOOLTIP_DISTANCE.y + TOOLTIP_PATH_MARGIN}
                                                                     L ${d.boundingBox.right + TOOLTIP_DISTANCE.x + textBoundingBox.width + TOOLTIP_PATH_MARGIN} ${d.boundingBox.bottom + TOOLTIP_DISTANCE.y + TOOLTIP_PATH_MARGIN}`)
                .transition()
                .duration(TOOLTIP_TRANSITION_MS)
                .style('opacity', 1);
        })
            .on('mouseout', () => {
            tooltipPath.transition()
                .duration(TOOLTIP_TRANSITION_MS)
                .style('opacity', 0);
        }), update => update.attr('x', (d) => d.boundingBox.right + TOOLTIP_DISTANCE.x)
            .attr('y', (d) => d.boundingBox.bottom + TOOLTIP_DISTANCE.y));
    }
}
SceneComponent.ɵfac = function SceneComponent_Factory(t) { return new (t || SceneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scene_service__WEBPACK_IMPORTED_MODULE_4__["SceneService"])); };
SceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SceneComponent, selectors: [["app-scene"]], decls: 1, vars: 0, template: function SceneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #1f1f1f;\n}\n\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n[_nghost-%COMP%]     .celestial-body {\n  stroke: #5a5a5a;\n  stroke-width: 1;\n  fill: #2b2b2b;\n}\n\n[_nghost-%COMP%]     .celestial-body.sun {\n  stroke: #a8a072;\n  stroke-width: 1;\n  fill: #b9a700;\n}\n\n[_nghost-%COMP%]     .tooltip {\n  fill: white;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     .tooltip:hover {\n  fill: #5b94ff;\n}\n\n[_nghost-%COMP%]     .tooltip-path {\n  stroke: #0084ff;\n  stroke-width: 2;\n  fill: transparent;\n}\n\n[_nghost-%COMP%]     .orbit {\n  stroke: white;\n  stroke-width: 0.5;\n  shape-rendering: auto;\n  vector-effect: non-scaling-stroke;\n  fill: none;\n}\n\n[_nghost-%COMP%]     .zoom-level-solar-system .orbit.satellite {\n  display: none;\n}\n\n[_nghost-%COMP%]     .zoom-level-solar-system .tooltip.satellite {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NlbmUvc2NlbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFHSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUFSOztBQUdJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBRFI7O0FBSUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUZSOztBQUlJO0VBQ0ksYUFBQTtBQUZSOztBQUtJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUhSOztBQU1JO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUFKUjs7QUFPSTtFQUNJLGFBQUE7QUFMUjs7QUFRSTtFQUNJLGFBQUE7QUFOUiIsImZpbGUiOiJzcmMvYXBwL3NjZW5lL3NjZW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7XG59XG5cbnN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAgIC5jZWxlc3RpYWwtYm9keSB7XG4gICAgICAgIHN0cm9rZTogcmdiKDkwLCA5MCwgOTApO1xuICAgICAgICBzdHJva2Utd2lkdGg6IDE7XG4gICAgICAgIGZpbGw6IHJnYig0MywgNDMsIDQzKTtcbiAgICB9XG5cbiAgICAuY2VsZXN0aWFsLWJvZHkuc3VuIHtcbiAgICAgICAgc3Ryb2tlOiByZ2IoMTY4LCAxNjAsIDExNCk7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMTtcbiAgICAgICAgZmlsbDogcmdiKDE4NSwgMTY3LCAwKTtcbiAgICB9XG5cbiAgICAudG9vbHRpcCB7XG4gICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC50b29sdGlwOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiKDkxLCAxNDgsIDI1NSk7XG4gICAgfVxuXG4gICAgLnRvb2x0aXAtcGF0aCB7XG4gICAgICAgIHN0cm9rZTogcmdiKDAsIDEzMiwgMjU1KTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAub3JiaXQge1xuICAgICAgICBzdHJva2U6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwLjU7XG4gICAgICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbiAgICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlO1xuICAgICAgICBmaWxsOiBub25lO1xuICAgIH1cblxuICAgIC56b29tLWxldmVsLXNvbGFyLXN5c3RlbSAub3JiaXQuc2F0ZWxsaXRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuem9vbS1sZXZlbC1zb2xhci1zeXN0ZW0gLnRvb2x0aXAuc2F0ZWxsaXRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scene',
                templateUrl: './scene.component.html',
                styleUrls: ['./scene.component.scss']
            }]
    }], function () { return [{ type: _scene_service__WEBPACK_IMPORTED_MODULE_4__["SceneService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shell/shell.component */ "4UYq");



class AppComponent {
    constructor() {
        this.title = 'solar-system';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shell");
    } }, directives: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Z8ME":
/*!********************************************!*\
  !*** ./src/app/scene/data/Jupiter.data.ts ***!
  \********************************************/
/*! exports provided: METIS, ADRASTEA, AMALTHEA, THEBE, IO, EUROPA, GANYMEDE, CALLISTO, THEMISTO, LEDA, ERSA, PANDIA, HIMALIA, LYSITHEA, ELARA, DIA, CARPO, VALETUDO, EUPORIE, EUPHEME, S_2003_J_18, S_2010_J_2, HELIKE, S_2003_J_16, S_2003_J_2, EUANTHE, S_2017_J_7, HERMIPPE, PRAXIDIKE, THYONE, THELXINOE, S_2017_J_3, ANANKE, MNEME, S_2016_J_1, ORTHOSIE, HARPALYKE, IOCASTE, S_2017_J_9, S_2003_J_12, S_2003_J_4, ERINOME, AITNE, HERSE, TAYGETE, S_2017_J_2, S_2017_J_6, EUKELADE, CARME, S_2003_J_19, ISONOE, S_2003_J_10, AUTONOE, PHILOPHROSYNE, CYLLENE, PASITHEE, S_2010_J_1, PASIPHAE, SPONDE, S_2017_J_8, EURYDOME, S_2017_J_5, KALYKE, HEGEMONE, KALE, KALLICHORE, S_2011_J_1, S_2017_J_1, CHALDENE, ARCHE, EIRENE, KORE, S_2011_J_2, S_2003_J_9, MEGACLITE, AOEDE, S_2003_J_23, CALLIRRHOE, SINOPE, JUPITER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METIS", function() { return METIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADRASTEA", function() { return ADRASTEA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMALTHEA", function() { return AMALTHEA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEBE", function() { return THEBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUROPA", function() { return EUROPA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GANYMEDE", function() { return GANYMEDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALLISTO", function() { return CALLISTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEMISTO", function() { return THEMISTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEDA", function() { return LEDA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERSA", function() { return ERSA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PANDIA", function() { return PANDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIMALIA", function() { return HIMALIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LYSITHEA", function() { return LYSITHEA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELARA", function() { return ELARA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIA", function() { return DIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARPO", function() { return CARPO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALETUDO", function() { return VALETUDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUPORIE", function() { return EUPORIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUPHEME", function() { return EUPHEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2003_J_18", function() { return S_2003_J_18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2010_J_2", function() { return S_2010_J_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELIKE", function() { return HELIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2003_J_16", function() { return S_2003_J_16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2003_J_2", function() { return S_2003_J_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUANTHE", function() { return EUANTHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2017_J_7", function() { return S_2017_J_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HERMIPPE", function() { return HERMIPPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRAXIDIKE", function() { return PRAXIDIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THYONE", function() { return THYONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THELXINOE", function() { return THELXINOE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2017_J_3", function() { return S_2017_J_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANANKE", function() { return ANANKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MNEME", function() { return MNEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2016_J_1", function() { return S_2016_J_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORTHOSIE", function() { return ORTHOSIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HARPALYKE", function() { return HARPALYKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOCASTE", function() { return IOCASTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2017_J_9", function() { return S_2017_J_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2003_J_12", function() { return S_2003_J_12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2003_J_4", function() { return S_2003_J_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERINOME", function() { return ERINOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AITNE", function() { return AITNE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HERSE", function() { return HERSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAYGETE", function() { return TAYGETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2017_J_2", function() { return S_2017_J_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2017_J_6", function() { return S_2017_J_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUKELADE", function() { return EUKELADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARME", function() { return CARME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2003_J_19", function() { return S_2003_J_19; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISONOE", function() { return ISONOE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2003_J_10", function() { return S_2003_J_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTONOE", function() { return AUTONOE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHILOPHROSYNE", function() { return PHILOPHROSYNE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CYLLENE", function() { return CYLLENE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASITHEE", function() { return PASITHEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2010_J_1", function() { return S_2010_J_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASIPHAE", function() { return PASIPHAE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPONDE", function() { return SPONDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2017_J_8", function() { return S_2017_J_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EURYDOME", function() { return EURYDOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2017_J_5", function() { return S_2017_J_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KALYKE", function() { return KALYKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEGEMONE", function() { return HEGEMONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KALE", function() { return KALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KALLICHORE", function() { return KALLICHORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2011_J_1", function() { return S_2011_J_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2017_J_1", function() { return S_2017_J_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHALDENE", function() { return CHALDENE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARCHE", function() { return ARCHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIRENE", function() { return EIRENE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KORE", function() { return KORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2011_J_2", function() { return S_2011_J_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2003_J_9", function() { return S_2003_J_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEGACLITE", function() { return MEGACLITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AOEDE", function() { return AOEDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2003_J_23", function() { return S_2003_J_23; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALLIRRHOE", function() { return CALLIRRHOE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINOPE", function() { return SINOPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUPITER", function() { return JUPITER; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");

const METIS = {
    id: 'metis',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 3.6e16,
    radius: 21.5,
    semiMajorAxis: 128852,
    eccentricity: 0.0077,
    trueAnomaly: 0,
    meanAnomaly: 276.047,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ADRASTEA = {
    id: 'adrastea',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.2e16,
    radius: 8.2,
    semiMajorAxis: 129000,
    eccentricity: 0.0063,
    trueAnomaly: 0,
    meanAnomaly: 135.673,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const AMALTHEA = {
    id: 'amalthea',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 208e16,
    radius: 83.5,
    semiMajorAxis: 181366,
    eccentricity: 0.0075,
    trueAnomaly: 0,
    meanAnomaly: 185.194,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const THEBE = {
    id: 'thebe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 43e16,
    radius: 49.3,
    semiMajorAxis: 222452,
    eccentricity: 0.0180,
    trueAnomaly: 0,
    meanAnomaly: 135.956,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const IO = {
    id: 'io',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 8931900e16,
    radius: 1821.6,
    semiMajorAxis: 421700,
    eccentricity: 0.0041,
    trueAnomaly: 0,
    meanAnomaly: 342.021,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const EUROPA = {
    id: 'europa',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 4800000e16,
    radius: 1560.8,
    semiMajorAxis: 671034,
    eccentricity: 0.0094,
    trueAnomaly: 0,
    meanAnomaly: 171.016,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const GANYMEDE = {
    id: 'ganymede',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 14819000e16,
    radius: 2631.2,
    semiMajorAxis: 1070412,
    eccentricity: 0.0011,
    trueAnomaly: 0,
    meanAnomaly: 317.540,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CALLISTO = {
    id: 'callisto',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 10759000e16,
    radius: 2410.3,
    semiMajorAxis: 1882709,
    eccentricity: 0.0074,
    trueAnomaly: 0,
    meanAnomaly: 181.408,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const THEMISTO = {
    id: 'themisto',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.069e16,
    radius: 4.5,
    semiMajorAxis: 7405000,
    eccentricity: 0.2514,
    trueAnomaly: 0,
    meanAnomaly: 313.051,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const LEDA = {
    id: 'leda',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.6e16,
    radius: 10.75,
    semiMajorAxis: 11196000,
    eccentricity: 0.1648,
    trueAnomaly: 0,
    meanAnomaly: 230.352,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ERSA = {
    id: 'ersa',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 11348700,
    eccentricity: 0.1043,
    trueAnomaly: 0,
    meanAnomaly: 356.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PANDIA = {
    id: 'pandia',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 11462300,
    eccentricity: 0.2084,
    trueAnomaly: 0,
    meanAnomaly: 282.4,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HIMALIA = {
    id: 'himalia',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 420e16,
    radius: 69.8,
    semiMajorAxis: 11497400,
    eccentricity: 0.1510,
    trueAnomaly: 0,
    meanAnomaly: 66.874,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const LYSITHEA = {
    id: 'lysithea',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 6.3e16,
    radius: 21.1,
    semiMajorAxis: 11628300,
    eccentricity: 0.1377,
    trueAnomaly: 0,
    meanAnomaly: 330.475,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ELARA = {
    id: 'elara',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 87e16,
    radius: 39.95,
    semiMajorAxis: 11671600,
    eccentricity: 0.2079,
    trueAnomaly: 0,
    meanAnomaly: 330.985,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const DIA = {
    id: 'dia',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 12304900,
    eccentricity: 0.2606,
    trueAnomaly: 0,
    meanAnomaly: 169.9,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CARPO = {
    id: 'carpo',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 17151800,
    eccentricity: 0.4967,
    trueAnomaly: 0,
    meanAnomaly: 337.062,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const VALETUDO = {
    id: 'valetudo',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.00015e16,
    radius: 0.5,
    semiMajorAxis: 18819000,
    eccentricity: 0.2018,
    trueAnomaly: 0,
    meanAnomaly: 201.41718,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const EUPORIE = {
    id: 'euporie',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 19593900,
    eccentricity: 0.1402,
    trueAnomaly: 0,
    meanAnomaly: 70.243,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const EUPHEME = {
    id: 'eupheme',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 20126300,
    eccentricity: 0.4104,
    trueAnomaly: 0,
    meanAnomaly: 168.7,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2003_J_18 = {
    id: 's_2003-j-18',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 20348800,
    eccentricity: 0.0465,
    trueAnomaly: 0,
    meanAnomaly: 202.160,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2010_J_2 = {
    id: 's_2010-j-2',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.00015e16,
    radius: 0.5,
    semiMajorAxis: 20436700,
    eccentricity: 0.3403,
    trueAnomaly: 0,
    meanAnomaly: 312.074,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HELIKE = {
    id: 'helike',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 20479500,
    eccentricity: 0.1331,
    trueAnomaly: 0,
    meanAnomaly: 43.659,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2003_J_16 = {
    id: 's_2003-j-16',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 20512500,
    eccentricity: 0.3331,
    trueAnomaly: 0,
    meanAnomaly: 307.563,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2003_J_2 = {
    id: 's_2003-j-2',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 20554400,
    eccentricity: 0.2777,
    trueAnomaly: 0,
    meanAnomaly: 237.932,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const EUANTHE = {
    id: 'euanthe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 20583300,
    eccentricity: 0.1096,
    trueAnomaly: 0,
    meanAnomaly: 333.101,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2017_J_7 = {
    id: 's_2017-j-7',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 20600100,
    eccentricity: 0.2626,
    trueAnomaly: 0,
    meanAnomaly: 236.9,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HERMIPPE = {
    id: 'hermippe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 20666200,
    eccentricity: 0.1981,
    trueAnomaly: 0,
    meanAnomaly: 131.854,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PRAXIDIKE = {
    id: 'praxidike',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.043e16,
    radius: 3.5,
    semiMajorAxis: 20682900,
    eccentricity: 0.2959,
    trueAnomaly: 0,
    meanAnomaly: 117.480,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const THYONE = {
    id: 'thyone',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 20712800,
    eccentricity: 0.1770,
    trueAnomaly: 0,
    meanAnomaly: 238.786,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const THELXINOE = {
    id: 'thelxinoe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 20893300,
    eccentricity: 0.1709,
    trueAnomaly: 0,
    meanAnomaly: 268.013,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2017_J_3 = {
    id: 's_2017-j-3',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 20976900,
    eccentricity: 0.1907,
    trueAnomaly: 0,
    meanAnomaly: 91.2,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ANANKE = {
    id: 'ananke',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 3.0e16,
    radius: 14.55,
    semiMajorAxis: 21042500,
    eccentricity: 0.1747,
    trueAnomaly: 0,
    meanAnomaly: 253.384,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const MNEME = {
    id: 'mneme',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 21064100,
    eccentricity: 0.3428,
    trueAnomaly: 0,
    meanAnomaly: 256.860,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2016_J_1 = {
    id: 's_2016-j-1',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.00015e16,
    radius: 0.5,
    semiMajorAxis: 21154000,
    eccentricity: 0.1294,
    trueAnomaly: 0,
    meanAnomaly: 25.53,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ORTHOSIE = {
    id: 'orthosie',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 21171000,
    eccentricity: 0.4838,
    trueAnomaly: 0,
    meanAnomaly: 204.517,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HARPALYKE = {
    id: 'harpalyke',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 21280200,
    eccentricity: 0.1602,
    trueAnomaly: 0,
    meanAnomaly: 215.956,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const IOCASTE = {
    id: 'iocaste',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.019e16,
    radius: 2.5,
    semiMajorAxis: 21431800,
    eccentricity: 0.3295,
    trueAnomaly: 0,
    meanAnomaly: 213.675,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2017_J_9 = {
    id: 's_2017-j-9',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 21492900,
    eccentricity: 0.2524,
    trueAnomaly: 0,
    meanAnomaly: 259.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2003_J_12 = {
    id: 's_2003-j-12',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.00015e16,
    radius: 0.5,
    semiMajorAxis: 21557700,
    eccentricity: 0.3657,
    trueAnomaly: 0,
    meanAnomaly: 38.543,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2003_J_4 = {
    id: 's_2003-j-4',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22048600,
    eccentricity: 0.4967,
    trueAnomaly: 0,
    meanAnomaly: 260.480,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ERINOME = {
    id: 'erinome',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 22354300,
    eccentricity: 0.2052,
    trueAnomaly: 0,
    meanAnomaly: 267.136,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const AITNE = {
    id: 'aitne',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 22386500,
    eccentricity: 0.3150,
    trueAnomaly: 0,
    meanAnomaly: 105.000,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HERSE = {
    id: 'herse',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22408800,
    eccentricity: 0.1854,
    trueAnomaly: 0,
    meanAnomaly: 141.667,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const TAYGETE = {
    id: 'taygete',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.016e16,
    radius: 2.5,
    semiMajorAxis: 22433500,
    eccentricity: 0.3257,
    trueAnomaly: 0,
    meanAnomaly: 94.756,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2017_J_2 = {
    id: 's_2017-j-2',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22472900,
    eccentricity: 0.3852,
    trueAnomaly: 0,
    meanAnomaly: 344.4,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2017_J_6 = {
    id: 's_2017-j-6',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22543800,
    eccentricity: 0.3226,
    trueAnomaly: 0,
    meanAnomaly: 236.9,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const EUKELADE = {
    id: 'eukelade',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 22576700,
    eccentricity: 0.2790,
    trueAnomaly: 0,
    meanAnomaly: 204.846,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CARME = {
    id: 'carme',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 13e16,
    radius: 23.35,
    semiMajorAxis: 22579900,
    eccentricity: 0.2295,
    trueAnomaly: 0,
    meanAnomaly: 233.375,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2003_J_19 = {
    id: 's_2003-j-19',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22752500,
    eccentricity: 0.2928,
    trueAnomaly: 0,
    meanAnomaly: 223.035,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ISONOE = {
    id: 'isonoe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 22776700,
    eccentricity: 0.2159,
    trueAnomaly: 0,
    meanAnomaly: 124.941,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2003_J_10 = {
    id: 's_2003-j-10',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22896200,
    eccentricity: 0.2066,
    trueAnomaly: 0,
    meanAnomaly: 258.937,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const AUTONOE = {
    id: 'autonoe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 22933400,
    eccentricity: 0.4290,
    trueAnomaly: 0,
    meanAnomaly: 142.035,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PHILOPHROSYNE = {
    id: 'philophrosyne',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22939900,
    eccentricity: 0.3013,
    trueAnomaly: 0,
    meanAnomaly: 161.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CYLLENE = {
    id: 'cyllene',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22965200,
    eccentricity: 0.6079,
    trueAnomaly: 0,
    meanAnomaly: 128.345,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PASITHEE = {
    id: 'pasithee',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22967800,
    eccentricity: 0.2097,
    trueAnomaly: 0,
    meanAnomaly: 215.443,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2010_J_1 = {
    id: 's_2010-j-1',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 22986900,
    eccentricity: 0.2937,
    trueAnomaly: 0,
    meanAnomaly: 160.525,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PASIPHAE = {
    id: 'pasiphae',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 30e16,
    radius: 28.9,
    semiMajorAxis: 23119300,
    eccentricity: 0.4362,
    trueAnomaly: 0,
    meanAnomaly: 279.769,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SPONDE = {
    id: 'sponde',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 23146500,
    eccentricity: 0.3455,
    trueAnomaly: 0,
    meanAnomaly: 174.044,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2017_J_8 = {
    id: 's_2017-j-8',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.00015e16,
    radius: 0.5,
    semiMajorAxis: 23173700,
    eccentricity: 0.2039,
    trueAnomaly: 0,
    meanAnomaly: 70.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const EURYDOME = {
    id: 'eurydome',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 23214500,
    eccentricity: 0.2975,
    trueAnomaly: 0,
    meanAnomaly: 287.689,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2017_J_5 = {
    id: 's_2017-j-5',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 23352500,
    eccentricity: 0.2460,
    trueAnomaly: 0,
    meanAnomaly: 77.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const KALYKE = {
    id: 'kalyke',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.04e16,
    radius: 3.45,
    semiMajorAxis: 23377400,
    eccentricity: 0.2660,
    trueAnomaly: 0,
    meanAnomaly: 255.702,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HEGEMONE = {
    id: 'hegemone',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 23422300,
    eccentricity: 0.3358,
    trueAnomaly: 0,
    meanAnomaly: 236.950,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const KALE = {
    id: 'kale',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 23512200,
    eccentricity: 0.2893,
    trueAnomaly: 0,
    meanAnomaly: 212.853,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const KALLICHORE = {
    id: 'kallichore',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 23552900,
    eccentricity: 0.3183,
    trueAnomaly: 0,
    meanAnomaly: 55.937,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2011_J_1 = {
    id: 's_2011-j-1',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 23714400,
    eccentricity: 0.3193,
    trueAnomaly: 0,
    meanAnomaly: 256.027,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2017_J_1 = {
    id: 's_2017-j-1',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 23753600,
    eccentricity: 0.4500,
    trueAnomaly: 0,
    meanAnomaly: 161.3,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CHALDENE = {
    id: 'chaldene',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 23848300,
    eccentricity: 0.2705,
    trueAnomaly: 0,
    meanAnomaly: 267.454,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ARCHE = {
    id: 'arche',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0045e16,
    radius: 1.5,
    semiMajorAxis: 23926500,
    eccentricity: 0.2367,
    trueAnomaly: 0,
    meanAnomaly: 39.713,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const EIRENE = {
    id: 'eirene',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 23934500,
    eccentricity: 0.2413,
    trueAnomaly: 0,
    meanAnomaly: 284.4,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const KORE = {
    id: 'kore',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 23999700,
    eccentricity: 0.2347,
    trueAnomaly: 0,
    meanAnomaly: 33.416,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2011_J_2 = {
    id: 's_2011-j-2',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.00015e16,
    radius: 0.5,
    semiMajorAxis: 24114700,
    eccentricity: 0.1729,
    trueAnomaly: 0,
    meanAnomaly: 285.597,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2003_J_9 = {
    id: 's_2003-j-9',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.00015e16,
    radius: 0.5,
    semiMajorAxis: 24168700,
    eccentricity: 0.1702,
    trueAnomaly: 0,
    meanAnomaly: 348.415,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const MEGACLITE = {
    id: 'megaclite',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.021e16,
    radius: 2.5,
    semiMajorAxis: 24212300,
    eccentricity: 0.3139,
    trueAnomaly: 0,
    meanAnomaly: 135.272,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const AOEDE = {
    id: 'aoede',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.009e16,
    radius: 2,
    semiMajorAxis: 24283000,
    eccentricity: 0.3131,
    trueAnomaly: 0,
    meanAnomaly: 197.676,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2003_J_23 = {
    id: 's_2003-j-23',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e16,
    radius: 1,
    semiMajorAxis: 24678200,
    eccentricity: 0.3208,
    trueAnomaly: 0,
    meanAnomaly: 144.222,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CALLIRRHOE = {
    id: 'callirrhoe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.087e16,
    radius: 4.8,
    semiMajorAxis: 24692400,
    eccentricity: 0.3562,
    trueAnomaly: 0,
    meanAnomaly: 107.962,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SINOPE = {
    id: 'sinope',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 7.5e16,
    radius: 17.5,
    semiMajorAxis: 24864100,
    eccentricity: 0.1669,
    trueAnomaly: 0,
    meanAnomaly: 165.352,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const JUPITER = {
    id: 'jupiter',
    position: {
        x: 0,
        y: 0
    },
    speed: 13.07,
    mass: 1.8982e27,
    radius: 69911,
    semiMajorAxis: 778570000,
    eccentricity: 0.0489,
    trueAnomaly: 0,
    meanAnomaly: 20.020,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].PLANET,
    satellites: [
        METIS,
        ADRASTEA,
        AMALTHEA,
        THEBE,
        IO,
        EUROPA,
        GANYMEDE,
        CALLISTO,
        THEMISTO,
        LEDA,
        ERSA,
        PANDIA,
        HIMALIA,
        LYSITHEA,
        ELARA,
        DIA,
        CARPO,
        VALETUDO,
        EUPORIE,
        EUPHEME,
        S_2003_J_18,
        S_2010_J_2,
        HELIKE,
        S_2003_J_16,
        S_2003_J_2,
        EUANTHE,
        S_2017_J_7,
        HERMIPPE,
        PRAXIDIKE,
        THYONE,
        THELXINOE,
        S_2017_J_3,
        ANANKE,
        MNEME,
        S_2016_J_1,
        ORTHOSIE,
        HARPALYKE,
        IOCASTE,
        S_2017_J_9,
        S_2003_J_12,
        S_2003_J_4,
        ERINOME,
        AITNE,
        HERSE,
        TAYGETE,
        S_2017_J_2,
        S_2017_J_6,
        EUKELADE,
        CARME,
        S_2003_J_19,
        ISONOE,
        S_2003_J_10,
        AUTONOE,
        PHILOPHROSYNE,
        CYLLENE,
        PASITHEE,
        S_2010_J_1,
        PASIPHAE,
        SPONDE,
        S_2017_J_8,
        EURYDOME,
        S_2017_J_5,
        KALYKE,
        HEGEMONE,
        KALE,
        KALLICHORE,
        S_2011_J_1,
        S_2017_J_1,
        CHALDENE,
        ARCHE,
        EIRENE,
        KORE,
        S_2011_J_2,
        S_2003_J_9,
        MEGACLITE,
        AOEDE,
        S_2003_J_23,
        CALLIRRHOE,
        SINOPE
    ],
    orbitBody: null
};
JUPITER.satellites.forEach(satellite => satellite.orbitBody = JUPITER);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell/shell.component */ "4UYq");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _scene_scene_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scene/scene.component */ "PEKV");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shell_shell_component__WEBPACK_IMPORTED_MODULE_5__["ShellComponent"],
        _scene_scene_component__WEBPACK_IMPORTED_MODULE_12__["SceneComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shell_shell_component__WEBPACK_IMPORTED_MODULE_5__["ShellComponent"],
                    _scene_scene_component__WEBPACK_IMPORTED_MODULE_12__["SceneComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cVL8":
/*!********************************************!*\
  !*** ./src/app/scene/data/Mercury.data.ts ***!
  \********************************************/
/*! exports provided: MERCURY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MERCURY", function() { return MERCURY; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");

const MERCURY = {
    id: 'mercury',
    position: {
        x: 0,
        y: 0
    },
    speed: 47.36,
    mass: 3.3011e23,
    radius: 2440,
    semiMajorAxis: 57909050,
    eccentricity: 0.20563,
    trueAnomaly: 0,
    meanAnomaly: 174.796,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].PLANET,
    satellites: [],
    orbitBody: null
};


/***/ }),

/***/ "colP":
/*!*******************************************!*\
  !*** ./src/app/scene/data/Uranus.data.ts ***!
  \*******************************************/
/*! exports provided: CORDELIA, OPHELIA, BIANCA, CRESSIDA, DESDEMONA, JULIET, PORTIA, ROSALIND, CUPID, BELINDA, PERDITA, PUCK, MAB, MIRANDA, ARIEL, UMBRIEL, TITANIA, OBERON, FRANCISCO, CALIBAN, STEPHANO, TRINCULO, SYCORAX, MARGARET, PROSPERO, SETEBOS, FERDINAND, URANUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORDELIA", function() { return CORDELIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPHELIA", function() { return OPHELIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIANCA", function() { return BIANCA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRESSIDA", function() { return CRESSIDA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESDEMONA", function() { return DESDEMONA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JULIET", function() { return JULIET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTIA", function() { return PORTIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROSALIND", function() { return ROSALIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUPID", function() { return CUPID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BELINDA", function() { return BELINDA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERDITA", function() { return PERDITA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUCK", function() { return PUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAB", function() { return MAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIRANDA", function() { return MIRANDA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIEL", function() { return ARIEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UMBRIEL", function() { return UMBRIEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITANIA", function() { return TITANIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBERON", function() { return OBERON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRANCISCO", function() { return FRANCISCO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALIBAN", function() { return CALIBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPHANO", function() { return STEPHANO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRINCULO", function() { return TRINCULO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYCORAX", function() { return SYCORAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARGARET", function() { return MARGARET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROSPERO", function() { return PROSPERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETEBOS", function() { return SETEBOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FERDINAND", function() { return FERDINAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URANUS", function() { return URANUS; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");

const CORDELIA = {
    id: 'cordelia',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 4.4e16,
    radius: 20,
    semiMajorAxis: 49770,
    eccentricity: 0.00026,
    trueAnomaly: 0,
    meanAnomaly: 254.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const OPHELIA = {
    id: 'ophelia',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 5.3e16,
    radius: 21.5,
    semiMajorAxis: 53790,
    eccentricity: 0.00992,
    trueAnomaly: 0,
    meanAnomaly: 116.3,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const BIANCA = {
    id: 'bianca',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 9.2e16,
    radius: 25.5,
    semiMajorAxis: 59170,
    eccentricity: 0.00092,
    trueAnomaly: 0,
    meanAnomaly: 138.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CRESSIDA = {
    id: 'cressida',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 34e16,
    radius: 40,
    semiMajorAxis: 61780,
    eccentricity: 0.00036,
    trueAnomaly: 0,
    meanAnomaly: 233.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const DESDEMONA = {
    id: 'desdemona',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 18e16,
    radius: 32,
    semiMajorAxis: 62680,
    eccentricity: 0.00013,
    trueAnomaly: 0,
    meanAnomaly: 184.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const JULIET = {
    id: 'juliet',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 56e16,
    radius: 47,
    semiMajorAxis: 64350,
    eccentricity: 0.00066,
    trueAnomaly: 0,
    meanAnomaly: 244.7,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PORTIA = {
    id: 'portia',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 170e16,
    radius: 67.5,
    semiMajorAxis: 66090,
    eccentricity: 0.00005,
    trueAnomaly: 0,
    meanAnomaly: 218.3,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ROSALIND = {
    id: 'rosalind',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 25e16,
    radius: 36,
    semiMajorAxis: 69940,
    eccentricity: 0.00011,
    trueAnomaly: 0,
    meanAnomaly: 136.1,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CUPID = {
    id: 'cupid',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.38e16,
    radius: 9,
    semiMajorAxis: 74800,
    eccentricity: 0.0013,
    trueAnomaly: 0,
    meanAnomaly: 163.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const BELINDA = {
    id: 'belinda',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 49e16,
    radius: 45,
    semiMajorAxis: 75260,
    eccentricity: 0.00007,
    trueAnomaly: 0,
    meanAnomaly: 357.2,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PERDITA = {
    id: 'perdita',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 1.8e16,
    radius: 15,
    semiMajorAxis: 76400,
    eccentricity: 0.0012,
    trueAnomaly: 0,
    meanAnomaly: 192.4,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PUCK = {
    id: 'puck',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 290e16,
    radius: 81,
    semiMajorAxis: 86010,
    eccentricity: 0.00012,
    trueAnomaly: 0,
    meanAnomaly: 245.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const MAB = {
    id: 'mab',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 1.0e16,
    radius: 12.5,
    semiMajorAxis: 97700,
    eccentricity: 0.0025,
    trueAnomaly: 0,
    meanAnomaly: 273.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const MIRANDA = {
    id: 'miranda',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 6590e16,
    radius: 235.8,
    semiMajorAxis: 129390,
    eccentricity: 0.0013,
    trueAnomaly: 0,
    meanAnomaly: 311.3,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ARIEL = {
    id: 'ariel',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 135300e16,
    radius: 578.9,
    semiMajorAxis: 191020,
    eccentricity: 0.0012,
    trueAnomaly: 0,
    meanAnomaly: 39.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const UMBRIEL = {
    id: 'umbriel',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 117200e16,
    radius: 584.7,
    semiMajorAxis: 266300,
    eccentricity: 0.0039,
    trueAnomaly: 0,
    meanAnomaly: 12.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const TITANIA = {
    id: 'titania',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 352700e16,
    radius: 788.4,
    semiMajorAxis: 435910,
    eccentricity: 0.0011,
    trueAnomaly: 0,
    meanAnomaly: 24.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const OBERON = {
    id: 'oberon',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 301400e16,
    radius: 761.4,
    semiMajorAxis: 583520,
    eccentricity: 0.0014,
    trueAnomaly: 0,
    meanAnomaly: 283.1,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const FRANCISCO = {
    id: 'francisco',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.72e16,
    radius: 11,
    semiMajorAxis: 4282900,
    eccentricity: 0.1324,
    trueAnomaly: 0,
    meanAnomaly: 90.9,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CALIBAN = {
    id: 'caliban',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 7.0e16,
    radius: 21,
    semiMajorAxis: 7231100,
    eccentricity: 0.1812,
    trueAnomaly: 0,
    meanAnomaly: 163.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const STEPHANO = {
    id: 'stephano',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 2.2e16,
    radius: 16,
    semiMajorAxis: 8007400,
    eccentricity: 0.2248,
    trueAnomaly: 0,
    meanAnomaly: 188.1,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const TRINCULO = {
    id: 'trinculo',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.39e16,
    radius: 9,
    semiMajorAxis: 8505200,
    eccentricity: 0.2194,
    trueAnomaly: 0,
    meanAnomaly: 194.9,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SYCORAX = {
    id: 'sycorax',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 230e16,
    radius: 78.5,
    semiMajorAxis: 12179400,
    eccentricity: 0.5219,
    trueAnomaly: 0,
    meanAnomaly: 260.9,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const MARGARET = {
    id: 'margaret',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.54e16,
    radius: 10,
    semiMajorAxis: 14146700,
    eccentricity: 0.6772,
    trueAnomaly: 0,
    meanAnomaly: 3.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PROSPERO = {
    id: 'prospero',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 8.5e16,
    radius: 25,
    semiMajorAxis: 16276800,
    eccentricity: 0.4445,
    trueAnomaly: 0,
    meanAnomaly: 316.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SETEBOS = {
    id: 'setebos',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 7.5e16,
    radius: 24,
    semiMajorAxis: 17420400,
    eccentricity: 0.5908,
    trueAnomaly: 0,
    meanAnomaly: 247.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const FERDINAND = {
    id: 'ferdinand',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.54e16,
    radius: 10,
    semiMajorAxis: 20430000,
    eccentricity: 0.3993,
    trueAnomaly: 0,
    meanAnomaly: 216.4,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const URANUS = {
    id: 'uranus',
    position: {
        x: 0,
        y: 0
    },
    speed: 6.80,
    mass: 8.6810e25,
    radius: 25362,
    semiMajorAxis: 2875040000,
    eccentricity: 0.046381,
    trueAnomaly: 0,
    meanAnomaly: 142.2386,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].PLANET,
    satellites: [
        CORDELIA,
        OPHELIA,
        BIANCA,
        CRESSIDA,
        DESDEMONA,
        JULIET,
        PORTIA,
        ROSALIND,
        CUPID,
        BELINDA,
        PERDITA,
        PUCK,
        MAB,
        MIRANDA,
        ARIEL,
        UMBRIEL,
        TITANIA,
        OBERON,
        FRANCISCO,
        CALIBAN,
        STEPHANO,
        TRINCULO,
        SYCORAX,
        MARGARET,
        PROSPERO,
        SETEBOS,
        FERDINAND
    ],
    orbitBody: null
};
URANUS.satellites.forEach(satellite => satellite.orbitBody = URANUS);


/***/ }),

/***/ "f9nU":
/*!*******************************************!*\
  !*** ./src/app/scene/data/Saturn.data.ts ***!
  \*******************************************/
/*! exports provided: S_2009_S_1, PAN, DAPHNIS, ATLAS, PROMETHEUS, PANDORA, EPIMETHEUS, JANUS, AEGAEON, MIMAS, METHONE, ANTHE, PALLENE, ENCELADUS, TETHYS, TELESTO, CALYPSO, DIONE, HELENE, POLYDEUCES, RHEA, TITAN, HYPERION, IAPETUS, KIVIUQ, IJIRAQ, PHOEBE, PAALIAQ, SKATHI, S_2004_S_37, S_2007_S_2, ALBIORIX, BEBHIONN, S_2004_S_29, SKOLL, S_2004_S_31, ERRIAPUS, TARQEQ, SIARNAQ, TARVOS, HYRROKKIN, GREIP, MUNDILFARI, S_2004_S_13, S_2006_S_1, S_2007_S_3, SUTTUNGR, S_2004_S_20, JARNSAXA, NARVI, BERGELMIR, HATI, S_2004_S_17, S_2004_S_12, S_2004_S_27, FARBAUTI, THRYMR, BESTLA, S_2004_S_7, AEGIR, S_2004_S_30, S_2004_S_22, S_2004_S_25, S_2004_S_32, S_2004_S_23, S_2006_S_3, S_2004_S_35, KARI, S_2004_S_28, LOGE, S_2004_S_38, FENRIR, YMIR, SURTUR, S_2004_S_33, S_2004_S_24, S_2004_S_21, S_2004_S_39, S_2004_S_36, FORNJOT, S_2004_S_34, S_2004_S_26, SATURN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2009_S_1", function() { return S_2009_S_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAN", function() { return PAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAPHNIS", function() { return DAPHNIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATLAS", function() { return ATLAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROMETHEUS", function() { return PROMETHEUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PANDORA", function() { return PANDORA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPIMETHEUS", function() { return EPIMETHEUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JANUS", function() { return JANUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AEGAEON", function() { return AEGAEON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIMAS", function() { return MIMAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METHONE", function() { return METHONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANTHE", function() { return ANTHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PALLENE", function() { return PALLENE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENCELADUS", function() { return ENCELADUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TETHYS", function() { return TETHYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TELESTO", function() { return TELESTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALYPSO", function() { return CALYPSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIONE", function() { return DIONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELENE", function() { return HELENE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLYDEUCES", function() { return POLYDEUCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RHEA", function() { return RHEA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITAN", function() { return TITAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYPERION", function() { return HYPERION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAPETUS", function() { return IAPETUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIVIUQ", function() { return KIVIUQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IJIRAQ", function() { return IJIRAQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOEBE", function() { return PHOEBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAALIAQ", function() { return PAALIAQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKATHI", function() { return SKATHI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_37", function() { return S_2004_S_37; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2007_S_2", function() { return S_2007_S_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALBIORIX", function() { return ALBIORIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEBHIONN", function() { return BEBHIONN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_29", function() { return S_2004_S_29; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKOLL", function() { return SKOLL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_31", function() { return S_2004_S_31; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRIAPUS", function() { return ERRIAPUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARQEQ", function() { return TARQEQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIARNAQ", function() { return SIARNAQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARVOS", function() { return TARVOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYRROKKIN", function() { return HYRROKKIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREIP", function() { return GREIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUNDILFARI", function() { return MUNDILFARI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_13", function() { return S_2004_S_13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2006_S_1", function() { return S_2006_S_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2007_S_3", function() { return S_2007_S_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUTTUNGR", function() { return SUTTUNGR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_20", function() { return S_2004_S_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JARNSAXA", function() { return JARNSAXA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NARVI", function() { return NARVI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BERGELMIR", function() { return BERGELMIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HATI", function() { return HATI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_17", function() { return S_2004_S_17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_12", function() { return S_2004_S_12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_27", function() { return S_2004_S_27; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FARBAUTI", function() { return FARBAUTI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THRYMR", function() { return THRYMR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BESTLA", function() { return BESTLA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_7", function() { return S_2004_S_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AEGIR", function() { return AEGIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_30", function() { return S_2004_S_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_22", function() { return S_2004_S_22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_25", function() { return S_2004_S_25; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_32", function() { return S_2004_S_32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_23", function() { return S_2004_S_23; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2006_S_3", function() { return S_2006_S_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_35", function() { return S_2004_S_35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KARI", function() { return KARI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_28", function() { return S_2004_S_28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGE", function() { return LOGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_38", function() { return S_2004_S_38; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FENRIR", function() { return FENRIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YMIR", function() { return YMIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SURTUR", function() { return SURTUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_33", function() { return S_2004_S_33; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_24", function() { return S_2004_S_24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_21", function() { return S_2004_S_21; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_39", function() { return S_2004_S_39; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_36", function() { return S_2004_S_36; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORNJOT", function() { return FORNJOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_34", function() { return S_2004_S_34; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2004_S_26", function() { return S_2004_S_26; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SATURN", function() { return SATURN; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");

const S_2009_S_1 = {
    id: 's_2009-s-1',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0001e15,
    radius: 0.15,
    semiMajorAxis: 117000,
    eccentricity: 0,
    trueAnomaly: 0,
    meanAnomaly: 0,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PAN = {
    id: 'pan',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 4.95e15,
    radius: 14.1,
    semiMajorAxis: 133584,
    eccentricity: 0,
    trueAnomaly: 0,
    meanAnomaly: 351.187,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const DAPHNIS = {
    id: 'daphnis',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.084e15,
    radius: 3.8,
    semiMajorAxis: 136505,
    eccentricity: 0,
    trueAnomaly: 0,
    meanAnomaly: 113.790,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ATLAS = {
    id: 'atlas',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 6.6e15,
    radius: 15.1,
    semiMajorAxis: 137670,
    eccentricity: 0.0012,
    trueAnomaly: 0,
    meanAnomaly: 283.282,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PROMETHEUS = {
    id: 'prometheus',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 159.5e15,
    radius: 43.1,
    semiMajorAxis: 139380,
    eccentricity: 0.0022,
    trueAnomaly: 0,
    meanAnomaly: 96.886,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PANDORA = {
    id: 'pandora',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 137.1e15,
    radius: 40.7,
    semiMajorAxis: 141720,
    eccentricity: 0.0042,
    trueAnomaly: 0,
    meanAnomaly: 125.112,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const EPIMETHEUS = {
    id: 'epimetheus',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 526.6e15,
    radius: 58.1,
    semiMajorAxis: 151422,
    eccentricity: 0.0098,
    trueAnomaly: 0,
    meanAnomaly: 80.377,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const JANUS = {
    id: 'janus',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 1897.5e15,
    radius: 89.5,
    semiMajorAxis: 151472,
    eccentricity: 0.0068,
    trueAnomaly: 0,
    meanAnomaly: 17.342,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const AEGAEON = {
    id: 'aegaeon',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0001e15,
    radius: 0.33,
    semiMajorAxis: 167500,
    eccentricity: 0.0004,
    trueAnomaly: 0,
    meanAnomaly: 322.771,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const MIMAS = {
    id: 'mimas',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 37493e15,
    radius: 198.2,
    semiMajorAxis: 185404,
    eccentricity: 0.0202,
    trueAnomaly: 0,
    meanAnomaly: 14.848,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const METHONE = {
    id: 'methone',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.02e15,
    radius: 1.45,
    semiMajorAxis: 194440,
    eccentricity: 0.0001,
    trueAnomaly: 0,
    meanAnomaly: 71.189,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ANTHE = {
    id: 'anthe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.0015e15,
    radius: 0.9,
    semiMajorAxis: 197700,
    eccentricity: 0.0011,
    trueAnomaly: 0,
    meanAnomaly: 190.473,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PALLENE = {
    id: 'pallene',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2.22,
    semiMajorAxis: 212280,
    eccentricity: 0.004,
    trueAnomaly: 0,
    meanAnomaly: 356.229,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ENCELADUS = {
    id: 'enceladus',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 108022e15,
    radius: 252.1,
    semiMajorAxis: 237950,
    eccentricity: 0.0047,
    trueAnomaly: 0,
    meanAnomaly: 199.686,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const TETHYS = {
    id: 'tethys',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 617449e15,
    radius: 531.1,
    semiMajorAxis: 294619,
    eccentricity: 0.0001,
    trueAnomaly: 0,
    meanAnomaly: 243.367,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const TELESTO = {
    id: 'telesto',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 9.41e15,
    radius: 12.4,
    semiMajorAxis: 294619,
    eccentricity: 0,
    trueAnomaly: 0,
    meanAnomaly: 260.157,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const CALYPSO = {
    id: 'calypso',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 6.3e15,
    radius: 10.7,
    semiMajorAxis: 294619,
    eccentricity: 0,
    trueAnomaly: 0,
    meanAnomaly: 156.660,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const DIONE = {
    id: 'dione',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 1095452e15,
    radius: 561.4,
    semiMajorAxis: 377396,
    eccentricity: 0.0022,
    trueAnomaly: 0,
    meanAnomaly: 322.232,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HELENE = {
    id: 'helene',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 24.5e15,
    radius: 17.6,
    semiMajorAxis: 377396,
    eccentricity: 0.0022,
    trueAnomaly: 0,
    meanAnomaly: 43.186,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const POLYDEUCES = {
    id: 'polydeuces',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.03e15,
    radius: 1.3,
    semiMajorAxis: 377396,
    eccentricity: 0.0192,
    trueAnomaly: 0,
    meanAnomaly: 89.307,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const RHEA = {
    id: 'rhea',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 2306518e15,
    radius: 763.8,
    semiMajorAxis: 527108,
    eccentricity: 0.0013,
    trueAnomaly: 0,
    meanAnomaly: 179.781,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const TITAN = {
    id: 'titan',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 134520000e15,
    radius: 2574.73,
    semiMajorAxis: 1221930,
    eccentricity: 0.0288,
    trueAnomaly: 0,
    meanAnomaly: 163.310,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HYPERION = {
    id: 'hyperion',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 5619.9e15,
    radius: 135,
    semiMajorAxis: 1481010,
    eccentricity: 0.123,
    trueAnomaly: 0,
    meanAnomaly: 86.342,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const IAPETUS = {
    id: 'iapetus',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 1805635e15,
    radius: 734.3,
    semiMajorAxis: 3560820,
    eccentricity: 0.0286,
    trueAnomaly: 0,
    meanAnomaly: 201.789,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const KIVIUQ = {
    id: 'kiviuq',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 2.79e15,
    radius: 8.5,
    semiMajorAxis: 11307500,
    eccentricity: 0.1521,
    trueAnomaly: 0,
    meanAnomaly: 172.018,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const IJIRAQ = {
    id: 'ijiraq',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 1.18e15,
    radius: 6.5,
    semiMajorAxis: 11348500,
    eccentricity: 0.3758,
    trueAnomaly: 0,
    meanAnomaly: 17.328,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PHOEBE = {
    id: 'phoebe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 8292e15,
    radius: 106.5,
    semiMajorAxis: 12905900,
    eccentricity: 0.1604,
    trueAnomaly: 0,
    meanAnomaly: 53.038,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PAALIAQ = {
    id: 'paaliaq',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 7.25e15,
    radius: 12.5,
    semiMajorAxis: 15012800,
    eccentricity: 0.4826,
    trueAnomaly: 0,
    meanAnomaly: 321.654,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SKATHI = {
    id: 'skathi',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.35e15,
    radius: 4,
    semiMajorAxis: 15563600,
    eccentricity: 0.2755,
    trueAnomaly: 0,
    meanAnomaly: 114.689,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_37 = {
    id: 's_2004-s-37',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 15822400,
    eccentricity: 0.5265,
    trueAnomaly: 0,
    meanAnomaly: 326.7,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2007_S_2 = {
    id: 's_2007-s-2',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 15971500,
    eccentricity: 0.2465,
    trueAnomaly: 0,
    meanAnomaly: 84.066,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ALBIORIX = {
    id: 'albiorix',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 22.3e15,
    radius: 14.3,
    semiMajorAxis: 16222700,
    eccentricity: 0.5807,
    trueAnomaly: 0,
    meanAnomaly: 32.828,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const BEBHIONN = {
    id: 'bebhionn',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 16900900,
    eccentricity: 0.3813,
    trueAnomaly: 0,
    meanAnomaly: 168.045,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_29 = {
    id: 's_2004-s-29',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 17202800,
    eccentricity: 0.4269,
    trueAnomaly: 0,
    meanAnomaly: 211.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SKOLL = {
    id: 'skoll',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 2.5,
    semiMajorAxis: 17438300,
    eccentricity: 0.4402,
    trueAnomaly: 0,
    meanAnomaly: 44.965,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_31 = {
    id: 's_2004-s-31',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 17449700,
    eccentricity: 0.2525,
    trueAnomaly: 0,
    meanAnomaly: 275.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ERRIAPUS = {
    id: 'erriapus',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.68e15,
    radius: 5,
    semiMajorAxis: 17705500,
    eccentricity: 0.452,
    trueAnomaly: 0,
    meanAnomaly: 294.829,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const TARQEQ = {
    id: 'tarqeq',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.23e15,
    radius: 3.5,
    semiMajorAxis: 17724200,
    eccentricity: 0.1373,
    trueAnomaly: 0,
    meanAnomaly: 161.020,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SIARNAQ = {
    id: 'siarnaq',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 43.5e15,
    radius: 19.65,
    semiMajorAxis: 17937000,
    eccentricity: 0.5293,
    trueAnomaly: 0,
    meanAnomaly: 201.288,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const TARVOS = {
    id: 'tarvos',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 2.3e15,
    radius: 7.5,
    semiMajorAxis: 18243800,
    eccentricity: 0.4799,
    trueAnomaly: 0,
    meanAnomaly: 265.783,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HYRROKKIN = {
    id: 'hyrrokkin',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.35e15,
    radius: 4,
    semiMajorAxis: 18348800,
    eccentricity: 0.3582,
    trueAnomaly: 0,
    meanAnomaly: 291.841,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const GREIP = {
    id: 'greip',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 2.5,
    semiMajorAxis: 18379000,
    eccentricity: 0.3331,
    trueAnomaly: 0,
    meanAnomaly: 314.541,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const MUNDILFARI = {
    id: 'mundilfari',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.23e15,
    radius: 3.5,
    semiMajorAxis: 18470800,
    eccentricity: 0.1787,
    trueAnomaly: 0,
    meanAnomaly: 92.821,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_13 = {
    id: 's_2004-s-13',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 18594700,
    eccentricity: 0.29,
    trueAnomaly: 0,
    meanAnomaly: 41.077,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2006_S_1 = {
    id: 's_2006-s-1',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 2.5,
    semiMajorAxis: 18839700,
    eccentricity: 0.0972,
    trueAnomaly: 0,
    meanAnomaly: 96.596,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2007_S_3 = {
    id: 's_2007-s-3',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.09e15,
    radius: 2.5,
    semiMajorAxis: 19143500,
    eccentricity: 0.1671,
    trueAnomaly: 0,
    meanAnomaly: 292.691,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SUTTUNGR = {
    id: 'suttungr',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.23e15,
    radius: 3.5,
    semiMajorAxis: 19166800,
    eccentricity: 0.1445,
    trueAnomaly: 0,
    meanAnomaly: 321.133,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_20 = {
    id: 's_2004-s-20',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 19188100,
    eccentricity: 0.1976,
    trueAnomaly: 0,
    meanAnomaly: 341.3,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const JARNSAXA = {
    id: 'jarnsaxa',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 19197900,
    eccentricity: 0.2148,
    trueAnomaly: 0,
    meanAnomaly: 198.750,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const NARVI = {
    id: 'narvi',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.23e15,
    radius: 3.5,
    semiMajorAxis: 19226600,
    eccentricity: 0.299,
    trueAnomaly: 0,
    meanAnomaly: 114.172,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const BERGELMIR = {
    id: 'bergelmir',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 2.5,
    semiMajorAxis: 19290200,
    eccentricity: 0.1399,
    trueAnomaly: 0,
    meanAnomaly: 306.494,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HATI = {
    id: 'hati',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 2.5,
    semiMajorAxis: 19435300,
    eccentricity: 0.3295,
    trueAnomaly: 0,
    meanAnomaly: 163.640,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_17 = {
    id: 's_2004-s-17',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 19574300,
    eccentricity: 0.1916,
    trueAnomaly: 0,
    meanAnomaly: 228.545,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_12 = {
    id: 's_2004-s-12',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.09e15,
    radius: 2.5,
    semiMajorAxis: 19736400,
    eccentricity: 0.3929,
    trueAnomaly: 0,
    meanAnomaly: 1.599,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_27 = {
    id: 's_2004-s-27',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 19982800,
    eccentricity: 0.1364,
    trueAnomaly: 0,
    meanAnomaly: 92.56,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const FARBAUTI = {
    id: 'farbauti',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.09e15,
    radius: 2.5,
    semiMajorAxis: 20101600,
    eccentricity: 0.1756,
    trueAnomaly: 0,
    meanAnomaly: 282.813,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const THRYMR = {
    id: 'thrymr',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.23e15,
    radius: 4,
    semiMajorAxis: 20236700,
    eccentricity: 0.4332,
    trueAnomaly: 0,
    meanAnomaly: 30.075,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const BESTLA = {
    id: 'bestla',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.23e15,
    radius: 3.5,
    semiMajorAxis: 20432100,
    eccentricity: 0.7072,
    trueAnomaly: 0,
    meanAnomaly: 239.156,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_7 = {
    id: 's_2004-s-7',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 20576700,
    eccentricity: 0.4998,
    trueAnomaly: 0,
    meanAnomaly: 79.762,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const AEGIR = {
    id: 'aegir',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 20598900,
    eccentricity: 0.2379,
    trueAnomaly: 0,
    meanAnomaly: 26.017,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_30 = {
    id: 's_2004-s-30',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.03e15,
    radius: 1.5,
    semiMajorAxis: 20733300,
    eccentricity: 0.0859,
    trueAnomaly: 0,
    meanAnomaly: 132.4,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_22 = {
    id: 's_2004-s-22',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.03e15,
    radius: 1.5,
    semiMajorAxis: 20737100,
    eccentricity: 0.2369,
    trueAnomaly: 0,
    meanAnomaly: 118.0,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_25 = {
    id: 's_2004-s-25',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 20814800,
    eccentricity: 0.4362,
    trueAnomaly: 0,
    meanAnomaly: 301.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_32 = {
    id: 's_2004-s-32',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 20963400,
    eccentricity: 0.2594,
    trueAnomaly: 0,
    meanAnomaly: 298.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_23 = {
    id: 's_2004-s-23',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 21444300,
    eccentricity: 0.4133,
    trueAnomaly: 0,
    meanAnomaly: 357.2,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2006_S_3 = {
    id: 's_2006-s-3',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 21607300,
    eccentricity: 0.4533,
    trueAnomaly: 0,
    meanAnomaly: 167.147,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_35 = {
    id: 's_2004-s-35',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 21864500,
    eccentricity: 0.203,
    trueAnomaly: 0,
    meanAnomaly: 231.7,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const KARI = {
    id: 'kari',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.23e15,
    radius: 3,
    semiMajorAxis: 21988000,
    eccentricity: 0.3745,
    trueAnomaly: 0,
    meanAnomaly: 286.021,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_28 = {
    id: 's_2004-s-28',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 22134400,
    eccentricity: 0.1249,
    trueAnomaly: 0,
    meanAnomaly: 26.40,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const LOGE = {
    id: 'loge',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 2.5,
    semiMajorAxis: 22563800,
    eccentricity: 0.1584,
    trueAnomaly: 0,
    meanAnomaly: 337.237,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_38 = {
    id: 's_2004-s-38',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 22616000,
    eccentricity: 0.4084,
    trueAnomaly: 0,
    meanAnomaly: 134.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const FENRIR = {
    id: 'fenrir',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 22753400,
    eccentricity: 0.0949,
    trueAnomaly: 0,
    meanAnomaly: 131.678,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const YMIR = {
    id: 'ymir',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 3.97e15,
    radius: 9.5,
    semiMajorAxis: 22841900,
    eccentricity: 0.3431,
    trueAnomaly: 0,
    meanAnomaly: 228.673,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SURTUR = {
    id: 'surtur',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 23065900,
    eccentricity: 0.3591,
    trueAnomaly: 0,
    meanAnomaly: 136.191,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_33 = {
    id: 's_2004-s-33',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 23087600,
    eccentricity: 0.4113,
    trueAnomaly: 0,
    meanAnomaly: 84.64,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_24 = {
    id: 's_2004-s-24',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.03e15,
    radius: 1.5,
    semiMajorAxis: 23326300,
    eccentricity: 0.04,
    trueAnomaly: 0,
    meanAnomaly: 162.7,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_21 = {
    id: 's_2004-s-21',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.03e15,
    radius: 1.5,
    semiMajorAxis: 23356200,
    eccentricity: 0.3156,
    trueAnomaly: 0,
    meanAnomaly: 136.2,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_39 = {
    id: 's_2004-s-39',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.03e15,
    radius: 1.5,
    semiMajorAxis: 23463800,
    eccentricity: 0.0979,
    trueAnomaly: 0,
    meanAnomaly: 114.7,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_36 = {
    id: 's_2004-s-36',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.03e15,
    radius: 1.5,
    semiMajorAxis: 23576500,
    eccentricity: 0.7139,
    trueAnomaly: 0,
    meanAnomaly: 32.50,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const FORNJOT = {
    id: 'fornjot',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.15e15,
    radius: 3,
    semiMajorAxis: 24451700,
    eccentricity: 0.1613,
    trueAnomaly: 0,
    meanAnomaly: 214.499,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_34 = {
    id: 's_2004-s-34',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.03e15,
    radius: 1.5,
    semiMajorAxis: 24865000,
    eccentricity: 0.2015,
    trueAnomaly: 0,
    meanAnomaly: 314.4,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const S_2004_S_26 = {
    id: 's_2004-s-26',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 0.05e15,
    radius: 2,
    semiMajorAxis: 26701600,
    eccentricity: 0.1726,
    trueAnomaly: 0,
    meanAnomaly: 306.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SATURN = {
    id: 'saturn',
    position: {
        x: 0,
        y: 0
    },
    speed: 9.68,
    mass: 5.6834e26,
    radius: 58232,
    semiMajorAxis: 1433530000,
    eccentricity: 0.0565,
    trueAnomaly: 0,
    meanAnomaly: 317.020,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].PLANET,
    satellites: [
        S_2009_S_1,
        PAN,
        DAPHNIS,
        ATLAS,
        PROMETHEUS,
        PANDORA,
        EPIMETHEUS,
        JANUS,
        AEGAEON,
        MIMAS,
        METHONE,
        ANTHE,
        PALLENE,
        ENCELADUS,
        TETHYS,
        TELESTO,
        CALYPSO,
        DIONE,
        HELENE,
        POLYDEUCES,
        RHEA,
        TITAN,
        HYPERION,
        IAPETUS,
        KIVIUQ,
        IJIRAQ,
        PHOEBE,
        PAALIAQ,
        SKATHI,
        S_2004_S_37,
        S_2007_S_2,
        ALBIORIX,
        BEBHIONN,
        S_2004_S_29,
        SKOLL,
        S_2004_S_31,
        ERRIAPUS,
        TARQEQ,
        SIARNAQ,
        TARVOS,
        HYRROKKIN,
        GREIP,
        MUNDILFARI,
        S_2004_S_13,
        S_2006_S_1,
        S_2007_S_3,
        SUTTUNGR,
        S_2004_S_20,
        JARNSAXA,
        NARVI,
        BERGELMIR,
        HATI,
        S_2004_S_17,
        S_2004_S_12,
        S_2004_S_27,
        FARBAUTI,
        THRYMR,
        BESTLA,
        S_2004_S_7,
        AEGIR,
        S_2004_S_30,
        S_2004_S_22,
        S_2004_S_25,
        S_2004_S_32,
        S_2004_S_23,
        S_2006_S_3,
        S_2004_S_35,
        KARI,
        S_2004_S_28,
        LOGE,
        S_2004_S_38,
        FENRIR,
        YMIR,
        SURTUR,
        S_2004_S_33,
        S_2004_S_24,
        S_2004_S_21,
        S_2004_S_39,
        S_2004_S_36,
        FORNJOT,
        S_2004_S_34,
        S_2004_S_26
    ],
    orbitBody: null
};
SATURN.satellites.forEach(satellite => satellite.orbitBody = SATURN);


/***/ }),

/***/ "fFpN":
/*!********************************************!*\
  !*** ./src/app/scene/data/Neptune.data.ts ***!
  \********************************************/
/*! exports provided: NAIAD, THALASSA, DESPINA, GALATEA, LARISSA, HIPPOCAMP, PROTEUS, TRITON, NEREID, HALIMEDE, SAO, LAOMEDEIA, PSAMATHE, NESO, NEPTUNE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAIAD", function() { return NAIAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THALASSA", function() { return THALASSA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESPINA", function() { return DESPINA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GALATEA", function() { return GALATEA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LARISSA", function() { return LARISSA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIPPOCAMP", function() { return HIPPOCAMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROTEUS", function() { return PROTEUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRITON", function() { return TRITON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEREID", function() { return NEREID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HALIMEDE", function() { return HALIMEDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAO", function() { return SAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAOMEDEIA", function() { return LAOMEDEIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PSAMATHE", function() { return PSAMATHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NESO", function() { return NESO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEPTUNE", function() { return NEPTUNE; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");

const NAIAD = {
    id: 'naiad',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 19e15,
    radius: 30.2,
    semiMajorAxis: 48224,
    eccentricity: 0.0047,
    trueAnomaly: 0,
    meanAnomaly: 334.9,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const THALASSA = {
    id: 'thalassa',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 35e15,
    radius: 40.7,
    semiMajorAxis: 50074,
    eccentricity: 0.0018,
    trueAnomaly: 0,
    meanAnomaly: 193.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const DESPINA = {
    id: 'despina',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 220e15,
    radius: 78,
    semiMajorAxis: 52526,
    eccentricity: 0.0004,
    trueAnomaly: 0,
    meanAnomaly: 319.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const GALATEA = {
    id: 'galatea',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 212e15,
    radius: 87.4,
    semiMajorAxis: 61953,
    eccentricity: 0.0001,
    trueAnomaly: 0,
    meanAnomaly: 187.1,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const LARISSA = {
    id: 'larissa',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 420e15,
    radius: 97,
    semiMajorAxis: 73548,
    eccentricity: 0.0012,
    trueAnomaly: 0,
    meanAnomaly: 34.9,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HIPPOCAMP = {
    id: 'hippocamp',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 3e15,
    radius: 17.4,
    semiMajorAxis: 105283,
    eccentricity: 0.0005,
    trueAnomaly: 0,
    meanAnomaly: 0,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PROTEUS = {
    id: 'proteus',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 4400e15,
    radius: 210,
    semiMajorAxis: 117646,
    eccentricity: 0.0005,
    trueAnomaly: 0,
    meanAnomaly: 114.2,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const TRITON = {
    id: 'triton',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 2139000e15,
    radius: 1352.6,
    semiMajorAxis: 354759,
    eccentricity: 0.0000,
    trueAnomaly: 0,
    meanAnomaly: 264.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const NEREID = {
    id: 'nereid',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 2700e15,
    radius: 178.5,
    semiMajorAxis: 5513800,
    eccentricity: 0.7507,
    trueAnomaly: 0,
    meanAnomaly: 359.3,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HALIMEDE = {
    id: 'halimede',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 16e15,
    radius: 31,
    semiMajorAxis: 16681000,
    eccentricity: 0.2909,
    trueAnomaly: 0,
    meanAnomaly: 96.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const SAO = {
    id: 'sao',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 6e15,
    radius: 22,
    semiMajorAxis: 22619000,
    eccentricity: 0.2827,
    trueAnomaly: 0,
    meanAnomaly: 129.4,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const LAOMEDEIA = {
    id: 'laomedeia',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 5e15,
    radius: 21,
    semiMajorAxis: 23613000,
    eccentricity: 0.4339,
    trueAnomaly: 0,
    meanAnomaly: 321.1,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PSAMATHE = {
    id: 'psamathe',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 4e15,
    radius: 20,
    semiMajorAxis: 46705000,
    eccentricity: 0.4617,
    trueAnomaly: 0,
    meanAnomaly: 206.2,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const NESO = {
    id: 'neso',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 15e15,
    radius: 30,
    semiMajorAxis: 50258000,
    eccentricity: 0.4243,
    trueAnomaly: 0,
    meanAnomaly: 269.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const NEPTUNE = {
    id: 'neptune',
    position: {
        x: 0,
        y: 0
    },
    speed: 5.43,
    mass: 1.02413e26,
    radius: 24622,
    semiMajorAxis: 4495.060e6,
    eccentricity: 0.008678,
    trueAnomaly: 0,
    meanAnomaly: 256.228,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].PLANET,
    satellites: [
        NAIAD,
        THALASSA,
        DESPINA,
        GALATEA,
        LARISSA,
        HIPPOCAMP,
        PROTEUS,
        TRITON,
        NEREID,
        HALIMEDE,
        SAO,
        LAOMEDEIA,
        PSAMATHE,
        NESO
    ],
    orbitBody: null
};
NEPTUNE.satellites.forEach(satellite => satellite.orbitBody = NEPTUNE);


/***/ }),

/***/ "h3Nn":
/*!******************************************!*\
  !*** ./src/app/scene/data/Venus.data.ts ***!
  \******************************************/
/*! exports provided: VENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VENUS", function() { return VENUS; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");

const VENUS = {
    id: 'venus',
    position: {
        x: 0,
        y: 0
    },
    speed: 35.02,
    mass: 4.8675e24,
    radius: 6051.8,
    semiMajorAxis: 108208000,
    eccentricity: 0.006772,
    trueAnomaly: 0,
    meanAnomaly: 50.115,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].PLANET,
    satellites: [],
    orbitBody: null
};


/***/ }),

/***/ "kj77":
/*!************************************************!*\
  !*** ./src/app/scene/data/SolarSystem.data.ts ***!
  \************************************************/
/*! exports provided: SUN, SOLAR_SYSTEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUN", function() { return SUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLAR_SYSTEM", function() { return SOLAR_SYSTEM; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");
/* harmony import */ var _Mercury_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mercury.data */ "cVL8");
/* harmony import */ var _Venus_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Venus.data */ "h3Nn");
/* harmony import */ var _Earth_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Earth.data */ "E1tv");
/* harmony import */ var _Mars_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Mars.data */ "vJwz");
/* harmony import */ var _Jupiter_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Jupiter.data */ "Z8ME");
/* harmony import */ var _Saturn_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Saturn.data */ "f9nU");
/* harmony import */ var _Uranus_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Uranus.data */ "colP");
/* harmony import */ var _Neptune_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Neptune.data */ "fFpN");
/* harmony import */ var _DwarfPlanets_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DwarfPlanets.data */ "tvE5");










const SUN = {
    id: 'sun',
    position: {
        x: 0,
        y: 0
    },
    speed: 0,
    mass: 1.9885e30,
    radius: 696342,
    semiMajorAxis: 0,
    eccentricity: 0,
    trueAnomaly: 0,
    meanAnomaly: 0,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].STAR,
    satellites: [_Mercury_data__WEBPACK_IMPORTED_MODULE_1__["MERCURY"], _Venus_data__WEBPACK_IMPORTED_MODULE_2__["VENUS"], _Earth_data__WEBPACK_IMPORTED_MODULE_3__["EARTH"], _Mars_data__WEBPACK_IMPORTED_MODULE_4__["MARS"], _Jupiter_data__WEBPACK_IMPORTED_MODULE_5__["JUPITER"], _Saturn_data__WEBPACK_IMPORTED_MODULE_6__["SATURN"], _Uranus_data__WEBPACK_IMPORTED_MODULE_7__["URANUS"], _Neptune_data__WEBPACK_IMPORTED_MODULE_8__["NEPTUNE"]],
    orbitBody: null
};
const SOLAR_SYSTEM = [SUN];
SUN.satellites.forEach(satellite => {
    satellite.orbitBody = SUN;
    SOLAR_SYSTEM.push(satellite);
    satellite.satellites.forEach(moon => {
        SOLAR_SYSTEM.push(moon);
    });
});
_DwarfPlanets_data__WEBPACK_IMPORTED_MODULE_9__["DWARF_PLANETS"].forEach(dwarfPlanet => {
    dwarfPlanet.orbitBody = SUN;
    SOLAR_SYSTEM.push(dwarfPlanet);
    dwarfPlanet.satellites.forEach(moon => {
        SOLAR_SYSTEM.push(moon);
    });
});


/***/ }),

/***/ "rFvz":
/*!****************************************!*\
  !*** ./src/app/scene/scene.service.ts ***!
  \****************************************/
/*! exports provided: KM_TO_PX, DEG_TO_RAD, AU_TO_KM, G, SOLAR_SYSTEM_SIZE, SceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KM_TO_PX", function() { return KM_TO_PX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEG_TO_RAD", function() { return DEG_TO_RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AU_TO_KM", function() { return AU_TO_KM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLAR_SYSTEM_SIZE", function() { return SOLAR_SYSTEM_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneService", function() { return SceneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _data_SolarSystem_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/SolarSystem.data */ "kj77");




/**
 * SVG does not work well with big number so we have to divide each value
 * (in km) by this ratio before drawing. SCG also doesn't have much decimal
 * precision so we can't have a to big ratio or small bodies won't render well.
 * This does NOT take into account the scale applied by the current zoom!
 * https://oreillymedia.github.io/Using_SVG/extras/ch08-precision.html
 */
const KM_TO_PX = 1e3;
/**
 * degrees to radian
 */
const DEG_TO_RAD = Math.PI / 180;
/**
 * Astronomical units to kilometers
 */
const AU_TO_KM = 1.496e8;
/**
 * Gravitational constant in m^3.kg^−1.s^−2
 */
const G = 6.6743e-11;
/**
 * in km
 */
const SOLAR_SYSTEM_SIZE = 80 * AU_TO_KM;
class SceneService {
    constructor() {
        _data_SolarSystem_data__WEBPACK_IMPORTED_MODULE_2__["SOLAR_SYSTEM"]
            .filter((body) => body.id !== 'sun')
            .forEach(body => {
            body.trueAnomaly = body.meanAnomaly; // TODO
            body.position = this.getPositionForTrueAnomaly(body, body.trueAnomaly);
        });
    }
    /**
     * position in px
     */
    getOrbit(body, nbPoints = 360) {
        return d3__WEBPACK_IMPORTED_MODULE_1__["range"](0, 360, 360 / nbPoints).map((trueAnomaly) => {
            const point = this.getPositionForTrueAnomaly(body, trueAnomaly);
            return {
                trueAnomaly,
                x: point.x,
                y: point.y
            };
        });
    }
    /**
     * in px
     */
    getPositionForTrueAnomaly(body, trueAnomaly) {
        const d = this.getDistanceToFocusPoint(body, trueAnomaly);
        // we convert the distance to a position using basic trigonometry :
        const yKm = d * Math.cos(trueAnomaly * DEG_TO_RAD);
        const xKm = d * Math.sin(trueAnomaly * DEG_TO_RAD);
        // we have the position relative to the orbited body, so we add its
        // position to have the absolute postion of the orbiting body :
        return {
            x: (xKm / KM_TO_PX) + body.orbitBody.position.x,
            y: (yKm / KM_TO_PX) + body.orbitBody.position.y
        };
    }
    /**
     * https://en.wikipedia.org/wiki/Kepler_orbit#Development_of_the_laws
     * Focus point = the orbited body
     * @returns km
     */
    getDistanceToFocusPoint(body, trueAnomaly) {
        return (body.semiMajorAxis * (1 - (Math.pow(body.eccentricity, 2)))) / (1 + (body.eccentricity * Math.cos(trueAnomaly * DEG_TO_RAD)));
    }
    /**
     * https://en.wikipedia.org/wiki/Semi-major_and_semi-minor_axes#Orbital_period
     * @returns hours
     */
    getOrbitalPeriod(body) {
        if (body.orbitBody) {
            // TODO > max_int
            return 2 * Math.PI * Math.sqrt((Math.pow((body.semiMajorAxis * 1000), 3)) / (G * body.orbitBody.mass)) / (60 * 60);
        }
        else {
            return 0;
        }
    }
}
SceneService.ɵfac = function SceneService_Factory(t) { return new (t || SceneService)(); };
SceneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SceneService, factory: SceneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SceneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tvE5":
/*!*************************************************!*\
  !*** ./src/app/scene/data/DwarfPlanets.data.ts ***!
  \*************************************************/
/*! exports provided: CHARON, STYX, NIX, KERBEROS, HYDRA, PLUTO, CERES, DYSNOMIA, ERIS, S_2015_1, MAKEMAKE, HIIAKA, NAMAKA, HAUMEA, VANTH, ORCUS, WEYWOT, QUAOAR, XIANGLIU, GONGGONG, SEDNA, DWARF_PLANETS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARON", function() { return CHARON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYX", function() { return STYX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NIX", function() { return NIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KERBEROS", function() { return KERBEROS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYDRA", function() { return HYDRA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUTO", function() { return PLUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERES", function() { return CERES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYSNOMIA", function() { return DYSNOMIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERIS", function() { return ERIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_2015_1", function() { return S_2015_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKEMAKE", function() { return MAKEMAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIIAKA", function() { return HIIAKA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMAKA", function() { return NAMAKA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAUMEA", function() { return HAUMEA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VANTH", function() { return VANTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORCUS", function() { return ORCUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEYWOT", function() { return WEYWOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUAOAR", function() { return QUAOAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XIANGLIU", function() { return XIANGLIU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GONGGONG", function() { return GONGGONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEDNA", function() { return SEDNA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DWARF_PLANETS", function() { return DWARF_PLANETS; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");

const CHARON = {
    id: 'charon',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 1.586e21,
    radius: 606,
    semiMajorAxis: 19591.4,
    eccentricity: 0.0002,
    trueAnomaly: 0,
    meanAnomaly: 131.070,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const STYX = {
    id: 'styx',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 7.5e15,
    radius: 16 / 2,
    semiMajorAxis: 42656,
    eccentricity: 0.005787,
    trueAnomaly: 0,
    meanAnomaly: 194.546,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const NIX = {
    id: 'nix',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 4.5e16,
    radius: 49.8 / 2,
    semiMajorAxis: 48694,
    eccentricity: 0.002036,
    trueAnomaly: 0,
    meanAnomaly: 284.405,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const KERBEROS = {
    id: 'kerberos',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 4.65e16,
    radius: 19 / 2,
    semiMajorAxis: 57783,
    eccentricity: 0.00328,
    trueAnomaly: 0,
    meanAnomaly: 161.061,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HYDRA = {
    id: 'hydra',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 4.8e16,
    radius: 50.9 / 2,
    semiMajorAxis: 64738,
    eccentricity: 0.005862,
    trueAnomaly: 0,
    meanAnomaly: 326.678,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const PLUTO = {
    id: 'pluto',
    position: {
        x: 0,
        y: 0
    },
    speed: 4.743,
    mass: 1.303e22,
    radius: 1188,
    semiMajorAxis: 5.90638 * 1e9,
    eccentricity: 0.2488,
    trueAnomaly: 0,
    meanAnomaly: 14.53,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].DWARF_PLANET,
    satellites: [CHARON, STYX, NIX, KERBEROS, HYDRA],
    orbitBody: null
};
const CERES = {
    id: 'ceres',
    position: {
        x: 0,
        y: 0
    },
    speed: 17.905,
    mass: 9.3835e20,
    radius: 469.73,
    semiMajorAxis: 414261000,
    eccentricity: 0.07600902910,
    trueAnomaly: 0,
    meanAnomaly: 77.37209589,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].DWARF_PLANET,
    satellites: [],
    orbitBody: null
};
const DYSNOMIA = {
    id: 'dysnomia',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 1.27 * 1.303e22,
    radius: 700,
    semiMajorAxis: 37273,
    eccentricity: 0.0062,
    trueAnomaly: 0,
    meanAnomaly: 328.6,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ERIS = {
    id: 'eris',
    position: {
        x: 0,
        y: 0
    },
    speed: 3.434,
    mass: 1.6466e22,
    radius: 1163,
    semiMajorAxis: 67.864 * 1.496e8,
    eccentricity: 0.43607,
    trueAnomaly: 0,
    meanAnomaly: 205.989,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].DWARF_PLANET,
    satellites: [DYSNOMIA],
    orbitBody: null
};
const S_2015_1 = {
    id: 'S_2015_1',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 5e15,
    radius: 87.5,
    semiMajorAxis: 21000,
    eccentricity: 0,
    trueAnomaly: 0,
    meanAnomaly: 0,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const MAKEMAKE = {
    id: 'makemake',
    position: {
        x: 0,
        y: 0
    },
    speed: 4.419,
    mass: 3.1e21,
    radius: 739,
    semiMajorAxis: 45.430 * 1.496e8,
    eccentricity: 0.16126,
    trueAnomaly: 0,
    meanAnomaly: 165.514,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].DWARF_PLANET,
    satellites: [S_2015_1],
    orbitBody: null
};
const HIIAKA = {
    id: 'hiiaka',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 1.79e19,
    radius: 160,
    semiMajorAxis: 49880,
    eccentricity: 0.0513,
    trueAnomaly: 0,
    meanAnomaly: 152.8,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const NAMAKA = {
    id: 'namaka',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 1.79e18,
    radius: 85,
    semiMajorAxis: 25657,
    eccentricity: 0.249,
    trueAnomaly: 0,
    meanAnomaly: 178.5,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const HAUMEA = {
    id: 'haumea',
    position: {
        x: 0,
        y: 0
    },
    speed: 4.531,
    mass: 4.006e21,
    radius: 798,
    semiMajorAxis: 43.116 * 1.496e8,
    eccentricity: 0.19642,
    trueAnomaly: 0,
    meanAnomaly: 218.205,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].DWARF_PLANET,
    satellites: [HIIAKA, NAMAKA],
    orbitBody: null
};
const VANTH = {
    id: 'vanth',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 3.6e19,
    radius: 475 / 2,
    semiMajorAxis: 8999.8,
    eccentricity: 0.00091,
    trueAnomaly: 0,
    meanAnomaly: 188.52,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const ORCUS = {
    id: 'orcus',
    position: {
        x: 0,
        y: 0
    },
    speed: 4.531,
    mass: 6.348e20,
    radius: 917 / 2,
    semiMajorAxis: 39.174 * 1.496e8,
    eccentricity: 0.22701,
    trueAnomaly: 0,
    meanAnomaly: 181.735,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].DWARF_PLANET,
    satellites: [VANTH],
    orbitBody: null
};
const WEYWOT = {
    id: 'weywot',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 1.40e21 / 2000,
    radius: 170 / 2,
    semiMajorAxis: 14500,
    eccentricity: 0.148,
    trueAnomaly: 0,
    meanAnomaly: 0,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const QUAOAR = {
    id: 'quaoar',
    position: {
        x: 0,
        y: 0
    },
    speed: 4.531,
    mass: 1.40e21,
    radius: 1110 / 2,
    semiMajorAxis: 43.694 * 1.496e8,
    eccentricity: 0.04106,
    trueAnomaly: 0,
    meanAnomaly: 301.104,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].DWARF_PLANET,
    satellites: [WEYWOT],
    orbitBody: null
};
const XIANGLIU = {
    id: 'xiangliu',
    position: {
        x: 0,
        y: 0
    },
    speed: 0.21,
    mass: 5e15,
    radius: 100 / 2,
    semiMajorAxis: 24021,
    eccentricity: 0.2908,
    trueAnomaly: 0,
    meanAnomaly: 0,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const GONGGONG = {
    id: 'gonggong',
    position: {
        x: 0,
        y: 0
    },
    speed: 4.531,
    mass: 1.75e21,
    radius: 1230 / 2,
    semiMajorAxis: 67.485 * 1.496e8,
    eccentricity: 0.49943,
    trueAnomaly: 0,
    meanAnomaly: 106.496,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].DWARF_PLANET,
    satellites: [XIANGLIU],
    orbitBody: null
};
const SEDNA = {
    id: 'sedna',
    position: {
        x: 0,
        y: 0
    },
    speed: 4.531,
    mass: 1.8e21,
    radius: 1060 / 2,
    semiMajorAxis: 506 * 1.496e8,
    eccentricity: 0.8496,
    trueAnomaly: 0,
    meanAnomaly: 358.117,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].DWARF_PLANET,
    satellites: [XIANGLIU],
    orbitBody: null
};
const DWARF_PLANETS = [PLUTO, CERES, ERIS, MAKEMAKE, HAUMEA, ORCUS, QUAOAR, GONGGONG, SEDNA];
DWARF_PLANETS.forEach(dwarfPlanet => {
    dwarfPlanet.satellites.forEach(satellite => satellite.orbitBody = dwarfPlanet);
});


/***/ }),

/***/ "vJwz":
/*!*****************************************!*\
  !*** ./src/app/scene/data/Mars.data.ts ***!
  \*****************************************/
/*! exports provided: PHOBOS, DEIMOS, MARS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOBOS", function() { return PHOBOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEIMOS", function() { return DEIMOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARS", function() { return MARS; });
/* harmony import */ var _scene_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.model */ "2aZT");

const PHOBOS = {
    id: 'phobos',
    position: {
        x: 0,
        y: 0
    },
    speed: 2.138,
    mass: 1.0659e16,
    radius: 11.2667,
    semiMajorAxis: 9376,
    eccentricity: 0.0151,
    trueAnomaly: 0,
    meanAnomaly: 91.059,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const DEIMOS = {
    id: 'deimos',
    position: {
        x: 0,
        y: 0
    },
    speed: 1.3513,
    mass: 1.4762e15,
    radius: 6.2,
    semiMajorAxis: 23463.2,
    eccentricity: 0.00033,
    trueAnomaly: 0,
    meanAnomaly: 325.329,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].SATELLITE,
    satellites: [],
    orbitBody: null
};
const MARS = {
    id: 'mars',
    position: {
        x: 0,
        y: 0
    },
    speed: 24.007,
    mass: 6.4171e23,
    radius: 3389.5,
    semiMajorAxis: 227939200,
    eccentricity: 0.0934,
    trueAnomaly: 0,
    meanAnomaly: 19.412,
    type: _scene_model__WEBPACK_IMPORTED_MODULE_0__["CELESTIAL_BODY_TYPE"].PLANET,
    satellites: [PHOBOS, DEIMOS],
    orbitBody: null
};
MARS.satellites.forEach(satellite => satellite.orbitBody = MARS);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scene_scene_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/scene.component */ "PEKV");





const routes = [
    { path: '**', component: _scene_scene_component__WEBPACK_IMPORTED_MODULE_2__["SceneComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map