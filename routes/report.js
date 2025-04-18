const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    res.redirect('/medical/dataset1');
  });
  
router.get('/:set', (req, res) => {
    const set = req.params.set || 'dataset1';
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/', `${set}.json`)));
  res.render('report', {
    title: 'Worker Progress Report',
    heading: 'Worker Progress Report',
    page: '3 of 3',
    ...data
  });
});

module.exports = router;
