const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/books'); // Import controllers

// Route to list all reviews
router.get('/', bookController.listBooks);

// Route to show the "New Review" form
router.get('/new', bookController.newBookForm);

// Route to handle form submission for creating a review
router.post('/', bookController.createBook);

// Route to show the "Edit Review" form for a specific book by ID
router.get('/:id/edit', bookController.editBookForm);


// Route to handle form submission for updating a review by ID
router.post('/:id', bookController.updateBook);

// Route to delete a review by ID
router.delete('/:id', bookController.deleteBook); 


module.exports = router;
