import { Component, OnInit, Input, HostListener } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

@Component({
    selector: 'bar-chart',
    template: `
        <svg class="bar"></svg>
    `
})
export class BarChartComponent implements OnInit {
    @Input() data: any[] = [];
    @Input() colors: Array<string> = [];
    @Input() xAxis: boolean = true;
    @Input() yAxis: boolean = true;
    @Input() xGrid: boolean = true;
    @Input() yGrid: boolean = true;
    @Input() ticks: number = 10;
    @Input() tickFormat: string = "%";
    @Input() yAxisMax: number = 0;
    @Input() width: number = 0;
    @Input() height: number = 500;
    @Input() xGridTicks: number = 5;
    @Input() yGridTicks: number = 5;

    private margin = {top: 20, right: 20, bottom: 30, left: 40};

    private x: any;
    private y: any;
    private svg: any;
    private g: any;
    private color: any;

    constructor() {
      
    }

    ngOnInit() {
        this.drawGraph();
    }

    private drawGraph() {
        d3.select("svg.bar").selectAll("g").remove();
        this.initSvg()
        this.initAxis();
        this.drawAxis();
        this.drawBars();
        this.drawGridLines();
    }

    private initSvg() {
        if(window.innerWidth > 768) {
            this.width = window.innerWidth / 2 - 30;
        } else {
            this.width = window.innerWidth - 30;
        }
        this.svg = d3.select("svg.bar");
        this.svg.attr("width", this.width);
        this.svg.attr("height", this.height);
        this.width -= this.margin.left + this.margin.right;
        this.height -= this.margin.top + this.margin.bottom;
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");;
        this.color = d3Scale.scaleOrdinal()
            .range(this.colors);        
    }

    private initAxis() {
        if(this.yAxisMax == 0) {
            this.yAxisMax = d3Array.max(this.data, (d) => d.frequency);
        }
        this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
        this.x.domain(this.data.map((d) => d.letter));
        this.y.domain([0, this.yAxisMax]);
    }

    private drawAxis() {
        if(this.xAxis) {
            this.g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3Axis.axisBottom(this.x));
        }
        if(this.yAxis) {
            this.g.append("g")
                .attr("class", "axis axis--y")
                .call(d3Axis.axisLeft(this.y).ticks(this.ticks, this.tickFormat));
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

    private drawBars() {
        this.g.selectAll(".bar")
            .data(this.data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", (d) => this.x(d.letter) )
            .attr("y", (d) => this.y(d.frequency) )
            .attr("width", this.x.bandwidth())
            .attr("height", (d) => this.height - this.y(d.frequency) )
            .attr("fill", (d) => this.color(d.letter));
    }

    @HostListener('window:resize') onResize() {
        if(window.innerWidth > 768) {
            this.width = window.innerWidth / 2 - 50;
            this.height = 500;
        } else {
            this.width = window.innerWidth - 30;
            this.height = 500;
        }
        this.drawGraph();
    }
}
