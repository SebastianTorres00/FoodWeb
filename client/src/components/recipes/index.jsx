import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IMG_ALT } from "../../const"
import { getRecipes } from "../../store/actions/recipesActions"
// import Details from "../details";
import React from "react";
import { Link } from "react-router-dom";
import RecipesForm from "./form-recipes";
import "./index.css"
import "../../../src/all.css"
function Recipes() {
    //Inicio Paginado






    //Fin paginado

    const dispatch = useDispatch()
    let recipe = useSelector(store => store.recipes)

    const [num, setNum] = useState(1)

    const page = (e) => {
        e.preventDefault()
        setNum(e.target.value)
    }

    if (parseInt(num) === 1) {
        if (recipe) {
            recipe = recipe.slice(0, 9)
        }
    }

    if (parseInt(num) === 2) {
        if (recipe) {
            recipe = recipe.slice(9, 19)
        }
    }

    if (parseInt(num) === 3) {
        if (recipe) {
            recipe = recipe.slice(19, 29)
        }
    }

    if (parseInt(num) === 4) {
        if (recipe) {
            recipe = recipe.slice(29, 39)
        }
    }

    if (parseInt(num) === 5) {
        if (recipe) {
            recipe = recipe.slice(39, 49)
        }
    }

    if (parseInt(num) === 6) {
        if (recipe) {
            recipe = recipe.slice(49, 59)
        }
    }

    if (parseInt(num) === 7) {
        if (recipe) {
            recipe = recipe.slice(59, 69)
        }
    }

    if (parseInt(num) === 8) {
        if (recipe) {
            recipe = recipe.slice(69, 79)
        }
    }

    if (parseInt(num) === 9) {
        if (recipe) {
            recipe = recipe.slice(79, 89)
        }
    }

    if (parseInt(num) === 10) {
        if (recipe) {
            recipe = recipe.slice(89, 99)
        }
    }

    useEffect(() => {
        dispatch(getRecipes())
    }, [])





    const callRecipes = e => {
        e.preventDefault();
        dispatch(getRecipes())
    }

    return (

        <div className="cards">

            <form className="form-recipe-btn">
                <Link to="/home/create" className="form-crear-receta">Crear receta</Link>
            </form>

            <RecipesForm />

            <form onSubmit={callRecipes} className="form-btn-all-recipes">
                <button type="submit" className="btn-all-recipes">Todas las recetas</button>
            </form>
            <div>
                <form className="form-pag">
                    <button onClick={page} value="1" className="btn-pag">1</button>
                    <button onClick={page} value="2" className="btn-pag">2</button>
                    <button onClick={page} value="3" className="btn-pag">3</button>
                    <button onClick={page} value="4" className="btn-pag">4</button>
                    <button onClick={page} value="5" className="btn-pag">5</button>
                    <button onClick={page} value="6" className="btn-pag">6</button>
                    <button onClick={page} value="7" className="btn-pag">7</button>
                    <button onClick={page} value="8" className="btn-pag">8</button>
                    <button onClick={page} value="9" className="btn-pag">9</button>
                    <button onClick={page} value="10" className="btn-pag">10</button>
                </form>
            </div>
            {
                typeof recipe !== 'string' ? recipe.map((receta) => {
                    return (

                        receta === null ? null : <div key={receta.id} className="card">
                            <div id="div-two">

                                <img src={receta.image} alt={IMG_ALT} className="card-image" />
                                {
                                    receta.title === null ? <h2 className="card-title">Titulo : No se encuentra titulo disponible</h2> : <h1 className="card-title"> {receta.title}</h1>
                                }
                                {
                                    receta.diets.length < 1 ? <h2 className="card-dieta"> Dieta : No se encuentra dieta disponible</h2> : <h2 className="card-dieta">Dieta: {receta.diets}</h2>
                                }
                                <div className="link-detalles">
                                    <Link className="link" to={`/home/details/${receta.id}`} >Detalles</Link>
                                </div>

                            </div>
                        </div>

                    )
                }) : <h1>No se ha encontrado comidas. Tal vez hiciste algo mal, o tal vez no ... O tal vez si</h1>
            }
            <div>
                <form className="form-pag">
                    <button onClick={page} value="1" className="btn-pag">1</button>
                    <button onClick={page} value="2" className="btn-pag">2</button>
                    <button onClick={page} value="3" className="btn-pag">3</button>
                    <button onClick={page} value="4" className="btn-pag">4</button>
                    <button onClick={page} value="5" className="btn-pag">5</button>
                    <button onClick={page} value="6" className="btn-pag">6</button>
                    <button onClick={page} value="7" className="btn-pag">7</button>
                    <button onClick={page} value="8" className="btn-pag">8</button>
                    <button onClick={page} value="9" className="btn-pag">9</button>
                    <button onClick={page} value="10" className="btn-pag">10</button>
                </form>
            </div>
        </div >

    )

}


export default Recipes