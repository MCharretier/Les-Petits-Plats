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

            const valid = keyWords.every( keyWord => {
                return recipe.name.toLowerCase().includes(keyWord)
                    || recipe.description.toLowerCase().includes(keyWord)
                    || recipe.ingredients.some( ingredient => {
                        return ingredient.ingredient.toLowerCase().includes(keyWord)
                    })
            })

            if (valid) matchRecipes.add(recipe)
        })
        return [...matchRecipes]
    }

    return recipes
}

export { search, getRecipesBySearch }