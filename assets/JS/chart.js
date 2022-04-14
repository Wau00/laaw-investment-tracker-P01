const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", getChartData);

function getChartData() {
  let tickerInput = document.querySelector("#tickerInput").value;
  let currentYearAndMonth = moment().format("YYYY-MM");
  let chartDataURL = `https://api.stockdata.org/v1/data/intraday?symbols=${tickerInput}&date_to=${currentYearAndMonth}&interval=quarter&api_token=RamgPwgAcspYJX9SidkgGi2vtsrXoKmM2115G1fr`; 

  fetch(chartDataURL).then(function(response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    displayToChart(data);
  });
};

function displayToChart(data) {
  for (let i = 0; i < data.data.length; i++) {
    
  }
}

const labels = [
  // moment().subtract(17, "quarter").format("MMM YY"),
  // moment().subtract(16, "quarter").format("MMM YY"),
  // moment().subtract(15, "quarter").format("MMM YY"),
  // moment().subtract(14, "quarter").format("MMM YY"),
  // moment().subtract(13, "quarter").format("MMM YY"),
  // moment().subtract(12, "quarter").format("MMM YY"),
  // moment().subtract(11, "quarter").format("MMM YY"),
  // moment().subtract(10, "quarter").format("MMM YY"),
  // moment().subtract(9, "quarter").format("MMM YY"),
  // moment().subtract(8, "quarter").format("MMM YY"),
  // moment().subtract(7, "quarter").format("MMM YY"),
  // moment().subtract(6, "quarter").format("MMM YY"),
  // moment().subtract(5, "quarter").format("MMM YY"),
  // moment().subtract(4, "quarter").format("MMM YY"),
  // moment().subtract(3, "quarter").format("MMM YY"),
  // moment().subtract(2, "quarter").format("MMM YY"),
  // moment().subtract(1, "quarter").format("MMM YY"),
  // moment().format("MMM YY"),
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    
  }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);