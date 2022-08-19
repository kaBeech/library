const cardCatalogue = document.getElementById("cardCatalogue");
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

function showLibrary() {
    for (book in myLibrary) {
        createCard(book);
    }
}

function createCard(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createElement('h2');
    title.innerHTML = 'Title: ' + myLibrary[book].title;
    const author = document.createElement('h3');
    author.innerHTML = 'Author: ' + myLibrary[book].author;
    const pages = document.createElement('h3');
    pages.innerHTML = myLibrary[book].pages + ' Pages';
    const read = document.createElement('h3');
    read.innerHTML = 'Read = ' + myLibrary[book].read;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    cardCatalogue.appendChild(card);
}

const holes = new Book('Holes', 'Louis Sacher', '257', 'true');
addBookToLibrary(holes);

const autobioDH = new Book('Autobiography', 'Douglas Hofstadter', '1', 'true');
addBookToLibrary(autobioDH);

showLibrary();