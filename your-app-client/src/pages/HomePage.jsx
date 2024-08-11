import React from 'react'
import IntroWeb from '../components/IntroWeb'
import InfoServicios from '../components/InfoServicios'
import SobreMi from '../components/SobreMi'

function HomePage() {
  return (
    <div className='home-page'>
      <IntroWeb />
      <InfoServicios />
      <SobreMi />
    </div>
  )
}

export default HomePage