import { recipes } from '../data/recipes.js'

const getAllIngredients = () => {
    let ingredients = []
    recipes.forEach( recipe => {
        recipe.ingredients.forEach( item => {
            if ( !ingredients.includes(item.ingredient) ) ingredients.push(item.ingredient)
        } )
    } ) 
    return ingredients
}

const getAllAppliances = () => {
    let appliances = []
    recipes.forEach( recipe => {
        if ( !appliances.includes(recipe.appliance) ) appliances.push(recipe.appliance)
    } )
    return appliances
}

const getAllUstensils = () => {
    let ustensils = []
    recipes.forEach( recipe => {
        recipe.ustensils.forEach( ustensil => {
            if ( !ustensils.includes(ustensil) ) ustensils.push(ustensil)
        } )
    } ) 
    return ustensils
}

export { getAllIngredients, getAllAppliances, getAllUstensils }