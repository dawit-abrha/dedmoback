
const express = require('express');
const bodyParser = require('body-parser');
require('./config/db');
const routes = require('./config/routes');
const path = require('path');

const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes)


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});