const myLibrary = [];


const showBooksButton = document.getElementById('showBooks');
showBooksButton.addEventListener('click',showBooks);

const newBookButton = document.getElementById('newBook');
newBookButton.addEventListener('click',newBook);

function Book(name, pages, author, publicationDate){
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.publicationDate = publicationDate;
}

function addBookToLibrary(name,pages,author,pubdate){     
    const newBook = new Book(name,pages,author,pubdate);
    myLibrary.push(newBook);
}


function newBook(){

    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const inputPages = document.createElement('input');
    const inputAuthor = document.createElement('input');
    const inputPubDate = document.createElement('input');
    const labelName = document.createElement('label');
    const labelPages = document.createElement('label');
    const labelAuthor = document.createElement('label');
    const labelPubDate = document.createElement('label');
    
    labelName.textContent = "Whats the books name?";
    labelAuthor.textContent = "Who is the author of the book?";
    labelPages.textContent = "How many pages does the book have?";
    labelPubDate.textContent = "In which year was the book publicated?";
    
    form.appendChild(labelAuthor);
    form.appendChild(inputAuthor);
    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(labelPages)
    form.appendChild(inputPages);  
    form.appendChild(labelPubDate);  
    form.appendChild(inputPubDate);
        
    document.body.appendChild(form);
}



function showBooks(){

    const booksDisplay = document.getElementsByClassName('books')[0];

    for(i=0;i<myLibrary.length;i++){
        const bookToBeAdded = document.createElement('p');
        bookToBeAdded.textContent = 'myLibrary[i].name';
        booksDisplay.appendChild(bookToBeAdded);
    }
}




