const express = require('express');
const bodyParser = require('body-parser');

let app = express();

var index = require ('./routers/index')
var student = require ('./routers/student')
var course = require('./routers/course')

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', index);
app.use('/student', student);
app.use('/course', course);

app.listen(process.env.PORT || 3000);
