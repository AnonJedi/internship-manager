const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

const indexRoutes = require('./routing/index');
const lessonsRoutes = require('./routing/lessons');

app.set('view engine', 'jade');
app.use(morgan('dev'));

app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use('/', indexRoutes);
app.use('/lessons', lessonsRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Manager has been started on localhost:${port}`);
});
