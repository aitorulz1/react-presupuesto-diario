import React from 'react';

const Gasto = ({gasto}) => (  
    <div className="gastoRow">
        {gasto.concepto}
        {gasto.cantidad}
    </div>
);

 
export default Gasto;