import React, { Fragment, useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlGastos from './components/ControlGastos'


function App() {

  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ resto, guardarResto ] = useState(0);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});

  const [ pregunta, preguntaCompleta ] = useState(true);
  const [ crearGasto, seHaCreadoGasto] = useState(false);

  useEffect(() => {

    if(crearGasto){
    guardarGastos([
      ...gastos,
      gasto
    ])

    const loQueVaQuedando = resto - gasto.cantidad;
      guardarResto(loQueVaQuedando);


    seHaCreadoGasto(false);  
  }
}, [gasto]) // Si no pongo esto, me hace un array infinito de los gastos que meto!





  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

            

              { pregunta 
              ?
              (

              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarResto={guardarResto}
                preguntaCompleta={preguntaCompleta}
              />
              )
              :
              (
                <div className="row">

                    <div className="one-half column">
                      <Formulario 
                        guardarGasto = {guardarGasto}
                        seHaCreadoGasto= {seHaCreadoGasto}
                      />
                    </div>

                    

                    <div className="one-half column">

                            <div className="contenido-principal contenido">

                              <h2>Control de Gastos</h2>
                                
                                  <Listado 
                                    gastos={gastos}
                                  />
                                  <ControlGastos 
                                    presupuesto={presupuesto}
                                    resto = {resto}
                                  />

                            </div>
                        </div>

                </div>
              )
              }

            
        </header>
      </div>
    </Fragment>
  );
}

export default App;
