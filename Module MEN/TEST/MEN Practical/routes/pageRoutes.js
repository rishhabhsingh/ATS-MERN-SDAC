const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

const validateContact = ({ name, email, message }) => {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters');
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('Enter a valid email address');
  if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters');
  return errors;
};

const modes = [
  { base: '', folder: 'styled' },
  { base: '/plain', folder: 'unstyled' },
];

modes.forEach(({ base, folder }) => {
  router.get(base || '/', async (req, res, next) => {
    try {
      const books = await Book.find().sort({ createdAt: -1 });
      res.render(`${folder}/home`, { title: 'Home', books });
    } catch (err) { next(err); }
  });

  router.get(`${base}/about`, (req, res) =>
    res.render(`${folder}/about`, { title: 'About' }));

  router.get(`${base}/contact`, (req, res) =>
    res.render(`${folder}/contact`, { title: 'Contact', errors: [], success: null, form: {} }));

  router.post(`${base}/contact`, (req, res) => {
    const errors = validateContact(req.body);
    if (errors.length) {
      return res.status(400).render(`${folder}/contact`, {
        title: 'Contact', errors, success: null, form: req.body,
      });
    }
    res.render(`${folder}/contact`, {
      title: 'Contact', errors: [], form: {},
      success: `Thank you, ${req.body.name}! Your message has been received.`,
    });
  });
});

module.exports = router;