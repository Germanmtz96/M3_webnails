import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Like from "../assets/like.png"
import LikeRed from "../assets/like-red.png"
import service from '../service/service.config';
import { AuthContext } from '../context/auth.context';

function ImgCard(props) {
  
  const {publicacion , getData} = props

  const { loggedUserId } = useContext(AuthContext)

  const [show, setShow] = useState(false);

  console.log(getData)
 

  const handleShow = () => setShow(true);


  const handleLike = async () => {
    try {
      if(publicacion.likes.includes(loggedUserId)){
        await service.patch(`publicaciones/${publicacion._id}/no_likes`)
        getData()
      }else{
        await service.patch(`publicaciones/${publicacion._id}/likes`)
        getData()
      }
     
    } catch (error) {
      console.log(error);
    }
    console.log(publicacion.likes)
  }

  useEffect(() => {
    
  }, []);

    if(publicacion)

  return (
    <>
    <Card className="cartas-galeria">
      <Card.Img onClick={handleShow} variant="top" alt="imagen subida" src={publicacion.imagen} />
      <p className='likes-galeria'>{publicacion.likes.length}</p>
    </Card>
    <Modal
    show={show}
    onHide={() => setShow(false)}
    dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title"
  >
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Header>
    <img className="foto-publicacion" src={publicacion.imagen} alt="imagen subida"/>
    <Modal.Body>
      //!COMENTARIOS
    </Modal.Body>
    </Modal.Header>
    <Modal.Body>
      <p>
      { publicacion.likes.includes(loggedUserId)? <img src={LikeRed} onClick={handleLike} height="30px" alt="like" />: <img src={Like} onClick={handleLike} height="30px" alt="like" />} {publicacion.likes.length} Me gusta
      </p>
      <Modal.Title id="example-custom-modal-styling-title">
        {publicacion.titulo}
      </Modal.Title>
      <hr />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Añade un comentario" />
      </Form.Group>
    </Modal.Body>
  </Modal>
  </>
  )
}

export default ImgCard