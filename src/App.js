import React from 'react'
import Routes from './Routes'
import Header from './components/main/Header'

function App () {
  return (
    <>
      <Header/>
      <main id="main">
        <Routes />
      </main>
    </>
  )
}

export default App