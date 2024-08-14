import React from 'react'
import NotFound from "../assets/notfound.gif"

function ErrorNotFound() {
  return (
    <div className='not-found-container'>
      <h2 className='not-found'>Parece que</h2>
      <img src={NotFound} style={{width:'100%', height:'100%'}}/>
      <h2 className='not-found'> es por aquí</h2>
    </div>
  )
}

export default ErrorNotFound