const express = require('express');
const app = express();
const port = 3000;

app.use('/home', (req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
});

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))