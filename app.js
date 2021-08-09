//Bootstrap
const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

const router = require('./routes')

//Global App Object
const app = express();

//Middleware config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

mongoose.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use('/', router);

//Not found errors
app.use(function (requires, response, next) {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`App running. Listening on port ${server.address().port}`)
});