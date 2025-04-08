const bookService = require('../../services/books'); //Book data manager

// 1. GET ALL REVIEWS
const listBooks = (req, res) => {
  const books = bookService.getAll();
  
  res.render('index', { 
    books,
    pageTitle: 'All Book Reviews' 
  });
};

// 2. SHOW NEW REVIEW FORM
const newBookForm = (req, res) => {
  res.render('new', {
    pageTitle: 'Add New Review'
  });
};

// 3. CREATE NEW REVIEW
const createBook = (req, res) => {
  try {
    const newBook = bookService.create(req.body);
    
    res.redirect('/books');
  } catch (error) {
    console.error('Creation failed:', error);
    res.status(400).render('new', {
      error: 'Failed to create review. Please try again.',
      formData: req.body 
    });
  }
};

// 4. SHOW EDIT FORM
const editBookForm = (req, res) => {
  const book = bookService.getById(req.params.id);
  
  if (!book) {
    return res.status(404).render('error', {
      message: "This book review doesn't exist!"
    });
  }

  res.render('edit', {
    book,
    pageTitle: `Editing: ${book.title}`
  });
};

// 5. UPDATE REVIEW
const updateBook = (req, res) => {
  const { id } = req.params;
  
  try {
    const book = bookService.getById(id);
    
    if (!book) {
      return res.status(404).send('Book not found');
    }
    

    const updates = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      description: req.body.description,
      comment: req.body.comment,
      rating: parseFloat(req.body.rating),
      lastUpdated: new Date()
    };
    
    // Save changes
    bookService.update(id, updates);
    
    
    res.redirect('/books');
  } catch (error) {
    console.error('Update failed:', error);
    res.status(400).render('edit', {
      error: 'Failed to update. Please check your inputs.',
      book: req.body
    });
  }
};

// 6. DELETE REVIEW
const deleteBook = (req, res) => {
  try {
    const success = bookService.remove(req.params.id);
    
    if (!success) {
      return res.status(404).render('error', {
        message: "Couldn't find that review to delete"
      });
    }
    
    res.redirect('/books');
  } catch (error) {
    console.error('Deletion failed:', error);
    res.status(500).render('error', {
      message: "Something went wrong during deletion"
    });
  }
};

module.exports = {
  listBooks,
  newBookForm,
  createBook,
  editBookForm,
  updateBook,
  deleteBook
};