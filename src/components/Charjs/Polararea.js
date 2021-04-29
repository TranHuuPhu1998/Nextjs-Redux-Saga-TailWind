import React from 'react'
import {PolarArea}  from 'react-chartjs-2'

const PolarareaChart = () => {

    const config = {
        type: 'polarArea',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Polar Area Chart'
            }
          }
        },
    };

    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ]
          }
        ]
    };

    return (
        <div>
            <div className="flex bg-blue-400 p-2">
                <h3 className="text-white bold">VerticalBar Chart</h3>

                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <PolarArea data={data} options={config}/>
        </div>
    )
}

export default PolarareaChart
