class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this._mobileMenu = document.querySelector(mobileMenu)
    this._navList = document.querySelector(navList)
    this._navLinks = document.querySelectorAll(navLinks)

    this._handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('nav')
    nav.classList.toggle("active")
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