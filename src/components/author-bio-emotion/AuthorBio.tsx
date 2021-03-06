import React from 'react'
import styled from '@emotion/styled'

const Container = styled.figure<{ isVertical?: boolean }>`
  display: flex;
  background-color: var(--color-grey-050);
  border-radius: var(--border-radius-l);
  overflow: hidden;
  ${(props) => props.isVertical && `flex-direction: column;`}
`

const Image = styled.img<{ isVertical?: boolean }>`
  max-width: 12rem;
  height: auto;
  object-fit: cover;
  border-radius: 0;

  ${(props) =>
    props.isVertical &&
    ` border-radius: 100rem;
      height: 8rem;
      width: 8rem;
      margin-left: auto;
      margin-right: auto;
      margin-top: 2rem;
    `}
`

const Body = styled.div<{ isVertical?: boolean }>`
  padding: 1.5rem;
  text-align: ${(props) => (props.isVertical ? 'center' : 'start')};
  font-size: var(--text-size-m);
`
const Quote = styled.blockquote`
  font-weight: var(--text-weight-bold);
  margin-bottom: 1rem;
  color: var(--text-on-grey-050);
`

const Name = styled.blockquote`
  font-size: var(--text-size-l);
  color: var(--text-on-grey-050);
`

const Job = styled.div`
  color: var(--text-on-grey-050--subdued);
  font-size: var(--text-size-s);
`

const AuthorBio = ({ isVertical }: { isVertical?: boolean }) => {
  return (
    <Container isVertical={isVertical}>
      <Image src="/sarah-dayan.jpg" alt="" />
      <Body>
        <Quote>
          <p>
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </Quote>
        <figcaption>
          <Name>Sarah Dayan</Name>
          <Job>Staff Engineer (Emotion)</Job>
        </figcaption>
      </Body>
    </Container>
  )
}

export default AuthorBio
