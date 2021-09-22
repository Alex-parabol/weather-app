import React from 'react'
import PropTypes from 'prop-types'

const Clima = ({resultado}) => {

    const { name, main } = resultado;

    if(!name) return null;

    const kelvin = 273.15;

    const celsius = main.temp - kelvin;
    const maxtemp = main.temp_max - kelvin
    const mintemp = main.temp_min - kelvin


    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>
                    El clima de {name} es:
                </h2>
                <p className="temperatura">
                    {celsius.toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>Temperatura Máxima:
                    {maxtemp.toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>Temperatura Mínima:
                    {mintemp.toFixed(2)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima