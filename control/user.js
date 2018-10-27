const express = require('express')
const  router = express.Router()
const userdata = require('../model/user')
//用户注册
router.post('/add',async(req,res,next)=>{ 
    let {
        avatar,
        username,
        password,
        creatime  
    } = req.body
    try{
         const user = await userdata.find({username})

         if(user.length == 0){
            const data = await userdata.create({
                avatar,
                username,
                password,
                creatime
             })
            res.json({
                code:200,
                msg:'注册成功！'
            })
         }else{
             res.json({
                 code:400,
                 msg:'用户名已经存在了'
             })
         }
     
    } catch (error) {
        res.json({
            code:400,
            msg:'error',
            error
        })
    }
})

//用户登录
router.post('/login',async(req,res,next)=>{
    let {
        username,
        password
    } = req.body
    try {
        let userd = await userdata.findOne({username:username})
        if(userd){
            if(password == userd.password){
                req.session.user = userd
                res.json({
                    code:200,
                    msg:'登陆成功',
                    data:{
                        username:userd.username,
                        avatar:userd.avatar,
                        creatime:userd.creatime
                    }
                })
            }else{
                res.json({
                    code:400,
                    msg:'密码错误！'
                })
            }
        }else{
            res.json({
                code:400,
                msg:'用户不存在'
            })
        }
    } catch (error) {
        res.json({
            code:400,
            error
        })
    }
})
//退出登录
router.get('/logout',(req,res,next)=>{

    if(req.session.user){
        req.session.user = null
        res.json({
            code:200,
            msg:'退出登录成功'
        })
    }else
    {
        res.json({
            code:200,
            msg:'用户身份已过期'
        })
    }
})
module.exports = router