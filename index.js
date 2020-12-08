const express = require('express');
const mongoose = require('mongoose');
const postForm = require('./routes/postForm');
const home = require('./routes/home');
const bodyParser = require('body-parser');
const path = require('path');
const form = require('./routes/form');
const multer = require('multer');
const upload = multer();

const mongoURL =
  'mongodb+srv://shivu:Paganizonda5050@cluster0.ioohl.mongodb.net/<dbname>?retryWrites=true&w=majority';

const db = mongoose.connect(
  mongoURL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (!err) {
      console.log('Connected to Mongo successfully');
    } else {
      console.log('failed to connect to mongo');
    }
  }
);

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(upload.array());

app.use('/form', form);
app.use('/postform', postForm);
app.use('/', home);

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('Server listening on ' + port);
});
