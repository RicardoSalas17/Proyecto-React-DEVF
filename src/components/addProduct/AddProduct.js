import React, { useState } from "react";
import MY_SERVICE from '../../services/index.js';
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/UseForm";
import { FormGroup, Label, Input } from "reactstrap";

function AddProduct() {
  const history = useHistory();
  const [mensaje] = useState();

  const sendForm = (inputs) => {
    const token = window.localStorage.getItem("token");
    const skuGenerator = (length) => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    if (token) {
      const skuValue = skuGenerator(24);
      inputs = { ...inputs, sku: skuValue };
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };

      MY_SERVICE.createProduct(inputs,config)
        .then(({ data, status }) => {
          console.log(data, status);
          history.push("/");
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    }
  };

  const { inputs, handleInputs, handleSubmit } = useForm(sendForm, {});
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2 className="texto-bienvenida">Crear un nuevo producto</h2>
        <p className="text-validacion">{mensaje}</p>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="product_name"> Nombre del producto</Label>
            <Input
              type="text"
              required
              value={inputs.product_name}
              onChange={handleInputs}
              className="form-control"
              id="product_name"
              name="product_name"
              placeholder="Nombre del producto"
              aria-label="product_name"
              aria-describedby="addon-wrapping"
            />
          </FormGroup>

          <FormGroup>
            <Label for="description"> Descripción del producto</Label>
            <Input
              type="text"
              required
              value={inputs.description}
              onChange={handleInputs}
              className="form-control"
              id="description"
              placeholder="Descripción"
              aria-label="description"
              aria-describedby="addon-wrapping"
            />
          </FormGroup>

          <FormGroup>
            <Label for="price"> Precio</Label>
            <Input
              type="number"
              required
              value={inputs.price}
              onChange={handleInputs}
              className="form-control"
              id="price"
              placeholder="Precio"
              aria-label="price"
              aria-describedby="addon-wrapping"
            />
          </FormGroup>

          <FormGroup>
            <Label for="category">Categoría</Label>
            <Input
              type="select"
              required
              value={inputs.category}
              onChange={handleInputs}
              className="form-control"
              id="category"
              placeholder="Categoría"
              aria-label="category"
              aria-describedby="addon-wrapping"
            >
              <option>Books</option>
              <option>Movies</option>
              <option>Music</option>
              <option>Games</option>
              <option>Electronics</option>
              <option>Computers</option>
              <option>Home</option>
              <option>Garden</option>
              <option>Tools</option>
              <option>Grocery</option>
              <option>Health</option>
              <option>Beauty</option>
              <option>Toys</option>
              <option>Kids</option>
              <option>Baby</option>
              <option>Clothing</option>
              <option>Shoes</option>
              <option>Jewelery</option>
              <option>Sports</option>
              <option>Outdoors</option>
              <option>Automotive</option>
              <option>Industrial</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="brand">Marca del producto</Label>
            <Input
              type="brand"
              required
              value={inputs.brand}
              onChange={handleInputs}
              className="form-control"
              id="brand"
              placeholder="Marca"
              aria-label="brand"
              aria-describedby="addon-wrapping"
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Imágen</Label>
            <Input
              type="text"
              required
              value={inputs.image}
              onChange={handleInputs}
              className="form-control"
              id="image"
              placeholder="URL de imágen"
              aria-label="image"
              aria-describedby="addon-wrapping"
            />
          </FormGroup>

          <div
          // className="col-6 mt-4"
          >
            <button type="submit" className="btn btn-primary sign-up-btn">
              Crear Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddProduct;