const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// post user
router.post('/users/register', (req, res) => {

    const user = userSchema(req.body);

    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});



// user por email para login
// user por email para login
router.get("/users/login", (req, res) => {
    const email = req.query.email; // Obtener el parámetro email de la solicitud
    userSchema
        .findOne({ email: email })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})




// get all users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})






/* EJEMPLO TRY CATCH

router.post('/users', async (req, res) => {
    try {
        const user = userSchema(req.body);
        const data = await user.save();
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }
});
*/

module.exports = router;