
import './App.css'

import { useState } from 'react'

import { CORE_CONCEPTS } from './data'
import { EXAMPLES } from './data'
import CoreConcepts from './components/CoreConcepts/CoreConcepts'
import Header from './components/Header/Header'
import TabComponent from './components/TabComponent/TabComponent'

function App() {

  const [ selectedTopic, setSelectedTopic] = useState('')

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)

  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
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
            <TabComponent isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabComponent>
            <TabComponent isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabComponent>
            <TabComponent isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabComponent>
            <TabComponent isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabComponent>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  )
}

export default App
