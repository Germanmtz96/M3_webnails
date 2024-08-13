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
import PerfilPage from './pages/PerfilPage'
import SingUpPage from './pages/SingUpPage';
import LoginPage from './pages/LoginPage';
import ErrorNotFound from './pages/ErrorNotFound'
import ErrorPage from './pages/ErrorPage'
import Private from './components/auth/Private';
import Public from './components/auth/Public';
import Admin from './components/auth/Admin';

function App() {
  

  return (
    <>
      <MyNavbar/>

      <Routes>

        <Route path='/' element={ <HomePage /> } />

        <Route path='/horarios' element={ <Private> <HorariosPage /> </Private> } />

        <Route path='/agenda' element={ <Admin> <AgendaPage /> </Admin> } />

        <Route path='/cita' element={ <CitaPage /> } />

        <Route path='/clientas' element={ <Admin> <ClientasPage /> </Admin> } />

        <Route path='/galeria' element={ <GaleriaPage /> } />

        <Route path='/servicios' element={ <ServiciosPage /> } />

        <Route path='/perfil' element={ <Private> <PerfilPage /> </Private> } />

        <Route path='/singup' element={ <Public> <SingUpPage /> </Public> } />

        <Route path='/login' element={ <Public> <LoginPage /> </Public> } />


        <Route path='/error' element={ <ErrorPage /> } />
        <Route path='*' element={ <ErrorNotFound /> } />

      </Routes>

      <Footer/>

    </>
  )
}

export default App
