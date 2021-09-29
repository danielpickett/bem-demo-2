import React from 'react'
import './App.scss'
import './theme.css'
import AuthorBioTailwind from './components/author-bio-tailwind'
import AuthorBioBEM from './components/author-bio-bem'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <aside className="App__sidebar" style={{ width: '2rem' }}></aside>
      <main className="App__main">
        <AuthorBioTailwind />
        <Spacer />
        <AuthorBioBEM />
        <Spacer />
        <Button icon={<DownArrow />}>Download</Button>
      </main>
    </div>
  )
}

export default App

const Spacer = () => <div style={{ height: '1rem', width: '1rem' }}></div>

const DownArrow = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"
    />
  </svg>
)

// import { useResizeDetector } from 'react-resize-detector'
// const { width, ref } = useResizeDetector()
// <div ref={ref} className="App__author-bio">
//   <AuthorBioBEM isVertical={typeof width === 'number' && width < 500} />
// </div>

// function App {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
