module.exports = (err, req, res, next) => {
  console.error(err); // full details stay in the server log only

  let status = err.status || 500;
  let message = 'Something went wrong on our side. Please try again later.';
  let errors;

  if (err.name === 'ValidationError') {
    status = 400;
    message = 'Validation failed';
    errors = Object.values(err.errors).map((e) => e.message);
  } else if (err.code === 11000) {
    status = 409;
    message = 'A book with this ISBN already exists';
  } else if (err.name === 'CastError') {
    status = 400;
    message = 'Invalid ID format';
  } else if (status < 500) {
    message = err.message; // safe: 404, malformed JSON, etc.
  }

  if (req.originalUrl.startsWith('/api')) {
    return res.status(status).json({ success: false, message, errors });
  }

  const folder = req.originalUrl.startsWith('/plain') ? 'unstyled' : 'styled';
  res.status(status).render(`${folder}/error`, { title: 'Error', status, message });
};