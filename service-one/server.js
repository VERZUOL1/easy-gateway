'use strict';

const express = require('express');

// Constants
const port = 3001;
const host = '0.0.0.0';

// Application
const app = express();
app.get('/', (req, res) => {
  res.send(`Service one response: -  ${req.user}`);
});

app.listen(port, host);

console.log(`running on http://${host}:${port}`);
