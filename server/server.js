const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Instantiate my DB
mongoose.connect('mongodb://localhost:27017/Marketplace', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());



