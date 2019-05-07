import React from "react"
import styles from "../styles/skills.module.scss"
import SkillsList from "../components/skillsList"
import { getSkillsList } from "../services/skill"

export default function Skills() {
  const skills = getSkillsList()
  return (
    <section className="container" id="skills">
      <h2 className="text-center">My Skills</h2>
      <SkillsList skills={skills} />
    </section>
  )
}
