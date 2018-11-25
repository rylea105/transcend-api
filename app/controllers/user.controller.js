const User = require('../models/user.model.js')
var mongoose = require( 'mongoose' );
var CryptoJS = require("crypto-js");
var randomBytes = require('randombytes');

exports.signIn = async (req,res) => {
    await User.findOne({email: req.body.email})
    .then(async data => {
        var bytes = await CryptoJS.AES.decrypt(data.password, data.salt);
        var password = await bytes.toString(CryptoJS.enc.Utf8);

        if (password == req.body.password){
            res.send(data);
        }else{
            res.send("E-mail or Password Not valid");
        }
    })
}

var genRandomString = function(length){
    return randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

exports.signUp = async(req,res) => {
    var salt = await genRandomString(16);
    req.body.salt = salt
    req.body.password = await CryptoJS.AES.encrypt(req.body.password, salt);
    var user = new User(req.body);
    user.save(err =>{
        if (err) return res.status(500).send(err);
        res.status(200).send(user);
    })
}