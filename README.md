# **LAAW Investment Tracker**


## **THE PURPOSE OF THIS PLATFORM**

This platform was created with the intention of making it easy for any user curious about the current stock market. 
The search bar function allows the user to add a stock they would like to track. The watchlist then generates correlating
news articles updating the user of current prices,data and other important details. 

The easy navigation in this application allows the user to focus solely on the stock(s) they are trying to follow. This allows for easy grasping of the stock market. 


## **LINKS**

GitHub Repository:
https://github.com/atmason90/laaw-investment-tracker

Deployed Application:
https://atmason90.github.io/laaw-investment-tracker/


## **APPLICATION DEMO**

![demo gif](./assets/2022-04-15%2021.00.20.gif)


## **COLLABORATORS**

* Lucca Martins: https://github.com/luccaloopz
* Andrew Mason: https://github.com/atmason90
* Walter Underwood: https://github.com/Wau00
* Asika Habib: https://github.com/toma95s


## **TECHNOLOGIES USED**

![HTML Badge](https://img.shields.io/badge/Language-HTML-brightgreen)
![CSS Badge](https://img.shields.io/badge/Language-CSS-yellow)
![JavaScript Badge](https://img.shields.io/badge/Language-JavaScript-orange)
![MomentJs Badge](https://img.shields.io/badge/JSLibrary-MomentJS-lightgrey)
![JQuery Badge](https://img.shields.io/badge/JSLibrary-JQuery-blue)
![Bulma Badge](https://img.shields.io/badge/CSSFramework-Bulma-blueviolet)
![stockdata.org API](https://img.shields.io/badge/API-stockdata.org-9cf)
![marketaux API](https://img.shields.io/badge/API-marketaux-9cf)
![marketaux API](https://img.shields.io/badge/JSLibrary-chart.js-9cf)


## **CODE EXAMPLES** 


This example shows how chart.js was utilized to render financial data to the application.

```js
searchButton.addEventListener("click", getChartData);

function getChartData() {
  let tickerInput = document.querySelector("#tickerInput").value;
  let currentYearAndMonth = moment().format("YYYY-MM");
  let chartDataURL = `https://api.stockdata.org/v1/data/intraday?symbols=${tickerInput}&date_to=${currentYearAndMonth}&interval=month&sort=asc&api_token=RamgPwgAcspYJX9SidkgGi2vtsrXoKmM2115G1fr`; 

  fetch(chartDataURL).then(function(response) {
    return response.json();
  }).then(function (dataHistoric) {
    displayToChart(dataHistoric);
  });
};
```

This example shows how marketaux API is used to render news articles to the application.

```js
function getStockNews(){
   let symbolInput = document.querySelector("#tickerInput").value;
   let  api_url = 'https://api.marketaux.com/v1/news/all?symbols=' + symbolInput + '&filter_entities=true&language=en&api_token=' + api_token; 
    fetch(api_url)
    .then(function (response) {
        return response.json();
    })
    .then(function(dataNews)
```

## **LICENSE**

MIT License

Copyright (c) 2022 LAAW Investment Tracker

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.