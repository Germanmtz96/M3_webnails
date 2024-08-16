import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Like from "../assets/like.png";
import LikeRed from "../assets/like-red.png";
import service from "../service/service.config";
import { AuthContext } from "../context/auth.context";
import ComentarioCard from "./ComentarioCard";
import { useNavigate } from "react-router-dom";

function ImgCard(props) {
  const { publicacion, getData } = props;

  const { isAdmin, loggedUserId, isLoggedIn } = useContext(AuthContext);

  const [modalDeletePublicacion, setModalDeletePublicacion] = useState(false);
  const [show, setShow] = useState(false);
  const [descripcion, setDescripcion] = useState("");
  const [comentarioArr, setComentarioArr] = useState(null);

  const navigate = useNavigate();
  const handleDescripcion = (event) => setDescripcion(event.target.value);
  const handleShow = () => setShow(true);
  const handleModalDeletePublicacion = () => setModalDeletePublicacion(true);
  const handleCerrarModalDeletePublicacion = () =>
    setModalDeletePublicacion(false);

  const handleCrearComentario = async (event) => {
    event.preventDefault();

    const newComentario = {
      descripcion,
    };
    console.log(newComentario);
    try {
      await service.post(`/comentarios/${publicacion._id}`, newComentario);
      getData();
      getComentarios();
      setDescripcion("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async () => {
    try {
      await service.delete(`/publicaciones/${publicacion._id}`);
      getData();
      setShow(false);
      navigate("/galeria");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = async () => {
    try {
      if (publicacion.likes.includes(loggedUserId)) {
        await service.patch(`publicaciones/${publicacion._id}/no_likes`);
        getData();
      } else {
        await service.patch(`publicaciones/${publicacion._id}/likes`);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(publicacion.likes);
  };
  const getComentarios = async () => {
    if (!isLoggedIn) {
      return;
    }
    try {
      const response = await service.get(`/comentarios/${publicacion._id}`);
      setComentarioArr(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComentarios();
  }, []);

  return (
    <>
      <Card className="cartas-galeria">
        <Card.Img
          onClick={isLoggedIn ? handleShow : null}
          variant="top"
          alt="imagen subida"
          src={publicacion.imagen}
        />
      </Card>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          {isAdmin && (
            <button
              className="btn-borrar-publicacion"
              onClick={handleModalDeletePublicacion}
              style={{
                backgroundColor: "rgb(209,182,161)",
                border: "none",
                color: "white",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              Borrar publicación
            </button>
          )}
          <Modal
            show={modalDeletePublicacion}
            onHide={handleCerrarModalDeletePublicacion}
          >
            <Modal.Header closeButton>
              <Modal.Title>¿Estas seguro de borrar la publicación?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button
                className="btn-borrar-publicacion"
                variant="secondary"
                onClick={handleCerrarModalDeletePublicacion}
              >
                No
              </Button>
              <Button
                className="btn-borrar-publicacion"
                variant="primary"
                onClick={handleDelete}
              >
                Si
              </Button>
            </Modal.Footer>
          </Modal>
        </Modal.Header>
        <Modal.Header>
          <img
            className="foto-publicacion"
            src={publicacion.imagen}
            alt="imagen subida"
          />
          <Modal.Body className="comentarios-container">
            {comentarioArr &&
              comentarioArr.map((eachComentario) => {
                return (
                  <ComentarioCard
                    key={eachComentario._id}
                    publicacion={publicacion}
                    eachComentario={eachComentario}
                    getComentarios={getComentarios}
                  />
                );
              })}
          </Modal.Body>
        </Modal.Header>
        <Modal.Body>
          <p>
            {publicacion.likes.includes(loggedUserId) ? (
              <img
                src={LikeRed}
                onClick={handleLike}
                height="30px"
                alt="like"
              />
            ) : (
              <img src={Like} onClick={handleLike} height="30px" alt="like" />
            )}
            {publicacion.likes.length} Me gusta
          </p>
          <Modal.Title id="example-custom-modal-styling-title">
            {publicacion.titulo}
          </Modal.Title>
          <hr />
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                onChange={handleDescripcion}
                value={descripcion}
                as="textarea"
                rows={3}
                placeholder="Añade un comentario"
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleCrearComentario}>
              Crear Comentario
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImgCard;
