// initialize the count as 0
//listen for the clicks on the  increment button
//increment the counr variable when the button is clicked (log it out)
//change the count-el in the html to reflect the new count

let countEl = document.getElementById("count-el"); 
let saveEl = document.getElementById("save-el");



let count = 0;
function increment(){
	count += 1;
	countEl.textContent = count
}
//grab the save-el paragraph and store it in a variable called saveEl
// 2. create the variable that contains both the count and the dash separator
// 3. render the variable in the saveEl using innerText
// nb: make sure to not delete the existing content of the paragraph

function save(){
	let separator = count + " - ";
	saveEl.textContent += separator;
	countEl.textContent = 0;
	count = 0;
}