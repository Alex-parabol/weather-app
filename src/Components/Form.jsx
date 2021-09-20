import React, {useState} from 'react'

const Form =()=>{

   const [busqueda, setBusqueda ] = useState({
       ciudad: '',
       pais:''
   })

   const [error, setError ] = useState(false)

   // extraemos ciudad y pais

    const {ciudad, pais } = busqueda

    // función que pondrá los elementos en el state

    const handleChange = e => {
        //actualizamos state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }


    // creamos la función de submit

    const handleSubmit = e => {
        e.preventDefault();

        //validamos
        if(ciudad.trim() === '' || pais.trim() === ''){
            setError(true);
            return
        } else {
            setError(false)
        }
    }


    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <div className="red darken-4">Todos los campos son obligatorios</div> : null}
            <div className="input-field col s12">
                <input 
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
               <select
                name="pais"
                id="pais"
                value={pais}
                onChange={handleChange}
                >
                    <option value="">--Seleccione Pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="FR">Francia</option>
                    <option value="GB">Inglaterra</option>
                    <option value="RU">Rusia</option>
                    <option value="DE">Alemania</option>
                </select>
                <label htmlFor="pais">Pais</label>
            </div>
            <div className="input-field col s12">
                <input type="submit"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4"
                        value="Buscar Clima"
                 />
            </div>
        </form>
    );
}

export default Form