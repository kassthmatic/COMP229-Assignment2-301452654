const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//Instantiate my DB
mongoose.connect('mongodb://localhost:27017/Marketplace', {useNewUrlParser: true, useUnifiedTopology: true})

const app = express();
const PORT = process.env.PORT || 8080; 

//Middleware
app.use(cors());
app.use(express.json()); 

//Routes
const productRoutes = require('./routes/Marketplace');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});