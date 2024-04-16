import { add } from "./asserts/functions.js"
const input = document.querySelector("#input-field");
const btn = document.querySelector("#add-button");
const appSettings = {
  databaseURL: 'https://playground-d53b3-default-rtdb.firebaseio.com/',
};

console.log(add(2,2))

function groceryItem(){
    let inputValue = input.value;
    console.log(inputValue);
}




btn.addEventListener('click', groceryItem)



