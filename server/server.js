const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();
const env = require('dotenv').config();
const mongoSanitize = require('express-mongo-sanitize');

const productRoutes = require('./routes/product.routes');
// const loadTestData = require('./data');


app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(mongoSanitize({
  replaceWith: '_'
}));

app.use('/api', productRoutes);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-aqaim.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
  // loadTestData();
});
db.on('error', (err) => console.log('Error ' + err));

app.listen(config.PORT, function(){
  console.log('Server is running on port:', config.PORT);
});