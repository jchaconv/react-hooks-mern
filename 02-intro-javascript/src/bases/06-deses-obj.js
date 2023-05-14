const persona = {
    nombre: 'Julio',
    edad: 98,
    clave: 'haze'
    //rango: 'solado'
};

const { nombre } = persona;

//por si ya existe nombre
const { nombre:nombre2 } = persona;

const { edad, clave, nombre:nombre3 } = persona;

console.log( nombre );
console.log( nombre2 );
console.log( edad, clave, nombre3 );


console.log('=================');

const retornaPersona = ( usuario ) => {

    const { nombre, edad, clave } = usuario;

    console.log( nombre, edad, clave);

}

retornaPersona( persona );


const retornaPersona2 = ( { nombre, edad } ) => {

   console.log( nombre, edad);

}

retornaPersona2( persona );


//si el valor de rango no existe en el objeto tomará Capitan
const retornaPersona3 = ( { nombre, edad, rango = 'Capitan' } ) => {

    console.log( nombre, edad, rango);
 
 }
 
 retornaPersona3( persona );
 

console.log('===============');


const retornaPersona4 = ( { clave, nombre, edad, rango = 'Capitan' } ) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.5566,
            lng: 45.9877
        }
    }
 
}
 

const { nombreClave, anios, latlng:{lat, lng } } = retornaPersona4( persona );
console.log(nombreClave, anios);
//algo que usualmente se hace:
//const {lat,lng} = latlng;
console.log(lat, lng);
