import React from "react"
import Skill from "./skill"
import styles from "../styles/skills.module.scss"

export default function SkillsList({ skills = [], title = "", levels }) {
  return (
    <div className={styles.skillsContainer}>
      <h3 className={styles.skillsTitle}>{title}</h3>
      <div className={styles.skillsList}>
        {skills.map(skill => {
          const level = levels.filter(
            level =>
              level.min <= skill.percentage && level.max >= skill.percentage
          )
          const percentageText =
            level && level.length > 0 ? level[0].name : skill.percentage + "%"
          return (
            <Skill
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              percentageText={percentageText}
            />
          )
        })}
      </div>
    </div>
  )
}
