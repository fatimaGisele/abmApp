const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();


const {validateId} = require('./middleware/actions/validateId');
const { dbConnection } = require("./database/db");
require('./database/association');
dbConnection();
const auth = require('./routes/auth');
const userExpenseController = require('./routes/expenseController');



app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json);


app.use('/', auth);
app.use('/myExpenses',validateId, userExpenseController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});


module.exports = app;
