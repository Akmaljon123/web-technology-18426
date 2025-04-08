let nextID = 0;

class Book {
    constructor({title, author, genre, description, comment, rating}) {
        this.id = nextID++;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.description = description || ""; // Default empty string if undefined
        this.comment = comment;
        this.rating = parseFloat(rating);
        this.reviewDate = new Date(); // Fixed: removed .now()
    }
}

module.exports = Book;