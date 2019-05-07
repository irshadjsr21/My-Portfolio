import React from "react"
import Skill from "./skill"
import styles from "../styles/skills.module.scss"

export default function SkillsList({ skills = [] }) {
  return (
    <div className={styles.skillsList}>
      {skills.map(skill => (
        <Skill
          key={skill.name}
          name={skill.name}
          percentage={skill.percentage}
        />
      ))}
    </div>
  )
}
