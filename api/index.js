const express     = require('express');
const mongoose    = require('mongoose');
const userRoutes  = require('./src/routes/user');
const bcrypt      = require ('bcrypt');

require("dotenv").config();
const {MONGODB_URI, PRUEBA} = process.env;


const uri = MONGODB_URI;
const prueba = PRUEBA;

const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

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
    console.log('Server is running on port', port);
});