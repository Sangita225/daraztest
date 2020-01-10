const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

firstname:{
    type:String,
    required:true
},
username: {
                type:String,
                required:true,
                unique:true,
                minlength:6,
                maxlength:12

        },
password: {
                type:String,
                required:true
         },

},{timestamps: true })

module.exports = mongoose.model('user',userSchema);