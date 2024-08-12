import React, { useContext, useEffect, useState } from "react";
import ImgCard from "../components/ImgCard";
import { useNavigate } from "react-router-dom";
import service from "../service/service.config";
import Cloudinary from "../components/Cloudinary";
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from "../context/auth.context";

function GaleriaPage() {
  const [show, setShow] = useState(false);
  const [publicacionArr, setPublicacionArr] = useState(null);
  const navigate = useNavigate();

  const { isLoggedIn, authenticateUser, isAdmin } = useContext(AuthContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getData = async () => {
    try {
      const response = await service.get("/publicaciones");
      setPublicacionArr(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (publicacionArr === null) {
    return (
      <div>
        <h3> Loading ... </h3>;
      </div>
    );
  }

  return (
    <>
      <div className="galeria-encabezado">
        { isAdmin && <button
          onClick={handleShow}
          style={{
            border: "none",
            color: "white",
            textTransform: "uppercase",
            fontSize: "14px",
          }}
        >
          Subir Publicación
        </button>}
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Subir Publicación</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{padding:'5px'}}>
            <Cloudinary getData={getData} handleClose={handleClose}/>
          </Modal.Body>
        </Modal>
        <h2>Galeria</h2>
      </div>
      <div className="galeria-container">
        {publicacionArr.map((eachPublicacion, index) => {
          return (
            <ImgCard
              publicacion={eachPublicacion}
              key={index}
              getData={getData}
            />
          );
        })}
      </div>
    </>
  );
}

export default GaleriaPage;
