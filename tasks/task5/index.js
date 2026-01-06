// Write your code below:

let heading_3 = document.createElement('h3');

let head_text = document.createTextNode('Buy high quality organic fruits online');

heading_3.appendChild(head_text);

let div = document.getElementsByTagName('div');
let firstDiv = div[0];

firstDiv.appendChild(heading_3);


firstDiv.lastElementChild.style.fontStyle = 'italic';

let para = document.createElement('p');
let paraText = document.createTextNode('Total fruits:4');

para.appendChild(paraText);

let div2 = document.getElementsByTagName('div');
let secondDiv = div2[1];

let fruits = document.querySelector('.fruits')
secondDiv.insertBefore(para, fruits);

para.id = 'fruits-total';
