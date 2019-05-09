import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa"
import styles from "../styles/header.module.scss"
import logo from "../images/Logo.png"
import { getData } from "../services/header"

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavbarOpen: false,
    }
  }

  handleNavBarToggle = () => {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen,
    })
  }

  closeNavBar = () => {
    this.setState({
      isNavbarOpen: false,
    })
  }

  render() {
    return (
      <NavBar
        handleNavBarToggle={this.handleNavBarToggle}
        closeNavBar={this.closeNavBar}
        isNavbarOpen={this.state.isNavbarOpen}
      />
    )
  }
}

const NavBar = ({ handleNavBarToggle, closeNavBar, isNavbarOpen }) => {
  const { navLinks, socialLinks } = getData()
  return (
    <nav className={styles.container}>
      <div className={styles.linkContainer}>
        <input
          type="checkbox"
          name="nav-toggle"
          id="nav-toggle"
          className={styles.navToggleInput}
          checked={isNavbarOpen}
          onChange={handleNavBarToggle}
        />
        <div className={styles.navToggleContainer}>
          <FaBars
            className={styles.navMenuIcon + " clickable"}
            onClick={handleNavBarToggle}
          />
        </div>
        <NavLinksConatiner
          handleNavBarToggle={handleNavBarToggle}
          closeNavBar={closeNavBar}
          navLinks={navLinks}
        />
        <div className={styles.overlay} onClick={closeNavBar} />
      </div>
      <div className={styles.logoConatiner}>
        <AnchorLink href="#home">
          <img src={logo} alt="Irshad logo" />
        </AnchorLink>
      </div>
      <IconContainer socialLinks={socialLinks} />
    </nav>
  )
}

const NavLinksConatiner = ({ handleNavBarToggle, closeNavBar, navLinks }) => {
  return (
    <div className={styles.links}>
      <FaTimes
        className={styles.navCloseIcon + " clickable"}
        onClick={handleNavBarToggle}
      />
      {navLinks.map(link => (
        <AnchorLink
          className={styles.link + " clickable"}
          onClick={closeNavBar}
          href={`#${link.anchor}`}
          key={link.name}
        >
          <div className={styles.linkBg} />
          <div className={styles.linkText}>{link.name}</div>
        </AnchorLink>
      ))}
    </div>
  )
}

const IconContainer = ({ socialLinks }) => {
  return (
    <div className={styles.iconContainer}>
      <a href={socialLinks.linkedIn} target="_black" rel="noopener">
        <div className={styles.icon}>
          <FaLinkedin />
        </div>
        <div className={styles.iconText}>LinkedIn</div>
      </a>
      <a href={socialLinks.twitter} target="_black" rel="noopener">
        <div className={styles.icon}>
          <FaTwitter />
        </div>
        <div className={styles.iconText}>Twitter</div>
      </a>
      <a href={socialLinks.email} target="_black" rel="noopener">
        <div className={styles.icon}>
          <FaEnvelope />
        </div>
        <div className={styles.iconText}>Email</div>
      </a>
    </div>
  )
}
