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

function CitaFormulario() {
  const [value, setValue] = useState(null);
  const { isLoggedIn, authenticateUser, isAdmin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [horarioArr, setHorarioArr] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState(null);

  const navigate = useNavigate();

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

  const filteredHorarios = horarioArr.filter((horario) => {
    const horarioDate = new Date(horario.day);
    return (
      horarioDate.toDateString() ===
      (value ? value.toDateString() : "").toString()
    );
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
        <h2>Horario</h2>
      </div>
      <Calendar
        onChange={handleChange} //! Configura la función para manejar la selección de fecha
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
