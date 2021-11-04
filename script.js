

const getBoard = function(){
    return document.getElementById("cells-container")
}


const displayNumbers = function (){
    let boardNode = getBoard()
    for(let cellNumber = 1; cellNumber <= 76; cellNumber++){
        let cellNode = document.createElement("div")
        cellNode.innerText = cellNumber
        cellNode.classList.add("cell")
        boardNode.appendChild(cellNode)
    }
}
displayNumbers()

const selectRandomNumber = function(event){
    

}


const getTickets = function(){
    ticketlist = document.getElementById("ticket-container")
    let ticket = []
    for(let i = 1 ; i <=24; i++){
       let number = Math.floor(math.selectRandomNumber()*76)
    ticket.push(number)
    ticketList += appendChild(ticket)
    }
}
getTickets()