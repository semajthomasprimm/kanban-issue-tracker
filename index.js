const express = require('express');
const app = express();
var bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure routes
const taskRoutes = require('./Routes/taskRoutes');
const projectRoutes = require('./Routes/projectRoutes');
const statusRoutes = require('./Routes/statusRoutes');

// run routes on endpoints

app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/status', statusRoutes);

app.listen(process.env.PORT || 4000, () => console.log(`listening at http://localhost:${process.env.PORT || 4000}`));