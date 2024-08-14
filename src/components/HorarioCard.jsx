import React, { useContext, useState } from 'react'
import Accordion from "react-bootstrap/Accordion";
import { AuthContext } from '../context/auth.context';
import service from '../service/service.config';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FotoCalendario from "../assets/foto-calendario.png"
import Nombre from "../assets/iconos-perfil/username.png"
import Verificado from "../assets/verificado.png"
import Tlf from "../assets/iconos-perfil/tlf.png"
import Correo from "../assets/iconos-perfil/correo.png"
import Hora from "../assets/hora.png"

import { useLocation, useNavigate } from 'react-router-dom';

function HorarioCard(props) {
    const { day, horaStart, _id ,cliente ,servicio } = props.eachHorario;
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const semi = queryParams.get('semi');
    const acrilico = queryParams.get('acrilico');
    const isValidQuery = semi === 'Semi' || acrilico === 'Acrilico';
    const navigate = useNavigate()

    const { isLoggedIn, authenticateUser, isAdmin } = useContext(AuthContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  
    const fechaFormateada = (fechaDeLaBD) => {
      const fecha = new Date(fechaDeLaBD)

      const opciones = { year: 'numeric', month: 'long', day: 'numeric' }
      const fechaCambiada = fecha.toLocaleDateString('es-ES', opciones)
      return fechaCambiada
    }

    const handleDelete = async () => {
      try {
        await service.delete(`/horarios/${_id}`);
        props.getData();
      } catch (error) {
        console.log(error);
      }
    };

    const handleAgendar = async () => {
      if (!isLoggedIn) {
        navigate("/login");
        return;
    }
      if (!isValidQuery) {
        navigate("/cita");
        return;
    }
      
    let horarioAgendado = {
      cliente: authenticateUser._id
  };
  if (semi) {
    horarioAgendado.servicio = 'Semi'
} else if (acrilico) {
    horarioAgendado.servicio = 'Acrilico'
}


try {
  await service.patch(`/horarios/${_id}/coger_cita`, horarioAgendado)
  props.getData()
  setShow(true)
} catch (error) {
  console.log(error)
}
  console.log(authenticateUser)
    }
    

  return (
    <Accordion.Item eventKey={props.index}>
    <Accordion.Header>
      <h2 style={{marginLeft:'120px',marginRight:'120px'}}>{horaStart}</h2>
    </Accordion.Header>
    <Accordion.Body className="datos-clientes">
      <button
         onClick={handleAgendar} 
        style={{
          border: "none",
          color: "black",
          textTransform: "uppercase",
          fontSize: "20px",
          backgroundColor:'white'
        }}
      >
        Agendar cita
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ha programado su cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong style={{ fontSize:'22px',textTransform:'uppercase',fontFamily:'Hatton'}}>Reixelnails</strong>
          <p><img src={Nombre} style={{marginRight:'30px', width:'30px'}}/>{cliente.nombreCompleto}</p>
          <p><img src={FotoCalendario} style={{marginRight:'30px', width:'30px'}} />{fechaFormateada(day)}</p>
          <p><img src={Hora} style={{marginRight:'30px', width:'30px'}} />{horaStart}</p>
          <p><img src={Tlf} style={{marginRight:'30px', width:'30px'}} />{cliente.tlf}</p>
          <p><img src={Correo} style={{marginRight:'30px', width:'30px'}}/>{cliente.email}</p>
          <p><img src={Verificado} style={{marginRight:'30px', width:'30px'}} /><strong>Su cita para {servicio} ha sido confirmada.<strong/></strong></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Accordion.Body>
    {isAdmin && <Accordion.Body className="datos-clientes">
    <button
         onClick={handleDelete} 
        style={{
          border: "none",
          color: "black",
          textTransform: "uppercase",
          fontSize: "20px",
          backgroundColor:'white'
        }}
      >
        Eliminar
      </button>
    </Accordion.Body>}
  </Accordion.Item>
  )
}

export default HorarioCard