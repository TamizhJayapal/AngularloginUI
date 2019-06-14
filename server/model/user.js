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

userSchema.methods.saveCredentials = function(credential){
    var user = this;
    var password = credential.password;
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, function(e,hash){
            user.password = hash;
        });
    });

   return user.save(data).then((req,res)=>{
        res.send(data);
    })
}

const userModel = mongoose.model('userSchema', userSchema);

module.exports = userModel;