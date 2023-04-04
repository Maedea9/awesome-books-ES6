import Books from './modules/booksclass.js';
/*import { DateTime } from '../node_modules/luxon/src/luxon.js';

const currentDate = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('datetime').innerHTML = date;
};*/
// navbar functionality
const navlist = document.querySelector('.navList');
const navadd = document.querySelector('.navAdd');
const navcont = document.querySelector('.navCont');
const listPage = document.querySelector('.list');
const newBookPage = document.querySelector('.form-container');
const contactPage = document.querySelector('.contact-info');

navlist.addEventListener('click', () => {
  listPage.classList.remove('hide');
  newBookPage.classList.add('hide');
  contactPage.classList.add('hide');
});

navadd.addEventListener('click', () => {
  listPage.classList.add('hide');
  newBookPage.classList.remove('hide');
  contactPage.classList.add('hide');
});

navcont.addEventListener('click', () => {
  listPage.classList.add('hide');
  newBookPage.classList.add('hide');
  contactPage.classList.remove('hide');
});
// Creating a instance of Books
const awesomeBooks = new Books();

// Checking Local Storage
if (localStorage.getItem('createdBooks')) {
  awesomeBooks.books = JSON.parse(localStorage.getItem('createdBooks'));
  awesomeBooks.displayBooks();
}
/*document.addEventListener('DOMContentLoaded', currentDate());*/