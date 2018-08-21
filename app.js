const express = require('express'),
  app = express(),
  db = require('./db');

//Controllers
const Counters = require('./counter/counterController');


//Cors Headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api/v1/counters', Counters);

module.exports = app;

