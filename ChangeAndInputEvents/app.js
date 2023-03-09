
const h1 = document.querySelector('h1');
const input = document.querySelector('#username');

input.addEventListener('input',() => {
  if (input.value !== "") {
    h1.innerText = `Welcome, ${input.value}`;
  } else {
    h1.innerText = 'Enter Your Username';
  }
});
