const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const str = '[{"id" : "1", "name":"Jose paredes","age":"42"},' + 
'{"id" : "2", "name":"Josepo paredes","age":"32"},' + 
'{"id" : "3", "name":"Josedo paredes","age":"22"}]';
const obj = JSON.parse(str);

const str2 = '[{"id":"1","name":"Arroz","precio" : "3.40" },' + 
'{"id":"2","name":"Leche","precio" : "4.40"},' + 
'{"id":"3","name":"Sublime","precio" : "1.40"}]';
const obj2 = JSON.parse(str2);


//Rutas

app.get("/", (req, res) => {
  
    return res.send("Bienvenido Joseph Cconislla Puma");
  
});

//Clients
app.get('/clientes', (req, res) => {
    //res.send("Peticion GET user recibida")
    res.json({
        obj
    });
});

//Products
app.get('/productos', (req, res) => {
    //res.send("Peticion GET user recibida")
    res.json({
        obj2
    });
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).render("404");
});
  

//Server


const port = 5000;

app.listen(port, () => {
  console.info(`Servidor escuchando en puerto: ${port}`);
});