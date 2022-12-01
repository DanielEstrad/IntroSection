const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.getElementById("burger-menu")

function navigationToggle() {
    const visibility = primaryNav.getAttribute('data-visible')
    navToggle.classList.toggle('opened-menu')

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
    }
}

function expandSubMenu(menu, arrow) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const featuresSubMenu = document.getElementById(menu)
    const arrowIcon = document.getElementById(arrow)
    const featuresVisibility = featuresSubMenu.getAttribute('data-visible')
    const arrowDirection = arrowIcon.getAttribute('data-potition')

    if(vw <= 769) {
        if (arrowDirection === "down") {
            arrowIcon.setAttribute('data-potition', "up")
        } else {
            arrowIcon.setAttribute('data-potition', "down")
        }

        if (featuresVisibility === "false") {
            featuresSubMenu.setAttribute('data-visible', true)
        } else {
            featuresSubMenu.setAttribute('data-visible', false)
        }   
    } /* else {
        if (featuresVisibility === "false") {
            featuresSubMenu.setAttribute('data-visible', true)
        } else {
            featuresSubMenu.setAttribute('data-visible', false)
        }
    } */
}