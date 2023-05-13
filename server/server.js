require('dotenv').config();
const express = require('express');

const db = require('./config/connection');

const PORT = process.env.PORT || 3333;

const app  = express();

app.use(express.static('../client/dist'));

db.once('open', () => {

    app.listen(PORT, () => console.log('Server started on port %s',PORT))
})