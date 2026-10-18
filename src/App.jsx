import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Modalidades from './components/Modalidades/Modalidades'
import CadastroCliente from './components/CadastroClientes/CadastroCliente'
import Footer from './components/Footer/Footer'
import logo from './assets/logo.png'

function App() {
  return (
    <>
      <Header logo={logo} />
      <main>
        <Hero />
        <Modalidades />
        <CadastroCliente />
      </main>
      <Footer />
    </>
  )
}

export default App
