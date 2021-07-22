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
import ReactPlayer from "react-player";


function Recipes() {

    const dispatch = useDispatch()
    let recipe = useSelector(store => store.recipes)


    let data = recipe
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
    const paginado = Math.floor(data.length / 10)

    const arr = []
    for (let i = 1; i <= paginado; i++) {
        arr.push(i)
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
                    {arr.map(i => {
                        return <button onClick={page} value={i} className="btn-pag">{i}</button>
                    })}
                </form>
            </div>
            {
                typeof recipe === 'string' || recipe[0] === [] || recipe.length === 0 ?
                    <div className="video">
                        <h1 className="text-video">Se han acabado las peticiones a la api, te recomiendo ver este video para saber su funcionalidad con normalidad.</h1>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=j4XQg1PL2wM"
                            width="600px"
                            height="400px"
                            controls
                            playing
                            muted
                        />
                    </div> : recipe.map((receta) => {
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
                    })
            }
            <div>
                <form className="form-pag">
                    {arr.map(i => {
                        return <button onClick={page} value={i} className="btn-pag">{i}</button>
                    })}
                </form>
            </div>
        </div >

    )

}


export default Recipes