import React from "react";
import Accordion from "react-bootstrap/Accordion";
import service from "../service/service.config";

function ClientaCard(props) {
  const { index, clienta, getData } = props;

  const handleDelete = async () => {
    try {
      await service.delete(`/users/${clienta._id}/admin`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
      <p>{clienta.nombreCompleto.toUpperCase()}</p>
      </Accordion.Header>
      <Accordion.Body className="datos-clientes">
        <p>
          <strong>Correo electrónico:</strong> {clienta.email}
        </p>
        <p>
          <strong>Nombre de usuario:</strong> {clienta.username}
        </p>
        <p>
          <strong>Telefono:</strong> {clienta.tlf}
        </p>
        <p>
          <strong>Cuando se registro:</strong> {clienta.createdAt}
        </p>
        <button
        className="btn-delete-usuario"
          onClick={handleDelete}
          style={{
            backgroundColor:"rgb(209,182,161)",
            border: "none",
            color: "white",
            textTransform: "uppercase",
            fontSize: "14px",
          }}
        >
          Eliminar Usuario
        </button>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default ClientaCard;
