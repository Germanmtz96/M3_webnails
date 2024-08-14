import React, { useContext, useEffect, useState } from "react";
import ImgCard from "../components/ImgCard";
import { useNavigate } from "react-router-dom";
import service from "../service/service.config";
import Cloudinary from "../components/Cloudinary";
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from "../context/auth.context";
import Spinner from "../assets/spinner.gif"


function GaleriaPage() {
  const [show, setShow] = useState(false);
  const [publicacionArr, setPublicacionArr] = useState(null);
  const navigate = useNavigate();

  const { isAdmin } = useContext(AuthContext)

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
      <img src={Spinner} />
    );
  }

  return (
    <>
      <div className="galeria-encabezado">
        { isAdmin && <button
          onClick={handleShow}
          style={{
            margin: '20px',
            height:'30px',
            border: "none",
            color: "white",
            textTransform: "uppercase",
            fontSize: "12px",
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
