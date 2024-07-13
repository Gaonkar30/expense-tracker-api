require('dotenv').config();
const mongoose=require('mongoose');
Mongo_url=process.env.MONGO_URL
mongoose.connect(Mongo_url,{useNewUrlParser:true,useUnifiedTopology:true})
module.exports={mongoose}