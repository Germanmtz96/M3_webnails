import React from "react";
import { Link } from 'react-router-dom'
import Acrilicas from "../assets/acrilicas.jpg"
import Semipermanentes from "../assets/semipermanentes.jpg"

function InfoServicios() {
  return (
    <div className="servicios-home">
      <section>
        <h1 className="servicios-home-title">Servicios</h1>
      </section>
      <section className="servicios-home-cards">
        <div>
          <img src={Acrilicas}  />
          <h2>Acrilico</h2>
          <p>
            Las uñas acrílicas son la elección perfecta para quienes buscan
            longitud, durabilidad y estilo en sus uñas. Este servicio es ideal
            para transformar uñas naturales en bonitas extensiones que ofrecen
            la posibilidad de personalizar cada detalle.
          </p>
        </div>
        <div>
          <img src={Semipermanentes}  />
          <h2>Semipermanente</h2>
          <p>
            Las uñas semipermanentes son la opción ideal para quienes buscan un
            acabado impecable y duradero sin el compromiso de las uñas
            acrílicas. Este servicio ofrece una manicura brillante y resistente.
          </p>
        </div>
      </section>
      <section>
        <Link className="btn-servicios-home" to="/cita">
          Más información
        </Link>
      </section>
    </div>
  );
}

export default InfoServicios;
