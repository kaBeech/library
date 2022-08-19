const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return this.title + ' by ' + this.author + ', ' + 
    this.pages + ' pages, ' + this.read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const holes = new Book('Holes', 'Louis Sacher', '257', 'read');