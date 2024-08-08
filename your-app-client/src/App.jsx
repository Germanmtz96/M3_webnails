import './App.css'
import { Routes, Route } from "react-router-dom";
import MyNavbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HorariosPage from './pages/HorariosPage'
import AgendaPage from './pages/AgendaPage'
import CitaPage from './pages/CitaPage'
import ClientasPage from './pages/ClientasPage'
import GaleriaPage from './pages/GaleriaPage'
import ServiciosPage from './pages/ServiciosPage'
import ErrorNotFound from './pages/ErrorNotFound'
import ErrorPage from './pages/ErrorPage'

function App() {
  

  return (
    <>
      <MyNavbar/>

      <Routes>

        <Route path='/' element={ <HomePage /> } />

        <Route path='/horarios' element={ <HorariosPage /> } />

        <Route path='/agenda' element={ <AgendaPage /> } />

        <Route path='/cita' element={ <CitaPage /> } />

        <Route path='/clientas' element={ <ClientasPage /> } />

        <Route path='/galeria' element={ <GaleriaPage /> } />

        <Route path='/servicios' element={ <ServiciosPage /> } />


        <Route path='/error' element={ <ErrorPage /> } />
        <Route path='*' element={ <ErrorNotFound /> } />

      </Routes>

      <Footer/>

    </>
  )
}

export default App
