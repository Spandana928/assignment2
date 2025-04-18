const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
    res.redirect('/medical/dataset1');
  });
  
router.get('/:set', (req, res) => {
    const set = req.params.set || 'dataset1';
  const data = JSON.parse(fs.readFileSync(`./data/${set}.json`));
  res.render('medical', {
    title: 'Medical Report',
    heading: 'Medical & Travel Expense Request',
    page: '1 of 2',
    ...data
  });
});

module.exports = router;
