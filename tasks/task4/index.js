// Deliverable:

// Using DOM manipulation, do the following (Don’t modify the HTML file):

// Implement the code as shown in the video.

// Use id as a query to select the basket heading and set its color to brown.

// Change the background color of all even fruit items to red and change their text color to white.

// Remove the default list-style (dots) from the fruit list.


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

