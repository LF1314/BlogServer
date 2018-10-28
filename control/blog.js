const express = require('express')

const router = express.Router()

const auth =require('../control/auth')

const blogdata = require('../model/blog')

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
    } = req.body
    try {
        const data = await blogdata.create({
            corver,
            title,
            creatime,
            content,
            contentext,
            category,
            author
        })
        res.json({
            code:200,
            msg:'发布成功！',
            data
        })
    } catch (error) {
        res.json({
            code:400,
            msg:'缺少必要参数'
        })
        
    }
})