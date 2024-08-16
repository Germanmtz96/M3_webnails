import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fondo from "../assets/fondo.jpg";
import { Link } from "react-router-dom";

function CitaServicioCard() {
  return (
    <>
      <Card>
        <Card.Body
          className="cita-card-1"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: `center calc(100% + 200px)`,
            height: "200px",
          }}
        >
          <Card.Title className="titulos-confirmacion">Acrilicas</Card.Title>
          <Link to="/horarios?acrilico=Acrilico">
            <Button className="btn-cita" variant="outline-light">
              Agendar Uñas Acrílicas
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body
          className="cita-card"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: `center calc(100% + 0px)`,
            height: "200px",
          }}
        >
          <Card.Title className="titulos-confirmacion">
            Semipermanentes
          </Card.Title>
          <Link to="/horarios?semi=Semi">
            <Button className="btn-cita" variant="outline-light">
              Agendar Uñas Semipermanentes
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <section className="conditions">
        <div className="conditions-section">
          <h3>Condiciones para Uñas Acrílicas</h3>
          <p>
            Para garantizar el mejor resultado en la aplicación de uñas
            acrílicas, le solicitamos que:
          </p>
          <ul>
            <li>
              <strong>Llegue Puntual:</strong> Asegúrese de llegar a su cita a
              tiempo para que podamos realizar el servicio de manera completa y
              sin interrupciones.
            </li>
            <li>
              <strong>Estado de las Uñas:</strong> Las uñas naturales deben
              estar limpias y libres de esmalte o productos anteriores. Si sus
              uñas están dañadas o tienen productos aplicados, por favor,
              notifíquelo al hacer la cita.
            </li>
            <li>
              <strong>Hidratación:</strong> Mantenga sus uñas e cutículas bien
              hidratadas en los días previos a la cita para un resultado óptimo.
            </li>
            <li>
              <strong>Sin Cambios de Última Hora:</strong> Para garantizar el
              tiempo y la calidad del servicio, no se permitirán cambios en la
              cita o en el diseño de las uñas una vez realizada la reserva.
            </li>
          </ul>
        </div>

        <div className="conditions-section">
          <h3>Condiciones para Uñas Semipermanentes</h3>
          <p>
            Para asegurar un resultado perfecto en la aplicación de uñas
            semipermanentes, tenga en cuenta las siguientes recomendaciones:
          </p>
          <ul>
            <li>
              <strong>Preparación:</strong> Las uñas deben estar limpias y
              libres de esmaltes anteriores. Recomendamos no aplicar ningún
              producto en las uñas antes de la cita para evitar interferencias.
            </li>
            <li>
              <strong>Puntualidad:</strong> Por favor, llegue a la hora acordada
              para permitir una aplicación completa y precisa del esmalte
              semipermanente.
            </li>
            <li>
              <strong>Hidratación de Cutículas:</strong> Mantenga las cutículas
              bien hidratadas para una mejor adherencia del esmalte
              semipermanente.
            </li>
            <li>
              <strong>Recomendaciones Post-Tratamiento:</strong> Evite el
              contacto prolongado con agua y productos químicos durante las
              primeras 24 horas después del tratamiento para asegurar una mayor
              durabilidad del esmalte.
            </li>
          </ul>
        </div>
        <hr />
        <div className="policy-section">
          <h3>Política de Cancelación</h3>
          <p>
            Lamentamos informar que no se podrá cambiar ni cancelar la cita con
            menos de 24 horas de anticipación. Esto nos permite gestionar mejor
            nuestro tiempo y ofrecer el mejor servicio a todos nuestros
            clientes. Agradecemos su comprensión y cooperación.
          </p>
        </div>
      </section>
    </>
  );
}

export default CitaServicioCard;
