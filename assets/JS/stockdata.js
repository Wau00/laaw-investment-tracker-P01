// api key for stockdata.org
let apiKey = "RamgPwgAcspYJX9SidkgGi2vtsrXoKmM2115G1fr"

let stockSearch = document.querySelector("#search-button");

stockSearch.addEventListener("click", getStockData);


function getStockData () {
    let tickerInput = document.querySelector("#tickerInput").value;
    let stockDataUrl = "https://api.stockdata.org/v1/data/quote?symbols=" + tickerInput + "&api_token=" + apiKey;
    fetch(stockDataUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let tickerName = data.data[0].name
            let exchange = data.data[0].exchange_short
            let price = data.data[0].price
            let dayChange = data.data[0].day_change
            let previousClose = data.data[0].previous_close_price
            let openPrice = data.data[0].day_open
            let dayHigh = data.data[0].day_high
            let dayLow = data.data[0].day_low
            let volume = data.data[0].volume
            let yearHigh = data.data[0]["52_week_high"]
            let yearLow = data.data[0]["52_week_low"]
            let marketCap = data.data[0].market_cap

            $("#tickerName").text("Company: " + tickerName);
            $("#exchange").text("Exchange: " + exchange);
            $("#price").text("Current Price: " + price);
            $("#dayChange").text("Change(%)" + dayChange);
            $("#previousClose").text("Previous Close: " + previousClose);
            $("#openPrice").text("Open Price: " + openPrice);
            $("#dayHigh").text("High Today: " + dayHigh);
            $("#dayLow").text("Low Today: " + dayLow);
            $("#volume").text("Volume: " + volume);
            $("#yearHigh").text("52-Week High: " + yearHigh);
            $("#yearLow").text("52-Week Low: " + yearLow);
            $("#marketCap").text("Market Cap($): " + marketCap);

        })

        
}

