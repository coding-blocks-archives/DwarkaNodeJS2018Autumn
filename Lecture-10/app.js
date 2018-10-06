window.onload = function(){
// DOM has complately loaded
 let input = document.getElementById('inp');
 let button = document.getElementById('btn');
 let list = document.getElementById('list');

 // Initialising the HTML elements from DOM

 let value = '';
 let li = '';
 let text = '';
 let delet = '';
 let buttonText = '';
 let count = 0;
 let updateInput = '';
 let span = '';

 var deleteEntry = function() {
 	  let parent = list; // ul
 	  let child = this.parentNode; //li => The parent of button which is clicked
      parent.removeChild(child);

 }

 var updateEntry = function() {
 	console.log(this.previousSibling)
 	let value = this.previousSibling.value; // input box value
 	let nodetoUpdate = this.previousSibling.previousSibling.previousSibling; // span

 	nodetoUpdate.innerHTML = value;
    nodetoUpdate.style.display = 'inline';

 	this.previousSibling.setAttribute('type', 'hidden');

 }

 var showInput = function() {
   let next = this.nextSibling.nextSibling;
   next.setAttribute('type', 'text');
   this.style.display = 'none';

 }

 var createNode = function(value) {
 	li = document.createElement('li');
 	span = document.createElement('span');

 	text = document.createTextNode(value);

 	// Update Button
 	updateInput = document.createElement('input');
 	updateInput.setAttribute('type', 'hidden');
 	updateBtn = document.createElement('button');
 	updatebuttonText = document.createTextNode('update');
    

 	delet = document.createElement('button');
 	buttonText = document.createTextNode('delete');
    delet.addEventListener('click', deleteEntry);
    updateBtn.addEventListener('click', updateEntry);
    span.addEventListener('click', showInput);
 }


 var appendNode = function() {
 	span.appendChild(text);
    li.appendChild(span);
 	li.appendChild(delet);
 	updateBtn.appendChild(updatebuttonText);
 	li.appendChild(updateInput);
 	li.appendChild(updateBtn);

 	list.appendChild(li);
 	delet.appendChild(buttonText);
 	
 }

 // When the button is clicked => Get the input value => 
 button.onclick = function() {
 	console.log('Fired Button')
 	value = input.value;
 	createNode(value);
 	appendNode();
 }

}