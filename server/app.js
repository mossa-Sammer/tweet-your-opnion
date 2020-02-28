if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./router');

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV !== 'production') {
  app.use(logger('dev'));
  app.use(
    express.static(join(__dirname, '..', 'client', 'public'), { maxAge: '1d' }),
  );
}

app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'public', 'index.html'));
});

module.exports = app;
