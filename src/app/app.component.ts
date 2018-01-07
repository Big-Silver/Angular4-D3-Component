import { Component } from '@angular/core';
import { BarData, BarColors, PieData, PieColors, LineData, LineColors, NestedPieData } from './share/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  barData = BarData;
  barColors = BarColors;
  pieData = PieData;
  pieColors = PieColors;
  lineData = LineData;
  lineColors = LineColors;
  nestedPieData = NestedPieData;

  constructor() {

  }
}
