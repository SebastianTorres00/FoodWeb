
import { useEffect, useState } from "react"
import { formRecipes, formTypeDites, orderAbc, orderScore } from "../../store/actions/recipesActions"
import { useDispatch } from "react-redux";
import axios from "axios";
import { TYPES } from "../../const";
import "./form-recipes.css"


export function RecipesForm() {

    // Input
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length > 3) {
            dispatch(formRecipes(search))
        }
        e.target.reset();
    }
    const handleChange = e => {
        setSearch(e.target.value)
    }
    // Fin Input

    // Dietas
    const [diets, setDiets] = useState()

    const [selectChange, setSelectChange] = useState("")

    useEffect(() => {
        axios.get(TYPES)
            .then(response => {
                setDiets(response.data)
            })
    }, [])

    const handleChangeSelect = (e) => {
        setSelectChange(e.target.value)
    }

    const handleSubmitSelect = (e) => {
        if (selectChange !== "Default") {
            dispatch(formTypeDites(selectChange))
        }
        e.preventDefault()
    }

    //Fin dieta

    // Ordenar por abc
    const [abc, setAbc] = useState("")
    const handleChangeAbc = (e) => {
        setAbc(e.target.value)
    }

    const handleSubmitAbc = (e) => {
        dispatch(orderAbc(abc, selectChange, search))
        e.preventDefault()
    }

    //Fin ordenamiento por ABC

    // Ordenar por Score
    const [score, setScore] = useState("")

    const handleChangeScore = (e) => {
        setScore(e.target.value)
    }

    const handleSubmitScore = e => {
        e.preventDefault()
        dispatch(orderScore(score, abc, selectChange, search))
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className="form">
                <input name="search" type="text" onChange={handleChange} placeholder="Buscar una receta " className="form-input" />
                <button type="submit" className="form-btn">Enviar</button>
            </form>


            <form onSubmit={handleSubmitSelect} className="form-dietas">
                <h1 className="h1-dietas"><label>Elige tus dietas  </label></h1>
                <select onChange={handleChangeSelect} className="select-dietas">
                    <option value="Default" className="option-default">Seleccione</option>
                    {diets ? diets.map(opcion => (
                        <option key={opcion.id} value={opcion.name} className="options-dietas">{opcion.name}</option>
                    )) : null}
                </select>
                <button type="submit" className="form-diets-btn">Buscar</button>

            </form>

            <form onSubmit={handleSubmitAbc} className="form-a-z">
                <h1 className="h1-a-z"><label>Ordenar A-Z | | Z-A </label></h1>
                <select onChange={handleChangeAbc} className="select-a-z">
                    <option value="Default">Seleccione</option>
                    <option value="ABC">A-Z</option>
                    <option value="DESC">Z-A</option>
                </select>
                <button type="submit" className="form-a-z-btn">Enviar</button>
            </form>



            <form onSubmit={handleSubmitScore} className="form-score">
                <h1 className="h1-score"><label>Puntacion</label></h1>
                <select onChange={handleChangeScore} className="form-select">
                    <option value="Default">None</option>
                    <option value="ABS">ascendentemente</option>
                    <option value="DESC">descendentemente</option>
                </select>
                <button type="submit" className="form-score-btn">Enviar</button>
            </form >
        </div >
    )

}


export default RecipesForm