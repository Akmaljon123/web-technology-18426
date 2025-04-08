
let books = []; 

const generateId = () => '_' + Math.random().toString(36).substr(2, 9); 

const getAll = () => [...books]; 

const getById = (id) => books.find(book => book.id === id) || null; 

const create = (bookData) => {
  const newBook = { id: generateId(), reviewDate: new Date(), ...bookData }; 
  books.push(newBook);
  return newBook;
};

const update = (id, updatedData) => {
  const index = books.findIndex(book => book.id === id); 
  if (index === -1) return null; 
  books[index] = { ...books[index], ...updatedData, lastUpdated: new Date() };
  return books[index];
};

const remove = (id) => {
  const index = books.findIndex(book => book.id === id); 
  if (index === -1) return false; 
  books.splice(index, 1); 
  return true;
};

module.exports = { getAll, getById, create, update, remove };