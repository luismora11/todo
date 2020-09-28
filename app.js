// SELECT ITEMS
const alert = document.querySelector('.alert');
const form = document.querySelector('.todo-form');
const todo = document.getElementById('todo');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.todo-container');
const list = document.querySelector('.todo-list');
const clearBtn= document.querySelector('.clear-btn');

// edit

let editElement;
let editFlag = false;
let editID = "";

// Event Listeners

form.addEventListener('submit', addItem)

//clear items

clearBtn.addEventListener('click', clearItems);







// Functions

function addItem(e){
    e.preventDefault();
    const value = todo.value
    const id = new Date().getTime().toString();
    if(value !== '' && editFlag === false){
        const element = document.createElement('article');
        // add a class
        element.classList.add('todo-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = ` <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">Edit</button>
            <button type="button" class="delete-btn">Delete</button>
 </div>`;
const deleteBtn = element.querySelector('.delete-btn');
const editBtn = element.querySelector('.edit-btn');
deleteBtn.addEventListener('click', deleteItem);
editBtn.addEventListener('click', editItem);
        // APPEND CHILD
        list.appendChild(element);
        // DISPLAY ALERT
        displayAlert("Item added to the list", "success");
        // Show Container
        container.classList.add("show-container");
        // add to local storage
        addToLocalStorage(id, value);
        // set back to deafault
        setBackToDefault();


    }else if(value !== '' && editFlag === true){
        console.log('editing')
    }else{
        displayAlert("Please enter value", "danger");
    }
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    
    // REMOVE ALERT
    setTimeout(function(){
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
    }, 2000);
}

// set back to default

function setBackToDefault(){
   todo.value = "";
   editFlag = false;
   editID ="";
   submitBtn.textContent = "submit";
}

// clear items

function clearItems(){
    const items = document.querySelectorAll(".todo-item");

    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        }); 
    }
container.classList.remove("show-container");
displayAlert("Items Removed", "danger");
setBackToDefault();
//localStorage.removeItem('list')
}

// delete item function
function deleteItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   list.removeChild(element);

   if(list.children.length ===0){
      container.classList.remove("show-container");
   }
  
}

// edit item function
function editItem(){
    console.log("edit item");
}







// LOCAL STORAGE
function addToLocalStorage(id, value){
    console.log("added to local storage");
}