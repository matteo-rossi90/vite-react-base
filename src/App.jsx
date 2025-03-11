
import './App.css'

import { CORE_CONCEPTS } from './data'
import CoreConcepts from './components/CoreConcepts/CoreConcepts'

import Header from './components/Header/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </ul>
      </main>
    </>
  )
}

export default App
