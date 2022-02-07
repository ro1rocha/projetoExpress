const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Olá mundo vivo!");
});
app.listen(3000, () => 
console.log("Servidor executando"));
