// Code your solutions in this file
const cards = [];

function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    cards.message = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return cards;
}

function countDown() {
  let countDown = 0;
  while (countDown < 11) {
    console.log(countDown++)
  }
}
