const express = require('express');
const path = require('path');
const userController = require('./controllers/Users')

const app = express();
const port = 3000;

    app

        .use('/static', express.static(path.join(__dirname, '../NoFrame')))
        .use(function(req, res, next){
            // logging 

            console.log({params: req.params, body: req.body, url: req.url, query: req.query, headers: req.headers});
            next();
        })
        .get(    '/',
             (req, res) => 
                res.send('Hello Newpaltz!')
            )
        .get(   '/heb',
             function(req, res){
                    res.send('Shalom World!')
            }
         )
         .get(   '/trial',
             function(req, res){
                    res.send({msg:'Shalom World!'})
            }
         )
         .use('/Users', userController);

    app.listen(port, () => console.log(`Running on http://localhost:${port}`));