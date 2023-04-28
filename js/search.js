import { recipes } from "../data/recipes.js"

var search = {
    input: document.querySelector('#search'),
    minChar: 3
};

function getRecipesBySearch() {

    // Tableau qui contiendra les recettes qui correspondent à la recherche
    var matchRecipes = [];

    // Récupèration de la valeur de l'input, convertion en minuscules et suppression des espaces avant et après
    var value = search.input.value
        .toLowerCase()
        .trim();

    // Vérification de la longueur de la valeur
    if (value.length >= search.minChar) {

        // Passage de la valeur (string) en mots clés (array[string])
        var keyWords = value.split(' ');

        // Parcours des recettes 
        for (var i = 0; i < recipes.length; i++) {

            var recipe = recipes[i];
            var valid = true;

            // Parcours des mots clés 
            for (var j = 0; j < keyWords.length; j++) {
            
                var keyWord = keyWords[j];

                // Vérification de l'absence du mot clé dans le nom et la description de la recette
                if (!recipe.name.toLowerCase().includes(keyWord) && !recipe.description.toLowerCase().includes(keyWord)) {

                    var hasIngredient = false;

                    // Parcours des ingrédients
                    for (var k = 0; k < recipe.ingredients.length; k++) {

                        var ingredient = recipe.ingredients[k];

                        // Vérification de la présence du mot clé dans l'ingrédient
                        if (ingredient.ingredient.toLowerCase().includes(keyWord)) {
                            hasIngredient = true;
                            break;
                        }
                    }
                    // Vérification de la présence du mot clé dans au moins un des ingrédients
                    if (!hasIngredient) {
                        valid = false;
                        break;
                    }
                }
            } 
            // Vérification de la présence de tous les mots clés dans la recette
            if (valid) {
                // Ajout de la recette dans le tableau de recettes qui sera renvoyé lorsque toutes les recettes auront été parcourus
                matchRecipes.push(recipe);
            }
        }
        return matchRecipes; 
    }   
    return recipes;     
}


export { search, getRecipesBySearch }