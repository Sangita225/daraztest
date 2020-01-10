const mongoose = require ('mongoose');

const justforyouschema = new mongoose.Schema({

image: {
    type:String,
    required:false
},
price: {
    type: String,
    required: true
},
description:{
    type:String,
    required:true
},

},{timestamps:true});

module.exports = mongoose.model('justforyou',justforyouschema);