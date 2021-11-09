const express = require("express");
const app = express()

app.get('/',(req, res)=>{
    console.log("Metodo get foi chamado")
    res.send("Olá Mundo")
})

app.get('/rota',(req, res)=>{
    console.log("Metodo get foi chamado na rota")
    res.send("Estou dentro da rota")
})

app.listen(3030)