// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI 
function UI() {
    UI.prototype.addBookToList = function(book) {
        const list = document.getElementById('book-list');

        // create tr element
        const row = document.createElement('tr');

        // insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete>X</td>
        `
        list.appendChild(row);
    }
}

// event listners
document.getElementById('book-form').addEventListener('submit', 
    function(e) {
        // get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value    

        // instantiate book
        const book = new Book(title, author, isbn);

        // instantiate UI
        const ui = new UI();

        // add book to list
        ui.addBookToList(book);

        e.preventDefault();
    });