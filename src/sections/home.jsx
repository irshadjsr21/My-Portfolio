import React from "react"
import styles from "../styles/home.module.scss"
import illustration from "../images/onboarding.svg"
import { getTextContents } from "../services/home"

export default function Home() {
  const data = getTextContents()
  return (
    <section className={styles.mainContainer} id="home">
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <div className={styles.greeting + " font-serif"}>
            <h2 className={styles.hi}>{data.headerText1}</h2>
            <h1 className={styles.name}>{data.headerText2}</h1>
          </div>
          <div className={styles.introText}>{data.introText}</div>
        </div>
        <div className={styles.illustration}>
          <img src={illustration} alt="" />
        </div>
      </div>
    </section>
  )
}
