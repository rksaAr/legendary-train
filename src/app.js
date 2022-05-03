const express = require('express');
const app = express();

//Initialize

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(require('./routes/tasks.routes'));
//Initialize

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(require('./routes/tasks.routes'));
//Initialize

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(require('./routes/tasks.routes'));
//Initialize

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(require('./routes/tasks.routes'));

module.exports = app;