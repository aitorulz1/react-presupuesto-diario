import React, { Fragment } from 'react';
import Gasto from './Gasto'

const Listado = ({gastos}) => {

    return ( 

        <Fragment>
            {gastos.map(gasto =>
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                />
            )}
        </Fragment>


     );
}
 
export default Listado;