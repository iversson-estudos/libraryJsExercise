const myLibrary = [];

function Book(name, pages, author, publicationDate){
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.publicationDate = publicationDate;
}

function addBookToLibrary(){     
    const newBook = new Book('Terra Nova',153, 'Iversson',1887);
    myLibrary.push(newBook);
}

const showBooksButton = document.getElementById('showBooks');
showBooksButton.addEventListener('click',showBooks);


function showBooks(){

    const booksDisplay = document.getElementsByClassName('books')[0];

    for(i=0;i<myLibrary.length;i++){
        const bookToBeAdded = document.createElement('p');
        bookToBeAdded.textContent = 'myLibrary[i].name';
        booksDisplay.appendChild(bookToBeAdded);
    }
}




