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
            <td><a href="#" class="delete">X<a></td>
        `
        list.appendChild(row);
    }

    // show alert
    UI.prototype.showAlert = function(message, className) {
        // create div
        const div = document.createElement('div');
        // add class
        div.className = `alert ${className}`;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.container');
        // get form
        const form = document.querySelector('#book-form');
        // insert alert
        container.insertBefore(div, form);

        // time out after 3 sec
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // clear field
    UI.prototype.clearFields = function() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
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

        // validate inputs
        if(title === '' || author === '' || isbn === '') {
            // error alert
            ui.showAlert('Please fill in all fields', 'error');
        } else {
            // add book to list
            ui.addBookToList(book);

            // show sucess
            ui.showAlert('Book Added !', 'success');

            // clear input field after adding 
            ui.clearFields();
        }
 
        e.preventDefault();
    });