require('dotenv').config();

const express = require('express');
const app = express();

// Enable CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to db'));

app.use(express.json());

const productsRouter = require('./routes/products');
app.use('/products', productsRouter); //path of our route

app.listen(3000, () => console.log('server running on port 3000'));
