const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(fileUpload());


app.use(session({
  secret: 'root',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 360000
  }
}));

app.use('/', require('./routes/index.js'));

app.use('/users', require('./routes/users.js'));

app.get('*', (req, res) => {
  res.status(404);
  res.render('404');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));