
const mongoose = require('mongoose')

var bannerSchema = new mongoose.Schema({
    title: String,
    imgurl:String,
    articleid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'blogs'
    }
  },{
      versionKey:false
  });

  const bannerdata = mongoose.model('banners',bannerSchema)

  module.exports =bannerdata