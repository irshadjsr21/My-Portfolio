import React, { Component } from "react"
import { Link } from "gatsby"
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa"
import styles from "../styles/header.module.scss"
import logo from "../images/Logo.png"

export default class Header extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <div className={styles.linkContainer}>
          <input
            type="checkbox"
            name="nav-toggle"
            id="nav-toggle"
            className={styles.navToggleInput}
          />
          <div className={styles.navToggleContainer}>
            <label htmlFor="nav-toggle">
              <FaBars className={styles.navMenuIcon + " clickable"} />
            </label>
          </div>
          <div className={styles.links}>
            <label htmlFor="nav-toggle">
              <FaTimes className={styles.navCloseIcon + " clickable"} />
            </label>
            <div className={styles.link + " clickable"}>
              <div className={styles.linkBg} />
              <Link to="/">Home</Link>
            </div>
            <div className={styles.link + " clickable"}>
              <div className={styles.linkBg} />
              <Link to="/">About</Link>
            </div>
            <div className={styles.link + " clickable"}>
              <div className={styles.linkBg} />
              <Link to="/">Skills</Link>
            </div>
            <div className={styles.link + " clickable"}>
              <div className={styles.linkBg} />
              <Link to="/">Project</Link>
            </div>
            <div className={styles.link + " clickable"}>
              <div className={styles.linkBg} />
              <Link to="/">Contact</Link>
            </div>
          </div>
        </div>
        <div className={styles.logoConatiner}>
          <Link to="/">
            <img src={logo} alt="Irshad logo" />
          </Link>
        </div>
        <div className={styles.iconContainer}>
          <a
            href="https://www.linkedin.com/in/irshad-ansari-aa094216b/"
            target="_black"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://twitter.com/irshadansari7" target="_black">
            <FaTwitter className={styles.icon} />
          </a>
          <a href="mailto:irshadjsr21@gmail.com" target="_black">
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
      </nav>
    )
  }
}
