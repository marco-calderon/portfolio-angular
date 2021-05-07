import { Component, OnInit } from '@angular/core';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  type: ChartType = 'Line';
  data: IChartistData = {
    labels: [
      'S',
      'M',
      'T',
      'W',
      'T',
      'F',
      'S',
    ],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
  };
 
  options: IBarChartOptions = {
    axisX: {
      showGrid: false,
    },
    axisY: {
      showGrid: false,
      showLabel: false,
    },
    height: 300,

  };
  seq = 0;
  delays = 80;
  durations = 1000;
 
  events: ChartEvent = {
    draw: (data) => {
      this.seq = this.seq + 1;
      if(data.type === 'line') {
        // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
        data.element.animate({
          opacity: {
            begin: this.seq * this.delays + 1000,
            dur: this.durations,
            from: 0,
            to: 1,
          }
        });
      } else if(data.type === 'label' && data.axis === 'x') {
        data.element.animate({
          y: {
            begin: this.seq * this.delays,
            dur: this.durations,
            from: data.y + 100,
            to: data.y,
            easing: 'easeOutQuart'
          }
        });
      } else if(data.type === 'label' && data.axis === 'y') {
        data.element.animate({
          x: {
            begin: this.seq * this.delays,
            dur: this.durations,
            from: data.x - 100,
            to: data.x,
            easing: 'easeOutQuart'
          }
        });
      } else if(data.type === 'point') {
        data.element.animate({
          x1: {
            begin: this.seq * this.delays,
            dur: this.durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          x2: {
            begin: this.seq * this.delays,
            dur: this.durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          opacity: {
            begin: this.seq * this.delays,
            dur: this.durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
          }
        });
      } else if(data.type === 'grid') {
        var pos1Animation = {
          begin: this.seq * this.delays,
          dur: this.durations,
          from: data[data.axis.units.pos + '1'] - 30,
          to: data[data.axis.units.pos + '1'],
          easing: 'easeOutQuart'
        };
    
        var pos2Animation = {
          begin: this.seq * this.delays,
          dur: this.durations,
          from: data[data.axis.units.pos + '2'] - 100,
          to: data[data.axis.units.pos + '2'],
          easing: 'easeOutQuart'
        };
    
        const animations: any = {};
        animations[data.axis.units.pos + '1'] = pos1Animation;
        animations[data.axis.units.pos + '2'] = pos2Animation;
        animations['opacity'] = {
          begin: this.seq * this.delays,
          dur: this.durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart'
        };
    
        data.element.animate(animations);
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
