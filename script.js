


const library = [
    {
        name: "To Kill a Mockingbird",
        pages: 281,
        author: "Harper Lee",
        publicationDate: 1960,
        hasBeenRead: true
    },
    {
        name: "1984",
        pages: 328,
        author: "George Orwell",
        publicationDate: 1949,
        hasBeenRead: true
    },
    {
        name: "Pride and Prejudice",
        pages: 279,
        author: "Jane Austen",
        publicationDate: 1813,
        hasBeenRead: true
    },
    {
        name: "The Great Gatsby",
        pages: 180,
        author: "F. Scott Fitzgerald",
        publicationDate: 1925,
        hasBeenRead: true
    },
    {
        name: "Moby-Dick",
        pages: 635,
        author: "Herman Melville",
        publicationDate: 1851,
        hasBeenRead: false
    },
    {
        name: "War and Peace",
        pages: 1225,
        author: "Leo Tolstoy",
        publicationDate: 1869,
        hasBeenRead: false
    },
    {
        name: "The Catcher in the Rye",
        pages: 214,
        author: "J.D. Salinger",
        publicationDate: 1951,
        hasBeenRead: true
    },
    {
        name: "The Hobbit",
        pages: 310,
        author: "J.R.R. Tolkien",
        publicationDate: 1937,
        hasBeenRead: true
    },
    {
        name: "Brave New World",
        pages: 268,
        author: "Aldous Huxley",
        publicationDate: 1932,
        hasBeenRead: false
    },
    {
        name: "The Lord of the Rings",
        pages: 1216,
        author: "J.R.R. Tolkien",
        publicationDate: 1954,
        hasBeenRead: true
    },
    {
        name: "Crime and Punishment",
        pages: 671,
        author: "Fyodor Dostoevsky",
        publicationDate: 1866,
        hasBeenRead: false
    },
    {
        name: "The Catch-22",
        pages: 453,
        author: "Joseph Heller",
        publicationDate: 1961,
        hasBeenRead: true
    },
    {
        name: "The Grapes of Wrath",
        pages: 464,
        author: "John Steinbeck",
        publicationDate: 1939,
        hasBeenRead: false
    },
    {
        name: "The Chronicles of Narnia",
        pages: 767,
        author: "C.S. Lewis",
        publicationDate: 1956,
        hasBeenRead: true
    },
    {
        name: "Ulysses",
        pages: 730,
        author: "James Joyce",
        publicationDate: 1922,
        hasBeenRead: false
    },
    {
        name: "Jane Eyre",
        pages: 500,
        author: "Charlotte Brontë",
        publicationDate: 1847,
        hasBeenRead: true
    }
];



function Book(name, pages, author, publicationDate,readed){

    this.name = name;
    this.pages = pages;
    this.author = author;
    this.publicationDate = publicationDate;
    this.hasBeenRead = readed;
}



function showBooks(){

    const bookTableBody = document.getElementById('bookTableBody');
    bookTableBody.innerHTML='';
    formatsTableReadStatus();

    library.forEach(book => {
        const row = document.createElement('tr');
        const deleteBtnHtml = document.createElement('td');
        deleteBtnHtml.innerHTML= '<button class="deleteBtn" onclick="deleteBook(this)"><span class="material-symbols-outlined">delete</span></button>';
        
        Object.values(book).forEach( value => {
            const data = document.createElement('td');
            data.innerHTML = value;
            row.appendChild(data);
        })

        row.appendChild(deleteBtnHtml);
        bookTableBody.appendChild(row);
    });
}



function formatsTableReadStatus (){
    const emojiPositive = "✅";
    const emojiNegative = "❌";

    library.forEach(book=> {
        
        if(book.hasBeenRead == true || book.hasBeenRead == emojiPositive)
                {book.hasBeenRead= emojiPositive;}        
        
        else    {book.hasBeenRead = emojiNegative;}
    })
}

function deleteBook(button) {
    const bookCell = button.parentElement;
    const rowCell = bookCell.parentElement;
    const book = rowCell.getElementsByTagName('td');
    const bookName = book[0].textContent;


    for(i=0 ; i<library.length;i++){

        if(library[i].name == bookName){
            library.splice(i,1);
        }
    }
    showBooks();
}



function openBookForm(){
    const dialog = document.querySelector('dialog');
    dialog.showModal();
}

function addBook(event){
    event.preventDefault();
    const dialog = document.querySelector('dialog');
    
    const form = document.getElementById('addBookForm');
    const inputs = form.querySelectorAll('input');
    
    //GETS DATA FROM BOOK FORM
    const name = inputs[0].value;
    const pages = inputs[1].value;
    const author = inputs[2].value;
    const pubDate = inputs[3].value;
    const readed = inputs[4].checked;

    

    // Validation checks for name, pages, and author
    if (isInvalid(name)) {
        alert("Name is invalid.");
        return;
    }

    if (isInvalid(pages)) {
        alert("Pages are invalid.");
        return;
    }

    if (isInvalid(author)) {
        alert("Author is invalid.");
        return;
    }





    //CREATES NEW BOOK
    library.push(new Book(name,pages,author,pubDate,readed));
    form.reset(); 
    dialog.close();
    showBooks();
}

function isInvalid(value) {
    return value === null || value === undefined || value === '';
}