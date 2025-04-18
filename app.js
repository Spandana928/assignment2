const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/medical', require('./routes/medical'));
app.use('/report', require('./routes/report'));

app.get('/', (req, res) => {
    res.redirect('/medical');
  });

  
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
