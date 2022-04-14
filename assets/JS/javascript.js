var stocks = $("Stock Symbol");
var watchedStocks = "";

var searchedStocks =(localstorage.getItem("stocks"))?JSON.parse(localStorage.getItem("stocks")):[];


function handleAddButton (event){
    event.preventDefault();
    
    watchedStocks = $("Stock Symbol").val().trim();
    if(!watchedStocks.includes(watchedStocks)){
        searchedStocks.push(watchedStocks)
    }
    else{
        return;
    }
    watchListAdded();

    localStorage.setItem("stocks",JSON.stringify())

}

function watchListAdded () {
    stocks.html("")
    $(searchedStocks).each(function (i, el) {
        stocks.prepend("<li>" + el + "</li>");
    })
    $("li").attr("class", "list-group-item list-group-item-action");

    $("li").on("click", function () {
        var listItem = $(this).text();
        console.log($(this).text());
        watchedStocks = listItem;
        console.log(watchedStocks);
    });
};


