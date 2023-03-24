import { filters } from './getter.js'
import { updateRecipeList } from './recipes.js'

const displayFilters = (type, items) => {

    filters[type].container.innerHTML = ''

    items.forEach( item => {

        const li = Object.assign(
            document.createElement('li'), { 
                className: 'filter',
                innerHTML: item,
            },
        )

        li.setAttribute( 'data-type', type )
        li.addEventListener( 'click', () => selectFilter(li) )

        filters[type].container.appendChild(li)   
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

    updateFilterList(type)
    updateRecipeList()
}

const closeTag = (tag, type, value) => { 

    const index = filters[type].active.indexOf(value)
    filters[type].active.splice(index, 1)

    tag.remove()

    updateFilterList(type)
    updateRecipeList()
}

const updateFilterList = (type) => {
    
    const value = filters[type].input.value.toLowerCase().trim()

    const match = filters[type].all
        .filter( filter => !filters[type].active.includes(filter) && filter.toLowerCase().includes(value) )

    displayFilters(type, match)
}

export { displayFilters, updateFilterList }