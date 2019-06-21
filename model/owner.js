var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var ownerSchema = new Schema({
    nombre:String,
    apellidos:String,
    mascotas:[]
});

module.exports = mongoose.model('Owner', ownerSchema)