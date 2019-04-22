const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        //if the cards match, let the user know they've found a match
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
            //otherwise, let the user know they should try again
        } else {
            console.log("Sorry, try again.");
        }
    }
}

function flipCard(cardId) {
    //when a user flips over a card, add that card to the array of cards in play
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    //if the user has flipped over two cards, check if they match
    checkForMatch();
}

flipCard(0);
flipCard(2);

