const express = require('express')
const router = express.Router()
const catedata = require('../model/category')
router.get('/',async(req,res,next)=>{
    try {
        let bannerlist =await catedata.find()
        res.json({
            code:200,
            data:bannerlist
        })
    } catch (error) {
        res.json({
            code:400,
            error
        })
    }
})
module.exports = router

















