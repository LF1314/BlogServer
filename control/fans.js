//有关关注的路由
const userdata = require('../model/user')
const express = require('express')
const router = express.Router()
const auth  = require('../control/auth')

//添加关注

router.post('/add',auth,async(req,res,next)=>{
    let {id} = req.body
    let userid = req.session.user._id

    try {
        let data =await userdata.update({_id:id},{$push:{fans:userid}})
        let myd =await userdata.update({_id:userid},{$push:{follows:id}})
        let user = await userdata.findById({_id:id})
        .select('-password')
        let useinfo = await userdata.findById({_id:userid})
        .select('-password')
        .select('-password')
        res.json({
            code:200,
            msg:'关注成功！',
            data:user,
            user:useinfo
        })
    } catch (error) {
        res.json({
            code:400,
            msg:'error'
        })
    }

})
//取消关注
router.post('/del',auth,async(req,res,next)=>{
    let {id} = req.body
    let userid = req.session.user._id
   try {
    let data =await userdata.update({_id:id},{$pull:{fans:userid}})
    let myd =await userdata.update({_id:userid},{$pull:{follows:id}})
    let user = await userdata.findById({_id:id})
    .select('-password')
    let useinfo = await userdata.findById({_id:userid})
    .select('-password')
    res.json({
        code:200,
        msg:'取消关注成功！',
        data:user,
        user:useinfo
    })
   } catch (error) {
    res.json({
        code:400,
        msg:'error'
    })
   }
})

module.exports =router












