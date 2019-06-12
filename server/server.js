const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const user = require('./model/user');

var cors = require('cors')


const port = process.env.PORT ? process.env.PORT : 3000;
const db = 'mongodb://localhost:27017/mean';
mongoose.connect(db, {useNewUrlParser: true});

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/register', (req,res)=>{    
    var newUser = {
        name:req.body.userName,
        email:req.body.userEmail,
        password:req.body.userPass
    }
    var userdata = new user(newUser);
    userdata.save().then((x)=>{
        res.send(x);
    }).catch((e)=>{
        res.status(400).send(e);
    })
});


app.post('/login', (req,res)=>{
    var userGet = {
        email: req.body.email,
        password: req.body.password
    }
    user.findOne(userGet).then((x)=>{
        if(!x){
            res.status(401).send();
        }
       res.send(x);       
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000, ()=>{
    console.log('server is running on 3000');
});
