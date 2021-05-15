import React from 'react'
import C3Chart from "react-c3js";

const LineChart = () => {
    const dataChart = {
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ],
            regions: {
                'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}], // currently 'dashed' style only
                'data2': [{'end':3}]
            }
        },
        zoom: {
            enabled: true
        },
        subchart: {
            show: true
        }
    }
    return (
        <div>
            <div className="flex bg-blue-400 p-2">
                <h3 className="text-white bold">Line Chart Zoom</h3>

                <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                </button>
                </div>
            </div>
            <C3Chart 
                data={dataChart.data} 
                zoom={dataChart.zoom} 
                subchart={dataChart.subchart}
            />
        </div>
    )
}

export default LineChart
