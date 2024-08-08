import React from 'react'
import FotoCalendario from "../assets/foto-calendario.jpg"

function TablaHorario() {
  return (
    <>
      <h2 className='horario-title'>Horario</h2>
      
      <iframe
        src="https://germanmtz96.youcanbook.me/"
        
        width="100%"
        height="670px"
        style={{ border: 'none' }}
        title="Booking Calendar"
      ></iframe>

      
    </>
  )
}

export default TablaHorario