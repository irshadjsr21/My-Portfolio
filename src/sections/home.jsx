import React from "react"
import styles from "../styles/home.module.scss"
import illustration from "../images/onboarding.svg"
import { getData } from "../services/home"

export default function Home() {
  const { textContents, anchor } = getData()
  return (
    <section className={styles.mainContainer} id={anchor}>
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <div className={styles.greeting + " font-serif"}>
            <h2 className={styles.hi}>{textContents.headerText1}</h2>
            <h1 className={styles.name}>{textContents.headerText2}</h1>
          </div>
          <div className={styles.introText}>{textContents.introText}</div>
        </div>
        <div className={styles.illustration}>
          <img src={illustration} alt="Onboarding illustration" />
        </div>
      </div>
    </section>
  )
}
