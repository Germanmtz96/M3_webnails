import React, { useContext, useEffect, useState } from 'react'

import { InlineWidget, useCalendlyEventListener, PopupWidget } from "react-calendly";
import service from '../service/service.config';



function TablaHorario() {
  const [dataPerfil, setDataPerfil] = useState(null);
  
  
  useCalendlyEventListener({
    onEventScheduled:(e) => {
      console.log("ëvento agendado", e.data)
    },
    onDateAndTimeSelected: (e) => {
      console.log(e)
    }
  })

  const getData = async () => {
    try {
      const response = await service.get("/users");
      setDataPerfil(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (dataPerfil === null) {
    return <h3>Aqui va un spiner</h3>;
  }
console.log(dataPerfil)

  return (
    <>
      <h2 className='horario-title'>Horario</h2>
      
      <div className="App">
      <InlineWidget url="https://calendly.com/germanmtz96" 
      prefill={{
        email: (dataPerfil.email),
        name: (dataPerfil.nombreCompleto),
        smsReminderNumber: (dataPerfil.tlf),

      }}
      />
    </div>

      <div data-url="https://api.calendly.com/scheduled_events/d13a4e9b-b3b9-4199-9ca4-c42dbf669061" style={{width:"400px", height:"400px"}}/>


      
    </>
  )
}

export default TablaHorario