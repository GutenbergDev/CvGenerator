const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(path.join(__dirname, '/src/public')));

const routes = require('./src/routes/routes');
app.use('/', routes);

app.listen(8080, () => console.log('listening on *8080'));
