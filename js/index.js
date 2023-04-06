import { filters } from './getter.js'
import { search } from './search.js'
import { updateRecipeList } from './recipes.js'
import { updateFilterLists } from './filters.js'

const init = () => {

    const dropdownButtons = document.querySelectorAll('.dropdown-toggle')
    const dropdownMenus = document.querySelectorAll('.dropdown-menu')
    const closedropdownMenuButtons = document.querySelectorAll('.close-dropdown-menu')

    const hideDropdownMenus = () => {
        dropdownButtons.forEach(dropdownButton => {
            dropdownButton.setAttribute('aria-expanded', 'false')
        } )
        dropdownMenus.forEach(dropdownMenu => {
            dropdownMenu.setAttribute('aria-hidden', 'true')
        } )
    }

    dropdownButtons.forEach(dropdownButton => {
        dropdownButton.addEventListener('click', () => {
            hideDropdownMenus()
            const menu = dropdownButton.parentNode.querySelector('.dropdown-menu')
            menu.setAttribute('aria-hidden', 'false')
            dropdownButton.setAttribute('aria-expanded', 'true')
        } )
    } )

    closedropdownMenuButtons.forEach(closedropdownMenuButton => {
        closedropdownMenuButton.addEventListener('click', () => {
            hideDropdownMenus()
        } )
    } )

    search.input.addEventListener( 'input', () => {
        updateRecipeList()
        updateFilterLists()
    } )

    Object.values(filters).forEach( filter => {

        filter.input.addEventListener( 'input', () => {
            updateFilterLists()
        } )

        updateFilterLists()
    } )

    updateRecipeList()
}

init()