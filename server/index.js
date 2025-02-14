const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const gameController = require('./controllers/Game');

const app = express();
const port = process.env.PORT ||  3010;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(function(req, res, next) {
    const arr = (req.headers.authorization || "").split(" ");
    if(arr.length > 1 && arr[1] != null){
        req.user_id = +arr[1];
    }
    next();
});


app
    .use(express.json())
    .get('/port', (req, res)=> res.send("Using port: " + port))
    .get('/sql', (req, res)=> res.send(process.env.MYSQLCONNSTR_localdb))
    .use('/', express.static( path.join( __dirname , 'dist' ) ) )
    .use('/users', userController )
    .use('/gameApi', gameController )
    .get('*', (req, res)=> res.sendFile(__dirname + '/dist/index.html' ))
    ;

app
    .use((err, req, res, next) => {
        res.status(err.code || 500).send({ message: err.message || '' + err })
    })

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
