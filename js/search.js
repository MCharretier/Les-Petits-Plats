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

        var keyWords = value.split(' ');

        recipes.forEach( function(recipe) {

            var found = false;

            keyWords.some( function(keyWord) {

                if (recipe.name.toLowerCase().includes(keyWord)) {
                    found = true;
                    return true;
                } 
                else if (recipe.description.toLowerCase().includes(keyWord)) {
                    found = true;
                    return true;
                } 
                else {
                    return recipe.ingredients.some( function(ingredient) {

                        if (ingredient.ingredient.toLowerCase().includes(keyWord)) {
                            found = true;
                            return true;
                        }
                        return false;
                    });
                }
            });

            if (found) {
                matchRecipes.push(recipe);
            }
        });

        return matchRecipes;
    }

    return recipes;
}

export { search, getRecipesBySearch }