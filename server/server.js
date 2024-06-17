const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const dotenv = require('dotenv').config();
const cors = require('cors');

//express app
const app = express();

// Middleware
app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//routes

app.use('/api/routes', routes);

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


