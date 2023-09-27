//use compare function that randomly returns a positive or negative value
function randOrder() {
    return .5 - Math.random();
}

let pokerDeck = new Array(52);
pokerDeck[0] = "2 of clubs";
pokerDeck[0] = "3 of clubs";
pokerDeck[51] = "ace of spades";

pokerDeck.sort();

//shuffle a random output based on an object's length
let nineLengthArray = [0,1,2,3,4,5,6,7,8,9];

return nineLengthArray[Math.floor(Math.random() * nineLengthArray.length)];