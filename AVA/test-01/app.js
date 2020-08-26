const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get('/status', (req,res) => {
    res.send({
        status: 'Ok'
    })
})
// localhost:5000/status

app.get('/greet', (req, res) => {
    const name = req.query.name;
    const food = req.query.food;
    res.send({
        message: `hello ${name} would you like a ${food}`
    })
})
// localhost:5000/greet?name=%22sergio%22&food=%22paela%22

app.post('/register', (req,res) => {
    const { body } = req;
    if( !body.username ) {
        return res.status(400).send({
            message: 'username is missing'
        })
    }

    if( !body.password ) {
        return res.status(400).send({
            message: 'password is missing'
        })
    }

    return req.send({
        message: 'new user created'
    })
})

module.exports = app;
