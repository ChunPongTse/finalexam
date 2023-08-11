const router = require('express').Router();
let Bookmodel = require('../models/bookModel.js');

router.route('/').get((req, res) => {
  Bookmodel.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Bookmodel.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/').post(async (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;

  const newBook = await new Bookmodel({
    title,
    author,
    description
  });

  console.log(newBook);
  newBook
    .save()
    .then(() => res.json('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').post(async (req, res) => {
  console.log(req.params.id);
await  Bookmodel.findById(req.params.id)
    .then((bookforedit) => {
      bookforedit.title = req.body.title;
      bookforedit.author = req.body.author;
      bookforedit.description = req.body.description;

      bookforedit
        .save()
        .then(() => res.json('Book updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete(async (req, res) => {
  console.log('delete logged');
await Bookmodel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
