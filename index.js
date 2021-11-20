const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const app = express();
const sequelize = require("./src/config/db");
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use('/', require('./src/routes/Router'));
app.use(express.static('public'));


const port = process.env.PORT;

sequelize.sync();

app.listen(port, () => console.log(`server started at ${port}`));