const express = require("express");
const rotasProdutos = require('./rotas/rotasProdutos');
let app = express();

app.get("/", (req, res) => {
    res.send("Olá mundo vivo!");
});
app.get('/contato', (req, res)=>res.send("Pagina de contatos"));
//app.get('/produtos/:id?', (req, res)=>{
//    let {id} = req.params;
//    res.send("Eu tenho um produto com o id: " + id)
//});

app.use('/produtos', rotasProdutos);

app.listen(3000, () => 
console.log("Servidor executando"));
