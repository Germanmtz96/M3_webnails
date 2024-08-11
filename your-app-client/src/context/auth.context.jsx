import { createContext, useEffect, useState } from "react";
import service from "../service/service.config";

const AuthContext = createContext();

function AuthWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserId, setLoggedUserId] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  const authenticateUser = async () => {
    console.log("intentando validar el token");

    const authToken = localStorage.getItem("authToken")

    if(!authToken){
        setIsLoggedIn(false)
        setLoggedUserId(null)
        setIsAdmin(false)
        setIsAuthenticating(false)
        return
    }

    try {
        const response = await service.get("/auth/verify")
        setIsLoggedIn(true)
        setLoggedUserId(response.data._id)
        if(response.data.role === "admin"){
          setIsAdmin(true)
        }else{
          setIsAdmin(false)
        }
        setIsAuthenticating(false)
    } catch (error) {
        console.log(error)
        setIsLoggedIn(false)
        setLoggedUserId(null)
        setIsAdmin(false)
        setIsAuthenticating(false)
    }
  };

  const passedContext = {
    isLoggedIn,
    loggedUserId,
    isAdmin,
    authenticateUser,
  };

  useEffect(()=>{
    authenticateUser()
  },[])

  if(isAuthenticating){
    return <h3>aqui va spiner</h3>
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
