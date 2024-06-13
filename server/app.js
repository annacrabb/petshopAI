const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

//connect to MongoDB
mongoose.connect('mongodb+srv://annacrabb92:petshopPassword@petshopdb.feeyiiu.mongodb.net/petshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware to parse JSON requests
app.use(express.json());