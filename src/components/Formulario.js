import React, { useState} from 'react';
import Error from './Error'
import Shortid from 'shortid'


const Formulario = ({guardarGasto, seHaCreadoGasto}) => {

    // Aquí lo que queremos es guardar en una constante el concepto y en otra la cantidad

    const [ concepto, guardarConcepto] = useState('');
    const [ cantidad, guardarCantidad] = useState(0);
    const [ error, guardarError ] = useState(false);


    // onChange lo he establecido en los propior inputs

    const onSubmit = e => {
        e.preventDefault();

        if(concepto.trim() === '' || cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        guardarError(false);

        const gasto = {
            concepto,
            cantidad,
            id: Shortid.generate()
        }

        // Recoger valores y pasarlos a app

        guardarGasto(gasto);
        seHaCreadoGasto(true);


        // resetear el form

        guardarConcepto('');
        guardarCantidad(0);

    }
    
    

    return ( 
        <div className="contenido-principal contenido">

            <form
                
                onSubmit= {onSubmit}

            >

            <h2>Agrega tus Gastos Aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios" /> : null }

                
            <div className="campo">

                <label>Concepto</label>

                <input 
                    type="text"
                    placeholder="Ej. Transporte"
                    className="u-full-width"
                    onChange={e => guardarConcepto(e.target.value)}
                />
            </div>

            <div className="campo">

                <label>Cantidad</label>

                <input 
                    type="number"
                    placeholder="Ej. 100"
                    className="u-full-width"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

                
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Crear Gasto"                 
                />

            </form>

        </div>
     );
}
 
export default Formulario;