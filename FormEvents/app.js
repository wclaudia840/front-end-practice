// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const productValue = product.value;
    const qtyValue = qty.value;
    const newLi = document.createElement('li');
    newLi.innerText = `${qtyValue} ${productValue}`;
    ul.appendChild(newLi);
    product.value = "";
    qty.value = "";
});

const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const ul = document.querySelector('ul');
