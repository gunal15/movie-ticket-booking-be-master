const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');


router.post('/', async (req, res) => {
    try {
      const newMovie = new Movie(req.body);
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  
  module.exports = router;
