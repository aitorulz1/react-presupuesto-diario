export const colorearPresupuesto = ( presupuesto, resto ) => {

    let clase;

    if(( presupuesto/4) > resto) {
        clase = 'alert-danger';
    } else if (( presupuesto/2) > resto){
        clase = 'alert-warning';
    } else {
        clase = 'alert-success';
    }

    return clase;

}