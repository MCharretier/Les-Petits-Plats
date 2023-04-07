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

        for (var i = 0; i < recipes.length; i++) {

            var recipe = recipes[i];
            var found = false;

            for (var j = 0; j < keyWords.length; j++) {
            
                var keyWord = keyWords[j];

                if (recipe.name.toLowerCase().includes(keyWord)) {
                    found = true;
                    break;
                } 
                else if (recipe.description.toLowerCase().includes(keyWord)) {
                    found = true;
                    break;
                } 
                else {

                    for (var k = 0; k < recipe.ingredients.length; k++) {

                        var ingredient = recipe.ingredients[k];

                        if (ingredient.ingredient.toLowerCase().includes(keyWord)) {
                            found = true;
                            break;
                        }
                    }
                }
            }
            if (found) {
                matchRecipes.push(recipe);
            }
        }
        return matchRecipes;
    }
    return recipes;
}


export { search, getRecipesBySearch }