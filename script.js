import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';
const input = document.querySelector("#input-field");
const btn = document.querySelector("#add-button");
const appSettings = {
  databaseURL: "https://mobile-app-b351e-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList")

function groceryItem(){
    let inputValue = input.value;
    console.log(inputValue);
    push(shoppingListInDB, inputValue)
}




btn.addEventListener('click', groceryItem);



