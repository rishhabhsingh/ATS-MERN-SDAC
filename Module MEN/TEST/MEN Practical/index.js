require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const bookRoutes = require('./routes/bookRoutes');
const pageRoutes = require('./routes/pageRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());                          // JSON bodies
app.use(express.urlencoded({ extended: true }));  // form bodies
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/books', bookRoutes);
app.use('/', pageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });