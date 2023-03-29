let player = {
  name: 'Per',
  chips: 200,
};

let messageEl = document.getElementById('message-el');
//let sumEl = document.getElementById('sum-el');
//or
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');
let playerEl = document.getElementById('player-el');

let cards = [],
  hasBlackjack = false,
  isAlive = false,
  message = ' ';
let sum = 0;


playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard(),
    secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards:';

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ' ' + cards[i];
  }

  sumEl.textContent = 'Sum: ' + sum;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = 'BLACKJACK!';
    hasBlackjack = true;
  } else {
    message = "You've Lost";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && !hasBlackjack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
