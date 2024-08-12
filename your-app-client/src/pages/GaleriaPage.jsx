import React, { useEffect, useState } from 'react'
import ImgCard from "../components/ImgCard"
import { useNavigate } from "react-router-dom";
import service from '../service/service.config';
import Cloudinary from '../components/Cloudinary';

function GaleriaPage() {

  const [publicacionArr, setPublicacionArr] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await service.get("/publicaciones");
      setPublicacionArr(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (publicacionArr === null) {
    return (
      <div>
        <h3> Loading ... </h3>;
      </div>
    );
  }


  return (
    <>
    <div className='galeria-encabezado'>
      <Cloudinary/>
      <h2>Galeria</h2>
    </div>
      
      <div className='galeria-container'>
        {publicacionArr.map((eachPublicacion,index) => {
  return <ImgCard publicacion={eachPublicacion} key={index} getData={getData} />
        })}
      </div>
    </>
  )
}

export default GaleriaPage