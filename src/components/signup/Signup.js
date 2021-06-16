import React from 'react';
import useForm from '../../hooks/UseForm.js';
import { useHistory } from "react-router-dom";
import MY_SERVICE from '../../services/index.js';
import { FormGroup, Label, Input } from "reactstrap";

export default function SignUp() {
    const history = useHistory();
    const sendForm = (inputs) => {
        console.log('Ejecuté sendForm2Elregresodelosformsasesino', inputs);
        console.log(inputs)
        if(inputs.password === inputs.password_confirmation) {
            delete inputs.password_confirmation;
            MY_SERVICE.signup(inputs)
                .then(({data, status}) => {
                    console.log(data, status);
                    history.push('/');
                })
                .catch(error => {
                    console.error(error.response.data);
                })
        } else {
            alert('Las contraseñas no coinciden');
        }
    };
    const {
        inputs,
        handleInputs,
        handleSubmit,
    } = useForm(sendForm, {});

    return(
        <div>
    <div className="signup-container">
        <div className="signup-content">
          <h2 className="texto-bienvenida">Crear cuenta</h2>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="first_name">Nombre</Label>
              <Input
                type="text"
                required
                value={inputs.first_name}
                onChange={handleInputs}
                className="form-control"
                id="first_name"
                name="first_name"
                placeholder="Nombre"
                aria-label="first_name"
                aria-describedby="addon-wrapping"
              />
            </FormGroup>
  
            <FormGroup>
              <Label for="last_name">Apellido</Label>
              <Input
                type="text"
                required
                value={inputs.last_name}
                onChange={handleInputs}
                className="form-control"
                id="last_name"
                placeholder="Apellido"
                aria-label="last_name"
                aria-describedby="addon-wrapping"
              />
            </FormGroup>
  
            <FormGroup>
              <Label for="email">Correo Electronico</Label>
              <Input
                type="email"
                required
                value={inputs.email}
                onChange={handleInputs}
                className="form-control"
                id="email"
                placeholder="E-mail"
                aria-label="email"
                aria-describedby="addon-wrapping"
              />
            </FormGroup>
  
            <FormGroup>
              <Label for="role">Categoría</Label>
              <Input
                type="select"
                required
                value={inputs.role}
                onChange={handleInputs}
                className="form-control"
                id="role"
                placeholder="role"
                aria-label="role"
                aria-describedby="addon-wrapping"
              >
                <option>ADMIN</option>
                <option selected>CUSTOMER</option>
              </Input>
            </FormGroup>
  
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input
                type="password"
                required
                value={inputs.password}
                onChange={handleInputs}
                className="form-control"
                id="password"
                placeholder="Contraseña"
                aria-label="password"
                aria-describedby="addon-wrapping"
              />
            </FormGroup>

            <FormGroup>
            <Label for="password_confirmation">Confirmar contraseña</Label>
            <Input
              type="password"
              required
              value={inputs.password_confirmation}
              onChange={handleInputs}
              className="form-control"
              id="password_confirmation"
              placeholder="password confirmation"
              aria-label="password_confirmation"
              aria-describedby="addon-wrapping"
            />
          </FormGroup>  
            <div>
              <button type="submit" className="btn btn-primary sign-up-btn">
                Crear Product
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>
    )
}