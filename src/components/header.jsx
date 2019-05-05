import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import styles from "../styles/header.module.scss"
import logo from "../images/Logo.png"

export default () => (
  <nav className={styles.container}>
    <div className={styles.linkContainer}>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Skills</Link>
      <Link to="/">Project</Link>
      <Link to="/">Contact</Link>
    </div>
    <div className={styles.logoConatiner}>
      <Link to="/">
        <img src={logo} alt="Irshad logo" />
      </Link>
    </div>
    <div className={styles.iconContainer}>
      <Link to="/">
        <FaLinkedin className={styles.icon} />
      </Link>
      <Link to="/">
        <FaTwitter className={styles.icon} />
      </Link>
      <Link to="/">
        <FaEnvelope className={styles.icon} />
      </Link>
    </div>
  </nav>
)
