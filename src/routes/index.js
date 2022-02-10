const {Router} =  require('express')
const book = require('../controller/index')

const router = Router()

router.get('/',(req,res)=>{
    res.send('Para Acessar a pagina do conteudo, vá para rota "/books"')
})


router.get('/books',(req,res)=>{
    res.json(book)
})

module.exports=router;