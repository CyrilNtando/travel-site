import $ from "jquery";
class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events(); //execute the events method so the browser can listen
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    console.log(this);
  }

  toggleTheMenu() {
    console.log(this);
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;

/**************************for event() method
 * The this keyword in toggleTheMenu method is not successfully
 * acessing the menuContent Property. because the this
 * keyword is running in response to this click event(site-header__menu-icon) not the object itself.To make the this keyowrd to point back to this object, we use the bind() method to
 * override js default behavior of the this keyword
 *
 */
