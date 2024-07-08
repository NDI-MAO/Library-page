 function myFunction() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
x.style.display = "block";
} else {
     x.style.display = "none";}}document.addEventListener('DOMContentLoaded', function() {let x = document.getElementById("myDIV");
x.style.display = 'none';
}
);

const myLibrary = [];

function Book(title, author, pages, read){
this.title = title;
this.author = author;
this.pages = pages;
this.read= read;
}
function addBook(event) {

//form data
let title = document.getElementById('bName').value;
let author = document.getElementById('aName').value;
let pages = document.getElementById('bPages').value;
let read = document.getElementById('bRead').value;

//Table data
const nameRow = document.getElementById('nameRow');
const authorRow = document.getElementById('authorRow');
const pageRow = document.getElementById('pageRow');
const readRow = document.getElementById('readRow');

nameRow.innerHTML = title;
authorRow.innerHTML = author;
pageRow.innerHTML = pages;
readRow.innerHTML = read;
}