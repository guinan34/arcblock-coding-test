const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users');

const app = express();
const port = process.env.BLOCKLET_PORT || process.env.PORT || 3030;

// Cross-domain configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Din't use /api as we mounted /api/ in blocket server, which will remove prefix as well .
app.use('/', usersRouter);

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
