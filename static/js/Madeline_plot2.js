var options = {
    series: [
        {
            data: [
                {
                    x: 1966,
                    y: 54
                },
                {
                    x: 1971,
                    y: 5
                },
                {
                    x: 1972,
                    y: 22
                },
                {
                    x: 1974,
                    y: 14
                },
                {
                    x: 1976,
                    y: 17
                },
                {
                    x: 1979,
                    y: 18
                },
                {
                    x: 1982,
                    y: 14
                },
                {
                    x: 1983,
                    y: 18
                },
                {
                    x: 1984,
                    y: 61
                },
                {
                    x: 1985,
                    y: 7
                },
                {
                    x: 1986,
                    y: 29
                },
                {
                    x: 1987,
                    y: 20
                },
                {
                    x: 1988,
                    y: 43
                },
                {
                    x: 1989,
                    y: 59
                },
                {
                    x: 1990,
                    y: 17
                },
                {
                    x: 1991,
                    y: 70
                },
                {
                    x: 1992,
                    y: 30
                },
                {
                    x: 1993,
                    y: 75
                },
                {
                    x: 1994,
                    y: 42
                },
                {
                    x: 1995,
                    y: 17
                },
                {
                    x: 1996,
                    y: 13
                },
                {
                    x: 1997,
                    y: 37
                },
                {
                    x: 1998,
                    y: 58
                },
                {
                    x: 1999,
                    y: 97
                },
                {
                    x: 2000,
                    y: 7
                },
                {
                    x: 2001,
                    y: 24
                },
                {
                    x: 2002,
                    y: 9
                },
                {
                    x: 2003,
                    y: 23
                },
                {
                    x: 2004,
                    y: 19
                },
                {
                    x: 2005,
                    y: 31
                },
                {
                    x: 2006,
                    y: 37
                },
                {
                    x: 2007,
                    y: 116
                },
                {
                    x: 2008,
                    y: 53
                },
                {
                    x: 2009,
                    y: 98
                },
                {
                    x: 2010,
                    y: 16
                },
                {
                    x: 2011,
                    y: 64
                },
                {
                    x: 2012,
                    y: 184
                },
                {
                    x: 2013,
                    y: 100
                },
                {
                    x: 2014,
                    y: 88
                },
                {
                    x: 2015,
                    y: 355
                },
                {
                    x: 2016,
                    y: 336
                },
            ],
            name: "total_number_of_victims"
        }
    ],
    chart: {
    type: "area",
    height: 350,
    width: 480,
    dropShadow: {
      enabled: true,
      color: "#000"
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    colors: ["#FFFFFF"]
  },
  stroke: {
    curve: "smooth",
    width: 3,
    fill: {
      type: "gradient",
      gradient: {
        type: "horizontal",
        colorStops: [
          [
            {
              offset: 0,
              color: "#0085FF",
              opacity: 1
            },
            {
              offset: 33,
              color: "#FF2E92",
              opacity: 1
            },
            {
              offset: 80,
              color: "#FFAC2F",
              opacity: 1
            },
            {
              offset: 99,
              color: "#FFFFFF",
              opacity: 1
            }
          ]
        ]
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      type: "vertical",
      colorStops: [
        [
          {
            offset: 0,
            color: "#F48116",
            opacity: 1.0
          },
          {
            offset: 70,
            color: "#6510F8",
            opacity: 0.2
          },
          {
            offset: 97,
            color: "#6510F8",
            opacity: 0.0
          }
        ]
      ]
    }
  },
 title: {
    text: 'Total Victims by Year',
        align: 'left'
    },
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: true
    },
    labels: {
        rotate: -90,
        rotateAlways: true,
        trim: true,
        style: {
            fontSize: 9
      }
    },
    tickAmount: "dataPoints",
        title: {
            text: "Year",
            style: {
                fontWeight: 700
            }
        }
  },
  yaxis: {
    labels: {
      show: true
    },
    title: {
        text: "Total Number of Victims",
            style: {
                fontWeight: 700
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();