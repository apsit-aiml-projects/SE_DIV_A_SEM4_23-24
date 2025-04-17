const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());

require("./db/conn");

const PORT = 5000; // Replace 3000 with your desired port number
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`);
});


// Render the home page
app.get('/', (req, res) => {
  res.render('selected_coin');
});

// Render the registration page
app.get('/registration', (req, res) => {
  res.render('registration');
});

// Render the login page
app.get('/login', (req, res) => {
  res.render('login');
});
