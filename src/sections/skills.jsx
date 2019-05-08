import React from "react"
import SkillsList from "../components/skillsList"
import { getSkillsList } from "../services/skill"

export default function Skills() {
  const skills = getSkillsList()
  return (
    <section className="container" id="skills">
      <h2 className="text-center">My Skills</h2>
      {skills.map(skill => (
        <SkillsList title={skill.name} skills={skill.list} key={skill.name} />
      ))}
    </section>
  )
}
