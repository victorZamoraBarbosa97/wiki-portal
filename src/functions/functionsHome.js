

export const GetActualDate = () =>{
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.toLocaleString('es', { month: 'long' }).toUpperCase();
    const anio = fechaActual.getFullYear();
    return `${dia}/${mes}/${anio}`
}

export const GetRandomColor = () => {
    
}


export const GetIniciales = ( names ) =>{
    if( names === undefined) return "N/A"
    else 
        names = names.split(' ');
        if (names.length < 2) return "N/A"
        else return names[0][0].toUpperCase() + names[1][0].toUpperCase();
  }