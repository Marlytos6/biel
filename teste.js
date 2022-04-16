class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    /* seletores */
    this._mobileMenu = document.querySelector(mobileMenu)
    this._navList = document.querySelector(navList)
    this._navLinks = document.querySelectorAll(navLinks)

    /* define o 'this' como o elemento do html e nao o objeto em JavaScript */
    this._handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const nav = document.querySelector('nav')
    const active = nav.classList.contains("active")
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle("active")
    event.currentTarget.setAttribute('aria-expanded', !active);
    if (!active) {
      event.currentTarget.setAttribute('aria-label', 'fechar menu')
    } else {
      event.currentTarget.setAttribute('aria-label', 'abrir menu')
    }
  }

  addClickEvent() {
    this._mobileMenu.addEventListener('click', this.handleClick)
    this._mobileMenu.addEventListener('touchstart', this.handleClick)
  }

  init() {
    if (this._mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const Mobile = new MobileNavbar('#btn_menu', '#menu_list', '#menu_list li',)
Mobile.init()