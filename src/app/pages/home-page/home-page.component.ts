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
  type: ChartType = 'Bar';
  data: IChartistData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  };
 
  options: IBarChartOptions = {
    axisX: {
      showGrid: false
    },
    height: 300
  };
 
  events: ChartEvent = {
    // draw: (data) => {
    //   if(data.type === 'line') {
    //     // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
    //     data.element.animate({
    //       opacity: {
    //         // The delay when we like to start the animation
    //         begin: seq * delays + 1000,
    //         // Duration of the animation
    //         dur: durations,
    //         // The value where the animation should start
    //         from: 0,
    //         // The value where it should end
    //         to: 1
    //       }
    //     });
    //   } else if(data.type === 'label' && data.axis === 'x') {
    //     data.element.animate({
    //       y: {
    //         begin: seq * delays,
    //         dur: durations,
    //         from: data.y + 100,
    //         to: data.y,
    //         // We can specify an easing function from Chartist.Svg.Easing
    //         easing: 'easeOutQuart'
    //       }
    //     });
    //   } else if(data.type === 'label' && data.axis === 'y') {
    //     data.element.animate({
    //       x: {
    //         begin: seq * delays,
    //         dur: durations,
    //         from: data.x - 100,
    //         to: data.x,
    //         easing: 'easeOutQuart'
    //       }
    //     });
    //   } else if(data.type === 'point') {
    //     data.element.animate({
    //       x1: {
    //         begin: seq * delays,
    //         dur: durations,
    //         from: data.x - 10,
    //         to: data.x,
    //         easing: 'easeOutQuart'
    //       },
    //       x2: {
    //         begin: seq * delays,
    //         dur: durations,
    //         from: data.x - 10,
    //         to: data.x,
    //         easing: 'easeOutQuart'
    //       },
    //       opacity: {
    //         begin: seq * delays,
    //         dur: durations,
    //         from: 0,
    //         to: 1,
    //         easing: 'easeOutQuart'
    //       }
    //     });
    //   } else if(data.type === 'grid') {
    //     // Using data.axis we get x or y which we can use to construct our animation definition objects
    //     var pos1Animation = {
    //       begin: seq * delays,
    //       dur: durations,
    //       from: data[data.axis.units.pos + '1'] - 30,
    //       to: data[data.axis.units.pos + '1'],
    //       easing: 'easeOutQuart'
    //     };
    
    //     var pos2Animation = {
    //       begin: seq * delays,
    //       dur: durations,
    //       from: data[data.axis.units.pos + '2'] - 100,
    //       to: data[data.axis.units.pos + '2'],
    //       easing: 'easeOutQuart'
    //     };
    
    //     var animations = {};
    //     animations[data.axis.units.pos + '1'] = pos1Animation;
    //     animations[data.axis.units.pos + '2'] = pos2Animation;
    //     animations['opacity'] = {
    //       begin: seq * delays,
    //       dur: durations,
    //       from: 0,
    //       to: 1,
    //       easing: 'easeOutQuart'
    //     };
    
    //     data.element.animate(animations);
    //   }
    // }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
