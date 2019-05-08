import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
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
            <ScrollAnimation
              animateIn="fadeInLeft"
              duration={0.8}
              animateOnce={true}
            >
              <h2 className={styles.hi}>{data.headerText1}</h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInLeft"
              duration={0.8}
              animateOnce={true}
              delay={500}
            >
              <h1 className={styles.name}>{data.headerText2}</h1>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            duration={0.8}
            animateOnce={true}
            delay={1000}
          >
            <div className={styles.introText}>{data.introText}</div>
          </ScrollAnimation>
        </div>
        <div className={styles.illustration}>
          <ScrollAnimation
            animateIn="fadeInRight"
            duration={0.8}
            animateOnce={true}
            delay={1500}
          >
            <img src={illustration} alt="Onboarding illustration" />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
