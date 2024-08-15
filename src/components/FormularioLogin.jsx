import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import service from '../service/service.config';

function FormularioLogin() {

    const {authenticateUser} = useContext(AuthContext)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [errorMessage, setErrorMessage]= useState(null)
    const navigate = useNavigate()
    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    const handleLogin = async (event) => {
        event.preventDefault()

        const userCredentials = {
            email,
            password
        }

        try {
            
            const response = await service.post("/auth/login", userCredentials)

            localStorage.setItem("authToken", response.data.authToken)

            authenticateUser()

            navigate("/")

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
    <div className='login-container'>
        <h2 className='login-titulo'>Formulario de registro</h2>

    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className="formulario-login">Correo electrónico</Form.Label>
        <Form.Control onChange={handleEmailChange} className="formulario-login" style={{width:'300px'}} type="email" placeholder="Introduce tu correo electrónico" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className="formulario-login">Contraseña</Form.Label>
        <Form.Control onChange={handlePasswordChange} className="formulario-login" style={{width:'300px'}} type="password" placeholder="Introduce tu contraseña" />
      </Form.Group>

    <Button  onClick={handleLogin} className="btn-formulario-login" style={{width:'140px',height:'40px'}}variant="dark" type="submit">
        Confirmar
      </Button>

      {errorMessage && <p>{errorMessage}</p>}
    </Form>

    </div>
  )
}

export default FormularioLogin