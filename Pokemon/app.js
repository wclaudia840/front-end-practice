// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

for(let i = 1; i < 99; i++ ){
  const testImg = document.createElement('img');
  testImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  testImg.classList.add = ('pokemon');

  const section = document.querySelector('#container');
  section.append(testImg);
}
