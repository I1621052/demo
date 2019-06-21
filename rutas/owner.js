var express=require('express');
var app= express();
var Owner = require('../model/owner');
/**
 * Listar
 */
app.get('/',(req,res)=>{
    Owner.find({})
    .populate()
    .exec((err,owners)=>{
        if (err) {
            return;
        }
        res.status(200).json(owners);
    })
});
/**
 * crear
 */
app.post('/',(req,res)=>{
    var body=req.body;
    var owner = new Owner({
        nombre:body.nombre,
        apellidos:body.apellidos
    });
    owner.save((err,ownerSave)=>{
        if (err) {
            return;
        }
        res.status(201).json(ownerSave);
    })
});
/**
 * insertar mascota
 */
app.put('/addpet/:id',(req,res)=>{
    var id =req.params.id;
    var body = req.body;
    Owner.findById(id,(err,ownner)=>{
        if (err) {
            return;
        }
        if (!ownner) {
            return;
        }
        
        ownner.mascotas.push({nombre:body.nombre,sexo:body.sexo});
        ownner.save((err,ownerUpdate)=>{
            if (err) {
                return;
            }
            res.status(200).json(ownerUpdate);
        });
    });
});
/**
 * actualizar mascota
 */
app.put('/:id/:num',(req,res)=>{
    var id=req.params.id;
    var num = req.params.num;
    var body= req.body;
    Owner.findById(id,(err,owner)=>{
        if (err) {
            return;
        }
        if (!owner) {
            return;
        }
        owner.mascotas.splice(num,1,{nombre:body.nombre,sexo:body.sexo});
        owner.save((err,mascotaUpdate)=>{
            if (err) {
                return
            }
            res.status(200).json(mascotaUpdate)
        });
    })
});
/**
 * eliminar mascota
 */
/*app.put('/:id',(req,res)=>{
    var id = req.params.id;
    var body = req.body;
    Owner.findById(id,(err,ownner)=>{
    ownner.mascotas.pull(_id=body.pet);
    ownner.save(function (err) {
        if (err) return handleError(err);
        console.log('the subdocs were removed');
        res.status(200).json(ownner);
      });
    /*Owner.findById(id,(err,pet)=>{
        //owner.mascotas.pull(_id=body.id);
        owner.save((err,ownerUpdate)=>{
            if (err) {
                return;
            }
            res.status(200).json(ownerUpdate);
        });
    });*/

module.exports = app;