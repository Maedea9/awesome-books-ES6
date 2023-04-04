// Create a book Class
class Books {
  constructor() {
    this.books = [];
    // Call the HTML elements
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
    this.addButton = document.getElementById('submit');
    this.bookList = document.getElementById('bookList');

    this.displayBooks();

    /* add an event listener to call the addbutton function and display the list of books */
    this.addButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.addBooks();
      this.displayBooks();
    });

    /* add an event listener to call the removebutton function and remove the list of books */
    this.bookList.addEventListener('click', (event) => {
      if (event.target.classList.contains('removeBtn')) {
        const { bookIndex } = event.target.dataset;
        this.removeBook(bookIndex);
      }
    });
  }

  /* Create Methods for the Book Class */
  // display books. Create li and remove button elements
  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.classList.add('book-infocss');
      li.innerHTML = `<p>"${book.title}" by ${book.author}</p>`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('removeBtn');
      removeBtn.setAttribute('book-index', index);
      li.appendChild(removeBtn);
      this.bookList.appendChild(li);
    });
  }

  // add book
  addBooks() {
    if (this.title.value !== '' && this.author.value !== '') {
      const title = this.title.value;
      const author = this.author.value;

      this.books.push({ title, author });
      // save book to localstorage separatedly
      localStorage.setItem('createdBooks', JSON.stringify(this.books));
      this.title.value = ' ';
      this.author.value = ' ';
    }
  }

  // remove book method
  removeBook(bookIndex) {
    this.books.splice(bookIndex, 1);
    localStorage.setItem('createdBooks', JSON.stringify(this.books));
    this.displayBooks();
  }
}

export default Books;