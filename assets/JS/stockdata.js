// api key for stockdata.org
var apiKey = "RamgPwgAcspYJX9SidkgGi2vtsrXoKmM2115G1fr"
// var tickerInput = $(".input").val().trim();
var tickerInput = "AMD";



function getStockData () {
    var stockDataUrl = "https://api.stockdata.org/v1/data/quote?symbols=" + tickerInput + "&api_token=" + apiKey;
    fetch(stockDataUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

getStockData();