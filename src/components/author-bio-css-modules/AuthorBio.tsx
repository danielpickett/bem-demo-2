import React from 'react'
import styles from './AuthorBio.module.scss'

const AuthorBio = ({ isVertical }: { isVertical?: boolean }) => {
  return (
    // <figure className={`AuthorBio${isVertical ? ' AuthorBio--vertical' : ''}`}>
    <figure className={styles.container}>
      <img className={styles.image} src="/sarah-dayan.jpg" alt="" />
      <div className={styles.body}>
        <blockquote className={styles.quote}>
          <p>
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div className={styles.name}>Sarah Dayan</div>
          <div className={styles.job}>Staff Engineer (CSS Modules)</div>
        </figcaption>
      </div>
    </figure>
  )
}

export default AuthorBio
