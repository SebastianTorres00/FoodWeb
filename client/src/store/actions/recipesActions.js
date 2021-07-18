import axios from "axios"
import { RECIPES } from "../../const"
// import { search } from "../../components/recipes/form-recipes.jsx"
export const GET_RECIPES = "GET_RECIPES"
export const FORM_RECIPES = "FORM_RECIPES"
export const FORM_TYPE_DIETS = "FORM_TYPE_DIETS"
export const ALERT_ERROR = "ALERT_ERROR"
export const ORDER_ABC = "ORDER_ABC"
export const ORDER_SCORE = "ORDER_SCORE"

export const getRecipes = () => (dispach) => {

    axios.get(RECIPES)
        .then(recetas => {
            dispach({
                type: GET_RECIPES,
                payload: recetas.data
            })
        }).catch(error => {
            console.log(error)
        })
}



export const formRecipes = (search) => (dispach) => {

    return axios.get(`${RECIPES}/?name=${search}`)
        .then(res => {
            dispach({
                type: FORM_RECIPES,
                payload: res.data
            })
        }).catch(err => {
            console.log(err);
        })

}

export const formTypeDites = (selectChange) => (dispach) => {

    axios.get(`${RECIPES}`)
        .then(response => {
            let respond = response.data

            let dieta = respond.filter(data => data.diets.find(x => x === selectChange))

            if (dieta.length === 0) {
                dispach({
                    type: ALERT_ERROR,
                    payload: alert("Error, no se ha encontrado ninguna receta que incluya esa dieta")
                })
                return
            }
            dispach({
                type: FORM_TYPE_DIETS,
                payload: dieta
            })
        })
}


export const orderAbc = (abc, selectChange, search) => (dispach) => {
    if (selectChange === "gluten free" || selectChange === "ketogenic" || selectChange === "vegetarian" || selectChange === "lacto ovo vegetarian" || selectChange === "vegan" || selectChange === "pescetarian" || selectChange === "paleo" || selectChange === "primal" || selectChange === "whole30") {

        axios.get(`${RECIPES}`)
            .then(response => {
                let respond = response.data

                let dieta = respond.filter((data, i) => data.diets.find(x => x === selectChange))

                if (dieta.length === 0) {
                    dispach({
                        type: ALERT_ERROR,
                        payload: alert("Error, no se ha encontrado ninguna receta que incluya esa dieta")
                    })
                    return
                }

                if (abc === "ABC") {

                    dieta.sort(function (a, b) {
                        if (a.title > b.title) {
                            return 1;
                        }
                        if (a.title < b.title) {
                            return -1;
                        }
                        return 0;
                    });
                    dispach({
                        type: ORDER_ABC,
                        payload: dieta
                    })
                    return
                }

                if (abc === "DESC") {
                    dieta.sort(function (a, b) {
                        if (a.title > b.title) {
                            return 1;
                        }
                        if (a.title < b.title) {
                            return -1;
                        }
                        return 0;
                    });

                    dieta.reverse()
                    dispach({
                        type: ORDER_ABC,
                        payload: dieta
                    })
                    return
                }
            }).catch(err => {
                console.log(err);
            })

        return
    }

    if (search) {
        return axios.get(`${RECIPES}/?name=${search}`)
            .then(res => {
                let dieta = res.data

                if (abc === "ABC") {

                    dieta.sort(function (a, b) {
                        if (a.title > b.title) {
                            return 1;
                        }
                        if (a.title < b.title) {
                            return -1;
                        }
                        return 0;
                    });
                    dispach({
                        type: ORDER_ABC,
                        payload: dieta
                    })
                    return
                }

                if (abc === "DESC") {
                    dieta.sort(function (a, b) {
                        if (a.title > b.title) {
                            return 1;
                        }
                        if (a.title < b.title) {
                            return -1;
                        }
                        return 0;
                    });

                    dieta.reverse()
                    dispach({
                        type: ORDER_ABC,
                        payload: dieta
                    })
                    return
                }


            }).catch(err => {
                console.log(err);
            })
    }




    axios.get(RECIPES)
        .then(recetas => {
            let dieta = recetas.data

            if (abc === "ABC") {
                dieta.sort(function (a, b) {
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (a.title < b.title) {
                        return -1;
                    }
                    return 0;
                });
                dispach({
                    type: ORDER_ABC,
                    payload: dieta
                })
                return
            }

            if (abc === "DESC") {
                dieta.sort(function (a, b) {
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (a.title < b.title) {
                        return -1;
                    }
                    return 0;
                });

                dieta.reverse()
                dispach({
                    type: ORDER_ABC,
                    payload: dieta
                })
                return
            }

        }).catch(error => {
            console.log(error)
        })
    // dispach({
    //     type: ORDER_ABC,
    //     payload: console.log()
    // })
}



export const orderScore = (score, abc, selectChange, search) => (dispach) => {
    if (selectChange === "gluten free" || selectChange === "ketogenic" || selectChange === "vegetarian" || selectChange === "lacto ovo vegetarian" || selectChange === "vegan" || selectChange === "pescetarian" || selectChange === "paleo" || selectChange === "primal" || selectChange === "whole30") {

        axios.get(`${RECIPES}`)
            .then(response => {
                let respond = response.data

                let dieta = respond.filter((data, i) => data.diets.find(x => x === selectChange))

                if (dieta.length === 0) {
                    dispach({
                        type: ALERT_ERROR,
                        payload: alert("Error, no se ha encontrado ninguna receta que incluya esa dieta")
                    })
                    return
                }

                if (score === "ABS") {

                    dieta.sort(function (a, b) {
                        if (a.spoonacularScore > b.spoonacularScore) {
                            return 1;
                        }
                        if (a.spoonacularScore < b.spoonacularScore) {
                            return -1;
                        }
                        return 0;
                    });
                    dispach({
                        type: ORDER_SCORE,
                        payload: dieta
                    })
                    return
                }

                if (score === "DESC") {
                    dieta.sort(function (a, b) {
                        if (a.spoonacularScore > b.spoonacularScore) {
                            return 1;
                        }
                        if (a.spoonacularScore < b.spoonacularScore) {
                            return -1;
                        }
                        return 0
                    });

                    dieta.reverse()
                    dispach({
                        type: ORDER_SCORE,
                        payload: dieta
                    })
                    return
                }
            }).catch(err => {
                console.log(err);
            })

        return
    }


    if (search) {
        return axios.get(`${RECIPES}/?name=${search}`)
            .then(res => {
                let dieta = res.data

                if (score === "ABS") {
                    dieta.sort(function (a, b) {
                        if (a.spoonacularScore > b.spoonacularScore) {
                            return 1;
                        }
                        if (a.spoonacularScore < b.spoonacularScore) {
                            return -1;
                        }
                        return 0;
                    });
                    dispach({
                        type: ORDER_SCORE,
                        payload: dieta
                    })
                    return
                }

                if (score === "DESC") {
                    dieta.sort(function (a, b) {
                        if (a.spoonacularScore > b.spoonacularScore) {
                            return 1;
                        }
                        if (a.spoonacularScore < b.spoonacularScore) {
                            return -1;
                        }
                        return 0;
                    });

                    dieta.reverse()
                    dispach({
                        type: ORDER_SCORE,
                        payload: dieta
                    })
                    return
                }

            }).catch(err => {
                console.log(err);
            })
    }



    axios.get(RECIPES)
        .then(recetas => {
            let dieta = recetas.data

            if (score === "ABS") {
                dieta.sort(function (a, b) {
                    if (a.spoonacularScore > b.spoonacularScore) {
                        return 1;
                    }
                    if (a.spoonacularScore < b.spoonacularScore) {
                        return -1;
                    }
                    return 0
                });
                dispach({
                    type: ORDER_SCORE,
                    payload: dieta
                })
                return
            }

            if (score === "DESC") {
                dieta.sort(function (a, b) {
                    if (a.spoonacularScore > b.spoonacularScore) {
                        return 1;
                    }
                    if (a.spoonacularScore < b.spoonacularScore) {
                        return -1;
                    }
                    return 0
                });

                dieta.reverse()
                dispach({
                    type: ORDER_SCORE,
                    payload: dieta
                })
                return
            }

        }).catch(error => {
            console.log(error)
        })
}