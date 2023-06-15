/*import { Component } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent {

}*/

import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['/pantalla.component.css']
})

export class PantallaComponent implements OnInit{
  chart: any;

  ngOnInit() {
    const salesData = [
      { month: 'Enero', sales: 100 },
      { month: 'Febrero', sales: 200 },
      { month: 'Marzo', sales: 150 },
      // ...otros datos de ventas
    ];

    this.createChart(salesData);
  }

  createChart(data: { month: string, sales: number }[]) {
    const canvas: HTMLCanvasElement = document.getElementById('chartCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Ventas',
          data: data.map(item => ({ x: item.month, y: item.sales }))
        }]
      },
      options: {
        // Opciones de configuración de la gráfica
      }
    });
  }
}
