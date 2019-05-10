import React from "react"
import { FaGithub } from "react-icons/fa"
import ScrollAnimation from "react-animate-on-scroll"
import Carousel from "../components/carousel"
import styles from "../styles/projects.module.scss"
import { getData } from "../services/projects"

export default function projects() {
  const { list, title, anchor } = getData()
  const renderMethod = item => (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url('${item.image}')` }}
        />
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.cardText}>
          <div className={styles.cardTitle}>{item.name}</div>
          <div className={styles.cardDesc}>{item.description}</div>
          {item.points && (
            <div className={styles.cardPointsContainer}>
              {item.points.map((point, i) => (
                <div key={i} className={styles.cardPoint}>
                  <div className={styles.cardPointTitle}>{point.title}</div>
                  <div className={styles.cardPointText}>{point.text}</div>
                </div>
              ))}
            </div>
          )}
          {item.live && (
            <div className={styles.cardLive}>
              <a
                href={item.live.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.live.text}
              </a>
            </div>
          )}
        </div>
        {item.github && (
          <div className={styles.cardRepo}>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.cardRepoIcon} />
              <div className={styles.cardRepoText}>Repo</div>
            </a>
          </div>
        )}
      </div>
    </div>
  )
  return (
    <section id={anchor} className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Carousel items={list} render={renderMethod} backgroundColor="#eee" />
      </ScrollAnimation>
    </section>
  )
}
