import React, { useState } from "react";
import service from "../service/service.config";
import ClientaCard from "../components/ClientaCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Spinner from "../assets/spinner.gif";

function ClientasPage() {
  const [searchClienta, setSearchClienta] = useState("");
  const [clientasList, setClientasList] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await service.get("/users/admin");
      setClientasList(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredClientasList = clientasList
    ? clientasList.filter((clienta) =>
        clienta.nombreCompleto
          .toLowerCase()
          .includes(searchClienta.toLowerCase())
      )
    : [];

  if (clientasList === null) {
    return <img src={Spinner} />;
  }
  console.log(clientasList);
  return (
    <Accordion className="clientes-container">
      <div className="clientas-encabezado">
        <Form.Control
          type="text"
          placeholder="Buscar por nombre..."
          className="buscador-clientas"
          value={searchClienta}
          onChange={(e) => setSearchClienta(e.target.value)}
        />
        <h2>Clientes</h2>
      </div>
      {filteredClientasList.map((eachClienta, index) => {
        return (
          <ClientaCard
            index={index}
            clienta={eachClienta}
            key={index}
            getData={getData}
          />
        );
      })}
    </Accordion>
  );
}

export default ClientasPage;
