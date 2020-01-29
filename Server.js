const express = require('express');

const app = express();
express.json();

app.get('/', function(req, res) {
    res.send('Hello World');
})


app.listen(80, () => console.log('Listening on port 80...'));
