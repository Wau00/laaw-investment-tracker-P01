window.addEventListener('load', function(){
    var stockForm = document.querySelector("#addStockForm");
    var stockAdd = document.querySelector("#tickerInput");
    var ticketEl = document.querySelector("#ticket");

    stockForm.addEventListener('submit', function(event){
        event.preventDefault();
        
        let ticket = stockAdd.value;    

        let watchlistForm = document.createElement("div");
            watchlistForm.classList.add("ticket");

        let watchlistContent = document.createElement("div");   
            watchlistContent.classList.add("content");
            

         watchlistForm.appendChild(watchlistContent);

        let stockInput = document.createElement("input");
            stockInput.classList.add("text");
            stockInput.type = "text";
            stockInput.value = ticket;
            
        watchlistContent.appendChild(stockInput)
        
        let watchlistActions = document.createElement("div");
        watchlistActions.classList.add("actions");

        let watchListRemove = document.createElement("button");
        watchListRemove.classList.add("remove");
        watchListRemove.innerHTML = "Remove";

        watchlistActions.appendChild(watchListRemove);
        watchlistForm.appendChild(watchlistActions);
         
        ticket.value = ""
        ticketEl.appendChild(watchlistForm);
        
        watchListRemove.addEventListener('click', function(){
        ticketEl.removeChild(watchlistForm);

        });
    })
})
