import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuOpenedClass = "is-menu-opened";

    this.state = {
      menuOpened: false
    };

    this.handleMobileMenu = this.handleMobileMenu.bind(this);
  }

  handleMobileMenu() {
    

    this.setState({
      menuOpened: !this.state.menuOpened
    });
  }

  disableScroll() {
    document.body.style.overflow = "hidden";
  }

  restoreScroll() {
    document.body.style.overflow = "auto";
  }

  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <div className="header-branding">
            <Link to="/">
              <img className="header-logo" src={logo} alt="nSource" />
            </Link>
          </div>
          <nav className={this.state.menuOpened ? "header-navigation is-opened" : "header-navigation"}>
            <div className="header-navigation-wrapper">
              <ul className="header-navigation-list">
                <li className="header-navigation-option">
                  <Link to="/">Home</Link>
                </li>
                <li className="header-navigation-option">
                  <Link to="/about">Services</Link>
                </li>
                <li className="header-navigation-option">
                  <Link to="/products">Contact</Link>
                </li>
              </ul>
              <div className="header-contact-button">
                <Link to="/" className="button-primary">Hire us</Link>
              </div>
            </div>  
          </nav>
          <div className="header-contact-button">
            <Link to="/" className="button-primary">Hire us</Link>
          </div>
          <div className="header-floating">
            <div className="header-wrapper">
              <button 
                onClick={this.handleMobileMenu} 
                className={this.state.menuOpened ? "header-nav-button is-opened" : "header-nav-button"} 
                aria-controls="primary-menu" 
                aria-expanded="false">
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
