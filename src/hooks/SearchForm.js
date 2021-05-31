import { useState } from 'react';



export default function SearchForm(callback, defaults){
    const [inputs, setInputs] = useState(defaults);
    const handleInputs = (event) => {
        console.log("event",event)
        console.log("inputs",event)
      /*  setInputs(
            {
            ...inputs,
          // [event.target.id]:event.target.value
        });*/
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(inputs);
        console.log(callback,"callback");
        callback(inputs);
    }
    return {
        inputs,
        handleInputs,
        handleSubmit,
    };


}




/*sendSearch = (word) => {
    //console.log('Soy la palabra de búsqueda', word);
    // ejecuta la peticion a la API
    axios.get(`https://api.tenor.com/v1/search?key=FBGXXSMMLXBO&q=${word}&limit=8`)
    .then(({ data: { results }, status}) => {
      //console.log(status);
      const urls = results.map(elemento => {
        const media = elemento.media[0].gif.url;
        //const gifUrl = Object.keys(media).map(key => media[key]);
        return media;
      });
      //console.log(urls);
      this.setState({ gifsUrl: urls });
      //console.log(this.state.gifsUrl);
      //results[0].url
    })
    .catch((error) => {
      // handle error
      console.log('Nos equivocamos', error);
    });

  };*/