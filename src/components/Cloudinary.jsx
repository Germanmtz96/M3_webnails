import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { useState } from "react";
import service from "../service/service.config";
import { useNavigate } from "react-router-dom";
import Img from "../assets/img.png";

const Cloudinary = (props) => {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [titulo, setTitulo] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  const handleTitulo = (event) => setTitulo(event.target.value);

  const handleFileUpload = async (e) => {
    if (!e.target.files[0]) {
      return;
    }
    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    try {
      const response = await service.post("/upload", uploadData);
      setImageUrl(response.data.imageUrl);
      setIsUploading(false);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPublicacion = {
      titulo,
      imagen: imageUrl,
    };
    console.log(newPublicacion);
    try {
      await service.post("/publicaciones", newPublicacion);
      props.getData();
      props.handleClose();
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <>
      <Form style={{ position: "relative", height: "500px", padding: "10px" }}>
        <Form.Control
          type="file"
          name="image"
          placeholder="Upload an image"
          accept="image/png, image/jpeg"
          onChange={handleFileUpload}
          disabled={isUploading}
          style={{ marginBottom: "20px" }}
        />
        <Form.Control
          onChange={handleTitulo}
          type="text"
          placeholder="titulo de la publicación..."
          style={{ marginBottom: "20px" }}
        />
        {imageUrl ? (
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="secondary"
            style={{ position: "absolute", transform: "translate(220%, 20%)" }}
          >
            Confirmar
          </Button>
        ) : null}
        {errorMessage && <p>{errorMessage}</p>}
        {isUploading ? <img src={Img} /> : null}

        {imageUrl ? (
          <div>
            <img src={imageUrl} alt="img" width={200} />
          </div>
        ) : null}
      </Form>
    </>
  );
};

export default Cloudinary;
