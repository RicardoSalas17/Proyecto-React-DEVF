// import React from "react";
// import React, { useEffect, useState } from 'react'


import React from 'react';
import useForm from '../../hooks/UseForm.js';
import { useHistory } from "react-router-dom";
import MY_SERVICE from '../../services/index.js';

export default function SignUp() {
    const history = useHistory();
    const sendForm = (inputs) => {
        console.log('Ejecuté sendForm2Elregresodelosformsasesino', inputs);
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
            alert('Las contraseñas no coinciden, ¿qué pasó ahí? (°_°)/');
        }
    };
    
    const {
        inputs,
        handleInputs,
        handleSubmit,
    } = useForm(sendForm, {});

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <div className="container my-4">
            <div className="row">
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" required value={inputs.first_name} onChange={handleInputs} className="form-control" name="first_name" placeholder="Nombre" aria-label="first_name" aria-describedby="addon-wrapping"/>
                </div>
            </div>

            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" required value={inputs.last_name} onChange={handleInputs} className="form-control" name="last_name" placeholder="Apellido" aria-label="last_name" aria-describedby="addon-wrapping"/>
                </div>
            </div>

            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" required value={inputs.email} onChange={handleInputs} className="form-control" name="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping"/>
                </div>
            </div>

            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="password" required value={inputs.password} onChange={handleInputs} className="form-control" name="password" placeholder="Contraseña" aria-label="password" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="password" required value={inputs.password_confirmation} onChange={handleInputs} className="form-control" name="password_confirmation" placeholder="Confirmación de contraseña" aria-label="password_confirmation" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div className="col-6 mt-4">
                <button type="submit" className="btn btn-info">Crear Cuenta</button>
            </div>
            </div>
        </div>
        </form>
        </div>
    )
}


