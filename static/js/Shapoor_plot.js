var options = {
    series: [93, 119, 95],
title: {
    text: "History of Mental Illness"
      },
chart: {
    type: 'pie',
  },
  labels: ['No', 'Unknown', 'Yes'],
  legend: {
    position: 'bottom'
      }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();