const CHART = document.getElementById("lineChart");
console log(CHART);
let lineChart = new Chart(CHART, {
    type: 'line',
    data: data = {
        labels: ["0", "2", "4", "6", "8", "10", "12"]
        datasets: [
            {
                label: "First Ventilation Data",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,190,190,0.4)",
                borderColor: "rgba(107,194,130,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(107,194,130,1)",
                pointBackgroundColor: "fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(107,194,130,1)",
                PointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [6, 15, ,15, 15, 6, 15, 15, 6],
            }
        ]
    }
})
