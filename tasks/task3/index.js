// Deliverable:

// Using dom manipulation do the following : (Don’t change the html file)
// Go to index.js file and add your code →


// 1. Change the color of 5th "li" tag (one with "Mango" written inside it) to red.

// 2. Make all the "li" tags italic.

// Write your code below:
let listItem = document.getElementsByTagName('li');

listItem[4].style.color = 'red';

for (let i = 0; i < listItem.length; i++){
    listItem[i].style.fontStyle = 'italic';
}
