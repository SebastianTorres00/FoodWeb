import axios from "axios";
import { useEffect, useState } from "react";
import { IMG_ALT, RECIPES } from "../const";
import { Link } from "react-router-dom";
import "../../src/components/recipes/detalles.css"
function Details(props) {
    let id = props.match.match.params.id
    console.log(props.match.match.params.id);
    const [response, setResponse] = useState([])

    function getResponse() {
        return axios.get(`${RECIPES}/${id}`)
            .then(recetas => setResponse(recetas.data))
    }

    useEffect(() => {
        getResponse()
    }, [])

    return (
        <div className="div-detalles">
            <div className="div-detalles-up">
                <h1 className="detalles-home">
                    <Link to="/home" className="link-detalles-home">Back home</Link>
                </h1>
                <img src={response.image} alt={IMG_ALT} className="img-detalles" />
                <h1 className="h1-title-detalles">{response.title}</h1>
                <h2 className="h3-dieta-detalles">Dieta :  {response.diets !== undefined ? response.diets : <h2>No se ha encontrado</h2>}</h2>
                <h2 className="h3-plato-detalles">Plato:  {response.dishTypes !== undefined ? response.dishTypes : <h1>No se ha encontrado</h1>}</h2>
                <h3 className="p-resumen-detalles">{response.summary !== undefined ? response.summary.replace(/(<([^>]+)>)/ig, '') : <h1>No se ha encontrado</h1>} </h3>
                <h1 className="h1-puntos-detalles">Puntacion :  {response.spoonacularScore !== undefined ? response.spoonacularScore : <h1>No se ha encontrado</h1>}</h1>
                <h2 className="h2-lvl">Nivel de comida saludable : {response.healthScore !== undefined ? response.healthScore : <h2>No se ha encontrado</h2>}</h2>
                <p className="p-intru-detalle">Detalles : {response.instructions && response.instructions.replace(/(<([^>]+)>)/ig, '')} No se han encontrado</p>
            </div>
        </div>
    )
}


export default Details