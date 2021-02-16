const addBook = document.querySelector('.addbook');
const mainDiv = document.querySelector('.main-div');
const displayBook = document.querySelector('.display-book');
const displayBooks = document.querySelector('.display-books');


function Book() {
  const name = bookName.value;
  const author = bookAuthor.value;
  const pages = pagesNumber.value;
  const status = readStatus.value;
  const book = new Books(name, author, pages, status); 
}

const myBooks = [{
  name: "Game of Thrones", author: "Martin som", pages: 301, status: "finnished"
}];

function Books(name, author, pages, status) {
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

booksDispaly();