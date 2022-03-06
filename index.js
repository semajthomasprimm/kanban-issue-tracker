const express = require('express');
const app = express();
var bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(process.env.PORT || 4000, () => console.log(`listening at http://localhost:${process.env.PORT || 4000}`));