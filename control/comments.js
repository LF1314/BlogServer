const express = require('express')

const router = express.Router()

const auth =require('../control/auth')

const commentdata = require('../model/comments')
const blogdata= require('../model/blog')

//发布评论

router.post('/add',auth,async(req,res,next)=>{
    let{
        creatime,
        content,
        linuxtime,
        author,
        blog
    } = req.body
    try {
        let comment = await commentdata.create({
            creatime,
            content,
            linuxtime,
            author,
            blog
        }) 
        let id =comment._id
        let mes = await blogdata.update({_id:blog},{$inc:{readnum:1}})
        let data = await commentdata.findById(id)
        .populate({
            path:'author',
            select:('-password')
        })
        res.json({
            code:200,
            msg:'发布评论成功',
            data,
            mes
        })
        
    } catch (error) {
        res.json({
            code:400,
            msg:'error'
        })
    }
})

//获取评论

router.get('/',async(req,res,next)=>{
    let {pn = 1 ,size = 20,id} = req.query
    pn = parseInt(pn)
    size = parseInt(size)
    try {
        let data =await commentdata.find({blog:id})
        .skip((pn-1)*size)
        .limit(size)
        .sort({_id:-1})
        .populate({
            path:'author',
            select:('avatar username')
        })
        res.json({
             code:200,
             msg:'success',
             data
        })
    } catch (error) {
        res.json({
            code:400,
            msg:'error'
        })
    }
})


module.exports = router