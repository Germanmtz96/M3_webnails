import React from 'react'
import FotoCalendario from "../assets/foto-calendario.jpg"
import { InlineWidget } from "react-calendly";

function TablaHorario() {
  return (
    <>
      <h2 className='horario-title'>Horario</h2>
      
      <div className="App">
      <InlineWidget url="https://calendly.com/germanmtz96" />
    </div>

      
    </>
  )
}

export default TablaHorario