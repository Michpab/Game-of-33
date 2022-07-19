var playerCount = 0;
var dealerCount = 0;

function draw()
var values = ["1","2", "3", "4", "5", "6", "7", "8", "9", "10"];
var deck = new Array();
var players = new Array();
var currentPlayer = 0;

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
    
 

