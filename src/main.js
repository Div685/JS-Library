const addBook = document.querySelector('.addbook');
const mainDiv = document.querySelector('.main-div')



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

addBook.addEventListener('click', () => {
  mainDiv.classList.add('show');
});
