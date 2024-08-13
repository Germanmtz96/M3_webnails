import React, { useContext } from 'react'
import Accordion from "react-bootstrap/Accordion";
import { AuthContext } from '../context/auth.context';
import service from '../service/service.config';

function HorarioCard(props) {
    const { day, horaStart, _id } = props.eachHorario;
    
    const { isLoggedIn, authenticateUser, isAdmin } = useContext(AuthContext)
     
    const handleDelete = async () => {
        try {
          await service.delete(`/horarios/${_id}`);
          props.getData();
        } catch (error) {
          console.log(error);
        }
      };
 
  return (
    <Accordion.Item eventKey={props.index}>
    <Accordion.Header>
      <h2 style={{marginLeft:'30px',marginRight:'30px'}}>{horaStart}</h2>
    </Accordion.Header>
    <Accordion.Body className="datos-clientes">
      <button
        /* onClick={handleDelete} */
        style={{
          border: "none",
          color: "black",
          textTransform: "uppercase",
          fontSize: "20px",
          backgroundColor:'white'
        }}
      >
        Seleccionar
      </button>
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