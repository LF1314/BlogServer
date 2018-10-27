var express = require('express');
var router = express.Router();
const bannerRouter = require('../control/banner') 
const userRouter = require('../control/user')
/* GET home page. */
// 获取轮播图
router.use('/banner',bannerRouter)
//用户注册
router.use('/user',userRouter)
module.exports = router;
