// const link = `https://api.spoonacular.com/recipes/complexSearch`

const axios = require("axios")
const { Recipe } = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const { API_KEY_TWO, API_KEY } = require("../utils/config/index")

const number = 99;
function getAllRecipes(req, res, next) {
    if (!req.query.name) {
        const dbRecipes = Recipe.findAll();
        const apiRecipes = axios.get(`https://api.spoonacular.com/recipes/complexSearch?${API_KEY_TWO}&number=${number}&addRecipeInformation=true`);
        Promise.all([dbRecipes, apiRecipes])
            .then((result) => {
                const [myRecipesResult, apiRecipesResult] = result
                const response = myRecipesResult.concat(
                    apiRecipesResult.data.results
                );
                return res.status(200).json(response)
            })
            .catch(err => next(err))
    } else {
        let { name } = req.query
        const dbRecipes = Recipe.findAll();
        const apiRecipes = axios.get(`https://api.spoonacular.com/recipes/complexSearch?${API_KEY_TWO}&number=${number}&addRecipeInformation=true&query=${name}`);

        console.log(name);
        Promise.all([dbRecipes, apiRecipes])
            .then(result => {
                const [myRecipesResult, apiRecipesResult] = result
                const response = myRecipesResult.concat(apiRecipesResult.data.results);

                let recipes = []
                if (response.length >= 9 || response.length <= 9 && response.length >= 1) {
                    if (response.length <= 9) {
                        for (let i = response.length; i > 0; i--) {
                            recipes.push(response[i])
                        }
                        return res.status(200).json(recipes)
                    }
                    for (let i = 9; i > 0; i--) {
                        recipes.push(response[i])
                    }
                    return res.status(200).json(recipes)
                }
            })
            .catch(err => next(err))

    }
}

function getById(req, res, next) {
    let { id } = req.params;
    let promise = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)

    if (promise) {
        Recipe.findByPk(id)
            .then(result => {
                let datos = {
                    title: result.title,
                    image: result.image,
                    diets: result.diets,
                    summary: result.summary,
                    healthScore: result.healthScore,
                    aggregateLikes: result.spoonacularScore,
                    instructions: result.instructions
                }
                if (!datos.title || !datos.image || !datos.diets) {
                    res.status(404).json("Algo malio sal")
                }
                console.log(datos)
                return datos

            }).then(data => res.status(200).json(data)).catch(err => "Error")
    } else {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?${API_KEY_TWO}`)
            .then(result => {
                let datos = {
                    title: result.data.title,
                    image: result.data.image,
                    diets: result.data.diets,
                    dishTypes: result.data.dishTypes,
                    summary: result.data.summary,
                    healthScore: result.data.healthScore,
                    aggregateLikes: result.data.spoonacularScore,
                    instructions: result.data.instructions
                }
                if (!datos.title || !datos.image || !datos.diets || !datos.dishTypes) {
                    res.status(404).json("Algo malio sal")
                }
                console.log(datos)
                res.status(200).json(datos)
            }).catch(err => next("Algo malio sal"))
    }
}

function addRecipes(req, res, next) {
    const recipe = req.body

    Recipe.create({
        ...recipe,
        id: uuidv4()
    })
        .then(recipe => res.status(200).json(recipe))
        .catch(err => next("err"))
}



module.exports = {
    getAllRecipes,
    getById,
    addRecipes
}

