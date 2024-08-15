import React from 'react'
import { Link } from 'react-router-dom'

function IntroWeb() {
  return (
    <div className='intro-web'>
        
        <h1>TUS MANOS EN MIS MANOS</h1>
        <h2>Porque todos merecemos cosas únicas</h2>
        <div className="btn-intro-web"><Link className="btn-intro-web" to="/cita">Reservar cita</Link></div>
        
       
    </div>
  )
}

export default IntroWeb