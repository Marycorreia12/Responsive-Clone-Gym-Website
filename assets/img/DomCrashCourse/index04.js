var form = document.getElementById('my-form');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

//Add Items
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('name').value;

    //Create new li element
    var li = document.createElement('li');
    li.className = 'item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create new delete icon
    var deletebtn = document.createElement('i');

    //Add classes to del  button
    deletebtn.className = 'fa-solid fa-trash-can delete';
    
    //Append button to li
    li.appendChild(deletebtn);

    //Append li to list
    itemList.appendChild(li);
}

//Remove Items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter Items
function filterItem(e){
    var text = e.target.value.toLowerCase();

    //Convert text to lowercase
    var items = itemList.getElementsByTagName('li');

    //Convert to an Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })

}