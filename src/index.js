const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const csrf = require('csurf');

global.Promise=require("bluebird");
app.set('view engine', 'jade');
app.use(morgan('dev'));

app.use(cookieParser());
app.use(bodyParser());
// app.use(methodOverride());
app.use(session({ 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
  secret: process.env.SECRET_KEY || 'keyboard cat' 
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('remember-me'));

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const dbURL = `mongodb://mongodb:27017/`;
mongoose.connect(dbURL, { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connection complete');
});

const indexRoutes = require('./routing/index');
const lessonsRoutes = require('./routing/lessons');
const authRoutes = require('./routing/auth');
const errorsControllers = require('./controllers/errors');
const adminRoutes = require('./routing/admin');

app.use(csrf({ cookie: true }));

app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/lessons', lessonsRoutes);
app.use('/admin', adminRoutes);
app.use('*', errorsControllers.notFound);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Manager has been started on localhost:${port}`);
});
