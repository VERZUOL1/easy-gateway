'use strict';

const express = require('express');

// Constants
const port = 3002;
const host = '0.0.0.0';

// Application
const app = express();
app.get('/', (req, res) => {
  res.send('Service two response');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);
