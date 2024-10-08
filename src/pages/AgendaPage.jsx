import React from "react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Spinner from "../assets/spinner.gif";
import service from "../service/service.config";
import AgendaCard from "../components/AgendaCard";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

function AgendaPage() {
  const [value, setValue] = useState(null);

  const [horarioArr, setHorarioArr] = useState(null);

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
    return <img src={Spinner} />;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
    const isSelectedDate =
      horarioDate.toDateString() ===
      (value ? value.toDateString() : "").toString();
    const hasClienteAndServicio = horario.cliente && horario.servicio;

    return isSelectedDate && hasClienteAndServicio;
  });

  return (
    <div className="contariner-agenda">
      <div className="galeria-encabezado">
        <h2>Agenda</h2>
      </div>
      <div className="agenda-calendario">
        <Calendar
          className="calendario"
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
        <Accordion>
          {value && <h2 className="fecha-selec">{formatDate(value)}</h2>}
          {filteredHorarios.map((eachHorario, index) => {
            return (
              <AgendaCard
                index={index}
                eachHorario={eachHorario}
                key={index}
                getData={getData}
              />
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

export default AgendaPage;
