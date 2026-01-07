
let fruit = document.querySelectorAll('.fruit');
fruit.forEach((li) => {
    let newEdit = document.createElement('button');
    let editText = document.createTextNode('Edit');
    newEdit.className = 'edit-btn';
    newEdit.appendChild(editText);
    li.appendChild(newEdit);
})

let form = document.querySelector('form');
let ul = document.querySelector('.fruits');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let fruitsToAdd = document.querySelector('#fruit-to-add');

    let newLi = document.createElement('li');
    newLi.innerHTML = fruitsToAdd.value + '<button class="delete-btn">X</button>' + '<button class="edit-btn">Edit</button>';
    newLi.className = 'fruit';
    ul.appendChild(newLi);
})

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        let toRemoveList = event.target.parentElement;
        ul.removeChild(toRemoveList);
    }
})


