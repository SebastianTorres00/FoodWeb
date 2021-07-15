require("dotenv").config();


module.exports = {
    dietTypes: [
        "gluten free",
        "ketogenic",
        "vegetarian",
        "lacto ovo vegetarian",
        "vegan",
        "pescetarian",
        "paleo",
        "primal",
        "whole30"
    ],
    PORT: process.env.PORT || 3001,
    DB_USER: process.env.DB_USER || postgres,
    DB_PASSWORD: process.env.DB_PASSWORD || 1,
    DB_HOST: process.env.DB_HOST || localhost,
    BASE_URL: process.env.BASE_URL,
    RECIPIES_URL: process.env.RECIPIES_URL,
    API_KEY: process.env.API_KEY,
    API_KEY_TWO: process.env.API_KEY_TWO
}