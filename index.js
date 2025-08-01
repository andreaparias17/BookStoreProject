
const booksForm = document.querySelector('#book-form');
const booksTable = document.querySelector('#books-container');
const booksApiUrl = 'https://bookstore-api-six.vercel.app/api/books?amount=5';

// alert sucess and error message functions
const SuccessMessage = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: message,
    timer: 2000,
    showConfirmButton: false,
    position: 'top-end',
    toast: true
  });
};

const ErrorMessage = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
    timer: 2500,
    showConfirmButton: false,
    position: 'top-end',
    toast: true
  });
};

// Fetch and display books 
const getBooks = async () => {
  try {
    const response = await fetch(booksApiUrl);
    const books = await response.json();
    booksTable.innerHTML = '';
    books.forEach(book => addBookToTable(book));
  } catch (err) {
    console.error('Error loading books:', err);
    ErrorMessage('Failed to load books.');
  }
};

// Add book to DOM
const addBookToTable = (book) => {
  const bookRow = document.createElement('section');
  bookRow.className = 'book-card';
  bookRow.setAttribute('data-id', book.id); 

  bookRow.innerHTML = `
    <section class="book-title">${book.title}</section>
    <section class="book-author">${book.author}</section>
    <section class="book-publisher">${book.publisher || 'Unknown'}</section>
    <button class="delete-button">Delete</button>
  `;
  booksTable.appendChild(bookRow);
};

// Add new book via form
booksForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const publisher = document.getElementById('publisher')?.value.trim() || 'Unknown';

  if (!title || !author) {
    return ErrorMessage('Title and author are required.');
  }

  try {
    const response = await fetch(booksApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, publisher }),
    });
    const data = await response.json();
    addBookToTable(data);
    booksForm.reset();
    SuccessMessage('Book added successfully!');
  } catch (err) {
    console.error('Error adding book:', err);
    ErrorMessage('Failed to add book.');
  }
});

// Delete book from UI and server using data-id
booksTable.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete-button')) {
    const bookRow = event.target.closest('section');
    const id = bookRow.getAttribute('data-id');
    try {
      await fetch(`${booksApiUrl}/${id}`, { method: 'DELETE' });
      bookRow.remove();
      
    } catch (err) {
      console.error('Error deleting book:', err);
      ErrorMessage('Error deleting book.');
    }
  }
});


getBooks();
