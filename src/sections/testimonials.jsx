import React from "react"
import LazyLoad from "react-lazy-load"
import styles from "../styles/testimonials.module.scss"
import { getData } from "../services/testimonials"

export default function projects() {
  const { list, title, anchor } = getData()
  return (
    <section id={anchor} className={styles.mainContainer}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.container}>
        {list.map((item, i) => (
          <div className={styles.item} key={i}>
            <LazyLoad>
              <div
                className={styles.image}
                style={{ backgroundImage: `url('${item.image}')` }}
              />
            </LazyLoad>
            <div className={styles.testimonial}>
              <div className={styles.text}>{item.text}</div>
              <div className={styles.name}>- {item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
