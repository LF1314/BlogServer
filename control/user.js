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
                userd.password =null
                res.json({
                    code:200,
                    msg:'登陆成功',
                    data:userd
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

//获取用户粉丝列表
router.get('/fans',async(req,res,next)=>{
    let { id } = req.query
    try {
        let userinfo = await userdata.findById({_id:id})
        let fans =  userinfo.fans
        let fanlist =[]
        let i = 0
        console.log(fans)
          async function getfans(i) {
              let id = fans[i]
              let fan = await userdata.findById(id)
              .select('-password')
              fanlist.push(fan)
              if(i<fans.length-1){
                  i ++
                  getfans(i)
              }else{
                res.json({
                    code:200,
                    msg:'success',
                    data:fanlist
                })
                  return false
              }
          }
          getfans(i)
      
        
    } catch (error) {
        res.json({
            code:400,
            msg:'error'
        })
    }

})
module.exports = router