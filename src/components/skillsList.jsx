import React from "react"
import Skill from "./skill"
import styles from "../styles/skills.module.scss"

export default function SkillsList({ skills = [], title = "" }) {
  return (
    <div className={styles.skillsContainer}>
      <h3 className={styles.skillsTitle}>{title}</h3>
      <div className={styles.skillsList}>
        {skills.map(skill => (
          <Skill
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  )
}
