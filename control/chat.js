const express = require('express')

const router = express.Router()

const auth = require('../control/auth')

const chatdata = require('../model/chat')

const app = require('../bin/www')
//用户发起聊天
//添加公用聊天室 
router.post('/add',auth,async(req,res,next)=>{
    let from = req.session.user._id
    let {to , content} = req.body
    try {
        let data = await chatdata.create({
            from,
            to,
            content
        })
        let chat = await chatdata.findById({_id:data._id})
        .populate({
            path:'from',
            select:('-password')
        })
        app.io.on('connection',function(socket){
            socket.on('chat',(data)=>{
                 console.log(data)
               })
               data ='有人发了聊天信息'
               socket.emit('chat',data)         
            // console.log(io.emit)
        })
        res.json({
            code:200,
            msg:'success',
            data:chat
        })
    } catch (error) {
        res.json({
            code:400,
            msg:'error'
        })
    }
})
//获取聊天信息 私聊，群聊，世界

router.get("/",async(req,res,next)=>{
    let{pn =1 ,to,size=20000} = req.query
           pn  = parseInt(pn)
          size = parseInt(size)
    try {
        let chatlist = await chatdata.find({to:to})
        .skip((pn-1)*size)
        .limit(size)
        .populate({
            path:'from',
            select:('-password')
        })
        res.json({
            code:200,
            data:chatlist
        })
    } catch (error) {
        
    }
})

module.exports =router