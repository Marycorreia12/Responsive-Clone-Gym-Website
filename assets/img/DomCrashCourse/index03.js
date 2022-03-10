var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
   //console.log('Button clicked');
   //document.getElementById('header-title').textContent = 'Changedp';
   //document.getElementById('header-title').innerHTML = 'Changed';
   /* document.querySelector('#items').style.backgroundColor = '#f4f4f4';

   console.log(e.target);
   console.log(e.target.id);

   var output = document.getElementsByClassName('nextSibling');
   output.innerHTML = '<h3>'+e.target.id+'</h3>';

   console.log(e.type); */
}

//Events

var button = document.getElementById('button').addEventListener('click', runEvent);

function runEvent(e){
    console.log('Event Type: '+e.type);
}

//Select event

var select = document.querySelector('select');
select.addEventListener('change', run);

function run(e){
    console.log('Event Type: '+e.type);
    console.log(e.target.value);
}