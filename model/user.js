
const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
      avatar:String,
       username:{
           type:String,
           required:true,
           unique:true
       },
       password:{
        type:String,
        required:true
       },  
       creatime:String,
       blogs:{
           type:Array,
           default:[]
       },
       fans:{
        type:Array,
        default:[]
         },
         follows:{
            type:Array,
            default:[]
        },
  },{
      versionKey:false
  });

  const userdata = mongoose.model('users',userSchema)

  module.exports =userdata