      
var options = {
    series: [{
      name: 'series1',
      color: "#7649F2",
      data: [80, 68, 92, 78, 99, 50, 82]
    }],
    
      chart: {
        toolbar: {
        show: false,
    },
      height: 350,
      type: 'area'
      
    },
    dataLabels: {
      enabled: false
    },
   
    stroke: {
      curve: 'smooth'
      
    },
    grid: {
        show: true,
        borderColor: '#202027',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        },  
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },  
    },
    gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: ['#7649F2']
    },
    yaxis:{
        axisBorder: {
            show: false,
        },  
            max:100,
        labels: {
            show: true,
            style: {
                colors: ["#7f7f7f"],
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                textTransform:"uppercase",
                cssClass: 'apexcharts-xaxis-label',
            },
            offsetX: -10,
           
        },
    },
    xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        position: 'bottom',
       
        axisBorder: {
            show: false,
            
        },
        labels: {
            show: true,
         
            align: 'left',
     
            style: {
                colors: ["#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f"],
                
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                textTransform:"uppercase",
                marginRight:"10px",
                cssClass: 'apexcharts-xaxis-label',
            },
           
        },
        axisBorder: {
            show: true,
            color: '#78909C',
            height: 0,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: false,
        },
    },
};
var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
var options2 = {
    series: [{
      name: 'series1',
      color: "#53f8ff",
      data: [80, 68, 92, 78, 99, 50, 82]
    }],
    
      chart: {
        toolbar: {
        show: false,
    },
      height: 350,
      type: 'area'
      
    },
    dataLabels: {
      enabled: false
    },
   
    stroke: {
      curve: 'smooth'
      
    },
    grid: {
        show: true,
        borderColor: '#202027',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        },  
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },  
    },
    gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: ['#7649F2']
    },
    yaxis:{
        axisBorder: {
            show: false,
        },  
            max:100,
        labels: {
            show: true,
            style: {
                colors: ["#7f7f7f"],
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                textTransform:"uppercase",
                cssClass: 'apexcharts-xaxis-label',
            },
            offsetX: -10,
        },
    },
    xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        position: 'bottom',
       
        axisBorder: {
            show: false,
            
        },
        labels: {
            show: true,
         
            align: 'left',
     
            style: {
                colors: ["#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f"],
                
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                textTransform:"uppercase",
                marginRight:"10px",
                cssClass: 'apexcharts-xaxis-label',
            },
           
        },
        axisBorder: {
            show: true,
            color: '#78909C',
            height: 0,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: false,
        },
    },
   
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();
var heartRateOpt = {
    series: [{
        name: 'series1',
        color:"#00FFAC",
        data: [72, 115, 95, 130, 60, 116, 88]
        
    }],
    colors: [''],
    plotOptions: {
        bar: {
            distributed: true,
            columnWidth: 15,
            borderRadius: 5,
        }
    },
    chart: {
        toolbar: {
            show: false,
        },
        height: 350,
        type: 'bar'
    },
    dataLabels: {
      enabled: false
    },
   
   
    grid: {
        show: true,
        borderColor: '#202027',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        },  
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },  
    },
    
    yaxis:{
        axisBorder: {
            show: false,
        },  
        labels: {
            show: true,
            style: {
                colors: ["#7f7f7f"],
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                textTransform:"uppercase",
                cssClass: 'apexcharts-xaxis-label',
            },
            offsetX: -10,
        },
    },
    legend: {
        show: false,
    },
    xaxis: {
        categories: ['12PM', '1PM', '2PM', '3PM','4PM','5PM','6PM'],
        tickAmount: 10,
       
        position: 'bottom',
       
        axisBorder: {
            show: false,
            
        },
        labels: {
            show: true,
         
            align: 'left',
     
            style: {
                colors: ["#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f"],
                
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                textTransform:"uppercase",
                marginRight:"10px",
                cssClass: 'apexcharts-xaxis-label',
            },
           
        },
        axisBorder: {
            show: true,
            color: '#78909C',
            height: 0,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: false,
        },
    },
   
};
var heartRate = new ApexCharts(document.querySelector("#heartRate"), heartRateOpt);
heartRate.render();


var bodyTempetureOpt = {
    series: [{
        name: 'series1',
        color:"#fd5d5d",
        data: [72, 115, 95, 130, 60, 116, 88]
        
    }],
    colors: [''],
    plotOptions: {
        bar: {
            distributed: true,
            columnWidth: 15,
            borderRadius: 5,
        }
    },
    chart: {
        toolbar: {
            show: false,
        },
        height: 350,
        type: 'bar'
    },
    dataLabels: {
      enabled: false
    },
   
   
    grid: {
        show: true,
        borderColor: '#202027',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        },  
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },  
    },
    
    yaxis:{
        axisBorder: {
            show: false,
        },  
        labels: {
            show: true,
            style: {
                colors: ["#7f7f7f"],
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                textTransform:"uppercase",
                cssClass: 'apexcharts-xaxis-label',
            },
            offsetX: -10,
        },
    },
    legend: {
        show: false,
    },
    xaxis: {
        categories: ['12PM', '1PM', '2PM', '3PM','4PM','5PM','6PM'],
        tickAmount: 10,
       
        position: 'bottom',
       
        axisBorder: {
            show: false,
            
        },
        labels: {
            show: true,
         
            align: 'left',
     
            style: {
                colors: ["#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f","#7f7f7f"],
                
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                textTransform:"uppercase",
                marginRight:"10px",
                cssClass: 'apexcharts-xaxis-label',
            },
           
        },
        axisBorder: {
            show: true,
            color: '#78909C',
            height: 0,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: false,
        },
    },
   
};
var bodyTempeture = new ApexCharts(document.querySelector("#bodyTempeture"), bodyTempetureOpt);
bodyTempeture.render();




