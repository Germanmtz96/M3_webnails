import Form from 'react-bootstrap/Form';
import React from 'react'
import { useState } from 'react'
import service from '../service/service.config';
import { useNavigate } from 'react-router-dom';

const Cloudinary = () => {

    const navigate = useNavigate()

    const [imageUrl, setImageUrl] = useState(null)       
    const [isUploading, setIsUploading] = useState(false)
  

    const handleFileUpload  = async (e)=>{   
        if (!e.target.files[0]) {
            return;
          }  
          setIsUploading(true)
          const uploadData = new FormData();
          uploadData.append("image", e.target.files[0]);
          try {
            const response = await service.post("/upload", uploadData) 
            setImageUrl(response.data.imageUrl)
            setIsUploading(false)
        } catch (error) {
            navigate("/error");
        }

    }

  return (
    <>
    <Form>
        <Form.Control type="file"
        name="image"
        placeholder='Upload an image'
        accept='image/png, image/jpeg' 
        onChange={handleFileUpload}
        disabled={isUploading}
        />
      <Form.Control type="text" placeholder="titulo de la publicación..." />
    </Form>

    
       
        {isUploading ? <h3>... uploading image</h3> : null}

        
        {imageUrl ? (<div><img src={imageUrl} alt="img" width={200} /></div>) : null}
        
        </>
  );
}

export default Cloudinary
