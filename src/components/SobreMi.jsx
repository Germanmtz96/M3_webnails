import React from 'react'
import Raquel from "../assets/raquel.jpg"

function SobreMi() {
  return (
    <div className='sobre-mi'>
        <section className='sobre-mi-bienvenidos'>
            <h2>bienvenidos</h2>
            <h4>Soy Raquel, founder de Reixelnails. Un espacio donde la belleza, la creatividad y el cuidado personal se combinan para brindarte una experiencia única. Con más de 5 años en la industria de la belleza, he perfeccionado un estilo propio combinando las últimas tendencias en arte de uñas con un toque personal. Mi objetivo es que cada cliente se sienta especial y salga con unas uñas hermosas y una gran sonrisa.
</h4>
        </section>
        <section className='sobre-mi-img-span'>
            <img className="sobre-mi-img" src={Raquel}  />
       
            
            <span>Tus uñas, mi inspiración. tu belleza, mi misión</span> 
        </section>
    </div>
  )
}

export default SobreMi