import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

const CardPerson = ({ search }) => {
  //La variable dataApi almacenará los datos que obtuvimos de la API.
  //Usaremos la función setdataApi para cambiar los datos cuando queramos.
  //mostrar las card
  const [dataApi, setdataApi] = useState([]);

  //función para traer los datos de la API
  const URL = `https://rickandmortyapi.com/api/character/?page=2&name=${search}`;

  useEffect(() => {
    buscarData();
  }, []);

  const buscarData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setdataApi(data.results);
  };

    const results = !search
   ? dataApi
   : dataApi.filter((personajes) =>
        personajes.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="row">
    <CardGroup className="container">
      {results.map((personajes) => (
        <div key={personajes.id} className="col">
        <Card className="tarjeta" style={{minWidth: "400px"}}>
        <Card.Body >
          <Card.Img variant="top" src={personajes.image} />
            <Card.Title className="title">{personajes.name}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{personajes.location.name}</small>
          </Card.Footer>
        </Card>
        </div>
      ))}
      </CardGroup>
      </div>
  );
};

export default CardPerson;
