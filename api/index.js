const express = require('express');
const mongoose = require('mongoose');

require("dotenv").config();
const {MONGODB_URI, PRUEBA} = process.env;

const uri = MONGODB_URI;
const prueba = PRUEBA;

const app = express();
const port = process.env.PORT || 3000;

//rutas
app.get("/", (res, req) => {
    res.send("Mensaje de prueba");
});

// mongodb connection
mongoose
    .connect(MONGODB_URI)
    .then(()=> console.log("connected to mongodb atlas"))
    .catch((error)=> console.log(error));

app.listen(port, () => {
    console.log('Server is running on port 3000');
});