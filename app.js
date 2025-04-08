const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const app = express();

const booksRouter = require('./routes/books'); 

// View engine setup
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('_method')); 
app.use(express.static('public')); 

// Routes
app.use('/books', booksRouter); 
app.get('/', (req, res) => res.redirect('/books')); 

// Error handler
app.use((err, req, res, next) => res.status(500).send('Server error')); 

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));