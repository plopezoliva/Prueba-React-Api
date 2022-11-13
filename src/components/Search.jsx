import React from "react";

import { Form } from "react-bootstrap";

const Search = ({ setSearch }) => {
  //   const inputBuscar= (e) =>{
  //     setBuscarItem(e.target.value);
  // };
  const searchBtn = (e) => {
    e.preventDefault();
  };

  return (
          
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
