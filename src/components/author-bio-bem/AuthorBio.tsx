import React from 'react'
import './AuthorBio.scss'

const AuthorBio = ({ isVertical }: { isVertical?: boolean }) => {
  return (
    <figure className={`AuthorBio${isVertical ? ' AuthorBio--vertical' : ''}`}>
      <img className="AuthorBio__image" src="/sarah-dayan.jpg" alt="" />
      <div className="AuthorBio__body">
        <blockquote className="AuthorBio__quote">
          <p>
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div className="AuthorBio__name">Sarah Dayan</div>
          <div className="AuthorBio__job">Staff Engineer (BEM)</div>
        </figcaption>
      </div>
    </figure>
  )
}

export default AuthorBio
