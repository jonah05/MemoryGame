
const cards = document.querySelectorAll('.card');
const restartBtn = document.getElementById('restartBtn');
let flippedCards = [];
let matchedCards = 0;
let attempts = 0;


function flipCard() {
    if (flippedCards.length === 2) return;  

    this.classList.add('flipped');  
    flippedCards.push(this);

 
    if (flippedCards.length === 2) {
        attempts++;
        document.getElementById('attempts').innerText = `Attempts: ${attempts}`;
        checkMatch();
    }
}


function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.icon === card2.dataset.icon) {
        matchedCards++;
        flippedCards = [];  

       
        if (matchedCards === cards.length / 2) {
            setTimeout(() => {
               
                alert('Fituat! Lojë e mbaruar!');
            }, 500); 
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);  
    }
}


restartBtn.addEventListener('click', restartGame);


function restartGame() {
    matchedCards = 0;
    attempts = 0;
    flippedCards = [];
    document.getElementById('attempts').innerText = `Attempts: ${attempts}`;
    
    cards.forEach(card => {
        card.classList.remove('flipped'); 
    });

    shuffleCards(); 
}


function shuffleCards() {
    const cardArray = Array.from(cards);
    cardArray.sort(() => Math.random() - 0.5); 
    cardArray.forEach(card => {
        document.querySelector('.game_board').appendChild(card);  
    });
}


cards.forEach(card => card.addEventListener('click', flipCard));


shuffleCards();
