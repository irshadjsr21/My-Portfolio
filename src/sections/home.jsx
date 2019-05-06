import React from "react"
import styles from "../styles/home.module.scss"
import illustration from "../images/onboarding.svg"

export default function Home() {
  return (
    <section className={styles.mainContainer} id="home">
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <div className={styles.greeting + " font-serif"}>
            <div className={styles.hi}>Hi!</div>
            <div className={styles.name}>I'm Irshad,</div>
          </div>
          <div className={styles.introText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            animi, est modi omnis eveniet voluptates quis id numquam deleniti
            harum neque, cum facilis reprehenderit perspiciatis, laborum
            suscipit rerum? Nesciunt, praesentium.
          </div>
        </div>
        <div className={styles.illustration}>
          <img src={illustration} alt="" />
        </div>
      </div>
    </section>
  )
}
