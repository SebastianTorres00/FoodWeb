const { Router } = require('express');



// updateRecipes, deleteRecipes
const { getAllRecipes, getById, addRecipes } = require("../controllers/recipies")

const router = Router();


router.get("/", getAllRecipes)
router.get("/:id", getById)
router.post("/created", addRecipes)

module.exports = router;