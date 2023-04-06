import { recipes } from "../data/recipes.js"

var search = {
    input: document.querySelector('#search'),
    minChar: 3
};

function getRecipesBySearch() {

    var matchRecipes = [];

    var value = search.input.value
        .toLowerCase()
        .trim();

    if (value.length >= search.minChar) {

        for (var i = 0; i < recipes.length; i++) {

            var recipe = recipes[i];

            if ( recipe.name.toLowerCase().includes(value) ) {
                matchRecipes.push(recipe);
            }
            else if ( recipe.description.toLowerCase().includes(value) ) {
                matchRecipes.push(recipe);
            }
            else {
                for (var j = 0; j < recipe.ingredients.length; j++) {

                    var ingredient = recipe.ingredients[j];

                    if ( ingredient.ingredient.toLowerCase().includes(value) ) {
                        matchRecipes.push(recipe);
                        break;
                    }
                }
            }
        }
        return matchRecipes;
    }
    return recipes;
}

export { search, getRecipesBySearch }