const express = require('express');

const app = express();
express.json();

app.get('/', function(req, res) {
    res.send('<h2>Hello World!!!</h2>');
})


app.listen(3000, () => console.log('Listening on port 3000...'));
