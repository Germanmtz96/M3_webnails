import React from 'react'


import instagramColor from '../assets/iconos-footer/instagram-color.png'
import tiktokColor from '../assets/iconos-footer/tiktok-color.png'
import youtubeColor from '../assets/iconos-footer/youtube-color.png'


function Footer() {
  return (

    
    <div className='footer-container'>
    <section className='info-footer'>
    <h4>Información de contacto</h4>
    <address>
      Reixelnails <br/>
      C/ Inventada n44 <br/>
      03007 Alicante, <br/>
      España <br/>
      +34 777 77 88 66
    </address>
    </section>
    
    <section className='redes-footer'>
    <h4>Redes sociales</h4>
    <div className='redes-sociales'>
      <a href="https://www.youtube.com/@elrubiusOMG"><img className="youtube" src={youtubeColor}  width={55} /></a>
      <a href="https://www.tiktok.com/@raaqballester?_t=8ohHVfmUWxd&_r=1"><img src={tiktokColor}  width={50} /></a>
      <a href="https://www.instagram.com/reixelnails?igsh=MXVqeTBiZGpvM3Uzdg%3D%3D&utm_source=qr"><img src={instagramColor} width={50} /></a>
    </div>
    </section>
    </div>
    
  )
}

export default Footer