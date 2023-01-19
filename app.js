// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery-item');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem);
// ****** FUNCTIONS **********
function addItem (e) {
     e.preventDefault();
     const value = grocery.value; // value = to whatever is typed in the form
     const id = Math.random().toString();

     if (value && !editFlag) {
        const element = document.createElement('article'); //create element
        element.classList.add('grocery-item'); //add class to element

        // let attr = document.createAttribute("data-id"); //add attribute to element
        // attr.value = id; //define attribute (= to our random number value)
        // element.setAttributeNode(attr); //set attribute

        element.setAttribute('data-id', id);

        element.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>`;
        // console.log(element);

        list.appendChild(element); //append child (add to list)

        displayAlert("item added", "success"); //show success alert after added item

        container.classList.add("show-container"); //show list once item has been added
        // console.log(container.classList);
        
     } else if (value && editFlag) {

     } else {
        displayAlert("Enter value", "danger");
     }
};
//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 3000);
};
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
