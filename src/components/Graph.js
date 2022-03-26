import React from 'react'
// import ApexCharts from 'apexcharts'
import Charts from "react-apexcharts";
// ReactApexChart
const Graph = ({ analytic}) => {
  const { color } = analytic;

const series = [{
    name: "High Priority",
    data: [10, 18, 48, 33, 18, 29, 40, 31]
    },
  ];

const options = {
  chart: {
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  stroke: {
    width: [2],
    curve: 'straight',
    dashArray: [0, 8, 5],
    colors: [color]
  },

  markers: {
    size: 4,
    strokeWidth: 1,
    strokeColors: color,
    hover: {
      sizeOffset: 1
    },
    colors: [ "#fff" ]
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
  },
  fill:{
    colors: ["#000"]
  },
  grid: {
    borderColor: '#ECEBF5',
  },
}


  return (
    <div>
      <Charts width="100%"
          height="230px" options={options} series={series} type="line" />
    </div>
  )
}

export default Graph