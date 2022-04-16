
var api_token = "nlImfVRma9P5KANB90CtXrsSfaJOPg8quhKGBeqr"


var searchInput = document.querySelector("#search-button");
searchInput.addEventListener("click", getStockNews);


function getStockNews(){
   let symbolInput = document.querySelector("#tickerInput").value;
   let  api_url = 'https://api.marketaux.com/v1/news/all?symbols=' + symbolInput + '&filter_entities=true&language=en&api_token=' + api_token; 
    fetch(api_url)
    .then(function (response) {
        return response.json();
    })
    .then(function(dataNews) {
    
    // First News
    let newsTitleX = dataNews.data[0].title
    let newsDescrX = dataNews.data[0].description
    let newsSourcX = dataNews.data[0].source
    let newsImageX = dataNews.data[0].image_url
    let newsUrlX = dataNews.data[0].url
    
    // Second News
    let newsTitleY = dataNews.data[1].title
    let newsDescrY = dataNews.data[1].description
    let newsSourcY = dataNews.data[1].source
    let newsImageY = dataNews.data[1].image_url
    let newsUrlY = dataNews.data[1].url

    // Third News 
    let newsTitleZ = dataNews.data[2].title
    let newsDescrZ = dataNews.data[2].description
    let newsSourcZ = dataNews.data[2].source
    let newsImageZ = dataNews.data[2].image_url
    let newsUrlZ = dataNews.data[2].url

    // First News Attributes
    $('#headerX').text(newsTitleX);
    $('#contentX').text(newsDescrX);
    $('#sourceX').text(newsSourcX);
    $('#sourceX').attr("href",newsUrlX);
    $('#imageX').attr("src",newsImageX);
    
   
    // Second News Attributes
    $('#headerY').text(newsTitleY);
    $('#contentY').text(newsDescrY);
    $('#sourceY').text(newsSourcY);
    $('#sourceY').attr("href",newsUrlY);
    $('#imageY').attr("src",newsImageY);

    // Third News Attributes
    $('#headerZ').text(newsTitleZ);
    $('#contentZ').text(newsDescrZ);
    $('#sourceZ').text(newsSourcZ);
    $('#sourceZ').attr("href",newsUrlZ);
    $('#imageZ').attr("src",newsImageZ);

   
    })
}
getStockNews();