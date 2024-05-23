const myLibrary = [
    {
        name: "To Kill a Mockingbird",
        pages: 281,
        author: "Harper Lee",
        publicationDate: 1960
    },
    {
        name: "1984",
        pages: 328,
        author: "George Orwell",
        publicationDate: 1949
    },
    {
        name: "Pride and Prejudice",
        pages: 279,
        author: "Jane Austen",
        publicationDate: 1813
    },
    {
        name: "The Great Gatsby",
        pages: 180,
        author: "F. Scott Fitzgerald",
        publicationDate: 1925
    },
    {
        name: "Moby-Dick",
        pages: 635,
        author: "Herman Melville",
        publicationDate: 1851
    },
    {
        name: "War and Peace",
        pages: 1225,
        author: "Leo Tolstoy",
        publicationDate: 1869
    },
    {
        name: "The Catcher in the Rye",
        pages: 214,
        author: "J.D. Salinger",
        publicationDate: 1951
    },
    {
        name: "The Hobbit",
        pages: 310,
        author: "J.R.R. Tolkien",
        publicationDate: 1937
    }
];



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
    const bookToBeAdded = new Book(name,pages,author,pubdate);
    myLibrary.push(bookToBeAdded);
}


function newBook(){

}



function showBooks(){

    const booksDisplay = document.getElementsByClassName('books')[0];
    
    while (booksDisplay.childNodes.length > 2){
        booksDisplay.removeChild(booksDisplay.lastChild);
    }
    
    for(i=0;i<myLibrary.length;i++){
        const bookToBeAdded = document.createElement('p');
        bookToBeAdded.textContent = myLibrary[i].name;
        booksDisplay.appendChild(bookToBeAdded);
    }

}




