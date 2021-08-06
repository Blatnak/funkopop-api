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