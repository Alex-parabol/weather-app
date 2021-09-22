import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Form from './Components/Form'
import Clima from './Components/Clima'
import Error from './Components/Error'

function App() {

  const [busqueda, setBusqueda ] = useState({
    ciudad: '',
    pais:''
})

  const { ciudad, pais } = busqueda;

  // permitimos que se haga la consulta sólo cuando le demos a submit desde el form.

  const [consulta, setConsulta ] = useState(false)

  // creamos un state con el resultado de la api

  const [ resultado, setResultado ] = useState({})

  // state para emplear que la api no devuelva nada.

  const [error, setError ] = useState(false);

  // extraemos la información que nos interesa de la api.

  /* const { weather, main } = resultado; */

  useEffect(()=>{
    const consultarAPI = async () =>{
      if(consulta){
        const appId = 'd7826b3d4e432a6798b479cc31115de6';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
  
        setResultado(resultado)
        setConsulta(false)
        //detecta si hubo resultados válidos
        if(resultado.cod === '404'){
          setError(true)
        } else {
          setError(false)
        }

      }
    }
    consultarAPI()
    // eslint-disable-next-line
  },[consulta])

  // carga condicional de componentes

  let componente;
  if(error){
    componente = <Error mensaje='No existen resultados' />
  } else {
    componente = <Clima resultado={resultado} />
  }

  return (
    <Fragment>
        <Header/>
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Form
                  busqueda={busqueda}
                  setBusqueda={setBusqueda}
                  setConsulta={setConsulta}
                />
              </div>
              <div className="col m6 s12">
                {componente}
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
