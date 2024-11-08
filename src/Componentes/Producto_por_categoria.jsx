import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";

function Producto_por_categoria() {

    Chart.register(CategoryScale);
    
    const Data= [
        { id: 0, value: 1, label: 'Tecnologia' },
        { id: 1, value: 1, label: 'Deportes' },
        { id: 2, value: 1, label: 'Juguetes', color: 'orange' },
    ]
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.label), 
        datasets: [
          {
              data: Data.map((data) => data.value),
            backgroundColor: [
              "#2afc98",
              "#2e96ff",
              "#8fc0a9"
            ],
            borderWidth: 1
          }
        ]
      });
    
      return (
        <>
      <h2 style={{ textAlign: "center" }}>Estado de categoria</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total de Categorias: 3",
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

export default Producto_por_categoria
