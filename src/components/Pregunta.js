import React, { Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarResto, preguntaCompleta}) => {


    // Definir el state

    const [ cantidad, guardarCantidad] = useState(0);
    const [ error, guardarError] = useState(false);


    // onChange -> Lo que salga en el input se mantiene en guardarCantidad para ser cantidad

    const onChange = e => {
        guardarCantidad( parseInt(e.target.value, 10))
    }

    // onSumbit => Qué pasa cuando hago submit? Validar, guardar cantidad en una constante y reiniciar al valor inical

    const onSubmit = e => {
        e.preventDefault();
    

        if( cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }


        guardarError(false);

        guardarPresupuesto(cantidad);
        guardarResto(cantidad);
        preguntaCompleta(false);


    }
    



    return ( 
        <Fragment>
            <h2>Inserte su Presupuesto</h2>

            {error ? <Error mensaje="La cantidad insertada no es valida" /> : null}

            <form
                onSubmit={onSubmit}
            >

                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Inserta tu presupuesta"       
                    onChange={onChange}             
                />
                
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"                 
                />
                
            </form>
        </Fragment>
     );
}
 
export default Pregunta;