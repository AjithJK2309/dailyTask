import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SocketServiceService } from 'src/app/services/socket-service.service';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  data : any = []
  dates : any = []
  prize : any = []
  public lineChartData: ChartDataSets[] = [
    { data: this.prize, label: 'BTCUSDT' },
  ];
  public lineChartLabels: Label[] = this.dates;
  public lineChartOptions: (ChartOptions & {bezierCurve?: false}) = {
    responsive: true,
    scales : {
      xAxes : [{
        gridLines : {
          color : 'transparent',
          lineWidth : 1
        }
      }],
      yAxes : [{
        
        gridLines : {
          color : 'darkgrey',
          lineWidth : 0.5,          
        }
      }]
    },
    legend: {
      position: 'top',
      labels: {
        fontSize: 15,
        usePointStyle: true
      }
    }
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0, 183, 255, 0.3)',
        borderColor: 'rgba(0, 245, 255, 0.3)',
        pointBackgroundColor: 'rgba(225,10,24,0.2)',
        pointBorderColor: 'rgba(0, 255, 255, 0.3)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
  ];
  public lineChartLegend = true;
  public lineChartType :any = 'line';
  public lineChartPlugins = [];
  
  constructor(private _socket : SocketServiceService) { }

  ngOnInit(): void {
    this._socket.getSocketData().subscribe(res=>{
      this.prize.push(res.c)
      let dateFormat = new Date(res.E * 1000)
      this.dates.push(dateFormat.toLocaleTimeString('en'))    
    })

    this._socket.reacveMessage().subscribe((data:any)=>{
      this.prize.push(data.c)
      let dateFormat = new Date(data.E * 1000)
      this.dates.push(dateFormat.toLocaleTimeString('en'))    
    })
  }

}
