
import './App.css'

import { useState } from 'react'

import { CORE_CONCEPTS } from './data'
import CoreConcepts from './components/CoreConcepts/CoreConcepts'
import Header from './components/Header/Header'
import TabComponent from './components/TabComponent/TabComponent'

function App() {

  const [ selectedTopic, setSelectedTopic] = useState('Please click a button')

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
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
            <TabComponent onSelect={() => handleSelect('components')}>Components</TabComponent>
            <TabComponent onSelect={() => handleSelect('jsx')}>JSX</TabComponent>
            <TabComponent onSelect={() => handleSelect('props')}>Props</TabComponent>
            <TabComponent onSelect={() => handleSelect('state')}>State</TabComponent>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  )
}

export default App
