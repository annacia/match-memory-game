import React from 'react'
import Routes from './Routes'
import Header from './components/main/Header'
import Footer from './components/main/Footer'

function App () {
  return (
    <>
      <Header/>
      <main id="main">
        <Routes />
      </main>
      <Footer/>
    </>
  )
}

export default App