
const mongoose = require('mongoose')

var bannerSchema = new mongoose.Schema({
    title: String,
    imgurl:String
  },{
      versionKey:false
  });

  const bannerdata = mongoose.model('banners',bannerSchema)

  module.exports =bannerdata