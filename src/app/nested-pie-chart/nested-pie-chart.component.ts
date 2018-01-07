import { Component, OnInit, Input, HostListener } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";

@Component({
    selector: 'nested-pie-chart',
    template: `
        <svg class="nested-pie" height="500"></svg>
    `
})
export class NestedPieChartComponent implements OnInit {
    @Input() data;
    @Input() colors;
    @Input() width: number = 0;
    @Input() height: number = 500;

    private margin = {top: 0, right: 0, bottom: 0, left: 0};
    private radius: number;

    private arc: any;
    private labelArc: any;
    private pie: any;
    private color: any;
    private svg: any;
    private multiLevelData: any[] = [];
    private pieWidth: number;
    private g: any;

    constructor() {

    }

    ngOnInit() {
        this.drawGraph();
    }

    private drawGraph() {
        d3.select("svg.nested-pie").selectAll("g").remove();
        this.initSvg();
        this.setMultiLevelData(this.data);
        let l = this.radius / this.multiLevelData.length;
        this.pieWidth =  parseInt(l.toString()) - this.multiLevelData.length;
        for (let i = 0; i < this.multiLevelData.length; i++) {
            let _cData = this.multiLevelData[i];
            this.drawPieChart(_cData, i);
        }
    }

    private initSvg() {
        this.width = window.innerWidth - 20;
        d3.select("svg.nested-pie").attr("width", this.width);
        d3.select("svg.nested-pie").attr("height", this.height);
        this.width -= this.margin.left + this.margin.right ;
        this.height -= this.margin.top + this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
        this.color = d3Scale.scaleOrdinal().range(this.colors);
        this.svg = d3.select("svg.nested-pie")
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");;
    }

    private setMultiLevelData(data) {
        if (data == null)
            return;
        let level = data.length,
            counter = 0,
            index = 0,
            currentLevelData = [],
            queue = [];
        for (var i = 0; i < data.length; i++) {
            queue.push(data[i]);
        };

        while (queue.length != 0) {
            let node = queue.shift();
            currentLevelData.push(node);
            level--;
            if (node.subData) {
                for (let i = 0; i < node.subData.length; i++) {
                    queue.push(node.subData[i]);
                    counter++;
                };
            }
            if (level == 0) {
                level = counter;
                counter = 0;            
                this.multiLevelData.push(currentLevelData);
                currentLevelData = [];
            }
        }
    }  

    private drawPieChart(_data, index) {
        this.pie = d3Shape.pie()
            .sort(null)
            .value((d: any) => d.nodeData.population);
        this.arc = d3Shape.arc()
            .outerRadius((index + 1) * this.pieWidth - 1)
            .innerRadius(index * this.pieWidth);
        this.labelArc = d3Shape.arc()
            .outerRadius(this.radius - 100)
            .innerRadius(this.radius);

        this.g = this.svg.selectAll(".arc" + index).data(this.pie(_data)).enter().append("g")
            .attr("class", "arc" + index);

        this.g.append("path").attr("d", this.arc)
            .style("fill", (d: any) => this.color(d.data.nodeData.age));

        this.g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text((d: any) => d.data.nodeData.age);
    }

    @HostListener('window:resize') onResize() {
        this.width = window.innerWidth - 20;
        this.multiLevelData = [];
        this.drawGraph();
    }
}
