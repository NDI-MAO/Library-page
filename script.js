// script.js

// Function to toggle the visibility of the form
function myFunction() {
     let x = document.getElementById("myDIV");
     if (x.style.display === "none" || x.style.display === "") {
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
 }
 
 // Hide the form initially
 document.addEventListener('DOMContentLoaded', function() {
     let x = document.getElementById("myDIV");
     x.style.display = 'none';
 });
 
 // Book class
 class Book {
     constructor(title, author, pages, read) {
         this.title = title;
         this.author = author;
         this.pages = pages;
         this.read = read;
     }
 }
 
 // Array to store books
 const myLibrary = [];
 
 // Function to add a book
 function addBook(event) {
     event.preventDefault();  // Prevent form from submitting
 
     // Get form data
     let title = document.getElementById('bName').value;
     let author = document.getElementById('aName').value;
     let pages = document.getElementById('bPages').value;
     let read = document.getElementById('bRead').value;
 
     // Create a new book object and add to the library
     const newBook = new Book(title, author, pages, read);
     myLibrary.push(newBook);
 
     // Add row to table
     const table = document.getElementById('content-table').getElementsByTagName('tbody')[0];
     const newRow = table.insertRow();
 
     const nameCell = newRow.insertCell(0);
     const authorCell = newRow.insertCell(1);
     const pagesCell = newRow.insertCell(2);
     const readCell = newRow.insertCell(3);
     const deleteCell = newRow.insertCell(4);
 
     nameCell.innerHTML = title;
     authorCell.innerHTML = author;
     pagesCell.innerHTML = pages;
     readCell.innerHTML = read;
     deleteCell.innerHTML = '<button onclick="deleteRow(this)">×</button>';
 
     // Clear form
     document.getElementById('bName').value = "";
     document.getElementById('aName').value = "";
     document.getElementById('bPages').value = "";
     document.getElementById('bRead').value = "";
 }
 
 // Function to delete a row
 function deleteRow(button) {
     const row = button.parentElement.parentElement;
     row.remove();
 }
 