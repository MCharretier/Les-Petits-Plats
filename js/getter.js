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

let filters = {
    ingredients: {
        type: 'ingredients',
        container: document.querySelector('.ingredients .dropdown-menu-list'),
        input: document.querySelector('#search-ingredients'),
        all: getAllIngredients(),
        active: []
    },
    appliances: {
        type: 'appliances',
        container: document.querySelector('.appliances .dropdown-menu-list'),
        input: document.querySelector('#search-appliances'),
        all: getAllAppliances(),
        active: []
    },
    ustensils: {
        type: 'ustensils',
        container: document.querySelector('.ustensils .dropdown-menu-list'),
        input: document.querySelector('#search-ustensils'),
        all: getAllUstensils(),
        active: []
    }
}

export { filters }