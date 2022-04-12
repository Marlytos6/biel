/* criamos uma classe */
class MobileNavbar {
  /* metodo interno de toda classe */
  constructor(mobileMenu, navList, navLinks) {
    /* atributo que representa o botao do menu */
    this.mobileMenu = document.querySelector(mobileMenu);
    /* atributo que representa a lista de eventos */
    this.navList = document.querySelector(navList);
    /* atributo que representa  os links */
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    /* define o this como o objeto e não como a div do html */
    this.handleClick = this.handleClick.bind(this);
  }
  /* metodo para a animacao */
  animateLinks() {
    /* fala com cada item individualmente? */
    this.navLinks.forEach((link, index) => {
      /* verifica se existe uma animacao previa e caso nao exista cria com a regra que foi criada no css */
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
        /* essa operacao no template é para que cada item seja exibido com um tempo entre eles */
    });
  }
  /* cria a função que sera executado cado click no menu */
  handleClick() {
    /* gambiarra temporaria */
    let nav = document.querySelector('nav')
    /* apaga o atributo 'activeClass' */
    this.navList.classList.toggle(this.activeClass);
    /* serve para trocar o icone do menu para um X */
    this.mobileMenu.classList.toggle(this.activeClass);
    nav.classList.toggle(this.activeClass);
    this.animateLinks();
  }
  /*cria a interação caso click sobre o menu */
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
/* caso mude o nome das classes devo mudar aqui tambem */
const mobileNavbar = new MobileNavbar(
  "#mobile-menu",
  "#nav-list",
  "#nav-list li",
);
mobileNavbar.init();
