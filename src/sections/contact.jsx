import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "../styles/contact.module.scss"
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import { getSocialLinks } from "../services/links"
import { getContactText } from "../services/contact"

export default function Contact() {
  const links = getSocialLinks() || {}
  const contactText = getContactText()
  return (
    <section className={styles.container} id="contact">
      <div className="container">
        <h2 className="text-center">Contact</h2>

        <div className={styles.text}>{contactText}</div>

        <ScrollAnimation animateIn="flipInX">
          <div className={styles.iconConatiner}>
            <a target="_blank" href={links.linkedIn} rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
              <div>LinkedIn</div>
            </a>
            <a target="_blank" href={links.github} rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
              <div>Github</div>
            </a>
            <a target="_blank" href={links.twitter} rel="noopener noreferrer">
              <FaTwitter className={styles.icon} />
              <div>Twitter</div>
            </a>
            <a target="_blank" href={links.email} rel="noopener noreferrer">
              <FaEnvelope className={styles.icon} />
              <div>Email</div>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
