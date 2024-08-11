import React, { useEffect, useState } from 'react'
import ImgCard from "../components/ImgCard"
import { useNavigate } from "react-router-dom";
import service from '../service/service.config';



function GaleriaPage() {

  const [photoArr, setPhotoArr] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await service.get("/publicaciones");
      setPhotoArr(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (photoArr === null) {
    return (
      <div>
        <h3> Loading ... </h3>;
      </div>
    );
  }
console.log(photoArr)

  return (
    <>
      <h2>Galeria</h2>
      
      <div className='galeria-container'>
        {photoArr.map((eachPublicacion,index) => {
          return <ImgCard publicacion={eachPublicacion} key={index}/>
        })}
      </div>
    </>
  )
}

export default GaleriaPage