
function expandCard(cardNumber) {
    const cards = document.querySelectorAll('.card');
    console.log("cards:", cards);
    cards.forEach(card => card.classList.remove('selected'));

    const selectedCard = document.getElementById('card' + cardNumber);
    console.log("selectedCard: ", selectedCard);

    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
}

