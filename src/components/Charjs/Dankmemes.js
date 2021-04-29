
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Dankmemes = () => {

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          min: 0,
          max: 600
        }
      }]
    },
    title: { text: "THICCNESS SCALE", display: true },
    pan: {
      enabled: true,
      mode: "xy",
      speed: 1,
      threshold: 1,
    },
    zoom: {
      enabled: true,
      drag: false,
      mode: "xy",
      limits: {
        max: 1,
        min: 0.5,
      },
      rangeMin: {
        x: 2,
        y: 1,
      },
      rangeMax: {
        x: 10,
        y: 150,
      },
    },
  }

  return (
    <div>
      <div class="flex bg-blue-400 p-2">
        <h3 class="text-white bold">Line Chart</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <Line
        data={data}
        options={options}
      />
    </div>
  );
};

export default Dankmemes;