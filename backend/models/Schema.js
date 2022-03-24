const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    avatar:{type:String},
    performance:{type:Number}
})

const User=mongoose.model('Employee',userSchema);

module.exports=User;