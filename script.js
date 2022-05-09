// Menu Hamburguer

const menuHamburguer = document.querySelector('.js-menu-hamburguer')

const showMenu = document.querySelector('.list-1')
const closeMenu = document.querySelector('.close')

function activeMenu(event) {
  const show = event.currentTarget
  if (show) {
    closeMenu.classList.add('js-close-menu')
    showMenu.classList.add('js-show-menu')
  }
}

function HideMenu(event) {
  const close = event.currentTarget
  if (close) {
    closeMenu.classList.remove('js-close-menu')
    showMenu.classList.remove('js-show-menu')
  }
}

menuHamburguer.addEventListener('click', activeMenu)

closeMenu.addEventListener('click', HideMenu)

// Scroll Suave

const menuItems = document.querySelectorAll('.list-1 li a[href^="#"]')

function smothScroll(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href)

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

menuItems.forEach(id => {
  id.addEventListener('click', smothScroll)
})

// Voltar ao topo

const arrowUp = document.querySelector('.arrow-up')

const showArrow = document.querySelector('#apresentacao')



console.log(alturaArrow)

function scrollTop() {
  const topHeader = document.querySelector('#body').getAttribute('href')
  const section = document.querySelector(topHeader)

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

arrowUp.addEventListener('click', scrollTop)
