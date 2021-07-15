const { Other } = require('../db.js');
const { dietTypes } = require("../utils/config")


async function getAllOther(req, res, next) {

    dietTypes.map(dieta => {
        Other.findOrCreate({ where: { name: dieta } });
    })

    const result = await Other.findAll()
    return res.send(result)
}

module.exports = {
    getAllOther
}