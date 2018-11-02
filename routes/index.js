var express = require('express');
var router = express.Router();
const bannerRouter = require('../control/banner') 
const userRouter = require('../control/user')
const blogRouter = require('../control/blog')
const commentRouter = require('../control/comments')
const fanRouter = require('../control/fans')
const chatRouter = require('../control/chat')
/* GET home page. */
// 获取轮播图

router.use('/banner',bannerRouter)
//用户注册
router.use('/user',userRouter)

//博客文章
router.use('/blog',blogRouter)

//评论
router.use('/comment',commentRouter)

//关注
router.use('/fan',fanRouter)
//聊天

router.use('/chat',chatRouter)
//渲染客户端页面
router.get('/',(req,res)=>{
    res.render('index')
})
module.exports = router;
