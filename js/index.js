import { filters, displayFilters, updateFilterList } from './filters.js'

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

    Object.values(filters).forEach( filter => {
        filter.input.addEventListener( 'input', () => {
            updateFilterList( filter.type )
        } )
        displayFilters( filter.type, filter.all )
    } )
}

init()