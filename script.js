import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove
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
  let dataArray = Object.entries(snapshot.val());

  clearShoppingList();

  for (let i = 0; i < dataArray.length; i++) {
    let currentItem = dataArray[i]
    let currentItemID = currentItem[0];
    let currentItemValue = currentItem[1];

    appendItem(currentItem);
  }
});

function clearShoppingList() {
  list.innerHTML = '';
}

function clearInput() {
  input.value = '';
}

function appendItem(item) {
let itemID = item[0];
let itemValue = item[1]
let li = document.createElement('li');
li.textContent = itemValue
list.append(li)

li.addEventListener("dblclick", function(){
let removeItem = ref(database, `shoppingList/${itemID}`)
    remove(removeItem)
})
}

btn.addEventListener('click', groceryItem);
