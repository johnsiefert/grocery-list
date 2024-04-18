import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';
const appSettings = {
  databaseURL: 'https://mobile-app-b351e-default-rtdb.firebaseio.com/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'shoppingList');

const input = document.querySelector('#input-field');
const btn = document.querySelector('#add-button');
const list = document.querySelector('#shopping-list');

function groceryItem() {
  let inputValue = input.value;

  push(shoppingListInDB, inputValue);

  clearInput();

}

onValue(shoppingListInDB, function (snapshot) {
  let dataArray = Object.values(snapshot.val());

  clearShoppingList()

for(let i =0; i < dataArray.length; i++){
    appendItem(dataArray[i])
}

});

function clearShoppingList(){
      list.innerHTML = '';

}

function clearInput() {
  input.value = '';
}

function appendItem(itemValue) {
  list.innerHTML += `<li>${itemValue}</li>`;
}

btn.addEventListener('click', groceryItem);
