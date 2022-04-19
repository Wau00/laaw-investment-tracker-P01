var stockForm = document.querySelector("#addStockForm");
var stockAdd = document.querySelector("#tickerInput");
var ticketEl = document.querySelector("#ticket-text");
var deleteBtn = document.querySelector("#cleanBtn")
var tickets = [];


function getTicket() {
    ticketEl.innerHTML=""
    for (var i=0; i < tickets.length; i++) {
        var ticketVal = tickets[i];
        var newdiv = document.createElement('div');
        var content = document.createElement("button");
        content.classList.add("buttons", "btnSelect");
        content.textContent = ticketVal;
        content.addEventListener("click", function() {
            getStockData(this.textContent)});
        content.addEventListener("click", function() {
            destroyChart();
            getChartData(this.textContent, moment().format("YYYY-MM"))});
        content.addEventListener("click", function() {
            getStockNews(this.textContent)});
        newdiv.appendChild(content);
        ticketEl.appendChild(newdiv);
    }
}  

function storeTicket(){
    var storedTickets = JSON.parse(localStorage.getItem("tickets"));
    if(storedTickets !== null){
    tickets = storedTickets    
    }
    getTicket();
}

function ticketStore () {
    localStorage.setItem("tickets", JSON.stringify(tickets));
}

stockForm.addEventListener("submit", function(event){
    event.preventDefault();

    var stockAddText = stockAdd.value.trim();

    if (stockAddText === "" || stockAddText.length > 4){
        return;
    };

    if (!tickets.includes(stockAddText)) {
        tickets.push(stockAddText);
    };
    
    ticketStore();
    getTicket();
});

storeTicket()

deleteBtn.addEventListener('click', function(){
    localStorage.clear('tickets', 'tickets');
    location.reload();
})
