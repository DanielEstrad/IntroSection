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
    } 
}

function changeMenu() {
    var button = document.getElementById("burger-menu")
    var menu = document.getElementById("navigation-menu")
    button.classList.toggle("opened-menu")
    if (menu.classList.contains("visually-hidden")) {
        menu.classList.remove("visually-hidden")
    } else {
        menu.classList.add("visually-hidden")
    }
}

function switchMenuAttribute() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    var menu = document.querySelector(".primary-navigation")
    var status = menu.getAttribute('data-visible')

    if (vw > 769 ) {
        menu.setAttribute('data-visible', true)
    } else if (status === "true") {
        menu.setAttribute('data-visible', false)
    }
}

switchMenuAttribute()