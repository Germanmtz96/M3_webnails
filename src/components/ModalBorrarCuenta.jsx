import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalBorrarCuenta(props) {

    const {setShowModalDeleteAcount, showModalDeleteAcount, handleDelete} = props

    const handleCloseModalDeleteAcount = () => setShowModalDeleteAcount(false);

  return (
    <Modal show={showModalDeleteAcount} onHide={handleCloseModalDeleteAcount}>
    <Modal.Header closeButton>
      <Modal.Title>¿Estas seguro de querer borrar tu cuenta?</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModalDeleteAcount}>
        No
      </Button>
      <Button style={{backgroundColor:'rgb(209,182,161)', border:'none'}} onClick={handleDelete}>
        Si
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalBorrarCuenta