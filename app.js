const express = require('express');
const app = express();

app.use(express.static('src'));

app.get('/', (req, res) => {
    res.send('Something.');
});

app.listen(3000, () => console.log('App listening on port 3000'));


