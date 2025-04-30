function generateShape() {
const input = document.getElementById("numberInput").value.trim();
const outputDiv = document.getElementById("shapeOutput");
outputDiv.innerHTML = "";

if (isNaN(input) || input === "") {
 alert("Please enter a valid number.");
 return;
}

const num = parseInt(input);
let output = "<p>Number inputted: " + num + "</p>";

if (num % 2 !== 0) {

 for (let i = num; i >= 1; i--) {
   let row = "";
   for (let j = 0; j < num; j++) {
     row += i + " ";
   }
   output += row.trim() + "<br>";
 }
} else {

 for (let i = num; i >= 1; i--) {
   let row = "";
   for (let j = 0; j < i; j++) {
     row += i + " ";
   }
   output += row.trim() + "<br>";
 }
}

outputDiv.innerHTML = output;
}

 const contacts = [];

 function addContact() {
   const input = document.getElementById("nameInput").value.trim();
   if (input === "") return;

   if (contacts.length >= 7) {
     contacts.shift();
   }

   contacts.push(input);
   document.getElementById("nameInput").value = "";
   updateContacts();
 }

 function removeContact() {
   contacts.pop();
   updateContacts();
 }

 function updateContacts() {
   document.getElementById("contactsOutput").textContent = contacts.join(", ");
 }