//testar codigo
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this._mobileMenu = document.querySelector(mobileMenu)
      this._navList = document.querySelector(navList)
      this._navLinks = document.querySelectorAll(navLinks)
      this._activeClass = "active";
  
      this._handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this._navList.classList.toggle(this._activeClass)
      this._navLinks.classList.toggle(this._activeClass)
    }
  
    addClickEvent() {
      this._mobileMenu.addEventListener('click', this.handleClick)
    }
  
    init() {
      if (this._mobileMenu) {
        this.addClickEvent()
      }
      return this
    }
  }
  
  const Mobile = new MobileNavbar('#btn_menu', '#menu_list', '#menu_list li')
  Mobile.init()