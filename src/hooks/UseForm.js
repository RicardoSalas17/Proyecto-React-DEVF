// Reglas para crear mis propios hooks
// 1. Se deben de llamar useAlgo ejemplo : useForm
// 2. Simepre tenemos que crear hooks que sean funciones
// 3. Tenemos que anidar a los hooks nativos de react (omitir loops, condiciones o funciones anidadas);
// Los hooks tienen que se universales!!!!!!
import { useState } from 'react';

export default function useForm(callback, defaults){
    const [inputs, setInputs] = useState(defaults);
    

    const handleInputs = (event) => {
        setInputs({
            ...inputs,
           [event.target.name]:event.target.value
        });
        //console.log(event.target.value)
        // recibir el evento 
        // cambiar esl valor de la propiedad
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(inputs);s
        //console.log(callback);
        callback(inputs);
    }

    return {
        inputs,
        handleInputs,
        handleSubmit,
    };

}