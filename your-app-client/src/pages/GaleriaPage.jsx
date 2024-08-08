import React from 'react'
import ImgCard from "../components/ImgCard"

function GaleriaPage() {
  return (
    <>
      <h2>Galeria</h2>
      <div className='galeria-container'>
        <ImgCard/>
        <ImgCard/>
        <ImgCard/>
        <ImgCard/>
      </div>
    </>
  )
}

export default GaleriaPage