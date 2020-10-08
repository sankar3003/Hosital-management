import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  title = 'Angular 9 HighCharts';
  constructor() {}

  ngOnInit() {
    this.barChartPopulation();
    this.pieChartBrowser();
    this.chartJs();
  }

  barChartPopulation() {
    HighCharts.chart('barChart', {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Historic World Population by Region',
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high',
        },
      },
      tooltip: {
        valueSuffix: ' millions',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          type: undefined,
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2],
        },
        {
          type: undefined,
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6],
        },
        {
          type: undefined,
          name: 'Year 2000',
          data: [814, 841, 3714, 727, 31],
        },
        {
          type: undefined,
          name: 'Year 2016',
          data: [1216, 1001, 4436, 738, 40],
        },
      ],
    });
  }

  pieChartBrowser() {
    HighCharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Browser market shares in October, 2019',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          type: undefined,
          data: [
            {
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true,
            },
            {
              name: 'Internet Explorer',
              y: 11.84,
            },
            {
              name: 'Firefox',
              y: 10.85,
            },
            {
              name: 'Edge',
              y: 4.67,
            },
            {
              name: 'Safari',
              y: 4.18,
            },
            {
              name: 'Sogou Explorer',
              y: 1.64,
            },
            {
              name: 'Opera',
              y: 1.6,
            },
            {
              name: 'QQ',
              y: 1.2,
            },
            {
              name: 'Other',
              y: 2.61,
            },
          ],
        },
      ],
    });
  }
  chartJs() {
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
