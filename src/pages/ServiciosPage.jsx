import React from "react";
import Uno from "../assets/numeros-servicios/1.png";
import Dos from "../assets/numeros-servicios/2.png";
import Tres from "../assets/numeros-servicios/3.png";
import Cuatro from "../assets/numeros-servicios/4.png";
import Cinco from "../assets/numeros-servicios/5.png";
import Seis from "../assets/numeros-servicios/6.png";

function ServiciosPage() {
  return (
    <div className="servicios">
      <section className="servicio-container">
        <h2 style={{ fontFamily: "Hatton", textTransform: "uppercase" }}>
          Acrilico
        </h2>
        <div className="servicios-pasos">
          <div>
            <img src={Uno} />
            <h2>Preparación de Uñas</h2>
            <p>
              Limpiamos y preparamos tus uñas naturales para garantizar una
              aplicación suave y uniforme.
            </p>
          </div>
          <div>
            <img src={Dos} />
            <h2>Primer</h2>
            <p>
              Añadimos el primer, para adherir bien el producto a la uña
              natural.
            </p>
          </div>
          <div>
            <img src={Tres} />
            <h2>Extensión y Escultura</h2>
            <p>
              Creamos extensiones utilizando una combinación de polvo acrílico y
              líquido especial para lograr la forma y longitud deseadas.
            </p>
          </div>
          <div>
            <img src={Cuatro} />
            <h2>Lima y Pulido</h2>
            <p>
              Damos forma y suavizamos las uñas acrílicas para un acabado
              natural y elegante.
            </p>
          </div>
          <div>
            <img src={Cinco} />
            <h2>Aplicación de Esmalte</h2>
            <p>
              Utilizamos esmaltes semipermanentes de alta calidad para un color
              vibrante y duradero.
            </p>
          </div>
          <div>
            <img src={Seis} />
            <h2>Acabado y Protección</h2>
            <p>
              Aplicamos un sellador para garantizar brillo y durabilidad,
              dejándote con uñas impecables por semanas.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section className="servicio-container">
        <h2 style={{ fontFamily: "Hatton", textTransform: "uppercase" }}>
          Semipermanente
        </h2>
        <div className="servicios-pasos">
          <div>
            <img src={Uno} />
            <h2>Preparación de Uñas</h2>
            <p>
              Limpiamos y preparamos tus uñas naturales para garantizar una
              aplicación suave y uniforme.
            </p>
          </div>
          <div>
            <img src={Dos} />
            <h2>Base</h2>
            <p>
              Aplicamos la base, añadiendo primero “primer” y “nail prep”. La
              base es una “base rubber”, hecha con gel, para aportar mayor
              durabilidad.
            </p>
          </div>
          <div>
            <img src={Tres} />
            <h2>Aplicación de Esmalte</h2>
            <p>
              Utilizamos esmaltes semipermanentes de alta calidad para un color
              vibrante y duradero.
            </p>
          </div>
          <div>
            <img src={Cuatro} />
            <h2>Curado con Luz LED</h2>
            <p>
              Cada capa de esmalte se cura bajo una lámpara LED para asegurar su
              fijación y brillo.
            </p>
          </div>
          <div>
            <img src={Cinco} />
            <h2>Capa Protectora</h2>
            <p>
              Finalizamos con una capa superior que proporciona protección
              adicional y un brillo excepcional.
            </p>
          </div>
          <div>
            <img src={Seis} />
            <h2>Toques Finales</h2>
            <p>
              Aplicamos aceite de cutícula y crema hidratante para dejar tus
              manos suaves y nutridas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiciosPage;
