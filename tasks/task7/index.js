/* ---------- FORM ---------- */
let form = document.getElementsByTagName('form')[0];

/* ---------- TASK 1: ADD DESCRIPTION INPUT ---------- */
let descInput = document.createElement('input');
descInput.type = 'text';
descInput.id = 'description';
descInput.placeholder = 'Enter fruit description';

let addButton = form.querySelector('button');
form.insertBefore(descInput, addButton);

/* ---------- FRUIT LIST ---------- */
let fruititems = document.querySelector('.fruits');

/* ---------- ADD FRUIT ---------- */
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let fruitName = document.getElementById('fruit-to-add').value;
    let fruitDesc = document.getElementById('description').value;

    // ensure description exists
    if (fruitDesc === '') {
        alert('Please enter a description.');
        return;
    }

    let li = document.createElement('li');
    li.className = 'fruit';

    li.innerHTML =
        fruitName +
        '<p style="font-style: italic;">' + fruitDesc + '</p>' +
        '<button class="delete-btn">X</button>';

    fruititems.appendChild(li);

    // clear inputs
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});

/* ---------- DELETE FRUIT ---------- */
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});

/* ---------- TASK 3: FILTER FRUITS ---------- */
let filter = document.querySelector('#filter');

filter.addEventListener('keyup', function (event) {
    let textEntered = event.target.value.toLowerCase();
    let fruits = document.querySelectorAll('.fruit');

    for (let i = 0; i < fruits.length; i++) {

        // fruit name
        let nameText = fruits[i].firstChild.textContent.toLowerCase();

        // fruit description (may not exist for old fruits)
        let descTag = fruits[i].querySelector('p');
        let descText = descTag ? descTag.textContent.toLowerCase() : '';

        // show if name OR description matches
        if (
            nameText.indexOf(textEntered) === -1 &&
            descText.indexOf(textEntered) === -1
        ) {
            fruits[i].style.display = 'none';
        } else {
            fruits[i].style.display = 'block';
        }
    }
});
