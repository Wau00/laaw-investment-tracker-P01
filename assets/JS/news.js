// api key for marketaux.com
var api_token = "nlImfVRma9P5KANB90CtXrsSfaJOPg8quhKGBeqr"

// var tickerInput 
var symbolInput = "AMD";

var api_url = 'https://api.marketaux.com/v1/news/all?symbols=' + symbolInput + '&filter_entities=true&language=en&api_token=' + api_token; 
async function getStockNews(){
    var response = await fetch(api_url)
    var dataNews = await response.json();
    console.log(dataNews);
    console.log(dataNews.data[0].title);
}

getStockNews();