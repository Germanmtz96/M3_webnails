import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import service from '../service/service.config';
import Eliminar from '../assets/borrar.png'
import { AuthContext } from '../context/auth.context';

function ComentarioCard(props) {
    const {_id,creator,descripcion} = props.eachComentario

    const { isAdmin, loggedUserId } = useContext(AuthContext);
    
    const handleDelete = async () => {
        try {
          await service.delete(`/comentarios/${_id}`)
          props.getComentarios()
        } catch (error) {
          console.log(error)
        }
      }
  
    return (
    <Card >
      <Card.Header as="h5">{creator.username}</Card.Header>
      <Card.Body style={{position: "relative"}}>
        <Card.Text >
         {descripcion}
        </Card.Text>
         <button
        className='comentario-btn-delete'
        onClick={handleDelete}
        style={{
            backgroundColor:'rgba(0, 0, 0, 0)',
            border: "none",
            textTransform: "uppercase",
            fontSize: "14px",
          }}><img src={Eliminar} width={20}/></button>
      </Card.Body>
    </Card>
  )
}

export default ComentarioCard