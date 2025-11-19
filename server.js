const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();


const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, x-Requested-width, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});


mongodb.initDB((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.use('/', require('./routes'));
        app.listen(port, () => (console.log(`Database is listening and node Running on port ${port}`)));
    }
});