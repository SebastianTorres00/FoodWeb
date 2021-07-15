import { ALERT_ERROR, FORM_RECIPES, FORM_TYPE_DIETS, GET_RECIPES, ORDER_ABC, ORDER_SCORE } from "../actions/recipesActions"

const initialState = {
    recipes: [], // usado
    recipesForm: [],
    recipesSelect: [],
    alert: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case FORM_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case FORM_TYPE_DIETS:
            return {
                ...state,
                recipes: action.payload
            }
        case ALERT_ERROR:
            return {
                ...state,
                alert: action.payload
            }
        case ORDER_ABC:
            return {
                ...state,
                recipes: action.payload
            }
        case ORDER_SCORE:
            return {
                ...state,
                recipes: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export default reducer