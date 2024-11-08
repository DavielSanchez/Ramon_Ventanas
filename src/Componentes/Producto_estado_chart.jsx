import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";

function Producto_estado_chart() {

    Chart.register(CategoryScale);
    
    const Data= [
        { id: 0, value: 8, label: 'Agotados' },
        { id: 1, value: 15, label: 'Activos' },
        { id: 2, value: 2, label: 'Inactivos', color: 'orange' },
    ]
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.label), 
        datasets: [
          {
              data: Data.map((data) => data.value),
            backgroundColor: [
              "#517FFF",
              "#2e96ff",
              "#995DFF"
            ],
            borderWidth: 1
          }
        ]
      });
    
      return (
        <>
      <h2 style={{ textAlign: "center" }}>Estado de Productos</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total de productos: 25",
              marginTop: 12,
              color: '#2e96ff',
              font: {
                size: 20
            }
            },
            legend: {
                display: true,
                position: 'top',
            },
            
          }
        }}
      />
        </>
      );
    }

export default Producto_estado_chart
