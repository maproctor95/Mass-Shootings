var options = {
    series: [93, 119, 95],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['No', 'Unknown', 'Yes'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      title: {
        text: "History of Mental Illness - General"
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();