const addBook = document.querySelector('.addbook');
const mainDiv = document.querySelector('.main-div');
const displayBook = document.querySelector('.display-book');
const displayBooks = document.querySelector('.display-books');
const submit = document.querySelector('.submit');
const bookName = document.getElementById('bookName');
const bookAuthor = document.getElementById("bookAuthor");
const pagesNumber = document.getElementById('pagesNumber')
const statusRead = document.getElementById('status');
const errorMessage = document.querySelector('.errormessage')

function getBook(){
  let books; 
  if(localStorage.getItem('books')=== null){
    books = [];
  }else{
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}

function AddBook() {
  const name = bookName.value;
  const author = bookAuthor.value;
  const pages = pagesNumber.value;
  const status = statusRead.value;
  const book = new Book(name, author, pages, status); 
  // myBooks.push(book);
  const mbooks = getBook();
  mbooks.push(book);
  localStorage.setItem('books', JSON.stringify(mbooks));
  // console.log(book)
}

// const mbooks = [{
//   name: "Game of Thrones", author: "Martin som", pages: 301, status: "finnished"
// },
// {name: "Game of Thrones2", author: "Martin som", pages: 301, status: "finnished"}
// ];

const mbooks = [];

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
  // displayBook.innerHTML = ``;
  const dBooks = getBook();
  dBooks.forEach((a, index) => {
    const card = document.createElement('div');
    card.innerHTML = `
    <a href="#" class="delete text-danger" onclick="deleteBook(${index})" >X</a>
      ${a.name} 
      ${a.author}
      ${a.pages}
      ${a.status}  
    `;
    displayBook.appendChild(card);
  });
}

submit.addEventListener('click', (b) => {
  b.preventDefault();
  if (bookName.value === '' || bookAuthor.value === '' || pagesNumber.value === '') {
    errorMessage.classList.add('show');
    setTimeout(() => errorMessage.classList.remove('show'),3000);
  } else {
    AddBook();
  } 
});


function deleteBook(index) {
  mbooks.splice(index, 1);
  booksDispaly();
}


// booksDispaly();
document.addEventListener('DOMContentLoaded', booksDispaly);

