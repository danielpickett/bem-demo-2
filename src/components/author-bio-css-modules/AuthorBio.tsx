import React from 'react'
import styles from './AuthorBio.module.scss'
import classNames from 'classnames'

const AuthorBio = ({ isVertical }: { isVertical?: boolean }) => {
  return (
    <figure
      className={classNames(styles.container, {
        [styles['container--is-vertical']]: isVertical,
      })}
    >
      <img
        className={classNames(styles.image, {
          [styles['image--is-vertical']]: isVertical,
        })}
        src="/sarah-dayan.jpg"
        alt=""
      />
      <div
        className={classNames(styles.body, {
          [styles['body--is-vertical']]: isVertical,
        })}
      >
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
