/* ================ MOSTRAR/ESCONDER MENU ================ */
const navMenu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ================ MOSTRAR MENU ================ */
// valida se a constante existe
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ================ ESCONDER MENU ================ */
// valida se a constante existe
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ================ REMOVER MENU MOBILE ================ */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // quando clica em cada nav__link, remove .show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ================ ACCORDION QUALIFICAÇÕES ================ */
const skillsContent = document.getElementsByClassName('skills__content'), 
    skillsHeader = document.querySelectorAll('.skills__header')

    function toggleSkills() {
        let itemClass = this.parentNode.className

        for(i = 0;i < skillsContent.length;i++) {
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
    })

/* ================ TABS QUALIFICAÇÕES ================ */
const tabs = document.querySelectorAll('[data-target]'), 
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/* ================ MODAL SERVIÇOS ================ */
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* ================ SWIPER PORTFOLIO ================ */
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

/* ================ TESTEMUNHOS ================ */
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
})

/* ================ LINKS ATIVOS DA SEÇÃO DE SCROLL ================ */
const sections = document.querySelectorAll('section[id')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ================ MUDAR BG DO HEADER ================ */
function scrollHeader() {
    const nav = document.getElementById('header')
    // quando o scroll é maior que 80 vh, adiciona .scroll-header no <header>
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ================ MOSTRAR SCROLL UP ================ */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // quando o scroll é maior do que 560 vh, adiciona .show-scroll à tag do scroll 
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ================ TEMA CLARO/ESCURO ================ */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// tema selecionado previamente (se selecionado pelo usuário)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// obtem o tema atual da interface validando .dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// valida se o usuário escolheu um tema
if (selectedTheme) {
    //se a validação passar
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](darkTheme)
}

// ativa/desativa manualmente o tema com o botão
themeButton.addEventListener('click', () => {
    // adiciona ou remove o tema/icone escuro
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // salva o tema e o icone escolhido
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentTheme())
})