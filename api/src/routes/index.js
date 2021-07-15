const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Recipes = require("./recipes")
const Types = require("./types")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const router = Router();


router.use("/recetas", Recipes)
router.use("/types", Types)


module.exports = router;
