import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Like from "../assets/like.png"
import LikeRed from "../assets/like-red.png"
import service from '../service/service.config';

function ImgCard(props) {

  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false)
  const [numLikes, setNumLikes] = useState(props.publicacion.likes.length)

  const handleShow = () => setShow(true);

  const handleNoLike = () => setLike(false)

  
  const handleLike = async () => {
    try {
      const like = await service.patch(`publicaciones/${props.publicacion._id}/likes`)
      setNumLikes(like)
      setLike(true)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      handleLike()

    } catch (error) {
      console.log(error);
    }
  };

  if (!numLikes) {
    return <h3>Aqui va un spiner</h3>;
  }

  return (
    <>
    <Card className="cartas-galeria">
      <Card.Img onClick={handleShow} variant="top" alt="imagen subida" src={props.publicacion.imagen} />
      <p className='likes-galeria'>{numLikes}</p>
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
    <img className="foto-publicacion" src={props.publicacion.imagen} alt="imagen subida"/>
    <Modal.Body>
      //!COMENTARIOS
    </Modal.Body>
    </Modal.Header>
    <Modal.Body>
      <p>
      {like === false ? <img src={Like} onClick={handleLike} height="30px" alt="like" />: <img src={LikeRed} onClick={handleNoLike} height="30px" alt="like" />} {props.publicacion.likes.length} Me gusta
      </p>
      <Modal.Title id="example-custom-modal-styling-title">
        {props.publicacion.titulo}
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