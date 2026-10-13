module.exports = (req, res, next) => {
  const err = new Error('The page or resource you requested was not found.');
  err.status = 404;
  next(err);
};