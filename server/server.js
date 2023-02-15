const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')

// Run server

app.listen(PORT, () => {
    console.log('Server run at port ' + PORT)
})

// Configuracion para peticiones cruzadas y lectura de POST
app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Mongoose config

re

// Rutas