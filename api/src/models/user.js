const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

// SaltRounds es la cantidad de veces que bcrypt hashea la password
require("dotenv").config();
const saltRounds = process.env.SALT_ROUNDS

// Creando el schema (model)
const userSchema = mongoose.Schema({
    name:{ type: String, required: true },
    email: { type: String, required: true },
    password:{ type: String, required: true },
})


// Funcion para encriptar contraseña antes de guardarla en la base de datos
/* 
userSchema.pre('save', function(next) {
    if(this.isNew || this.isModified('password')){

        const document = this;

        bcrypt.hash(document.password, saltRounds, (err, hashedPassword)=>{

            if (err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }

        })
    }else{
        next();
    }
});
 */

// Funcion para compara contraseñas en login
userSchema.methods.isCorrectPassword = (password, callback) =>{

    bcrypt.compare(password, this.password, (err, same)=>{
        if(err){
            callback(err)
        }else{
            callback(err,same)
        }
    })

}

module.exports = mongoose.model('User', userSchema);