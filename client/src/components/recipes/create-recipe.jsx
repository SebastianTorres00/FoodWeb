import { Fragment, useState } from "react"
import { Link } from "react-router-dom";
import "./create.css"


function Create() {


    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        summary: "",
        aggregateLikes: 0,
        healthScore: 0,
        instructions: "",
        diets: ""
    })
    const handleSubmit = e => {
        e.preventDefault();

        if (!recipe.title || !recipe.image || !recipe.summary || recipe.aggregateLikes < 1 || recipe.healthScore < 1 || !recipe.instructions || !recipe.diets) {
            return
        }
        e.target.reset();
    }
    const handleChange = e => {
        // 
        // e.target.value
        console.log(recipe.diets)
        if (e.target.name === "diets") {
            if (recipe.diets !== "") {
                let data = `${recipe.diets}, ${e.target.value}`
                setRecipe({
                    ...recipe,
                    [e.target.name]: data
                })
                return
            }
            setRecipe({
                ...recipe,
                [e.target.name]: e.target.value
            })
        }
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }


    async function handle() {

        if (!recipe.title || !recipe.image || !recipe.summary || recipe.aggregateLikes < 1 || recipe.healthScore < 1 || !recipe.instructions || !recipe.diets) {
            alert("Posiblemente te falta agregar un campo")
            return
        }

        // e.target.reset();

        alert(`${recipe.title} Creada`)
        try {
            let config = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(recipe)
            }
            let res = await fetch("http://localhost:3001/recetas/created", config)


        } catch (error) {
            console.log(error)
        }
    }

    // console.log(recipe)
    return (
        <Fragment>
            <h1 className="h1-form-create">Crea tu comida</h1>

            <form onSubmit={handleSubmit} className="form-create">
                <h1 className="form-create-link">
                    <Link to="/home" className="create-link">Back home</Link>
                </h1>
                <div className="form-create-div-name">
                    <label className="form-create-label-name">Nombre de la receta</label>
                    <input type="text" name="title" onChange={handleChange} className="form-create-input-name" required />
                </div>

                <div className="form-create-div-image">
                    <label className="form-create-label-image">Colocá una imagen</label>
                    <input type="text" name="image" onChange={handleChange} placeholder="Link de la imagen" className="form-create-input-image" />
                </div>

                <div className="form-create-div-resume-plato">
                    <label className="form-create-label-resume">Resumen del plato</label>
                    <input type="text" name="summary" onChange={handleChange} className="form-create-input-resume" />
                </div>

                <div className="form-create-div-points-plato">
                    <label className="form-create-label-point">Puntación del plato</label>
                    <input type="number" name="aggregateLikes" onChange={handleChange} className="form-create-input-points" />
                </div>

                <div className="form-create-div-healt-plato">
                    <label className="form-create-label-healt">Nivel de "Comida saludable"</label>
                    <input type="number" name="healthScore" onChange={handleChange} className="form-create-input-healt" />
                </div>

                <div className="select-div-form-create">
                    <label className="form-create-label-señect">Elige las dietas</label>
                    <div className="all-select-div">

                        <select name="diets" onChange={handleChange} className="select-option">
                            <option value="">Seleccione</option>
                            <option value="gluten">gluten</option>
                        </select>
                        <select onChange={handleChange} name="diets" className="select-option">
                            <option value="">Seleccione</option>
                            <option value="ketogenic">ketogenic</option>
                        </select>
                        <select name="diets" onChange={handleChange} className="select-option">
                            <option value="">Seleccione</option>
                            <option value="vegetarian">vegetarian</option>
                        </select>
                        <select name="diets" onChange={handleChange} className="select-option">
                            <option value="">Seleccione</option>
                            <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                        </select>
                        <select name="diets" onChange={handleChange} className="select-option">
                            <option value="">Seleccione</option>
                            <option value="vegan">vegan</option>
                        </select>
                        <select name="diets" onChange={handleChange} className="select-option">
                            <option value="">Seleccione</option>
                            <option value="pescetarian">pescetarian</option>
                        </select>
                        <select name="diets" onChange={handleChange} className="select-option">
                            <option value="">Seleccione</option>
                            <option value="paleo">paleo</option>
                        </select>
                        <select name="diets" onChange={handleChange} className="select-option">
                            <option value="">Seleccione</option>
                            <option value="primal">primal</option>
                        </select>
                        <select name="diets" onChange={handleChange} className="select-option">
                            <option value="">Seleccione</option>
                            <option value="whole30">whole30</option>
                        </select>
                    </div>

                </div>
                <label className="form-create-label-resume">Paso a paso</label>
                <textarea name="" id="" cols="50" rows="5" onChange={handleChange} name="instructions" className="tex-area"></textarea>

                <button onClick={handle} className="btn-text-area">Enviar receta!</button>

            </form >
            <div className="form-create-img">
                <div className="form-create-img-img"></div>
            </div>
        </Fragment>
    )

}


export default Create