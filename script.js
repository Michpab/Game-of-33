const players=[{name:"John",Cards:[]},{name:"Jack",Cards:[]} ]
const deck=[1,2,3,4,5,6,8,9,10]
function dealCards(){
for (let i=0;i<2;i++){
for (let x=0;x<players.length;x++){
let card=deck.pop();
players[x].Cards.push(card);
// renderDeck(deck,x);

// updatePoints();
}
}
}
dealCards();
