//发布博客模型
const mongoose = require('mongoose')

var blogSchema = new mongoose.Schema({
       creatime:String,
       content:String,
       linuxtime:String,
       type:{
          type:String,
          default:'0'
       },
       corver:{
           type:String,
           required:true
       },
       title:{
        type:String,
        required:true
               },
       contentext:{
        type:String,
        required:true
    },
       category:{
           type:Array,
           default:[]
       },
       looknum:{
           type:Number,
           default:0

       },
       likenum:{
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
  },{
      versionKey:false
  });

  const blogdata = mongoose.model('blogs',blogSchema)

  module.exports =blogdata