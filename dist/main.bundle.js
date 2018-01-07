webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-dash pt-4 pb-4\">\n    <div class=\"row text-center\">\n        <div class=\"col-sm-6 p-4\">\n            <h3>Bar Component</h3>\n            <bar-chart [data]=\"barData\" [colors]=\"barColors\" [xAxis]=\"true\" [yAxis]=\"true\" [ticks]=\"5\" [tickFormat]=\"'%'\" [yAxisMax]=\"0\" [xGrid]=\"false\" [yGrid]=\"false\" [xGridTicks]=\"5\" [yGridTicks]=\"5\"></bar-chart>\n        </div>\n        <div class=\"col-sm-6 p-4\">\n            <h3>Pie Component</h3>\n            <pie-chart [data]=\"pieData\" [colors]=\"pieColors\"></pie-chart>\n        </div>\n        <div class=\"col-sm-12 p-4\">\n            <h3>Line Component</h3>\n            <line-chart [data]=\"lineData\" [colors]=\"lineColors\" [strokeWidth]=\"1.5\" [xAxis]=\"true\" [yAxis]=\"true\" [xGrid]=\"false\" [yGrid]=\"false\" [xGridTicks]=\"10\" [yGridTicks]=\"10\"></line-chart>\n        </div>\n        <div class=\"col-sm-12 p-4\">\n            <h3>Nested Pie Component</h3>\n            <nested-pie-chart [data]=\"nestedPieData\" [colors]=\"pieColors\"></nested-pie-chart>\n        </div>\n    </div>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data__ = __webpack_require__("../../../../../src/app/share/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.barData = __WEBPACK_IMPORTED_MODULE_1__share_data__["a" /* BarData */];
        this.barColors = __WEBPACK_IMPORTED_MODULE_1__share_data__["b" /* BarColors */];
        this.pieData = __WEBPACK_IMPORTED_MODULE_1__share_data__["c" /* PieData */];
        this.pieColors = __WEBPACK_IMPORTED_MODULE_1__share_data__["d" /* PieColors */];
        this.lineData = __WEBPACK_IMPORTED_MODULE_1__share_data__["e" /* LineData */];
        this.lineColors = __WEBPACK_IMPORTED_MODULE_1__share_data__["f" /* LineColors */];
        this.nestedPieData = __WEBPACK_IMPORTED_MODULE_1__share_data__["g" /* NestedPieData */];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pie_chart_pie_chart_component__ = __webpack_require__("../../../../../src/app/pie-chart/pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bar_chart_bar_chart_component__ = __webpack_require__("../../../../../src/app/bar-chart/bar-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__line_chart_line_chart_component__ = __webpack_require__("../../../../../src/app/line-chart/line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nested_pie_chart_nested_pie_chart_component__ = __webpack_require__("../../../../../src/app/nested-pie-chart/nested-pie-chart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__pie_chart_pie_chart_component__["a" /* PieChartComponent */],
            __WEBPACK_IMPORTED_MODULE_4__bar_chart_bar_chart_component__["a" /* BarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_5__line_chart_line_chart_component__["a" /* LineChartComponent */],
            __WEBPACK_IMPORTED_MODULE_6__nested_pie_chart_nested_pie_chart_component__["a" /* NestedPieChartComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bar-chart/bar-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_array__ = __webpack_require__("../../../../d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_axis__ = __webpack_require__("../../../../d3-axis/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BarChartComponent = (function () {
    function BarChartComponent() {
        this.data = [];
        this.colors = [];
        this.xAxis = true;
        this.yAxis = true;
        this.xGrid = true;
        this.yGrid = true;
        this.ticks = 10;
        this.tickFormat = "%";
        this.yAxisMax = 0;
        this.width = 0;
        this.height = 500;
        this.xGridTicks = 5;
        this.yGridTicks = 5;
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
    }
    BarChartComponent.prototype.ngOnInit = function () {
        this.drawGraph();
    };
    BarChartComponent.prototype.drawGraph = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.bar").selectAll("g").remove();
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawBars();
        this.drawGridLines();
    };
    BarChartComponent.prototype.initSvg = function () {
        if (window.innerWidth > 768) {
            this.width = window.innerWidth / 2 - 30;
        }
        else {
            this.width = window.innerWidth - 30;
        }
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.bar");
        this.svg.attr("width", this.width);
        this.svg.attr("height", this.height);
        this.width -= this.margin.left + this.margin.right;
        this.height -= this.margin.top + this.margin.bottom;
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        ;
        this.color = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleOrdinal */]()
            .range(this.colors);
    };
    BarChartComponent.prototype.initAxis = function () {
        if (this.yAxisMax == 0) {
            this.yAxisMax = __WEBPACK_IMPORTED_MODULE_3_d3_array__["j" /* max */](this.data, function (d) { return d.frequency; });
        }
        this.x = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["d" /* scaleBand */]().rangeRound([0, this.width]).padding(0.1);
        this.y = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["c" /* scaleLinear */]().rangeRound([this.height, 0]);
        this.x.domain(this.data.map(function (d) { return d.letter; }));
        this.y.domain([0, this.yAxisMax]);
    };
    BarChartComponent.prototype.drawAxis = function () {
        if (this.xAxis) {
            this.g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + this.height + ")")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["a" /* axisBottom */](this.x));
        }
        if (this.yAxis) {
            this.g.append("g")
                .attr("class", "axis axis--y")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["b" /* axisLeft */](this.y).ticks(this.ticks, this.tickFormat));
        }
    };
    BarChartComponent.prototype.drawGridLines = function () {
        if (this.xGrid) {
            this.g.append("g")
                .attr("class", "grid")
                .attr("transform", "translate(0," + this.height + ")")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["a" /* axisBottom */](this.x)
                .ticks(this.xGridTicks)
                .tickSize(-this.height)
                .tickFormat(""));
        }
        if (this.yGrid) {
            this.g.append("g")
                .attr("class", "grid")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["b" /* axisLeft */](this.y)
                .ticks(this.yGridTicks)
                .tickSize(-this.width)
                .tickFormat(""));
        }
    };
    BarChartComponent.prototype.drawBars = function () {
        var _this = this;
        this.g.selectAll(".bar")
            .data(this.data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return _this.x(d.letter); })
            .attr("y", function (d) { return _this.y(d.frequency); })
            .attr("width", this.x.bandwidth())
            .attr("height", function (d) { return _this.height - _this.y(d.frequency); })
            .attr("fill", function (d) { return _this.color(d.letter); });
    };
    BarChartComponent.prototype.onResize = function () {
        if (window.innerWidth > 768) {
            this.width = window.innerWidth / 2 - 50;
            this.height = 500;
        }
        else {
            this.width = window.innerWidth - 30;
            this.height = 500;
        }
        this.drawGraph();
    };
    return BarChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], BarChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], BarChartComponent.prototype, "colors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], BarChartComponent.prototype, "xAxis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], BarChartComponent.prototype, "yAxis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], BarChartComponent.prototype, "xGrid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], BarChartComponent.prototype, "yGrid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], BarChartComponent.prototype, "ticks", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], BarChartComponent.prototype, "tickFormat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], BarChartComponent.prototype, "yAxisMax", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], BarChartComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], BarChartComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], BarChartComponent.prototype, "xGridTicks", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], BarChartComponent.prototype, "yGridTicks", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BarChartComponent.prototype, "onResize", null);
BarChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'bar-chart',
        template: "\n        <svg class=\"bar\"></svg>\n    "
    }),
    __metadata("design:paramtypes", [])
], BarChartComponent);

//# sourceMappingURL=bar-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/line-chart/line-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_array__ = __webpack_require__("../../../../d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_axis__ = __webpack_require__("../../../../d3-axis/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_time_format__ = __webpack_require__("../../../../d3-time-format/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LineChartComponent = (function () {
    function LineChartComponent() {
        this.data = [];
        this.colors = [];
        this.strokeWidth = 1;
        this.xAxis = true;
        this.yAxis = true;
        this.xGrid = true;
        this.yGrid = true;
        this.xGridTicks = 5;
        this.yGridTicks = 5;
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.height = 500;
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.drawGraph();
    };
    LineChartComponent.prototype.drawGraph = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.line").selectAll("g").remove();
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawGridLines();
        this.drawLine();
    };
    LineChartComponent.prototype.initSvg = function () {
        this.width = window.innerWidth - 30;
        this.color = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleOrdinal */]().range(this.colors);
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.line");
        this.svg.attr("width", this.width);
        this.svg.attr("height", this.height);
        this.width -= this.margin.left + this.margin.right;
        this.height -= this.margin.top + this.margin.bottom;
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        ;
    };
    LineChartComponent.prototype.initAxis = function () {
        var _this = this;
        this.parseTime = __WEBPACK_IMPORTED_MODULE_6_d3_time_format__["c" /* timeParse */]("%d/%m/%Y");
        this.x = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["b" /* scaleTime */]().range([0, this.width]);
        this.y = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["c" /* scaleLinear */]().range([this.height, 0]);
        this.x.domain(__WEBPACK_IMPORTED_MODULE_3_d3_array__["i" /* extent */](this.data, function (d) { return _this.parseTime(d.date); }));
        this.y.domain([0, __WEBPACK_IMPORTED_MODULE_3_d3_array__["j" /* max */](this.data, function (d) { return __WEBPACK_IMPORTED_MODULE_3_d3_array__["j" /* max */]([d.a, d.b, d.c, d.d]); })]);
    };
    LineChartComponent.prototype.drawAxis = function () {
        if (this.xAxis == true) {
            this.g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + this.height + ")")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["a" /* axisBottom */](this.x));
        }
        if (this.yAxis == true) {
            this.g.append("g")
                .attr("class", "axis axis--y")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["b" /* axisLeft */](this.y))
                .append("text")
                .attr("class", "axis-title")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Price ($)");
        }
    };
    LineChartComponent.prototype.drawLine = function () {
        var _this = this;
        this.line = __WEBPACK_IMPORTED_MODULE_5_d3_shape__["c" /* line */]()
            .x(function (d) { return _this.x(_this.parseTime(d.date)); })
            .y(function (d) { return _this.y(d); });
        var categories = ['a', 'b', 'c', 'd'];
        for (var i in categories) {
            var lineFunction = this.multiline(categories[i]);
            this.g.append("path")
                .datum(this.data)
                .attr("class", "line")
                .attr("fill", "none")
                .attr("stroke-width", "1.5px")
                .style("stroke", this.color(i))
                .attr("d", lineFunction);
        }
    };
    LineChartComponent.prototype.drawGridLines = function () {
        if (this.xGrid) {
            this.g.append("g")
                .attr("class", "grid")
                .attr("transform", "translate(0," + this.height + ")")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["a" /* axisBottom */](this.x)
                .ticks(this.xGridTicks)
                .tickSize(-this.height)
                .tickFormat(""));
        }
        if (this.yGrid) {
            this.g.append("g")
                .attr("class", "grid")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["b" /* axisLeft */](this.y)
                .ticks(this.yGridTicks)
                .tickSize(-this.width)
                .tickFormat(""));
        }
    };
    LineChartComponent.prototype.multiline = function (category) {
        var _this = this;
        var line = __WEBPACK_IMPORTED_MODULE_5_d3_shape__["c" /* line */]()
            .x(function (d) { return _this.x(_this.parseTime(d.date)); })
            .y(function (d) { return _this.y(d[category]); });
        return line;
    };
    LineChartComponent.prototype.onResize = function () {
        this.width = window.innerWidth - 50;
        this.height = 500;
        this.drawGraph();
    };
    return LineChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], LineChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], LineChartComponent.prototype, "colors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], LineChartComponent.prototype, "strokeWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], LineChartComponent.prototype, "xAxis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], LineChartComponent.prototype, "yAxis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], LineChartComponent.prototype, "xGrid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], LineChartComponent.prototype, "yGrid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], LineChartComponent.prototype, "xGridTicks", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], LineChartComponent.prototype, "yGridTicks", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LineChartComponent.prototype, "onResize", null);
LineChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'line-chart',
        template: "\n        <svg class=\"line\"></svg>\n    "
    }),
    __metadata("design:paramtypes", [])
], LineChartComponent);

//# sourceMappingURL=line-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/nested-pie-chart/nested-pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestedPieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NestedPieChartComponent = (function () {
    function NestedPieChartComponent() {
        this.width = 0;
        this.height = 500;
        this.margin = { top: 0, right: 0, bottom: 0, left: 0 };
        this.multiLevelData = [];
    }
    NestedPieChartComponent.prototype.ngOnInit = function () {
        this.drawGraph();
    };
    NestedPieChartComponent.prototype.drawGraph = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.nested-pie").selectAll("g").remove();
        this.initSvg();
        this.setMultiLevelData(this.data);
        var l = this.radius / this.multiLevelData.length;
        this.pieWidth = parseInt(l.toString()) - this.multiLevelData.length;
        for (var i = 0; i < this.multiLevelData.length; i++) {
            var _cData = this.multiLevelData[i];
            this.drawPieChart(_cData, i);
        }
    };
    NestedPieChartComponent.prototype.initSvg = function () {
        this.width = window.innerWidth - 20;
        __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.nested-pie").attr("width", this.width);
        __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.nested-pie").attr("height", this.height);
        this.width -= this.margin.left + this.margin.right;
        this.height -= this.margin.top + this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
        this.color = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleOrdinal */]().range(this.colors);
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.nested-pie")
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
        ;
    };
    NestedPieChartComponent.prototype.setMultiLevelData = function (data) {
        if (data == null)
            return;
        var level = data.length, counter = 0, index = 0, currentLevelData = [], queue = [];
        for (var i = 0; i < data.length; i++) {
            queue.push(data[i]);
        }
        ;
        while (queue.length != 0) {
            var node = queue.shift();
            currentLevelData.push(node);
            level--;
            if (node.subData) {
                for (var i_1 = 0; i_1 < node.subData.length; i_1++) {
                    queue.push(node.subData[i_1]);
                    counter++;
                }
                ;
            }
            if (level == 0) {
                level = counter;
                counter = 0;
                this.multiLevelData.push(currentLevelData);
                currentLevelData = [];
            }
        }
    };
    NestedPieChartComponent.prototype.drawPieChart = function (_data, index) {
        var _this = this;
        this.pie = __WEBPACK_IMPORTED_MODULE_3_d3_shape__["a" /* pie */]()
            .sort(null)
            .value(function (d) { return d.nodeData.population; });
        this.arc = __WEBPACK_IMPORTED_MODULE_3_d3_shape__["b" /* arc */]()
            .outerRadius((index + 1) * this.pieWidth - 1)
            .innerRadius(index * this.pieWidth);
        this.labelArc = __WEBPACK_IMPORTED_MODULE_3_d3_shape__["b" /* arc */]()
            .outerRadius(this.radius - 100)
            .innerRadius(this.radius);
        this.g = this.svg.selectAll(".arc" + index).data(this.pie(_data)).enter().append("g")
            .attr("class", "arc" + index);
        this.g.append("path").attr("d", this.arc)
            .style("fill", function (d) { return _this.color(d.data.nodeData.age); });
        this.g.append("text").attr("transform", function (d) { return "translate(" + _this.labelArc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text(function (d) { return d.data.nodeData.age; });
    };
    NestedPieChartComponent.prototype.onResize = function () {
        this.width = window.innerWidth - 20;
        this.multiLevelData = [];
        this.drawGraph();
    };
    return NestedPieChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], NestedPieChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], NestedPieChartComponent.prototype, "colors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], NestedPieChartComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], NestedPieChartComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NestedPieChartComponent.prototype, "onResize", null);
NestedPieChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'nested-pie-chart',
        template: "\n        <svg class=\"nested-pie\" height=\"500\"></svg>\n    "
    }),
    __metadata("design:paramtypes", [])
], NestedPieChartComponent);

//# sourceMappingURL=nested-pie-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/pie-chart/pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PieChartComponent = (function () {
    function PieChartComponent() {
        this.width = 0;
        this.height = 500;
        this.margin = { top: 0, right: 0, bottom: 0, left: 0 };
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this.drawGraph();
    };
    PieChartComponent.prototype.drawGraph = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.pie").selectAll("g").remove();
        this.initSvg();
        this.drawPie();
    };
    PieChartComponent.prototype.initSvg = function () {
        if (window.innerWidth > 768) {
            this.width = window.innerWidth / 2 - 20;
        }
        else {
            this.width = window.innerWidth - 20;
        }
        __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.pie").attr("width", this.width);
        __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.pie").attr("height", this.height);
        this.width -= this.margin.left + this.margin.right;
        this.height -= this.margin.top + this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
        this.color = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleOrdinal */]()
            .range(this.colors);
        this.arc = __WEBPACK_IMPORTED_MODULE_3_d3_shape__["b" /* arc */]()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.labelArc = __WEBPACK_IMPORTED_MODULE_3_d3_shape__["b" /* arc */]()
            .outerRadius(this.radius - 150)
            .innerRadius(this.radius);
        this.pie = __WEBPACK_IMPORTED_MODULE_3_d3_shape__["a" /* pie */]()
            .sort(null)
            .value(function (d) { return d.population; });
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]("svg.pie")
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
        ;
    };
    PieChartComponent.prototype.drawPie = function () {
        var _this = this;
        var g = this.svg.selectAll(".arc")
            .data(this.pie(this.data))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path").attr("d", this.arc)
            .style("fill", function (d) { return _this.color(d.data.age); });
        g.append("text").attr("transform", function (d) { return "translate(" + _this.labelArc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .text(function (d) { return d.data.age; });
    };
    PieChartComponent.prototype.onResize = function () {
        if (window.innerWidth > 768) {
            this.width = window.innerWidth / 2 - 20;
            this.height = 500;
        }
        else {
            this.width = window.innerWidth - 20;
            this.height = 500;
        }
        this.drawGraph();
    };
    return PieChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PieChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PieChartComponent.prototype, "colors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], PieChartComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], PieChartComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PieChartComponent.prototype, "onResize", null);
PieChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'pie-chart',
        template: "\n        <svg class=\"pie\" height=\"500\"></svg>\n    "
    }),
    __metadata("design:paramtypes", [])
], PieChartComponent);

//# sourceMappingURL=pie-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/share/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BarColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PieData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PieColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LineData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LineColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NestedPieData; });
var BarData = [
    { letter: "A", frequency: .08167 },
    { letter: "B", frequency: .01492 },
    { letter: "C", frequency: .02782 },
    { letter: "D", frequency: .04253 },
    { letter: "E", frequency: .12702 },
    { letter: "F", frequency: .02288 },
    { letter: "G", frequency: .02015 },
];
var BarColors = [
    "#98abc5",
    "#8a89a6",
    "#7b6888",
    "#6b486b",
    "#a05d56",
    "#d0743c",
    "#ff8c00"
];
var PieData = [
    { age: "<5", population: 2704659 },
    { age: "5-13", population: 4499890 },
    { age: "14-17", population: 2159981 },
    { age: "18-24", population: 3853788 },
    { age: "25-44", population: 14106543 },
    { age: "45-64", population: 8819342 },
    { age: "≥65", population: 612463 }
];
var PieColors = [
    "#98abc5",
    "#8a89a6",
    "#7b6888",
    "#6b486b",
    "#a05d56",
    "#d0743c",
    "#ff8c00"
];
var LineData = [
    { "date": "01/01/2016", "a": 250, "b": 0, "c": 0, "d": 0 },
    { "date": "01/02/2016", "a": 150, "b": 80, "c": 20, "d": 0 },
    { "date": "01/03/2016", "a": 150, "b": 70, "c": 10, "d": 20 },
    { "date": "01/04/2016", "a": 150, "b": 30, "c": 30, "d": 40 },
    { "date": "01/05/2016", "a": 100, "b": 100, "c": 200, "d": 80 },
    { "date": "01/06/2016", "a": 50, "b": 80, "c": 90, "d": 70 },
];
var LineColors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff00ff",
];
var NestedPieData = [
    {
        "nodeData": {
            "age": "<5",
            "population": 60
        },
        "subData": [{
                "nodeData": {
                    "age": "<5",
                    "population": 60
                },
                "subData": [{
                        "nodeData": {
                            "age": "<5",
                            "population": 60
                        }
                    }]
            }]
    }, {
        "nodeData": {
            "age": "5-35",
            "population": 100
        },
        "subData": [{
                "nodeData": {
                    "age": "5-15",
                    "population": 60
                },
                "subData": [{
                        "nodeData": {
                            "age": "5-10",
                            "population": 30
                        }
                    }, {
                        "nodeData": {
                            "age": "10-15",
                            "population": 30
                        }
                    }]
            }, {
                "nodeData": {
                    "age": "15-35",
                    "population": 40
                },
                "subData": [{
                        "nodeData": {
                            "age": "15-25",
                            "population": 25
                        }
                    }, {
                        "nodeData": {
                            "age": "25-35",
                            "population": 15
                        }
                    }]
            }]
    }, {
        "nodeData": {
            "age": "35-65",
            "population": 100
        },
        "subData": [{
                "nodeData": {
                    "age": "35-50",
                    "population": 75
                },
                "subData": [{
                        "nodeData": {
                            "age": "35-50",
                            "population": 75
                        }
                    }]
            }, {
                "nodeData": {
                    "age": "50-65",
                    "population": 25
                },
                "subData": [{
                        "nodeData": {
                            "age": "50-65",
                            "population": 25
                        }
                    }]
            }]
    }, {
        "nodeData": {
            "age": ">65",
            "population": 100
        },
        "subData": [{
                "nodeData": {
                    "age": "65-75",
                    "population": 60
                },
                "subData": [{
                        "nodeData": {
                            "age": "65-75",
                            "population": 60
                        }
                    }]
            }, {
                "nodeData": {
                    "age": ">75",
                    "population": 40
                },
                "subData": [{
                        "nodeData": {
                            "age": ">75",
                            "population": 40
                        }
                    }]
            }]
    }
];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map