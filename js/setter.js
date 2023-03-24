const  setRecipes = (recipes) => {

    recipes.forEach( recipe => {

        const card = Object.assign(
            document.createElement('div'), { 
                className: 'recipe'
            }
        )

        const imageContainer = Object.assign(
            document.createElement('div'), { 
                className: 'image-container'
            }
        )

        card.appendChild(imageContainer)

        const content = Object.assign(
            document.createElement('div'), { 
                className: 'content'
            }
        )

        const top = Object.assign(
            document.createElement('div'), { 
                className: 'top'
            }
        )

        const h2 = Object.assign(
            document.createElement('h2'), { 
                innerHTML: recipe.name
            }
        )

        top.appendChild(h2)

        const time = Object.assign(
            document.createElement('div'), { 
                className: 'time'
            }
        )

        const img = Object.assign(
            document.createElement('img'), { 
                src: './assets/images/time.svg',
                alt: ''
            }
        )

        time.appendChild(img)

        const span = Object.assign(
            document.createElement('span'), { 
                innerHTML: recipe.time + ' min'
            }
        )

        time.appendChild(span)
        top.appendChild(time)
        content.appendChild(top)

        const bottom = Object.assign(
            document.createElement('div'), { 
                className: 'bottom'
            }
        )

        const ul = Object.assign(
            document.createElement('ul'), { 
                className: 'ingredients-list'
            }
        )

        recipe.ingredients.forEach( ingredient => {

            const li = Object.assign(
                document.createElement('li'), { 
                    className: 'ingredients-list-item',
                    innerHTML: `${ingredient?.quantity ?? ''} ${ingredient?.unit ?? ''}`
                }
            )

            const strong = Object.assign(
                document.createElement('strong'), { 
                    innerHTML: `${ingredient.ingredient} ${ingredient?.quantity ? ' :' : ''}`
                }
            )

            li.prepend(strong)
            ul.appendChild(li)
        } )

        bottom.appendChild(ul)

        const p = Object.assign(
            document.createElement('p'), { 
                innerHTML: recipe.description.length <= 170 ? recipe.description : recipe.description.substring(0, 170) + '...'
            }
        )

        bottom.appendChild(p)
        content.appendChild(bottom)
        card.appendChild(content)

        document.querySelector('.recipes').appendChild(card)
    } )
}

export { setRecipes }