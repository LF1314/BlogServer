//评数据库论模型
const mongoose = require('mongoose')
var commentSchema = new mongoose.Schema({
       creatime:String,
       content:String,
       linuxtime:String,
       ansernum:{
           type:Number,
           default:0
       },
       readnum:{
              type:Number,
              default:0
       },
       author:{
           type:mongoose.SchemaTypes.ObjectId,
           ref:'users'
       },
       blog:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'blogs'
       }
  },{
      versionKey:false
  });
  const commentdata = mongoose.model('comments',commentSchema)
  module.exports =commentdata