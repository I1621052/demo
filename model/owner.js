var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sexoValid = {
    values: ['MASCULINO', 'FEMENINO'],
    mensaje: '{value} id not valid'
}

var ownerSchema = new Schema({
    name: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    ap: {
        type: String,
        required: [true, 'El apellido paterno es necesario']
    },
    am: {
        type: String,
        required: [true, 'El apellido materno es necesario']
    },
    dni: {
        type: String,
        required: [true, 'El DNI es necesario'],
        unique: true
    },
    department: {
        type: String,
        required: [true, 'El departamento es necesario']
    },
    province: {
        type: String,
        required: [true, 'La provincia es necesario']
    },
    district: {
        type: String,
        required: [true, 'El distrito es necesario']
    },
    cel: {
        type: String,
        required: [true, 'El celular es necesario']
    },
    password: {
        type: String,
        required: [true, 'El password es necesario']
    },
    sexo: {
        type: String,
        uppercase: true,
        required: [true, 'El sexo es necesario'],
        enum: sexoValid,
        default: 'MASCULINO'
        //type: Schema.Types.ObjectId,
        //ref: 'Sexo'
        //required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    dateRegister: {
        type: Date,
        default: Date()
    },
    mascotas: []
});

module.exports = mongoose.model('Owner', ownerSchema)