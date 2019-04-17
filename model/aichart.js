//聊天模型
const mongoose = require('mongoose')

var chatSchema = new mongoose.Schema({
    createTime: { type: Date, default: Date.now, index: true },

    people: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users',
    },
    Mes:[
        {
         state:Number,
         content:{
             type:String,
             default:''
         }
        }
       ]
  },{
      versionKey:false
  });

  const aichatdata = mongoose.model('aicharts',chatSchema)

  module.exports =aichatdata

