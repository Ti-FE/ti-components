import React from 'react'
import './App.css'

// TODO: implement a layout overview page
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ti-Components</h1>
        <p>
          Use <code>npm run storybook</code> to get started, host on{' '}
          <a className="App-link" href="http://localhost:9009">
            http://localhost:9009
          </a>{' '}
          by default
        </p>
        <a
          className="App-link"
          href="https://storybook.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Storybook
        </a>
      </header>
    </div>
  )
}

export default App
