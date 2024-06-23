const express = require('express');
const mongoose = require('mongoose');
const petRoutes = require('./routes/pets');
const dotenv = require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./routes/user');

//express app
const app = express();

app.use(cors());

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//routes
app.use('/api/routes', petRoutes);
app.use('/api/user', userRoutes);

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port 4000')
        })
    })
    .catch((error) => {
        console.group(error)
    })


