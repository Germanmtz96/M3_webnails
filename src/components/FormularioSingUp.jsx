import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import service from '../service/service.config';




function FormularioSingUp() {

    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [nombre,setNombre]= useState("")
    const [apellidos,setApellidos]= useState("")
    const [username,setUsername]= useState("")
    const [tlf,setTlf]= useState("")

    const [errorMessage, setErrorMessage]= useState(null)

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)
    const handleUsernameChange = (event) => setUsername(event.target.value)
    const handleTlfChange = (event) => setTlf(event.target.value)
    const handleNombreChange = (event) => setNombre(event.target.value)
    const handleApellidosChange = (event) => setApellidos(event.target.value)

    const navigate = useNavigate()

    const handleSingup = async (event) => {
        event.preventDefault()

        const nombreCompleto = `${nombre} ${apellidos}`

        const newUser = {
            email,
            password,
            username,
            tlf,
            nombreCompleto
        }
        console.log(newUser)
        try {
            
            await service.post("/auth/signup", newUser)
            navigate("/login")

        } catch (error) {
            console.log(error)
            if(error.response && error.response.status === 400){
                setErrorMessage(error.response.data.errorMessage)
            }else{
                navigate("/error")
            }
        }


    }


  return (
    <div className='singup-container'>
        <h2 className='singup-titulo'>Formulario de registro</h2>
        <Form className='singup-formulario'>
      
        <Form.Group controlId="formGridEmail">
          <Form.Label className="singup-formulario-datos-label">Correo electrónico</Form.Label>
          <Form.Control onChange={handleEmailChange} className="singup-formulario-datos" style={{width:'300px'}} type="email" placeholder="ejemplo@dominio.com" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label className="singup-formulario-datos-label">Contraseña</Form.Label>
          <Form.Control onChange={handlePasswordChange} className="singup-formulario-datos" style={{width:'300px'}} type="password" placeholder="Introduce tu contraseña" />
        </Form.Group>
      
      
      <Form.Group  controlId="formGridName">
        <Form.Label className="singup-formulario-datos-label">Nombre </Form.Label>
        <Form.Control onChange={handleNombreChange} className="singup-formulario-datos" style={{width:'300px'}} type="text" placeholder="Tu nombre" />
      </Form.Group>

      <Form.Group  controlId="formGridApellido">
        <Form.Label className="singup-formulario-datos-label">Apellidos</Form.Label>
        <Form.Control onChange={handleApellidosChange} className="singup-formulario-datos" style={{width:'300px'}} type="text" placeholder="Tus apellidos" />
      </Form.Group>
      
      
        <Form.Group controlId="formGridState">
          <Form.Label className="singup-formulario-datos-label">Nombre de usuario</Form.Label>
          <Form.Control onChange={handleUsernameChange} className="singup-formulario-datos" style={{width:'300px'}} placeholder="Elige un nombre de usuario"/>
        </Form.Group>

        <Form.Group controlId="formGridPhone">
          <Form.Label className="singup-formulario-datos-label">Telefono</Form.Label>
          <Form.Control onChange={handleTlfChange} className="singup-formulario-datos" style={{width:'300px'}} type="tel" placeholder="Tu número de teléfono"/>
        </Form.Group>
      

      <Button onClick={handleSingup} className="btn-singup" style={{width:'140px',height:'40px'}}variant="dark" type="submit">
        Confirmar
      </Button>

        {errorMessage && <p>{errorMessage}</p>}


    </Form> 
    </div>
  )
}

export default FormularioSingUp