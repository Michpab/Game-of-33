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
    return deck.pop();
}

function createDeck(){
deck = new Array();
for (var i = 0 ; i < values.length; i++)
deck.push(card);
}

function playerStay(){
alert("Player Stays");
}
function playerHit(){
playerCount=playerCount + 1;
let card = draw();
document.getElementById("P" + playerCount).innerHTML = card;}
function dealerStay(){
alert("Dealer Stay");
}
function dealerHit(){
dealerCount=dealerCount + 1;
let card = draw();
document.getElementById("D" + dealerCount).innerHTML = card;
}  
    
 

