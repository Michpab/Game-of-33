var playerCount = 0;
var dealerCount = 0;


function draw(){
    return parseInt(Math.random() * 10 + 1)
}


function playerStay(){
    alert("Player Stays");
}

function playerHit(){
    playerCount=playerCount + 1;
    let card = draw();
    document.getElementById("P" + playerCount).innerHTML = card;
}
    



function dealerStay(){
    alert("Dealer Stay");
}

function dealerHit(){
    dealerCount=dealerCount + 1;
    let card = draw();
    document.getElementById("D" + dealerCount).innerHTML = card;
}  
    
 

