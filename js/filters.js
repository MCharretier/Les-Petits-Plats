import { filters } from './getter.js'
import { updateRecipeList } from './recipes.js'

const displayFilters = () => {

    Object.values(filters).forEach( filter => {

        filter.container.innerHTML = ''

        filter.displayed.forEach( item => {

            const li = Object.assign(
                document.createElement('li'), { 
                    className: 'filter',
                    innerHTML: item,
                }
            )
    
            li.setAttribute( 'data-type', filter.type )
            li.addEventListener( 'click', () => selectFilter(li) )
    
            filter.container.appendChild(li) 
        } )
    } )
}

const selectFilter = (filter) => {

    const type = filter.getAttribute('data-type')
    filters[type].active.push( filter.innerHTML )

    const span = Object.assign(
        document.createElement('span'), { 
            className: 'tag ' + type,
            innerHTML: filter.innerHTML
        }
    )

    const button = Object.assign(
        document.createElement('button'), {
            className: 'close-tag'
        }
    )
    button.addEventListener( 'click', () => closeTag( span, type, filter.innerHTML ) ) 

    const img = Object.assign(
        document.createElement('img'), {
            src: './assets/images/cross.svg',
            alt: 'Retirer ce filtre'
        }
    )

    document.querySelector('.tags')
        .appendChild(span)
        .appendChild(button)
        .appendChild(img)

    updateFilterLists()
}

const closeTag = (tag, type, value) => { 

    const index = filters[type].active.indexOf(value)
    filters[type].active.splice(index, 1)

    tag.remove()

    updateFilterLists()
}

const updateFilterLists = () => {

    const recipes = updateRecipeList()

    Object.values(filters).forEach( filter => {
        filter.displayed = []
    } )

    recipes.forEach( recipe => {

        recipe.ingredients.forEach( item => {
            if ( !filters.ingredients.displayed.includes(item.ingredient) ) filters.ingredients.displayed.push(item.ingredient)
        } )
    
        if ( !filters.appliances.displayed.includes(recipe.appliance) ) filters.appliances.displayed.push(recipe.appliance)
    
        recipe.ustensils.forEach( ustensil => {
            if ( !filters.ustensils.displayed.includes(ustensil) ) filters.ustensils.displayed.push(ustensil)
        } )
    } )

    Object.values(filters).forEach( filter => {

        const value = filter.input.value
            .toLowerCase()
            .trim()

        filter.displayed = filter.displayed
            .filter( item => !filter.active.includes(item) && item.toLowerCase().includes(value) )
    } )

    displayFilters()
}

export { displayFilters, updateFilterLists }