const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt  = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required: true
    }
});

userSchema.pre('save', (next)=>{
    var User = this;
    var password = User.password;
    if(User.isModified('password')){
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(password, salt, (err, hash)=>{
                console.log(hash);
                User.password = hash;
                next();
            });
        });
    }
    next();
});

const userModel = mongoose.model('employee', userSchema);

module.exports = userModel;