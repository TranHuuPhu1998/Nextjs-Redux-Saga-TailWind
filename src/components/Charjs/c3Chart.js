import React from "react";
import C3Chart from "react-c3js";

const c3Chart = () => {
  const dataChart = {
    data: {
      columns: [
        ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40],
        ['sample2', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
      ]
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
          <h3 className="text-white bold">C3 Chart</h3>

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

export default c3Chart


// class C3 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataChart : {
//         data: {
//           columns: [
//             ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
//           ]
//         },
//         zoom: {
//           enabled: true
//         }
//       }
//     };
//   }


//   render() {
//     return (
//       <div>
//         <C3Chart data={this.state.dataChart.data} zoom={this.state.dataChart.zoom} />
//       </div>
//     );
//   }
// }

// export default C3;