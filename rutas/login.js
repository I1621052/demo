var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;

var app = express();
var Owner = require('../model/owner');

app.post('/',(req,res)=>{
    var body = req.body;

    Owner.findOne({dni: body.dni},(err,owner)=>{
        if (err) {
            return;
        }
        if (!owner) {
            return;
        }
        if (!bcrypt.compareSync(body.password,owner.password)) {
            return;
        }
        //crear token
        owner.password='...';
        var token = jwt.sign({owner:owner},SEED,{expiresIn:14400});
        res.status(200).json({owner,token,id:owner._id});
    });
});
module.exports = app;