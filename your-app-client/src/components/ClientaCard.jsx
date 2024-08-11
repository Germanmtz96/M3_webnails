import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function ClientaCard(props) {

  const {index, clienta} = props

  return (
    <Accordion.Item eventKey={index} >
        <Accordion.Header>{clienta.nombreCompleto.toUpperCase()}</Accordion.Header>
        <Accordion.Body className='datos-clientes'>
          <p><strong>Correo electrónico:</strong> {clienta.email}</p>
          <p><strong>Nombre de usuario:</strong> {clienta.username}</p>
          <p><strong>Telefono:</strong> {clienta.tlf}</p>
          <p><strong>Cuando se registro:</strong> {clienta.createdAt}</p>
        </Accordion.Body>
      </Accordion.Item>
  )
}

export default ClientaCard