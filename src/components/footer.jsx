import React from "react"
import { FaCopyright } from "react-icons/fa"
import styles from "../styles/footer.module.scss"
import { getData } from "./../services/footer"

export default function Footer() {
  const { copyRightText } = getData()
  return (
    <footer className={styles.container}>
      <div className={styles.line} />
      <div className={styles.textContainer + " text-center"}>
        <FaCopyright className={styles.icon} />
        <div className={styles.text}>{copyRightText}</div>
      </div>
    </footer>
  )
}
