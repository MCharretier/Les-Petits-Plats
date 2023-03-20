import { getAllIngredients, getAllAppliances, getAllUstensils } from './getter.js'

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
}

const closeTag = (tag, type, value) => { 

    const index = filters[type].active.indexOf(value)
    filters[type].active.splice(index, 1)

    tag.remove()

    updateFilterList(type)
}

const updateFilterList = (type) => {
    
    const value = filters[type].input.value.toLowerCase().trim()

    const match = filters[type].all
        .filter( filter => !filters[type].active.includes(filter) && filter.toLowerCase().includes(value) )

    displayFilters(type, match)
}

export { filters, displayFilters, updateFilterList }