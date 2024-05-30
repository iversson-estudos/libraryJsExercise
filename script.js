
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



function Book(name, pages, author, publicationDate){
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.publicationDate = publicationDate;
    this.read = 0;
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

const emojiPositive = "✅";
const emojiNegative = "❌";


function formatsTableReadStatus (){
    library.forEach(book=> {
        
        if(book.hasBeenRead == true || book.hasBeenRead == emojiPositive)
                {book.hasBeenRead= emojiPositive;}        
        
        else    {book.hasBeenRead = emojiNegative;}
    })
}

function deleteBook(button) {
    const bookCell = button.parentElement;
    const rowCell = bookCell.parentElement;
    rowCell.remove();
}


function showModal(button){
    const pai = button.parentElement;
    const dialog = pai.querySelector('dialog');
    dialog.showModal();
}

