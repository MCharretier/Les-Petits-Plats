import { recipes } from "../data/recipes.js"

const search = {
    input: document.querySelector('#search'),
    minChar: 3
}

const getRecipesBySearch = () => {

    let matchRecipes = []
    
    const value = search.input.value
        .toLowerCase()
        .trim()

    if (value.length >= search.minChar) {

        recipes.forEach( recipe => {

            if ( recipe.name.toLowerCase().includes(value) ) {
                matchRecipes.push(recipe)
            }
            else if ( recipe.description.toLowerCase().includes(value) ) {
                matchRecipes.push(recipe)
            }
            else {
                recipe.ingredients.some( ingredient => {
                    if ( ingredient.ingredient.toLowerCase().includes(value) ) {
                        matchRecipes.push(recipe)
                        return true
                    }
                    return false
                } )
            }
        } )

        return matchRecipes
    }

    return recipes
}

export { search, getRecipesBySearch }