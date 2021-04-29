import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListUser } from '../../actions/user'

const VerticalBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListUser())
  }, [dispatch])

  const users = useSelector(state => state.userReducers)
  const usersName = users.map(item => item.name[0])
  const permission = users.map(item => item.permission)

  const data = {
    labels: usersName,
    datasets: [
      {
        label: 'permission user',
        labels: permission,
        data: permission,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    type: 'bar',
    data: data,
    options: {
      zoom: {
        enabled: true,
        mode: 'x',
        drag: true,
      },
      pan: {
        enabled: true,
        mode: 'x',
        drag: true,
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        },
        scales: {
          x: {
            type: 'category',
            min: 5,
            max: 11,
          },
          y: {
            type: 'linear'
          },
        },
        zoom: {
          pan: {
            enabled: true,
            mode: 'xy',
            speed: 2,
            threshold: 5,
          },
          zoom: {
            enabled: true,
            mode: 'xy',
          },
        }
      }
    },
  };
  return (
    <>
      <div className="flex bg-blue-400 p-2">
        <h3 className="text-white bold">Pie Chart</h3>

        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="fas fa-minus"></i>
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <Bar data={data} options={options} />
    </>
  )
}

export default VerticalBar
