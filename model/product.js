const mongoose = require ('mongoose');
const pschema= new mongoose.Schema({

item:{
    type:String,
    require:true
}

});
const productschema = new mongoose.Schema({

image: {
    type:String,
    required:false
},
price: {
    type: String,
    required: true
},
name:{
    type:String,
    required:true
},
item:{
    type:String,
    required:false
},
product:[pschema]
},{timestamps:true});

module.exports = mongoose.model('products',productschema);