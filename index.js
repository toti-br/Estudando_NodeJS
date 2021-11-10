const express = require("express");
const app = express()

//usamos o camando a baixo para conectar o indedex com o arquivo User.js
const mongoose = require("mongoose")
const User = require("./models/User")
mongoose.connect("mongodb+srv://martaTonet:Constantina1!@cluster0.achaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology: true})

app.use(express.json())
//conetar ao arquivo usuário.js
const rota = require("./routes/usuario")
app.use("/users", rota)


//usamos o req para pedir ou uma atualização de novos dados inseridos
app.get('/',(req, res)=>{
    console.log("Metodo get foi chamado")
    res.send("Olá Mundo")
})

//usado para criar um caminho uma rota.
app.get('/rota',(req, res)=>{
    console.log("Metodo get foi chamado na rota")
    res.send("Estou dentro da rota")
})

//usado para retornar erro de requisição
//usamos "/nome do caminho/nome do caminho" para colocar um caminho dentro do outro no navegador
app.get('/rota/erro',(req, res)=>{
    console.log("Metodo get foi chamado para exibir erro")
    res.status(404).send("Não consegui achar!")
})

// usado para retornae mensagem de sucesso
app.get('/sucesso',(req, res)=>{
    console.log("Metodo get foi chamado para exibir sucesso")
    res.status(202).send("Encontrei!")
})


//para fazer uma requisição de dados
app.get('/:id',(req, res)=>{
    const id = req.params.id
    res.send(`Nome obtido pelo usuário : ${id}`)
})



app.post("/cadastro", async (req, res) => {
	const user = new User({
		nome: req.body.nome,
		sobrenome: req.body.sobrenome,
        idade: req.body.idade,
	})
	await user.save()
	res.send(user)
})

app.listen(3030)
