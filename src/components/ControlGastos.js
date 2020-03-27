import React, { Fragment } from 'react';
import { colorearPresupuesto } from '../helpers';

const ControlGastos = ({presupuesto, resto}) => (  
    <Fragment>
        <div className="alert-primary">
            Presupuesto: {presupuesto} €
        </div>
        <div className={ colorearPresupuesto( presupuesto, resto ) }>
            Resto: {resto} €
        </div>
    </Fragment>
);

 
export default ControlGastos;