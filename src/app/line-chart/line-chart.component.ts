import { Component, OnInit, Input, HostListener } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import * as d3Shape from "d3-shape";
import * as d3Time from "d3-time-format";

@Component({
    selector: 'line-chart',
    template: `
        <svg class="line"></svg>
    `
})
export class LineChartComponent implements OnInit {
    @Input() data: any[] = [];
    @Input() colors: any[] = [];
    @Input() strokeWidth: number = 1;
    @Input() xAxis: boolean = true;
    @Input() yAxis: boolean = true;
    @Input() xGrid: boolean = true;
    @Input() yGrid: boolean = true;
    @Input() xGridTicks: number = 5;
    @Input() yGridTicks: number = 5;

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number = 500;
    private x: any;
    private y: any;
    private g: any;
    private svg: any;
    private line: d3Shape.Line<[number, number]>;
    private parseTime: any;
    private color: any;

    constructor() {

    }

    ngOnInit() {
        this.drawGraph();
    }

    private drawGraph() {
        d3.select("svg.line").selectAll("g").remove();
        this.initSvg()
        this.initAxis();
        this.drawAxis();
        this.drawGridLines();
        this.drawLine();
    }

    private initSvg() {
        this.width = window.innerWidth - 30;
        this.color = d3Scale.scaleOrdinal().range(this.colors);
        this.svg = d3.select("svg.line");
        this.svg.attr("width", this.width);
        this.svg.attr("height", this.height);
        this.width -= this.margin.left + this.margin.right;
        this.height -= this.margin.top + this.margin.bottom;
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");;
    }

    private initAxis() {
        this.parseTime = d3Time.timeParse("%d/%m/%Y");
        this.x = d3Scale.scaleTime().range([0, this.width]);
        this.y = d3Scale.scaleLinear().range([this.height, 0]);
        this.x.domain(d3Array.extent(this.data, (d) => this.parseTime(d.date)));
        this.y.domain([0, d3Array.max(this.data, (d) => d3Array.max([d.a, d.b, d.c, d.d]))]);
    }

    private drawAxis() {
        if(this.xAxis == true) {
            this.g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3Axis.axisBottom(this.x));
        }

        if(this.yAxis == true) {
            this.g.append("g")
                .attr("class", "axis axis--y")
                .call(d3Axis.axisLeft(this.y))
                .append("text")
                .attr("class", "axis-title")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Price ($)");
        }
    }

    private drawLine() {
        this.line = d3Shape.line()
            .x( (d: any) => this.x(this.parseTime(d.date)))
            .y( (d: any) => this.y(d) );

        let categories = ['a', 'b', 'c', 'd'];

        for (let i in categories) {
            var lineFunction = this.multiline(categories[i]);
            this.g.append("path")
                .datum(this.data) 
                .attr("class", "line")
                .attr("fill", "none")
                .attr("stroke-width", "1.5px")
                .style("stroke", this.color(i))
                .attr("d", lineFunction);
        }
    }

    private drawGridLines() {
        if(this.xGrid) {
            this.g.append("g")			
                .attr("class", "grid")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3Axis.axisBottom(this.x)
                    .ticks(this.xGridTicks)
                    .tickSize(-this.height)
                    .tickFormat("")
                );
        }
        
        if(this.yGrid) {
            this.g.append("g")			
                .attr("class", "grid")
                .call(d3Axis.axisLeft(this.y)
                    .ticks(this.yGridTicks)
                    .tickSize(-this.width)
                    .tickFormat("")
                );
        }
    }
  
    private multiline(category) {
        let line = d3Shape.line()
            .x((d: any) => this.x(this.parseTime(d.date)))
            .y((d: any) => this.y(d[category]));
        return line;
    }

    @HostListener('window:resize') onResize() {
        this.width = window.innerWidth - 50;
        this.height = 500;
        this.drawGraph();
    }
}