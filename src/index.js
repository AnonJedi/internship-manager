const express = require('express');
const app = express();
const indexRoutes = require('./routing/index');
const path = require('path');
const morgan = require('morgan');

app.set('view engine', 'jade');
app.use(morgan('dev'));

app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use('/', indexRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Manager has been started on localhost:${port}`);
});
