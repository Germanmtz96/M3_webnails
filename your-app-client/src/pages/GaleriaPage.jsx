import React from 'react'
import ImgCard from "../components/ImgCard"
import Cloudinary from '../components/Cloudinary'

function GaleriaPage() {
  return (
    <>
      <h2>Galeria</h2>
      <Cloudinary/>
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