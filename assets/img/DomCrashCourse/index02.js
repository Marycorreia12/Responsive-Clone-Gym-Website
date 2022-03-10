var itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);

//childNode
console.log(itemList.children);
console.log(itemList.children[2]);
itemList.children[2].getElementsByClassName.background = 'yellow';

//FirstChild
console.log(itemList.firstChild);

//FirstElementChild
console.log(itemList.firstElementChild);

//LastChild
console.log(itemList.lastChild);

//LastElementChild
console.log(itemList.lastElementChild);

//nextSibling
console.log(itemList.nextSibling);

//prevSibling
console.log(itemList.previousSibling);


//CreateElement

//Create a div
var newDiv = document.createElement('div');

//Add class
newDiv.className = 'hello';

//Add id 
newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title', 'hello div');

//Create text node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);
newDiv.style.fontSize = '30px';
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);