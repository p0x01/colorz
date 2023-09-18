# colorz
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['/pantalla.component.css']
})

export class PantallaComponent implements OnInit {
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

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'scatter',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          datasets: [{
            label: 'Ventas',
            data: data.map(item => ({ x: item.month, y: item.sales })),
            backgroundColor: '#007BFF',
            borderColor: '#007BFF',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Meses'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Ventas'
              },
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error('No se pudo obtener el contexto de renderizado 2D para el lienzo.');
    }
  }
}

