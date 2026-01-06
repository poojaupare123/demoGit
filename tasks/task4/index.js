
// query selector 
let basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';

let fruitList = document.querySelector('.fruits');
fruitList.style.listStyleType = 'none';

// query selector all 
let fruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for(let i =0; i<fruitItems.length; i++){
    fruitItems[i].style.backgroundColor = 'red';
    fruitItems[i].style.color = 'white';
}

