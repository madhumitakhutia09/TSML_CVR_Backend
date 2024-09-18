const express = require('express');
const path = require('path');
const app = express();
var ejs     = require('ejs');
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route
app.get('/', (req, res) => {
  console.log('port running');
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
