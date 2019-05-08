import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "../styles/skills.module.scss"

export default function Skill({ name, percentage }) {
  const progressBarStyle = {
    width: percentage + "%",
  }
  return (
    <div className={styles.skill}>
      <div className={styles.skillName}>{name}</div>
      <div className={styles.skillBar}>
        <ScrollAnimation animateIn="skillBar">
          <div className={styles.skillBarFiller} style={progressBarStyle}>
            <div>{percentage}%</div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
