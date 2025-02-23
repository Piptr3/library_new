const myLibrary = [];

const addBookBtn = document.getElementById('addBtn');
const dialog = document.getElementById('dialog');
const shelf = document.getElementById('shelf');
const form = document.querySelector('form');

function Book(title, author, wordCount, read) {
    this.title = title;
    this.author = author;
    this.wordCount = wordCount;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.wordCount} words, ${this.read ? 'read' : 'not read yet'}`;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('title1', 'author1', 1, true);
const book2 = new Book('title2', 'author2', 2, false);
const book3 = new Book('title3', 'author3', 3, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function displayBooks() {
    shelf.innerHTML = "";
    myLibrary.forEach((book) => {
        const newBook = document.createElement('div');
        newBook.textContent = book.info();
        newBook.classList.add('book');
        shelf.appendChild(newBook);
    });
}

displayBooks();


addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const wordCount = document.getElementById('wordCount').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, wordCount, read);
    addBookToLibrary(newBook);

    displayBooks();

    form.reset();
    dialog.close();
});

const cancelBtn = document.getElementById('cancel');

cancelBtn.addEventListener('click', () => {
    dialog.close(); 
});
