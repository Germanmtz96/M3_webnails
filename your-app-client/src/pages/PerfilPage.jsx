import React, { useEffect, useState } from "react";
import service from "../service/service.config";
import FotoPerfil from "../assets/iconos-perfil/icono-perfil.png";
import FotoCorreo from "../assets/iconos-perfil/correo.png";
import FotoTlf from "../assets/iconos-perfil/tlf.png";
import FotoUsername from "../assets/iconos-perfil/username.png";

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function PerfilPage() {
  const [dataPerfil, setDataPerfil] = useState(null);
  const [show, setShow] = useState(false);
  const [tlf,setTelefono] = useState(null)
  const [errorMessage, setErrorMessage]= useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (event) =>{
    event.preventDefault()
    await editTelefono()
    
  }
  function handleTelefono (event){
    setTelefono(event.target.value)
  }

  const editTelefono = async ()=>{
    const editedTelefono = {
        tlf
    }
        try {
            await service.patch(`/users/propio/tlf`, editedTelefono)
            setShow(false)
        } catch (error) {
        
            console.log(error)
            if(error.response && error.response.status === 400){
                setErrorMessage(error.response.data.errorMessage)
            }
           
        }  
    
    }
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/users");
      setDataPerfil(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (dataPerfil === null) {
    return <h3>Aqui va un spiner</h3>;
  }
  

  return (
    
    <div className="perfil-container">
      <div className="encabezado-perfil">
        <img src={FotoPerfil} />
        <h2>{dataPerfil.nombreCompleto}</h2>
      </div>
      <hr />
      <div className="divs-perfil">
        <h4>Detalles del contacto</h4>
        <div>
          <img src={FotoCorreo} />
          <p>{dataPerfil.email}</p>
        </div>
        <div>
          <img src={FotoTlf} />
          <p>{dataPerfil.tlf}</p>
          <button
            onClick={handleShow}
            style={{
                border: "none",
                color: "white",
                textTransform: "uppercase",
                fontSize: "14px",
            }}
            className="btn-edit-tlf"
          >
            Editar
          </button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar numero de telefono</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nuevo numero de telefono</Form.Label>
                  <Form.Control
                  onChange={handleTelefono}
                    type="tlf"
                    placeholder="ej : 777435345"
                    autoFocus
                  />
                   {errorMessage && <p>{errorMessage}</p>}
                </Form.Group>
                
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button style={{backgroundColor:'rgb(209,182,161)', border:'none'}} onClick={handleSubmit}>
                Guardar Cambios
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <img src={FotoUsername} />
          <p>{dataPerfil.username}</p>
        </div>
      </div>
      <hr />
      <p className="privacidad">
        En Reixelnails, nos tomamos muy en serio la protección de tu privacidad.
        Todos los datos que proporcionas en tu perfil son almacenados de manera
        segura en nuestros servidores. Implementamos estrictas medidas de
        seguridad para proteger la confidencialidad y la integridad de tu
        información personal.
      </p>
    </div>
  );
}

export default PerfilPage;
