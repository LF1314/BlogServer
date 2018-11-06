//分类

const mongoose = require('mongoose')

var categorySchema = new mongoose.Schema({
    title: String,
    type:{
        type:String,
        default:'0'
    }
  },{
      versionKey:false
  });

  const typedata = mongoose.model('types',categorySchema)

  module.exports =typedata










































