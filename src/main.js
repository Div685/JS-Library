const addBook = document.querySelector('.addbook');
const mainDiv = document.querySelector('.main-div');
const displayBook = document.querySelector('.display-book');
const displayBooks = document.querySelector('.display-books');
const submit = document.querySelector('.submit');
const bookName = document.getElementById('bookName');
const bookAuthor = document.getElementById("bookAuthor");
const pagesNumber = document.getElementById('pagesNumber')
const statusRead = document.getElementById('status');


function AddBook() {
  const name = bookName.value;
  const author = bookAuthor.value;
  const pages = pagesNumber.value;
  const status = statusRead.value;
  const book = new Book(name, author, pages, status); 
  myBooks.push(book);
  console.log(book)
}

const myBooks = [{
  name: "Game of Thrones", author: "Martin som", pages: 301, status: "finnished"
},
{name: "Game of Thrones2", author: "Martin som", pages: 301, status: "finnished"}
];

function Book(name, author, pages, status) {
  this.name = name;
  this.author =  author;
  this.pages = pages;
  this.status = status;
}


function toggleStatus(status){
  if(status.target.classList.contains('status')){
    if(status.target.textContent === 'Read'){
      status.target.textContent = 'Not Read'
    }else {
      status.target.textContent = 'Read'
    }
  }
}

addBook.addEventListener('click', () => {
  mainDiv.classList.add('show');
  displayBooks.classList.add('x')
});

function booksDispaly(){
  displayBook.innerHTML = ``;
  myBooks.forEach((a, b) => {
    const card = document.createElement('div');
    card.innerHTML = `
      ${a.name} 
      ${a.author}
      ${a.pages}
      ${a.status}
    `;
    displayBook.appendChild(card);
  });
}

submit.addEventListener('click', (b) => {
  AddBook();
})

booksDispaly();