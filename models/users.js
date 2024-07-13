const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const UserSchema=new Schema({
    userName:{type:String,min:4,required:true},
    password:{type:String,required:true},
});
const User=mongoose.model('User',UserSchema);
module.exports=User;