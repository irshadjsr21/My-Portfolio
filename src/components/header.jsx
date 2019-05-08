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
import { getSocialLinks } from "../services/links"

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
      <nav className={styles.container}>
        <div className={styles.linkContainer}>
          <input
            type="checkbox"
            name="nav-toggle"
            id="nav-toggle"
            className={styles.navToggleInput}
            checked={this.state.isNavbarOpen}
            onChange={this.handleNavBarToggle}
          />
          <div className={styles.navToggleContainer}>
            <FaBars
              className={styles.navMenuIcon + " clickable"}
              onClick={this.handleNavBarToggle}
            />
          </div>
          <div className={styles.links}>
            <FaTimes
              className={styles.navCloseIcon + " clickable"}
              onClick={this.handleNavBarToggle}
            />
            <AnchorLink
              className={styles.link + " clickable"}
              onClick={this.closeNavBar}
              href="#home"
            >
              <div className={styles.linkBg} />
              <div className={styles.linkText}>Home</div>
            </AnchorLink>
            <AnchorLink
              className={styles.link + " clickable"}
              onClick={this.closeNavBar}
              href="#about"
            >
              <div className={styles.linkBg} />
              <div className={styles.linkText}>About</div>
            </AnchorLink>
            <AnchorLink
              className={styles.link + " clickable"}
              onClick={this.closeNavBar}
              href="#skills"
            >
              <div className={styles.linkBg} />
              <div className={styles.linkText}>Skills</div>
            </AnchorLink>
            <AnchorLink
              className={styles.link + " clickable"}
              onClick={this.closeNavBar}
              href="#project"
            >
              <div className={styles.linkBg} />
              <div className={styles.linkText}>Project</div>
            </AnchorLink>
            <AnchorLink
              className={styles.link + " clickable"}
              onClick={this.closeNavBar}
              href="#contact"
            >
              <div className={styles.linkBg} />
              <div className={styles.linkText}>Contact</div>
            </AnchorLink>
          </div>
          <div className={styles.overlay} onClick={this.closeNavBar} />
        </div>
        <div className={styles.logoConatiner}>
          <a href="#home">
            <img src={logo} alt="Irshad logo" />
          </a>
        </div>
        <IconContainer />
      </nav>
    )
  }
}

const IconContainer = () => {
  const links = getSocialLinks() || {}
  return (
    <div className={styles.iconContainer}>
      <a href={links.linkedIn} target="_black" rel="noopener">
        <div className={styles.icon}>
          <FaLinkedin />
        </div>
        <div className={styles.iconText}>LinkedIn</div>
      </a>
      <a href={links.twitter} target="_black" rel="noopener">
        <div className={styles.icon}>
          <FaTwitter />
        </div>
        <div className={styles.iconText}>Twitter</div>
      </a>
      <a href={links.email} target="_black" rel="noopener">
        <div className={styles.icon}>
          <FaEnvelope />
        </div>
        <div className={styles.iconText}>Email</div>
      </a>
    </div>
  )
}
