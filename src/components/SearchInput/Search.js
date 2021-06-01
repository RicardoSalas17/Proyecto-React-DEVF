import { Component } from 'react';

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchForm from '../../hooks/SearchForm';

function SearchInput () {
    
  const history = useHistory();
  const [palabra, setPalabra] = useState("");

  const buscador = () => {
    palabra.toLocaleLowerCase();
    palabra.length === 0
      ? history.push("/")
      : history.push(`/search/${palabra}`);
  };

  return (
    <div className="d-flex">
      <input
        className="form-control mr-2"
        type="search"
        placeholder="Search"
        onChange={(e) => {
          console.log(e.target.value);
          setPalabra(e.target.value.toLocaleLowerCase());
        }}
      />
      <button className="btn btn-outline-primary" onClick={buscador}>
        Buscar
      </button>
    </div>
  );
}

export default SearchInput;