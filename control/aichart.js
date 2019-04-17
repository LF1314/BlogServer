const express = require('express')

const router = express.Router()

const auth = require('../control/auth')

const chatdata = require('../model/chat')

const aidats = require('../model/aichart')

const api = 'http://www.tuling123.com/openapi/api'

const axios = require('axios')

router.post('/',auth, async(req,res)=>{
    let people = req.session.user._id
    let content = req.body.content || '你好！'
    let quers ={
            info: content,
            key:'eed20e45343a4b30a3a2172b2dc13ae6',
            userId:'431409'   
        }
        let reply = await axios.post(api,quers) 
        res.json({
            code:200,
            data:reply.data
        })
})

module.exports = router