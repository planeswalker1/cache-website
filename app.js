const express = require('express');
const path = require('path');
const app = express();

const config = require('./app/models/config');

// This serves static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.PORT, function () {
  console.log('Listening at localhost:%s in %s mode', config.PORT, app.get('env'));
});
