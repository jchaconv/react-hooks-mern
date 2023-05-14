


/*
esta manera no se recomienda porque
se puede reemplazar el valor
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

saludar = 30;
*/

const saludar = function(nombre) {
    return `Hola ${nombre}!`;
}

//funcion de flecha
const saludar2 = ( nombre ) => {
    return `Hola ${nombre}!`;
}

const saludar3 = ( nombre ) => `Hola ${nombre}!`;

const saludar4 = () => `Hola funcion sin arg!`;


console.log( saludar('Julio') );
console.log( saludar2('funcion flecha') );
console.log( saludar3('funcion flecha reducida') );
console.log( saludar4() );


const getUser = () => ({
    uid: 'ABC256',
    username: 'chearee'
})

console.log( getUser() );


const getUsuarioActivo = () => ({
    nombre: 'Julio',
    username: 'aarone'
})

console.log( getUsuarioActivo() );



