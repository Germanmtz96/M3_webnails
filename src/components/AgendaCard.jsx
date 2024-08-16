import React, { useContext, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import Nombre from "../assets/iconos-perfil/username.png";
import Verificado from "../assets/verificado.png";
import Tlf from "../assets/iconos-perfil/tlf.png";
import Correo from "../assets/iconos-perfil/correo.png";
import service from "../service/service.config";

function AgendaCard(props) {
  const { horaStart, _id, cliente, servicio } = props.eachHorario;

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
        <h2 style={{ marginLeft: "120px", marginRight: "120px" }}>
          {horaStart}
        </h2>
      </Accordion.Header>
      <Accordion.Body className="datos-clientes">
        <p className="nombre-reserva">
          <img src={Nombre} style={{ marginRight: "30px", width: "30px" }} />
          {cliente.nombreCompleto}
        </p>
        <p>
          <img src={Tlf} style={{ marginRight: "30px", width: "30px" }} />
          {cliente.tlf}
        </p>
        <p>
          <img src={Correo} style={{ marginRight: "30px", width: "30px" }} />
          {cliente.email}
        </p>
        <p>
          <img
            src={Verificado}
            style={{ marginRight: "30px", width: "30px" }}
          />
          Servicio {servicio}
        </p>
      </Accordion.Body>
      <Accordion.Body
        className="datos-clientes"
        style={{ backgroundColor: "#DFD6C2" }}
      >
        <button
          onClick={handleDelete}
          style={{
            width: "320px",
            border: "none",
            color: "black",
            textTransform: "uppercase",
            fontSize: "20px",
            backgroundColor: "#DFD6C2",
          }}
        >
          Eliminar Cita
        </button>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default AgendaCard;
