import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AuthContext } from "../context/auth.context";
import service from "../service/service.config";

import { useLocation, useNavigate } from "react-router-dom";

function HorarioCard(props) {
  const { horaStart, _id } = props.eachHorario;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const semi = queryParams.get("semi");
  const acrilico = queryParams.get("acrilico");
  const isValidQuery = semi === "Semi" || acrilico === "Acrilico";
  const navigate = useNavigate();
  console.log(props.eachHorario);
  const { isLoggedIn, authenticateUser, isAdmin } = useContext(AuthContext);

  const handleDelete = async () => {
    try {
      await service.delete(`/horarios/${_id}`);
      props.getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAgendar = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    if (!isValidQuery) {
      navigate("/cita");
      return;
    }

    let horarioAgendado = {
      cliente: authenticateUser._id,
    };
    if (semi) {
      horarioAgendado.servicio = "Semi";
    } else if (acrilico) {
      horarioAgendado.servicio = "Acrilico";
    }

    try {
      const response = await service.patch(
        `/horarios/${_id}/coger_cita`,
        horarioAgendado
      );
      props.getData();
      console.log(response);
      props.mostrarModalReserva(response.data);
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
        <button
          className="dato-formulario"
          onClick={handleAgendar}
          style={{
            border: "none",
            color: "black",
            textTransform: "uppercase",
            fontSize: "20px",
            backgroundColor: "white",
          }}
        >
          Agendar cita
        </button>
      </Accordion.Body>
      {isAdmin && (
        <Accordion.Body className="datos-clientes">
          <button
            className="dato-formulario"
            onClick={handleDelete}
            style={{
              border: "none",
              color: "black",
              textTransform: "uppercase",
              fontSize: "20px",
              backgroundColor: "white",
            }}
          >
            Eliminar
          </button>
        </Accordion.Body>
      )}
    </Accordion.Item>
  );
}

export default HorarioCard;
