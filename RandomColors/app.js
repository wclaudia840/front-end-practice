// teacher's version:
// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }
//-----------------------------------------------------//

// my solution:

//select the button, add an event listener. when click:
//1. change the bgcolor of the page:
//  - generate 3 different digits randomly(0-255);
//  - add background color for the body;
//2. show the color's rgb as title

const getRandomColor = () => {
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  return `rgb(${r}, ${g}, ${b})`;
}

const changeBg = () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = getRandomColor();
};

const changeTt = () =>{
  const h1 = document.querySelector('h1');
  h1.innerText = getRandomColor();
}

const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
  changeBg();
  changeTt();
})
