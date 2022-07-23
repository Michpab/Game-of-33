var playerCount = 0;
var dealerCount = 0;
var playerScore = 0;
var dealerScore = 0;
var deck = [];


function shuffle(){
    deck = [];
    for(let i=0;i<4;i++){
        for(let j=1;j<=10;j++){
            deck.push(j);
        }
    }
    for (let i=0;i<deck.length;i++){
        let swapIndex = parseInt(Math.random()*deck.length);
        let card1 = deck[i];
        let card2 = deck[swapIndex];
        deck[i] = card2;
        deck[swapIndex] = card1;
    }
}


function draw(){
    if(deck.length == 0){
        shuffle();
    }
    let drawCard = deck.pop();
    return drawCard;
    }


// Runs when "Hit" button is clicked by player
function playerHit(){
    if (playerCount<9){
playerCount=playerCount + 1;
let card = draw();
playerScore = playerScore + card;
document.getElementById("P" + playerCount).innerHTML = card;
document.getElementById("PScore").innerHTML = playerScore;
}
}
    

function swapPlayerCard(index){
    let card = document.getElementById("P" + index).innerHTML;
    if(card!='B'){
    playerScore = playerScore - card;
    card = -card;
    document.getElementById("P" + index).innerHTML = card;
    playerScore = playerScore + card;
    document.getElementById("PScore").innerHTML = playerScore;
} 
}


function playerStay(){
    dealerPlays();
    results();
}


function dealerPlays(){
    while (dealerCount < 9 && dealerScore < 33){
        dealerHit();
    }
}


function dealerHit(){
    dealerCount=dealerCount + 1;
    let card = draw();
    dealerScore = dealerScore + card;
    document.getElementById("D" + dealerCount).innerHTML = card;
    document.getElementById("DScore").innerHTML = dealerScore;
}


function results(){
    let message = "";
    let pdist = 33-playerScore;
    if (pdist < 0){
        pdist = -pdist
    }

    let ddist = 33-dealerScore;
    if (ddist < 0){
        ddist = -ddist
    }

    if( pdist > ddist){
        message="You Lose!";
    }
    else if (pdist < ddist){
        message="You Win!";
    }
    else if (pdist == ddist){
        message = "Tie!";
    }
    document.getElementById ("results").innerHTML = message;   
}






