import { useState } from 'react'
import Brand from './components/Brand.jsx'
import FeatureCard from './components/FeatureCard.jsx'
import HeroArt from './components/HeroArt.jsx'
import { features } from './data/features.js'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <main className="page-shell">
     

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A clean place to start</p>
          <h1>Build something <em>worth sharing.</em></h1>
          <p className="intro">
            A simple React foundation for turning your next idea into a thoughtful, useful product.
          </p>
          <button className="primary-button" onClick={() => setStarted(true)}>
            {started ? "You're all set ✓" : 'Start building'}
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <HeroArt />
      </section>

   
      <footer>Made with React <span>·</span> Ready for your next idea</footer>
    </main>
  )
}

export default App
