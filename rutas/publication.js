var express=require('express');
var app = express();
var Publication = require('../model/publication');
/**
 * Listar
*/
app.get('/',(req,res)=>{
    Publication.find({})
    .populate('owner')
    .exec((err,publications)=>{
        if (err) {
            return;
        }
        res.status(200).json(publications);
    });
});
/**
 * Crear
 */
app.post('/',(req,res)=>{
    var body = req.body;
    var publication = new Publication({
        department:body.department,
        province:body.province,
        district:body.district,
        address:body.address,
        owner:body.owner,
        date:body.date
    });
    publication.save((err,publicationSave)=>{
        if (err) {
            return;
        }
        res.status(201).json(publicationSave);
    });
});
module.exports=app;
