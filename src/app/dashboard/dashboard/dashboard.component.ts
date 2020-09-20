import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Highcharts = Highcharts;
  chart: Highcharts.Chart;
  chartOptions1;
  donutChart;
  constructor() { }

  ngOnInit(): void {
    this.init();
    this.initDonut();
  }

  init(){
    this.chartOptions1={
      chart: {
          type: 'spline',
          inverted: false
      },
      title: {
          text: 'Your Portfolio Value'
      },
      subtitle: {
          text: '0.0 BTC'
      },
      xAxis: {
          reversed: false,
          title: {
              enabled: true,
              text: '0.0 BTC'
          },
          labels: {
              format: '{value}'
          },
          accessibility: {
              rangeDescription: 'Range: 0 to 80 km.'
          },
          maxPadding: 0.05,
          showLastLabel: true
      },
      yAxis: {
          title: {
              text: 'Temperature',
              enabled: false
          },
          labels: {
              format: '{value}°',
              enabled: false
          },
          // accessibility: {
          //     rangeDescription: 'Range: -90°C to 20°C.'
          // },
          // lineWidth: 2
      },
      legend: {
          enabled: false
      },
      tooltip: {
          headerFormat: '<b>{series.name}</b><br/>',
          pointFormat: '{point.y}BTC'
      },
      plotOptions: {
          spline: {
              marker: {
                  enable: false
              }
          }
      },
      series: [{
          name: 'Portfolio Value',
          data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
              [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
      }]
  }
  }

  initDonut() {
    const donut = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: '<strong>60%</strong>',
        align: 'center',
        verticalAlign: 'middle',
        y: 0
      },
      subtitle: {
        text: 'Overall Mining Competition',
        align:'center',
        verticalAlign:'bottom'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              // fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: -180,
          center: ['50%', '50%'],
          size: '70%',
          showInLegend: false
        }
      },
      series: [
        {
          name: 'CCRB Mined',
          data: [
            {
              // name: 'CCRB',
              y: 61.41
            },
            {
              // name: 'Hashes',
              y: 11.84,
            }, 
            // {
            //   name: 'Firefox',
            //   y: 10.85,
            // }, {
            //   name: 'Edge',
            //   y: 4.67
            // }, {
            //   name: 'Safari',
            //   y: 4.18
            // }
          ],
          type: 'pie',
          innerSize: '50%',
        }]
    });
    this.donutChart = donut;
  }



}
