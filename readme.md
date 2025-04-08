# 📚 Book Review Application

A web application for managing and reviewing books, built with Node.js, Express, and Pug templating engine.

## 🌟 Features
- View all book reviews
- Add new book reviews
- Edit existing reviews
- Delete reviews
- Responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Akmaljon123/web-technology-18426.git
   cd your-repo
2. "npm install" Install dependencies
    "npm start" Start the application
    http://localhost:8080 Open your browser and visit

### 📦 Dependencies  
- **Backend**:  
  - `express@^4.18.2`  
  - `pug@^3.0.3`  
  - `method-override@^3.0.0`  
- **Frontend**:  
  - Vanilla CSS/HTML  
    
## 🔗 Links

Github: https://github.com/Akmaljon123/web-technology-18426
Render: https://web-technology-18426.onrender.com


## Project Structure

In my project, MVC (Model View Controller) architecture is used, this architecture is mainly used for Small-to-medium web apps

book-review-app/
├── controllers/
│   └── books/
│       └── index.js
├── public/
│   ├── images/
│   ├── javascripts/
│   └── styles/
│       └── style.css
├── routes/
│   └── books/
│       └── index.js
├── services/
│   └── books/
│       └── index.js
├── views/
│   ├── edit.pug
│   ├── index.pug
│   ├── layout.pug
│   └── new.pug
├── .gitignore
├── app.js
├── package.json
└── package-lock.json