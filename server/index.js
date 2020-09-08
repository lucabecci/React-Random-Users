//agregamos el paquete express, axios y cors
const express = require('express');
const axios = require('axios');
const path = require('path');

//llamando a la función express para inicializar la aplicación y configuramos cors
const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

//enviando contenido HTML con la etiqueta h1 agregándolo al objeto de respuesta cuando accedemos a la aplicación
app.get('/', (req, res) => { 
res.send("<h1> Hello World </h1>"); 
});

//obtencion de api randomuser y envio
app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10')
     .then(response => {
       res.send(response.data);
     });
   });

//iniciando el servidor express js en el puerto3000
app.listen(3000, () => { 
console.log('servidor iniciado en el puerto 3000'); 
});