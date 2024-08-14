import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AuthContext } from "../context/auth.context";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import service from "../service/service.config";
import HorarioCard from "./HorarioCard";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

import FotoCalendario from "../assets/foto-calendario.png";
import Nombre from "../assets/iconos-perfil/username.png";
import Verificado from "../assets/verificado.png";
import Tlf from "../assets/iconos-perfil/tlf.png";
import Correo from "../assets/iconos-perfil/correo.png";
import Hora from "../assets/hora.png";

function CitaFormulario() {
  const [value, setValue] = useState(null);
  const { isLoggedIn, authenticateUser, isAdmin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [showReservar, setShowReservar] = useState(false);
  const [reservaHecha, setReservaHecha] = useState(null);
  const [horarioArr, setHorarioArr] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState(null);

  const navigate = useNavigate();

  const fechaFormateada = (fechaDeLaBD) => {
    const fecha = new Date(fechaDeLaBD);

    const opciones = { year: "numeric", month: "long", day: "numeric" };
    const fechaCambiada = fecha.toLocaleDateString("es-ES", opciones);
    return fechaCambiada;
  };

  const handleCloseReserva = () => setShowReservar(false);
  const getData = async () => {
    try {
      const response = await service.get("/horarios");
      setHorarioArr(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };
  console.log(horarioArr);
  useEffect(() => {
    getData();
  }, []);

  if (horarioArr === null) {
    return (
      <div>
        <h3> Loading ... </h3>
      </div>
    );
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 2);

  const nextMonthStart = new Date(today);
  nextMonthStart.setMonth(today.getMonth() + 1);
  nextMonthStart.setDate(1);

  const maxDate = new Date(nextMonthStart);
  maxDate.setMonth(nextMonthStart.getMonth() + 1);
  maxDate.setDate(0);

  const handleChange = (nextValue) => {
    setValue(nextValue);
  };

  const tileClassName = ({ date }) => {
    const day = date.getDay();
    return day === 4 || day === 5 || day === 6 ? "highlight" : "hidden";
  };

  const tileDisabled = ({ date }) => {
    return date < minDate || date > maxDate;
  };

  const handleMonthChange = (newValue) => {
    if (newValue < today || newValue.getMonth() > today.getMonth() + 1) {
      setValue(today);
    } else {
      setValue(newValue);
    }
  };
  const handleFecha = (event) => setFecha(event.target.value);

  const handleHora = (event) => setHora(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newHorario = {
      day: fecha,
      horaStart: hora,
    };
    console.log(newHorario);
    try {
      await service.post("/horarios", newHorario);
      getData();
      handleClose();
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const mostrarModalReserva = (reserva) => {
    console.log(reserva);
    setReservaHecha(reserva);
    setShowReservar(true);
  };

  const filteredHorarios = horarioArr.filter((horario) => {
    const horarioDate = new Date(horario.day);

    const isSelectedDate =
      horarioDate.toDateString() ===
      (value ? value.toDateString() : "").toString();
    const isAvailable = !horario.cliente && !horario.servicio;

    return isSelectedDate && isAvailable;
  });

  return (
    <div className="contariner-calendario">
      <div className="galeria-encabezado">
        {isAdmin && (
          <button
            onClick={handleShow}
            style={{
              margin: "20px",
              height: "30px",
              border: "none",
              color: "white",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            Subir Publicación
          </button>
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Subir Horario</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "5px" }}>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Fecha
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="date" onChange={handleFecha} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Hora
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="time" onChange={handleHora} />
                </Col>
              </Form.Group>
              <Button onClick={handleSubmit} type="submit" variant="secondary">
                Confirmar
              </Button>
              {errorMessage && <p>{errorMessage}</p>}
            </Form>
          </Modal.Body>
        </Modal>
        <Modal show={showReservar} onHide={handleCloseReserva}>
          <Modal.Header closeButton>
            <Modal.Title>Ha programado su cita</Modal.Title>
          </Modal.Header>
          {reservaHecha ? (
            <Modal.Body>
              <strong
                style={{
                  fontSize: "22px",
                  textTransform: "uppercase",
                  fontFamily: "Hatton",
                }}
              >
                Reixelnails
              </strong>
              <p>
                <img
                  src={Nombre}
                  style={{ marginRight: "30px", width: "30px" }}
                />
                {reservaHecha.cliente.nombreCompleto}
              </p>
              <p>
                <img
                  src={FotoCalendario}
                  style={{ marginRight: "30px", width: "30px" }}
                />
                {fechaFormateada(reservaHecha.day)}
              </p>
              <p>
                <img
                  src={Hora}
                  style={{ marginRight: "30px", width: "30px" }}
                />
                {reservaHecha.horaStart}
              </p>
              <p>
                <img src={Tlf} style={{ marginRight: "30px", width: "30px" }} />
                {reservaHecha.cliente.tlf}
              </p>
              <p>
                <img
                  src={Correo}
                  style={{ marginRight: "30px", width: "30px" }}
                />
                {reservaHecha.cliente.email}
              </p>
              <p>
                <img
                  src={Verificado}
                  style={{ marginRight: "30px", width: "30px" }}
                />
                <strong>
                  Su cita para {reservaHecha.servicio} ha sido confirmada.
                </strong>
              </p>
            </Modal.Body>
          ) : (
            <p>No se ha asignado la cita.</p>
          )}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseReserva}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <h2>Horario</h2>
      </div>
      <Calendar
        onChange={handleChange}
        value={value}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
        minDate={minDate}
        maxDate={maxDate}
        onActiveDateChange={({ activeStartDate }) => {
          handleMonthChange(activeStartDate);
        }}
        minDetail="month"
        showNavigation={true}
      />
      {value && <h2 className="fecha-selec">{formatDate(value)}</h2>}
      <Accordion>
        {filteredHorarios.map((eachHorario, index) => {
          return (
            <HorarioCard
              mostrarModalReserva={mostrarModalReserva}
              index={index}
              eachHorario={eachHorario}
              key={index}
              getData={getData}
            />
          );
        })}
      </Accordion>
    </div>
  );
}

export default CitaFormulario;
