import React from "react";
import { Form } from "react-bootstrap";

const Search = ({ setSearch }) => {
  // para evitar que una página se refresque automáticamente al momento de llamar al evento.
  const searchBtn = (e) => {
    e.preventDefault();
  };

  return (
          //el comando event.target.value se usa
      // para hacer que se guarde el dato que inserta el usuario en nuestro input
    <Form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input onChange={(e) => {
          setSearch(e.target.value);
        }} 
        placeholder="Search for characters"
        className="input"
        type="text"/>
      <button onClick={searchBtn} className="btn btn-primary fs-5">
        Search
      </button>
    </Form>
  );

  
};
export default Search;
