import React from 'react'
import Ven from "../assets/ven.gif"

function ErrorPage() {
  return (
    <div className='error-container'>
      <h2 className='error'>Parece que hubo un error</h2>
      <img src={Ven} style={{width:'100%', height:'100%'}}/>
      <h2 className='error'> Cuando se haya arreglado</h2>
    </div>
  )
}

export default ErrorPage