const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcryptjs');

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

    var password = newUser.password;
    console.log(password);
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, function(e,hash){
            console.log(hash);
            newUser.password = hash;
        });
    });

    var userdata = new user(newUser);
    console.log(userdata);
    userdata.save().then((x)=>{
        let payload = { subject : x._id }
        let token = jwt.sign(payload, 'abc123');
        res.send(x);
    }).catch((token)=>{
        res.status(400).send(e);
    })
}); 

app.post('/login', (req,res)=>{
    let userData = req.body;
    user.findOne({email: userData.email}, (error, user) => {
        if(!user){
            res.status(401).send('Email does not exist');
        }else if(user.password !== req.body.password){
            res.status(401).send('Invalid password');
        }else{
            let payload = { subject : user._id }
            let token = jwt.sign(payload, 'abc123');
            res.send({token: token});
        }
    });
});

app.listen(3000, ()=>{
    console.log('server is running on 3000');
});
