const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv').config()
const app = express();


//routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})


//connect to MongoDB
mongoose.connect('mongodb+srv://annacrabb92:petshopPassword@petshopdb.feeyiiu.mongodb.net/petshop', {
});

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})