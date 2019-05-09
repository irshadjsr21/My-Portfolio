import React from "react"
import SkillsList from "../components/skillsList"
import { getData } from "../services/skill"

export default function Skills() {
  const { skills, title, anchor } = getData()
  return (
    <section className="container" id={anchor}>
      <h2 className="text-center">{title}</h2>
      {skills.map(skill => (
        <SkillsList title={skill.name} skills={skill.list} key={skill.name} />
      ))}
    </section>
  )
}
