import { MyContext } from '../../context'
import React, { useState } from "react";
import { Link} from 'react-router-dom'


function SearchInput () {

  const [palabra, setPalabra] = useState("");
  

  
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
      <Link to="/" className="btn btn-outline-primary"  onClick={e=>context.search(palabra)}>
        Buscar
      </Link>
    </div>
  )}

    </MyContext.Consumer>
    )




}

export default SearchInput;