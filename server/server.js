const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(8000, function(){
  console.log('Server is running on port:', 8000);
});