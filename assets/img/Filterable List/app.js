let filterInput = document.getElementById('filterInput');
let ul = document.getElementById('names');
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    //Get value of input
    let filterValue = filterInput.value.toUpperCase();

    //Get items from ul
    let li = ul.querySelectorAll('li.collection-item');

    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
}
