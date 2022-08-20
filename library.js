const cardCatalogue = document.getElementById('cardCatalogue');
const newBookFieldset = document.getElementById('newBookFieldset');
const addNewBookButton = document.getElementById('addNewBookButton');
addNewBookButton.addEventListener('click', function() {showNewBookForm()});
const submitNewBookButton = document.getElementById('submitNewBookButton');
submitNewBookButton.addEventListener('click', function() {addNewBook()})

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

Book.prototype.toggleRead = function() {
    this.read = !this.read;
    showLibrary();
}

Book.prototype.removeFromLibrary = function() {
    myLibrary.splice(this.index, 1);
    showLibrary();
}

Book.prototype.addToLibrary = function() {
    myLibrary.push(this);
    showLibrary();
}

Book.prototype.createCard = function() {
    const that = this;
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createElement('h2');
    title.innerHTML = 'Title: ' + this.title;
    const author = document.createElement('h3');
    author.innerHTML = 'Author: ' + this.author;
    const pages = document.createElement('h3');
    pages.innerHTML = this.pages + ' Pages';
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove from Library';
    removeButton.addEventListener('click', function() {that.removeFromLibrary()})
    const read = document.createElement('button');
    if (this.read) {
        read.innerHTML = 'Read';
    } else {
        read.innerHTML = 'Unread'
    }
    read.addEventListener('click', function() {that.toggleRead()});
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeButton)
    cardCatalogue.appendChild(card);
}

function showLibrary() {
    while (cardCatalogue.hasChildNodes()) {
        cardCatalogue.removeChild(cardCatalogue.firstChild)
    }
    for (book in myLibrary) {
        myLibrary[book].createCard();
    }
}

function showNewBookForm() {
    newBookFieldset.hidden = false;
    addNewBookButton.hidden = true;
}

function addNewBook() {
    newBookFieldset.hidden = true;
    addNewBookButton.hidden = false;
}

const holes = new Book('Holes', 'Louis Sacher', '257', true);
holes.addToLibrary();

const autobioDH = new Book('Autobiography', 'Douglas Hofstadter', '1', true);
autobioDH.addToLibrary();

showLibrary();