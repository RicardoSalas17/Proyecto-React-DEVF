import { Component } from 'react';
import { MyContext } from '../../context'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchForm from '../../hooks/SearchForm';

function SearchInput () {
  
  //const history = useHistory();
  const [palabra, setPalabra] = useState("");
  
  const buscador = () => {
    palabra.toLocaleLowerCase()
  };
  
  return (
    <MyContext.Consumer>
    {context =>(
    <div className="d-flex">
      <input
        className="form-control mr-2"
        type="search"
        placeholder="Search"
        onChange={(e) => {
          setPalabra(e.target.value.toLocaleLowerCase());
        }}
      />
      <button className="btn btn-outline-primary"  onClick={e=>context.search(palabra)}>
        Buscar
      </button>
    </div>
  )}

    </MyContext.Consumer>
    )




}

export default SearchInput;