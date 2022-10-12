// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI 
function UI() {

}

// event listners
document.getElementById('book-form').addEventListener('submit', 
    function(e) {
        // get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value
        console.log(title, author, isbn);    
        e.preventDefault();
    });