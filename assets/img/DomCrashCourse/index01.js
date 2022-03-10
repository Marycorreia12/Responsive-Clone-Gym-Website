//Examine the Document Object

console.dir(document);
console.dir(document.domain);
console.dir(document.URL);
console.dir(document.doctype);
console.dir(document.all);
console.dir(document.forms);
console.dir(document.head);
console.dir(document.body);

//GetElementsById
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
headerTitle.innerHTML = '<h3>Hello World!</h3>';
headerTitle.style.borderBottom = 'solid 3px red';

//GetElementByClassName
/* var items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//Gives error
//items.style.backgroundColor = '#333';

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#333';
    items[i].style.color = '#fff';
}
 */


//GetElementsByTagName
/* var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#333';
    li[i].style.color = '#fff';
} */

//QuerySelector
/* var header = document.querySelector('#header-title');
header.style.backgroundColor = 'red';

var input = document.querySelector('input');
input.value = 'Hello World!';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.items');
item.style.color = 'red';

var lastItem = document.querySelector('.item:last-child');
lastItem.style.color = 'blue';

var SecondItem = document.querySelector('.item:nth-child(2)');
SecondItem.style.color = 'green'; */

//QuerySelectorAll
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#333';
}
