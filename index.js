'use strict'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//exportamos los controladores
var c_empleados = require('./controllers/c_empleados');
var calculo = require('./controllers/calculo');

var route = express.Router();
app.get('/',function(req,res){
     res.status(200).json("Prueba de API REST en Nodejs y MySql");
});

app.route('/empleados')
.get(c_empleados.get_empleados)
.post(c_empleados.crear_empleados)
.put(c_empleados.update_empleados)
.delete(c_empleados.delete_empleados);

app.route('/calculo')
.post(calculo.calculo_sueldo);

app.listen(PORT,function(){
    console.log(`API corriendo en htt://localhost:${PORT}`);
});
