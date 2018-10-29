const express = require('express')

const router = express.Router()

const auth =require('../control/auth')

const blogdata = require('../model/blog')
const userdata = require('../model/user')
//发布博客
router.post('/add',auth,async(req,res,next)=>{  
    let {
        corver,
        title,
        creatime,
        content,
        contentext,
        category,
        author,
        linuxtime
    } = req.body
    try {
        const data = await blogdata.create({
            corver,
            title,
            creatime,
            content,
            contentext,
            category,
            author,
            linuxtime
        })
        let blogid = data._id 
        const mes = await userdata.update({_id:author},{$push:{blogs:blogid}})
        res.json({
            code:200,
            msg:'发布成功！',
            data,
            mes
        })
    } catch (error) {
        res.json({
            code:400,
            msg:'缺少必要参数'
        })
        
    }
})

//查询最新的文章
router.get('/new',async(req,res,next)=>{

   try {
       let hotarticle = await blogdata.find()
       .sort({_id:-1})
       .limit(6)
       res.json({
           code:200,
           msg:'success',
           data:hotarticle
       })
   } catch (error) {
       res.json({
           code:400,
           msg:'errror',
           error
       })
   }
})

//获取文章详情
router.get('/detail',async(req,res,next)=>{

    let {id} = req.query
    try {
        let article = await blogdata.findById(id)
        .populate({
            path:'author',
            select:('-password')
        })
        res.json({
            code:200,
            msg:'success',
            data:article
        })
    } catch (error) {
        res.json({
            code:400,
            msg:'error'
        })
    }
})
//修改文章阅读数量
router.get('/looknum',async(req,res,next)=>{

    let { id } = req.query

    try {
        let data = await blogdata.update({_id:id},{$inc:{looknum:1}})
        res.json({
            code:200,
            msg:'sucess',
            data
        })
    } catch (error) {
        res.json({
            code:200,
            msg:'error'
        })
    }
})


module.exports = router