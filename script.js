function myFunction() {
     let x = document.getElementById("myDIV");
     if (x.style.display === "none" || x.style.display === "") {
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
 }
 document.addEventListener('DOMContentLoaded', function() {
     let x = document.getElementById("myDIV");
     x.style.display = 'none';
 });

 class Book {
    constructor(title, author, pages, read) {
         this.title = title;
         this.author = author;
         this.pages = pages;
         this.read = read;
    }
 }

 const myLibrary = [];

 function addBook(event) {
     event.preventDefault();  
     let title = document.getElementById('bName').value;
     let author = document.getElementById('aName').value;
     let pages = document.getElementById('bPages').value;
     let read = document.getElementById('bRead').value === 'yes'?'Read':'Not Read';
 
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
     //readCell.innerHTML = read;
     readCell.innerHTML= `<button onclick="readOrNot(this)">${read}</button>`;
     deleteCell.innerHTML = '<button onclick="deleteRow(this)">×</button>';
 
     // Clear forms
     document.getElementById('bName').value = "";
     document.getElementById('aName').value = "";
     document.getElementById('bPages').value = "";
     document.getElementById('bRead').value = "";
 }
     //Function to swap read and not read
     function readOrNot(button){
        const bookStatus = button.textContent;
        if(bookStatus ==='Read'){
        button.textContent='Not Read';
        }else{
            button.textContent ='Read';
        }

     }
 
 // Function to delete a row
 function deleteRow(button) {
     const row = button.parentElement.parentElement;
     row.remove();
 }
