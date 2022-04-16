var stockForm = document.querySelector("#addStockForm");
var stockAdd = document.querySelector("#tickerInput");
var ticketEl = document.querySelector("#ticket-text");
var deleteBtn = document.querySelector("#cleanBtn")
var tickets = [];


function getTicket() {
    ticketEl.innerHTML=""
    for (var i=0; i < tickets.length; i++){
     var ticketVal = tickets[i];
    var newdiv = document.createElement('div');
    var content = document.createElement("button");
        content.classList.add("buttons");
        content.textContent = ticketVal;
        content.setAttribute('id','btnSelect');
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

if (stockAddText === ""){
    return;
}
    if(stockAddText.length > 4){
    return;
    }
    tickets.push(stockAddText);
    

    ticketStore();
    getTicket();

});



storeTicket()

deleteBtn.addEventListener('click', function(){
    localStorage.clear('tickets', 'tickets');
    location.reload();
})

