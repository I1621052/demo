var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var publicationSchema = new Schema({
    department:{
        type:String,
        required:true
    },
    province:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:String
    },
    address:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date()
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'Owner'
    }
});

module.exports = mongoose.model('Publication',publicationSchema);