let sidebar__nav_item = document.querySelectorAll('.nav__item');

sidebar__nav_item.forEach(element => {
    element.addEventListener('click', () => {
        sidebar__nav_item.forEach(elem => elem.classList.remove('active'))
        element.classList.add('active')
    })
})

let sidebar =document.querySelector('.sidebar')

sidebar.addEventListener('click', (event) => {
    if (event.target===sidebar) {
        sidebar.classList.toggle('open-close-menu')
    }
} )
