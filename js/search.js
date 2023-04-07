import { recipes } from "../data/recipes.js"

const search = {
    input: document.querySelector('#search'),
    minChar: 3
}

const getRecipesBySearch = () => {

    let matchRecipes = new Set()

    const value = search.input.value
        .toLowerCase()
        .trim()

    if (value.length >= search.minChar) {

        const keyWords = value.split(' ')

        recipes.forEach( recipe => {

            keyWords.some( keyWord => {

                if ( recipe.name.toLowerCase().includes(keyWord) ) {
                    matchRecipes.add(recipe)
                    return true
                } 
                else if ( recipe.description.toLowerCase().includes(keyWord) ) {
                    matchRecipes.add(recipe)
                    return true
                } 
                else {
                    return recipe.ingredients.some( ingredient => {

                        if ( ingredient.ingredient.toLowerCase().includes(keyWord) ) {
                            matchRecipes.add(recipe)
                            return true
                        }
                        return false
                    })
                }
            })
        })

        return [...matchRecipes]
    }

    return recipes
}

export { search, getRecipesBySearch }