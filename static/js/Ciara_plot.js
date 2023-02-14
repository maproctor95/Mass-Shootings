var options = {
    series: [
        {
          
            data: [
                {
                    x: "Handgun",
                    y: 1005
                },
                {
                    x: "Multiple Guns",
                    y: 817
                },
                {
                    x: "Rifle",
                    y: 211
                },
                {
                    x: "Shotgun",
                    y: 72
                },
                {
                    x: "Unknown",
                    y: 292
                },
               
            ], 
            name: "total_number_of_victims"
        }
    ],
    chart: {
        animations: {
            enabled: false,
            easing: "swing"
        },
        dropShadow: {
            blur: 3
        },
        foreColor: "#333",
        fontFamily: "Roboto",
        height: 350,
        id: "XtHuc",
        stacked: true,
        toolbar: {
            show: false
        },
        type: "bar",
        width: 480
    },
    plotOptions: {
        bar: {
            borderRadius: 10
        },
        radialBar: {
            hollow: {
                background: "#fff"
            },
            dataLabels: {
                name: {},
                value: {},
                total: {}
            }
        },
        pie: {
            donut: {
                labels: {
                    name: {},
                    value: {},
                    total: {}
                }
            }
        }
    },
    dataLabels: {
        enabled: false,
        style: {
            fontWeight: 700
        }
    },
    grid: {
        padding: {
            right: 25,
            left: 15
        }
    },
    legend: {
        fontSize: 14,
        offsetY: 0,
        markers: {
            shape: "square",
            size: 8
        },
        itemMargin: {
            vertical: 0
        }
},
    tooltip: {
        shared: false,
        intersect: true
    },
    title: {
    text: 'Total number of Victims vs Type of Guns',
        align: 'left'
    },
    xaxis: {
        labels: {
            trim: true,
            style: {}
        },
        tickPlacement: "between",
        title: {
            text: 'Type of Gun',
            style: {
                fontWeight: 700
            }
        },
        tooltip: {
            enabled: false
        }
    },
    yaxis: {
        labels: {
            style: {}
        },
        title: {
            type: 'Total Number of Victims',
            style: {
                fontWeight: 700
            }
        }
    },
    theme: {
        palette: "palette5"
    }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
