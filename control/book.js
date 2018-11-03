const express = require('express')
const router = express.Router()
const request = require('request')
const cheerio = require('cheerio')
// 根据type值获取不同的分类
//1 vue type 代表分类，pn 代表每种分类的第几页
router.get('/type',(req,res,next)=>{
    let { pn=1 } = req.query
         pn = parseInt(pn)
                request(`https://www.kancloud.cn/explore/free?page=${pn}`,
                   function (error, response, body) {
                       const $ = cheerio.load(body)
                       let content =  $('.special').html()
                       let arr = content.split('</a>')
                       let newarr = arr.map(el=>{
                         let obj ={}
                         let le = el.trim()
                         if(le){
                            le = le +'</a>'
                            let tre = cheerio.load(le)
                            obj.href ='https://www.kancloud.cn' + tre('a').attr('href') 
                            obj.title = tre('h4').text()
                            obj.bookurl = tre('img').attr('src')
                            return obj 
                         }
                       })
                       newarr.splice(newarr.length-1,1)
                       res.json({
                           code:200,
                           msg:'suceesss',
                           data:newarr
                       })
                  });
          
})

//获取书籍目录列表
 router.get('/category',(req,res,next)=>{   
    let { href } = req.query
    request(`${href}/content`,function(err,response,body){
        if(err){
            res.json({
                code:400,
                msg:'请求超时'
            })
        }
        const $ = cheerio.load(body)
        let category = $('ul').html()
        let arr = category.split('</li>')
        let newcate = arr.map(el=>{
            let obj ={}
            let le = cheerio.load(el)
            obj.con = le('a').attr('href')
            obj.title = le('a').text()
            return obj
        })
        newcate.splice(newcate.length-1,1)
        res.json({
            code:200,
            msg:'sucess',
            data:newcate
        })
    })
 })
//获取书籍内容
router.get('/content',(req,res,next)=>{   
    let { href } = req.query
    request(`${href}`,function(err,response,body){
        if(err){
            res.json({
                code:400,
                msg:'请求超时'
            })
        }
        const $ = cheerio.load(body)
        let content = $('div .content').html()
        res.json({
            code:200,
            msg:'sucess',
            data:content,
            
        })
    })
 })


module.exports = router