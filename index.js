const express = require('express');
const app = express();
const indexRoutes = require('./routing/index');

app.set('view engine', 'jade');
app.use('/', indexRoutes);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
