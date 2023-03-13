//select p1&p2 btns, add disabled attribute and color on them
const p1Btn = document.querySelector('#player1');
const p2Btn = document.querySelector('#player2');
const endsGame = (winner, loser) => {
  document.querySelector('#player1').disabled = true;
  document.querySelector('#player2').disabled = true;
  winner.style.color = 'green';
  loser.style.color = 'red';
};

//select reset btn and set reset function
const resetBtn = document.querySelector('#reset');
const reset = () => {
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  document.querySelector('#player1').disabled = false;
  document.querySelector('#player2').disabled = false;
  score1.style.color = 'black';
  score2.style.color = 'black';
}
const resetScore = resetBtn.addEventListener('click', () => {
  reset();
})

//select 'select' btn and get the selected option's text
const selectBtn = document.querySelector('#playingTo');
let playingNum = parseInt(selectBtn.options[selectBtn.selectedIndex].text);
selectBtn.addEventListener('change', () => {
  reset();
  playingNum = parseInt(selectBtn.options[selectBtn.selectedIndex].text);
  // console.log(playingNum);
})

//select two scores add iteration and colors on scores
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');

p1Btn.addEventListener('click', () => {
  if (score1.innerHTML < playingNum) {
    score1.innerHTML++;
  }
  if (score1.innerHTML === `${playingNum}`) {
    endsGame(score1, score2)
  }
});
p2Btn.addEventListener('click', () => {
  if (score2.innerHTML < playingNum) {
    score2.innerHTML++;
  }
  if (score2.innerHTML === `${playingNum}`) {
    endsGame(score2, score1)
  }
});
