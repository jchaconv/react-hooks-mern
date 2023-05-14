

const persona = {
    nombre: 'Julio',
    apellido: 'Chacon',
    edad: 101,
    direccion: {
        ciudad: 'Lima',
        zip: 2002,
        lat: 14.23332,
        lng: 23.56211
    }
};

console.log( persona );

const persona2 = { ...persona };