 function myFunction() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
x.style.display = "block";
} else {
     x.style.display = "none";}}document.addEventListener('DOMContentLoaded', function() {let x = document.getElementById("myDIV");
x.style.display = 'none';
}
);
// function to add a book
const myLibrary = [];

function Book(title, author, pages, read){
this.title = title;
this.author = author;
this.pages = pages;
this.read= read;
}
function addBook(event) {
//event.preventDefault();  // Prevent form from submitting


//form data
let title = document.getElementById('bName').value;
let author = document.getElementById('aName').value;
let pages = document.getElementById('bPages').value;
let read = document.getElementById('bRead').value;

const newBook = new Book(title, author, pages, read);
//myLibrary.push(newBook);

//add row
const table = document.getElementById('content-table').getElementByTagName('tbody')[0];
const newRow = table.insertRow();

const nameCell = newRow.insertCell(0);
const authorCell = newRow.insertCell(1);
const pagesCell = newRow.insertCell(2);
const readCell = newRow.insertCell(3);

nameCell.innerHTML = title;
authorCell.innerHTML = author;
pagesCell.innerHTML = pages;
readCell.innerHTML = read;

document.getElementById('bName').value ="";
document.getElementById('aName').value ="";
document.getElementById('bPages').value = "";
document.getElementById('bRead').value = "";

/*Table data
const nameRow = document.getElementById('nameRow');
const authorRow = document.getElementById('authorRow');
const pageRow = document.getElementById('pageRow');
const readRow = document.getElementById('readRow');

nameRow.innerHTML = title;
authorRow.innerHTML = author;
pageRow.innerHTML = pages;
readRow.innerHTML = read;*/

}
//document.getElementById('bookForm').addEventListener('submit', addBook);
myLibrary.push(new Book(title, author, pages, read));