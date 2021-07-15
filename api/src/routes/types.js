const { Router } = require('express');




const { getAllOther } = require("../controllers/types")

const router = Router();


router.get("/", getAllOther)

module.exports = router;