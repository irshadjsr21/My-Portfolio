import React from "react"
import { FaCopyright } from "react-icons/fa"
import styles from "../styles/footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.line} />
      <div className={styles.textContainer + " text-center"}>
        <FaCopyright className={styles.icon} />
        <div className={styles.text}>2019 Irshad Ansari</div>
      </div>
    </footer>
  )
}
