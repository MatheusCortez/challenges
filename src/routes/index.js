const {Router} =  require('express')

const router = Router()


router.get('',(req,res)=>{
    res.json({message:"Funcionou"})
})

module.exports=router;