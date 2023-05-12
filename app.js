const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine','pug');
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/solution', function (req, res) {
    res.sendFile(__dirname + '/views/solution/solution.html');
});

app.get('/assignment', function (req, res) {
    res.sendFile(__dirname + '/views/assignment/assignment.html');
});

app.get('/solution1', function (req, res) {
    res.sendFile(__dirname + '/views/solution/solution1.html');
});

app.get('/solution2', function (req, res) {
    res.sendFile(__dirname + '/views/solution/solution2.html');
});

app.get('/pug', function (req,res) {
    res.render('index', {title : 'Hey', message: 'Hello there!'});
});


app.listen(8080, function () {
    console.log('Connected in 8080 port!');
});