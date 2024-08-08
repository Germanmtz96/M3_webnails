import React from 'react'
import { Link } from 'react-router-dom'

function IntroWeb() {
  return (
    <div className='intro-web'>
        
        <h1>TUS MANOS EN MIS MANOS</h1>
        <p>Porque todos merecemos cosas únicas</p>
        <div><Link className="btn-intro-web" to="/cita">Reservar cita</Link></div>
        
       
    </div>
  )
}

export default IntroWeb