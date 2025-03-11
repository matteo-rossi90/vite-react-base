
import './App.css'

import { CORE_CONCEPTS } from './data'
import CoreConcepts from './components/CoreConcepts/CoreConcepts'
import Header from './components/Header/Header'
import TabComponent from './components/TabComponent/TabComponent'

function App() {
  // const [count, setCount] = useState(0)

  function handleSelect() {
    console.log('Ciao')
  }

  return (
    <>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabComponent onSelect={handleSelect}>Components</TabComponent>
            <TabComponent onSelect={handleSelect}>JSX</TabComponent>
            <TabComponent onSelect={handleSelect}>Props</TabComponent>
            <TabComponent onSelect={handleSelect}>State</TabComponent>
          </menu>
        </section>
      </main>
    </>
  )
}

export default App
