
const auth = (req,res,next)=>{

    if( req.session.user){
        next()
    }else{
        res.json(
            {
                code:403,
                msg:'用户身份过期'
            }
        )
    }
}

module.exports = auth