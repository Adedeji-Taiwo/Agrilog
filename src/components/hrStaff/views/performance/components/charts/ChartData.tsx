
//double bar charts
export const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
        bar: {
            //borderWidth: window.innerWidth > 560 ? 10 : 5,
            borderRadius: 14,
            //borderColor: "transparent",
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          stepSize: 20,
          color: '#333', // set the color of the y axis labels
          ticks: {
            stepSize: 20, // set the increment to 20
            color: "#8C89B4"
          },
          grid: {
            color: "#ECECEC",
            borderDash: [2, 5],
            drawTicks: false,
            lineWidth: 1,
          },
        },
        x: {
            grid: {
              drawBorder: false,
              color: "transparent",
              lineWidth: 0,
            },
            ticks: {
              color: "#8C89B4",
            },
        }
      },
  };


  export const barLegends = [
    {title: "Achieved", color: '#7e4b3e'},
    {title: "Goals", color: '#5e9149'}
  ]

export const labels = ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Achieved',
      data: ["57", "64", "42", "57", "64", "57", "57"],
      backgroundColor: '#7e4b3e',
      barPercentage: 0.5, // set bar width to 50% of available space
      categoryPercentage: 0.5, // set space between bars to 10%
    },
    {
      label: 'Goals',
      data: ["67", "44", "60", "67", "82", "42", "42"],
      backgroundColor: '#5e9149',
      barPercentage: 0.5, // set bar width to 50% of available space
      categoryPercentage: 0.5, // set space between bars to 10%
    },
  ],
};


//doughnut
export const doughnutLegends = [
  { title: 'Completed', color: '#5e9149' },
]


const value = Number(([90, 70, 85].reduce((acc, cur) => acc + cur, 0)/3).toFixed(1));

export const doughnutData = {
  labels: ["completed", "Remaining"],
  datasets: [
    {
      label: 'completed',
      data: [value, 100 - value],
      backgroundColor: ['#5e9149', "#ECF3FE"], 
      borderWidth: [3, 1],
      borderColor: ["#5e9149", "rgba(255, 255, 255, 0.1)"],
    
    },
  ],
};

export const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: window.innerWidth > 768 ? '85%' : "90%",
  borderRadius: 2,
  plugins: {
    legend: {
      display: false,
    },
  },
};
