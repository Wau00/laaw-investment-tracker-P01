const searchButton = document.querySelector("#search-button");

let myChart;

searchButton.addEventListener("click", destroyChart);
searchButton.addEventListener("click", getChartData);

function getChartData() {
  let tickerInput = document.querySelector("#tickerInput").value;
  let currentYearAndMonth = moment().format("YYYY-MM");
  let chartDataURL = `https://api.stockdata.org/v1/data/intraday?symbols=${tickerInput}&date_to=${currentYearAndMonth}&interval=month&sort=asc&api_token=RamgPwgAcspYJX9SidkgGi2vtsrXoKmM2115G1fr`; 

  fetch(chartDataURL).then(function(response) {
    return response.json();
  }).then(function (dataHistoric) {
    console.log(dataHistoric);
    displayToChart(dataHistoric);
  });
};

function displayToChart(dataHistoric) {
  const labels = [];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Stock Price',
      backgroundColor: "#345b64",
      borderColor: '#a9abae', 
      data: [],
    }]
  };

  for (let i = 0; i < dataHistoric.data.length; i++) {
    data.datasets[0].data.push(dataHistoric.data[i].data.close);
    let stockDate = dataHistoric.data[i].date;
    stockDate = stockDate.slice(0, 7);
    labels.push(stockDate);
  }
 data.labels = labels;
  console.log(data);

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  };

  myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  
};

function destroyChart() {
  if(myChart != null){
    myChart.destroy();
 }
}