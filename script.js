


const getBoard = function(){
    return document.getElementById("cells-container")
}

const getTicket = function(){
    return document.getElementById("tickets-container")
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

let numbersOnTicket =[]
const displayTicket = function (){
    let tickets = getTicket()
    for(let i = 1; i <= 24; i++){
        let ticketNode = document.createElement("div")
        ticketNode.innerText = (Math.floor(Math.random()*76))
        numbersOnTicket[i] =  ticketNode.innerText
        ticketNode.classList.add("cellOnTicket")
        tickets.appendChild(ticketNode)
       
    }
}
displayTicket()

const play = function(){
    let getNumber = document.getElementsByClassName("cell")
    let selectedNumber = Math.floor(Math.random()*76)
    for(let i = 1; i <= 76; i++){
        if(getNumber[i].innerText == selectedNumber){ 
        getNumber[i].style.backgroundColor = "red"
        
        }

    }   
}
play()


/*

const getTickets = function(n){
    let ticket = []
    let ticketlist = []
     document.getElementById("ticket-container")
    for(let i = 1 ; i <=24; i++){
        let number = selectRandomNumber ()
        ticket.push(number)
        ticketlist += ticket
    }
}
getTickets()


const selectRandomNumber = function(){
    let number = Math.floor(math.selectRandomNumber()*76)
     return number
}


const createTicket = function(){
    let ticket = []
    for(let i = 1; i <= 24; i++){
       addEventListener =("onclick",  ticket.push(selectRandomNumber)  
    }
    return ticket
}
createTicket()


/*

window.onload = function(){
    
}

*/